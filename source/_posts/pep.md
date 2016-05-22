---
title: Pep, a lightweight jQuery plugin for mobile & desktop
date: 2012-05-21 01:00:00
tags:
---

<p>At <a href='http://geni.com'>Geni</a> I&#8217;ve been working on an <a href='https://www.geni.com/family-tree/html5?minimal=1#100594125'>HTML5 replacement</a> for our current Flash-based tree.</p>

<p>One of the requirements is that it would work on both touch screen devices as well as desktop devices. That means, yes, it needed to support both click and touch events.</p>

<p>I surveyed the landscape, and didn&#8217;t find any plugins that did <strong>exactly</strong> what I needed. Some were using <a href='http://jqueryui.com/'>jQuery UI</a> along with <a href='http://touchpunch.furf.com/'>Touch Punch</a>. This had weird issues when the object being drug was scaled/zoomed. Long story short, I needed to build out my own solution.</p>

<p>I built <a href='http://pep.briangonzalez.org'>jquery.pep.js</a>, which not only works on touch devices, it&#8217;s kinetic (things ease nicely into place).</p>

<h2 id='small_pep_example'>Small Pep Example</h2>
<div id='pep-parent'>
  <div id='pep'></div>
</div>
<p>Check out the <a href='http://pep.briangonzalez.org/demo'>official demos here</a> or follow/fork on <a href='https://github.com/briangonzalez/jquery.pep.js'>Github</a>.</p>
<p>
  <iframe src="http://ghbtns.com/github-btn.html?user=markdotto&repo=github-buttons&type=fork&size=large" allowtransparency="true" frameborder="0" scrolling="0" width="90" height="30"></iframe>
  <iframe src="http://ghbtns.com/github-btn.html?user=briangonzalez&repo=jquery.pep.js&type=watch&count=true&size=large" allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe>
</p>
<hr />
<h2 id='edit'>EDIT:</h2>

<p><a href='http://www.smashingmagazine.com/'>Smashing Magazine</a> sent some love on Twitter!</p>
<blockquote class="twitter-tweet"><a href="https://twitter.com/smashingmag/status/208898355928104961"></a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<h2 id='edit_2'>EDIT #2:</h2>

<p>Pep has been featured on <a href='http://briangonzalez.org/D6MAZ'>Unheap</a>!</p>

<h2 id='edit_3'>Edit #3:</h2>

<p><a href='http://graphism.fr/'>Geoffrey Dorne</a> has written <a href='http://graphism.fr/du-touch-sur-votre-mobile-avec-jquery-pep'>a nice article</a> on Pep (albeit in French). Thanks Geoffrey!</p>
<a class='button' href='http://pep.briangonzalez.org'>
  Launch Pep
</a>
