---
title: Using broccoli to turn a folder of files into JSON
date: 2015-03-09 08:42:26
tags:
---

One of the neater technologies that powers [Dollar Shave Club's](http://dollarshaveclub.com) member experience is our UI icons powered by ember-data. I wrote about that [here](http://www.briangonzalez.org/async-icons-with-ember-data/), back in the day when we used gulp to build our ember app.

Within the past month, we updated our app to be ember-cli based. With that migration came the need to refactor away from some of our gulp dependencies. Luckily, one of those dependencies was one I wrote -- [gulp-file-contents-to-json](https://github.com/briangonzalez/gulp-file-contents-to-json).

I wrote a Broccoli equivalent: [broccoli-file-contents-to-json](https://github.com/briangonzalez/broccoli-file-contents-to-json). Please check it out when you get a chance.
