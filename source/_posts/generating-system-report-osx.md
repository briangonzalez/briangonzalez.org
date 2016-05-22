---
title: Generating a System Report on OSX
date: 2013-05-24 01:00:00
tags:
---

<p>There are two ways to generate a system report for your Mac: the <a href='#automated'>automated</a> way and the <a href='#manual'>manual</a> way.</p>

<h2 id='automated'>Automated</h2>

<p>Simply paste the following command into Terminal.app</p>

<pre><code>system_profiler | mail -s &quot;$HOSTNAME System Profiler Report&quot; foo@bar.com</code></pre>

<h2 id='manual'>Manual</h2>

<p>(1) Click the &#63743; in the upper-left hand corner:</p>
<p>(2) Click <code>More Info...</code>:</p>
<p>(3) Click <code>System Report...</code></p>
<p>(4) Click <code>Save</code></p>
