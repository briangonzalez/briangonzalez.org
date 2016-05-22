---
title: Building an image inspector using jquery.pep.js
date: 2013-07-10 01:00:00
tags:
---

<p>Building an image inspector is a breeze using <a href='http://pep.briangonzalez.org/'>jquery.pep.js</a>.</p>

<p>The example below shows how it works. In short, the white magnifier rectangle is a pep object bound like so:</p>

<pre><code>var opts = {&#x000A;  constrainTo: &#39;parent&#39;,&#x000A;  shouldEase: false,&#x000A;  drag: function(ev, obj){&#x000A;    /* custom logic, see Codepen example below */&#x000A;  }&#x000A;};&#x000A;&#x000A;$(&#39;.magnifier&#39;).pep(opts);</code></pre>

<p>Now, with a little custom logic which can be seen in the Codepen Javascript code, we can alter the <code>background-position</code> of the larger image as we drag around the magnifier.</p>

<h2 id='result'>Result</h2>
<pre class="codepen" data-height="1000" data-type="result" data-href="lkDpJ" data-user="briangonzalez" data-safe="true"><code></code><a href="http://codepen.io/briangonzalez/pen/lkDpJ">Check out this Pen!</a></pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>
