---
title: Announcing mert, an iTerm 3 compatible tab & pane manager
date: 2016-06-05 17:47:09
tags:
---

One of the key pieces of my development workflow is using iTerm with each of my project's commands running in its own pane. Some of my projects require 5+ commands - think `vagrant up`, `ember build --watch`, `redis-server`, `rails s`, etc.

Who has time to remember all this, much less manually configure iTerm with each of these commands
each time?

To that end, we've created a new tool, called [mert](https://github.com/eggplanetio/mert), which
automates iTerm pane management. I previously used
[termrc](https://github.com/briangonzalez/termrc), but it was brittle and imcompatible with iTerm 3.
mert is built in node and uses Javascript for Automation ([jxa](https://github.com/dtinth/JXA-Cookbook)) at its core.

[Find mert on Github](https://github.com/eggplanetio/mert)

