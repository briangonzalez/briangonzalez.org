---
title: jquery.pep.js draggable/droppable functionality
date: 2013-06-03 01:00:00
tags:
---

<p>Recently, I released a new version of <a href='http://pep.briangonzalez.org'>jquery.pep.js</a>, which adds in droppable functionality.</p>

<p>For example, when an object overlaps a target, you can perform various actions on the object in question as well as the overlapping targets.</p>

<p>Let&#8217;s say you had a div with a class of <code>pep</code> and another div with a class of <code>drop-target</code>, here is some example JS to make <code>.pep</code> and <code>.drop-target</code> interact in a draggable/droppable manner.</p>

<pre class='javascript'><code>$(&#39;.pep&#39;).pep({&#x000A;  droppable: &#39;.drop-target&#39;,&#x000A;  stop: function(ev, obj){&#x000A;    obj.activeDropRegions // an array of all active drop regions.&#x000A;  }&#x000A;});</code></pre>
<h2 id='demo_1__draggable'>Demo #1 - Draggable</h2>

<p>In this demo, we use Pep&#8217;s built-in <code>draggable</code> functionality; that is, when an object overlaps a target, the target becomes highlighted.</p>
<pre class="codepen" data-height="500" data-type="result" data-href="vHiLk" data-user="briangonzalez" data-safe="true"><code></code><a href="http://codepen.io/briangonzalez/pen/vHiLk">Check out this Pen!</a></pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>
<h2 id='demo_2__custom_overlap_function'>Demo #2 - Custom Overlap Function</h2>

<p>In this demo, we use a custom overlap function. Pep&#8217;s default behavior is to consider an object overlapping if any part of the object is over the target, but in this demo we consider an object to be overlapping if the entire object is inside the target.</p>
<pre class="codepen" data-height="500" data-type="result" data-href="vHiLk" data-user="briangonzalez" data-safe="true"><code></code><a href="http://codepen.io/briangonzalez/pen/vHiLk">Check out this Pen!</a></pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>
<h2 id='demo_3__consuming_parent'>Demo #3 - Consuming Parent</h2>

<p>In this demo, as your drag around the object, we can check if the object overlaps one of the targets when the <code>stop</code> event is triggered. If it is, we can center in the target, which gives the effect that the target &#8220;consumes&#8221; the object.</p>
<pre class="codepen" data-height="500" data-type="result" data-href="jqdar" data-user="briangonzalez" data-safe="true"><code></code><a href="http://codepen.io/briangonzalez/pen/jqdar">Check out this Pen!</a></pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>
<p>Interested? Check out <a href='https://github.com/briangonzalez/jquery.pep.js'>jquery.pep.js</a> on Github.</p>
<style>
  iframe.cp_embed_iframe{ margin-bottom: 30px; border: 5px solid #444 !important; }
</style>
