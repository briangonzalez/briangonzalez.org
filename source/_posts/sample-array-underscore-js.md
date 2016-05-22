---
title: Sample an array using underscore.js
date: 2013-08-28 01:00:00
tags:
---

<p>You have an array of names, and you want to write a function that accepts said array and returns a name at random. Note that this functionality <a href='https://github.com/jashkenas/underscore/pull/963'>may at some point be added</a> to underscore.js core.</p>

<pre><code>var names = [&#39;Bob&#39;, &#39;Kelly&#39;, &#39;Sue&#39;];&#x000A;&#x000A;function sample(array){ &#x000A;  /* let&#39;s build this */ &#x000A;};&#x000A;&#x000A;sample(names); &#x000A;// =&gt; &#39;Bob&#39;&#x000A;&#x000A;sample(names); &#x000A;// =&gt; &#39;Sue&#39;</code></pre>

<p><strong>Method 1 - using _.random()</strong></p>

<p>The first method relies on underscore&#8217;s <a href='http://underscorejs.org/#random'>random</a> method, which takes two arguments, a <code>min</code> and a <code>max</code>. The idea here is to generate a random index, then return the value in the array at that index.</p>

<pre><code>function sample(array){&#x000A;  return array[ _.random(0, array.length-1) ]&#x000A;}</code></pre>

<p><strong>Method 2 - using _.shuffle()</strong></p>

<p>The second method relies on underscore&#8217;s <a href='http://underscorejs.org/#shuffle'>shuffle</a> method, which takes an array, and returns a copy of the array, shuffled using the <a href='http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle'>Fisher-Yates shuffle algorithm</a>.</p>

<pre><code>function sample(array){&#x000A;  return _.shuffle(array)[0]&#x000A;}</code></pre>

<h2 id='thoughts'>Thoughts?</h2>

<p>Do you have another method? Let me know on <a href='https://twitter.com/brianmgonzalez'>Twitter</a>.</p>
