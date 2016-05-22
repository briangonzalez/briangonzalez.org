---
title: Compile Handlebars templates for Ember with Gulp
date: 2014-11-03 08:42:43
tags:
---

At work, we try to keep [dollarshaveclub.com](http://dollarshaveclub.com) tracking with the latest Ember/Ember Data [beta](http://emberjs.com/builds/#/beta) or [canary](http://emberjs.com/builds/#/canary) builds. With the [release of Ember 1.9 beta](http://emberjs.com/blog/2014/10/26/ember-1-8-0-released.html), Handlebars 2.0.0 is now a requirement. This meant that our gulp build tasks needed to be rewritten to target Handlebars 2.0.0.

## Setting up the gulp task

The first step in creating our handlebars compilation task is to install our dependencies and add them to `package.json`.

```
$ npm install --save-dev gulp gulp-concat gulp-streamify gulp-declare gulp-wrap gulp-tap ember-template-compiler
```

Then add them to the top of our `gulpfile.js`:

```
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var streamify   = require('gulp-streamify');
var declare     = require('gulp-declare');
var wrap        = require('gulp-wrap');
var tap         = require('gulp-tap');
var compiler    = require('ember-template-compiler');
```

Next, we'll define the folder in which our templates live:

```
var TEMPLATE_DIR = 'templates';
```

## Building up the gulp task

From a high level, the meat of our task will perform the following:

```
gulp.task('compile-handlebars', function(){
  // 1 - Read in our hbs files recursively
  // 2 - Precompile the templates using ember-template-compiler
  // 3 - Wrap output in Ember.Handlebars.template
  // 4 - Create Ember.TEMPLATES namespace to house our precompiled templates
  // 5 - Concatenate and output.
});
```

## The finished product

You can see the finished product below. Checkout a [working repository](https://github.com/briangonzalez/blog-compile-handlebars-templates-ember-with-gulp) and give it a try for yourself.

```
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var streamify   = require('gulp-streamify');
var declare     = require('gulp-declare');
var wrap        = require('gulp-wrap');
var tap         = require('gulp-tap');
var compiler    = require('ember-template-compiler');

var TEMPLATE_DIR = 'templates';

gulp.task('compile-handlebars', function(){

  // First - Grab all of the templates nested within our ./templates dir.
  return gulp.src(templateDir + '/**/*.hbs')

    // Second - Tap into the stream of files, compiling the template.
    // The second argument (false) of precompile says return a string
    // and not a function.
    .pipe(tap(function(file, t) {
      var compiled = compiler.precompile(file.contents.toString(), false);
      file.contents = new Buffer(compiled);
    }))

    // Third - Since the tap step above output a string, we need to make
    // sure we wrap the output in the Ember.Handlebars.template function.
    .pipe(wrap('Ember.Handlebars.template(<%= contents %>)'))

    // Fourth - Create an Ember.TEMPLATES object and attach it to the window.
    .pipe(declare({
      namespace: 'Ember.TEMPLATES',
      root: 'window',
      processName: function(filePath) {
        var id = filePath.split(templateDir + '/')[1].replace('.hbs', '');
        return id;
      }
    }))

    // Fifth - Concatenate the templates and output to build dir.
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./build'));

});

```

Find the code [on Github](https://github.com/briangonzalez/blog-compile-handlebars-templates-ember-with-gulp).
