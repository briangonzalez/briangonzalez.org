---
title: Pretty Print Javascript Object in Node
date: 2016-02-12 08:41:57
tags:
---

When I am working on a node project, I am usually either working with some API (right now I am hacking on the Amazon API) or working with large sets of data. More often then not, I need to log some object to the console and inspect it.

The issue with logging an object using `console.log` in node is that each nested object is displayed as `[Object]`. Helpful right?

A little Googling around surfaces reccomendations of `JSON.stringify(obj)` or instead installing _yet another npm module_.

The truth is, node has this built in.

### util.inspect

One of node's core libraries, util, has a method `inspect` which is the right tool for the job. Here's how to use it:

```
var util = require('util');
var obj = { a: { b: 'Hello, world!' } };

console.log(util.inspect(obj, false, null));
```

The second argument, `showHidden`, determines if the "non-enumerable" properties of an object will be logged.

The third argument is the depth level; setting it to `false` will recursive to the furthest depths of the object.

If you'd like to have some more node tools in your toolbelt, I reccomend learning the ins and outs of the [util core library](https://nodejs.org/api/util.html).
