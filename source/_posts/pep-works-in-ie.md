---
title: Pep Now works in IE6/7/8/9
date: 2012-06-08 01:00:00
tags:
---

<p>By popular demand, <a href='http://pep.briangonzalez.org'>pep</a> now works in older versions of Internet Explorer, namely IE7 and IE8. By altering the code to watch for <code>mouseup</code> events on the <code>document</code> as opposed to the <code>window</code>, I was able to make Pep IE-friendly. However, we still dont have a fallback for easing.</p>

<p>Here&#8217;s a little more on the IE implementation of <code>mouseup</code>. For some reason, &lt; IE9 doesn&#8217;t allow this:</p>

<pre lang='javascript'><code class='javascript' lang='javascript'>$(window).bind(&#39;mouseup&#39;, function(){ /* doesn&#39;t fire */ });</code></pre>

<h2 id='why'>Why?</h2>

<p>Because the <code>click</code>, <code>mousedown</code>, <code>mouseup</code>, <code>dblclick</code> events aren&#8217;t available on the <strong>window</strong>. The IE-only issue (err&#8230;feature?) is well-documented <a href='http://www.quirksmode.org/dom/events/click.html'>here</a>. Binding <code>click</code>, <code>mousedown</code>, <code>mouseup</code>, <code>dblclick</code> to the <strong>document</strong> does work, however:</p>

<pre lang='javascript'><code class='javascript' lang='javascript'>$(document).bind(&#39;mouseup&#39;, function(){ /* fires! */ });</code></pre>

<p><a href='http://pep.briangonzalez.org'>Enjoy Pep</a> and let me know about any issues via <a href='https://twitter.com/brianmgonzalez'>twitter</a> or on <a href='https://github.com/briangonzalez/jquery.pep.js/issues?direction=desc&amp;sort=created&amp;state=open'>github</a>.</p>

<h2 id='demos'>Demos</h2>

<p>Check out the following demo videos:</p>

<ul>
<li><a href='https://www.youtube.com/watch?v=acc92L-Lhes'>Internet Explorer 6</a></li>

<li><a href='https://www.youtube.com/watch?v=8Qxo4q4ofVU'>Internet Explorer 7</a></li>

<li><a href='https://www.youtube.com/watch?v=WWKq3ovMbOQ'>Internet Explorer 8</a></li>

<li><a href='https://www.youtube.com/watch?v=xYxQdkyzDnI'>Internet Explorer 9</a></li>
</ul>

<p><a class='button' href='http://pep.briangonzalez.org'>Visit Pep</a></p>
