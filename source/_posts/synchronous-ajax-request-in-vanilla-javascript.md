---
title: Synchronous AJAX Request in Vanilla Javascript
date: 2013-07-01 01:00:00
tags:
---

<p>Sometimes you need to make a really quick synchronous AJAX request. Sometimes you don&#8217;t have jQuery at your disposal.</p>

<p>When you&#8217;re in this situation, here&#8217;s a little code snippet to help you out.</p>

<pre><code>var xmlHttp = null;&#x000A;xmlHttp     = new XMLHttpRequest();&#x000A;&#x000A;xmlHttp.open( &quot;GET&quot;, &quot;/path/to/resource&quot;, false );&#x000A;xmlHttp.send( null );&#x000A;&#x000A;var data    = xmlHttp.responseText;</code></pre>
