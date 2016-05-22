---
title: Overriding Underscore's Default Template Syntax
date: 2013-04-11 01:00:00
tags:
---

<p>Micro-templating has quickly become one of my &#8220;go to&#8221; technologies in the front-end stack.</p>

<p>Whenever I use <a href='https://developer.mozilla.org/en-US/docs/JavaScript_templates'>Javascript micro-templating</a> in <a href='http://underscorejs.org/'>Underscore.js</a>, I prefer the following syntax:</p>

<pre lang='javascript'>
  <code class='javascript' lang='javascript'>
  // Alter underscore template delimiter;&#x000A;
  _.templateSettings.interpolate  = /\{\{(.+?)\}\}/g;
  _.templateSettings.escape       = /\{\{\{([\s\S]+?)\}\}\}/g;
  _.templateSettings.evaluate     = /\{\%([\s\S]+?)\%\}/g;      
  </code>
</pre>

<p><strong>Note</strong> that the spaces in the delimiters!</p>
