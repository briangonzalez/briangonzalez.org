---
title: Javascript Proxy Object
date: 2016-06-03 07:22:43
tags:
---

The `Proxy` object is a new feature of ES6 which is looks to be super useful and promising.

I was working on a new Javascript for Automation ([JXA](https://developer.apple.com/videos/play/wwdc2014/306/)) project and came across the npm module called [jxa](https://github.com/wtfaremyinitials/jxa). jxa uses the `Proxy` object to pipe commands to OSX's `osascript` executable. You should poke around the source, it's quite neat.

If you want to learn more about `Proxy`, check out [this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) from Mozilla and [this article](https://msdn.microsoft.com/en-us/library/dn911714) from MSDN.

Note, the `Proxy` object cannot be shimmed by Babel and [browser support](http://caniuse.com/#feat=proxy) is not universal.
