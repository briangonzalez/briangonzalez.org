---
title: Async SVG icons with ember-data
date: 2014-09-11 08:42:54
tags:
---

One of the things I love most about Ember is its use of promises to paint the user interface asynchronously and fill in the data within Handlebars templates. You can inject variables into your Handlebars templates that are the result of asynchronous calls, and, if you couple that with ember-data, you get some really cool stuff out of the box.  

Outline
-----

In this post I'll outline how to

- use gulp to create an SVG sprite file — `icon-sprite.json`
- create an ember-data model based off of our icon sprite
- create a component used to inject icons throughout our app
- use CSS to style said icons

_Quick note_: In [my last post](#), I outlined how to use gulp + [gulp-file-contents-to-json](https://github.com/briangonzalez/gulp-file-contents-to-json) to grab some files, read in their contents, and output a JSON blob. I recommend reading that post before continuing.

What is SVG spriting?
---------------

Instead of injecting a bunch of little `<img src='my-icon.svg'>` throughout your app, the basic idea is that we'll make _one single request_ for our SVG sprite, and use the data within that sprite to paint our UI. This saves a ton of overhead by not making too many HTTP requests.

Ok, basics covered.

Creating the icon sprite
-----------------

The first step is to create a folder containing our SVG icons.

The next step is to create a gulp task called `create-icon-sprite` inside `gulpfile.js` to read in our SVG files, and output them to some destination. Something like this should work:

```
var gulp    = require('gulp');
var fc2json = require('gulp-file-contents-to-json');

gulp.task('create-icon-sprite', function() {
  gulp.src('icons/**/*.svg')
      .pipe(fc2json('icon-sprite.json'))
      .pipe(gulp.dest('./dist/'));
});
```

This task recursively globs SVG files in the `icons` directory, and creates `dist/icon-sprite.json`. The filename becomes the key and the contents are the value.

The next step is to simply run:

```
$ gulp create-icon-sprite
```


Sprite payload + ember-data
------------------------------------

Due to Ember's intelligent, convention-over-configuration naming schemes, an ember-data model will always use its like-named adapter/serializer, if available. So an `Icon` model uses the `IconAdapter`, and the `IconAdapter` uses the `IconSerializer`. Perfect harmony.


First, we'll define our model:

```
App.Icon = DS.Model.extend({ data: DS.attr() });
```

Second, we'll build out the adapter. The adapter is essentially what makes the AJAX request on our behalf when we call `this.store.findAll('icon')`:

```
var SPRITE_URL = '/dist/icon-sprite.json';

App.IconAdapter = DS.Adapter.extend({

  findAll: function(store, type, sinceToken) {
    return $.ajax({
      dataType: "json",
      url: this.buildURL(type.typeKey),
    });
  },

  buildURL: function() {
    return SPRITE_URL;
  }

});
```

Next, we'll create our custom serializer, since we'll need to write our own [normalizePayload](http://emberjs.com/api/data/classes/DS.RESTSerializer.html#method_normalizePayload) method. In our `normalizePayload` method, we're passed `payload`, which we munge, and pass to the `_super` method. Here, we're setting the name of the file to the model's ID and the SVG contents to the model's `data` property.

```
App.IconSerializer = DS.RESTSerializer.extend({
  normalizePayload: function(payload) {

    var icons = [];

    for ( var icon in payload ) {
      icons.push({
        id:   icon.replace('.svg', ''),
        data:  payload[icon]
      });
    }

    return this._super({ icons: icons });
  }
});
```

Requesting the icon sprite
-------------------
The next step is to kick off the request of our icon sprite.

I like to request my icon sprite in a non-blocking Ember initializer. This ensures my icon sprite is ready as soon as possible.

```
App.initializer({
  name: 'icons',
  initialize: function (container, application) {
    application.inject('component', 'store', 'store:main');
    container.lookup('store:main').findAll('icon');
  }
});
```

Creating the `AppIcon` component
-----------------------

Here's what our `AppIcon` component looks like. Nothing too fancy.

```
App.AppIconComponent = Ember.Component.extend({
  tagName: 'i',
  attributeBindings:[ 'name:data-icon' ],  
  icons: function () {
    var self = this;
    var store = this.get('targetObject.store');

    return store.filter('icon', function (record) {
      return (record.get('id') === self.get('name'));
    });

  }.property()
});
```

And here's the corresponding template:

```
<script type="text/x-handlebars" data-template-name="components/app-icon">
  {{#each icon in icons}}
    {{{ unbound icon.data }}}
  {{/each}}
</script>
```

Now, throughout your Handlebars templates, including an icon is as simple as:

```
<h1>
  Look at this Twitter icon!
  {{ app-icon name='twitter' }}
</h1>
```

Styling our icons with CSS
-------------------

Next, we'll style our icons like so. The beauty of this approach is that not only does it allow us to 'color' our icons, but it also allows use to color the inner elements of the icons as well. This, in my opinion, is the main advantage of this approach over the approach outlined here: [Icon System with SVG sprites](http://css-tricks.com/svg-sprites-use-better-icon-fonts/).

```
[data-icon] svg {
  width: 20px;
  height: 20px;
  fill: white;
}

[data-icon="twitter"] svg {
  fill: blue;  
}

[data-icon="github"] svg {
  fill: red;

  /* Styling an inner element. */
  .octocat { fill: pink }
}

[data-icon="dribbble"] svg {
  fill: green;
}
```

Demo
-----

You can find the icon sprite repo [here](https://github.com/briangonzalez/blog-async-svg-icons-with-ember-data).
