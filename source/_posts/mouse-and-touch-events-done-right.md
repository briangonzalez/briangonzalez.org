---
title: Mouse & Touch Events Done Right
date: 2013-02-23 01:00:00
tags:
---

<h2>
  This article is old. Some functionality may be broken or downright missing.
</h2>

<p>Lately I&#8217;ve noticed that we as front-end developers have grown impatient as we wait for web technologies to &#8220;catch up&#8221; with their native counterparts. It&#8217;s those <em>black eyes of web technologies</em> that separate native from the web: those little screen flickers, those buttons that don&#8217;t render pixel perfect, those touch events that don&#8217;t seem to trigger at the right time, or those less-than-fluid animations that ruin every argument we&#8217;ve ever made for the web.</p>

<p>So, like good engineers, we&#8217;ve found ways to fix ( <em>see shim</em> ) some of the web&#8217;s weaknesses. One of the main places we&#8217;ve tried to &#8220;shim&#8221; the web to be more like native is in the mobile browser. We&#8217;ve forgotten at times that many of the best engines that power the web (Webkit, Gecko, Presto [RIP]) were built by some of the most brilliant engineers on the planet.</p>

<p>Let&#8217;s look at some of the ways in which we&#8217;ve attempted to shim the mobile web to be more like native.</p>

<h2 id='the_300ms_touch_delay'>The 300ms Touch Delay</h2>

<p>The folks over at Google have written an article, <a href='https://developers.google.com/mobile/articles/fast_buttons'>Creating Fast Buttons for Mobile Web Applications</a>, which chronicles some of the &#8220;limitations&#8221; of user interfaces on the mobile web, and steps one can take to fix them.</p>

<p>One technique the article suggests is to implement fast buttons, which create the illusions of snappy, native-like UI elements. This is done by binding to <code>touchstart</code> or <code>click</code> events based on device type.</p>

<p>The article points out the <strong>300ms delay</strong> that mobile browsers introduce and why:</p>

<blockquote>
<p>The reason for this is that the browser is waiting to see if you are actually performing a double tap.</p>
</blockquote>

<p>The article does not mention, however, two other main design decisions which are affected by the 300ms delay:</p>

<ol>
<li>Scrolling a list of buttons</li>

<li>Cancel-able button interactions</li>
</ol>

<h2 id='scrolling_a_list_of_fast_buttons'>Scrolling a list of Fast Buttons</h2>

<p>Take for instance the following UI with the fast button implementation. In the list below, if the device is <em>touch-enabled</em>, we&#8217;ll bind to <code>touchstart</code>, otherwise we&#8217;ll bind to <code>click</code> events.</p>

<p>Try <strong>scrolling</strong> the following list without actually activating a button on a touch device.</p>

<p>&#8230;that&#8217;s right, buttons activated all willy-nilly. No good. Fast buttons, for this example, are dumb buttons.</p>

<h2 id='scrolling_a_list_of_normal_nonfast_buttons'>Scrolling a list of Normal (non-fast) Buttons</h2>

<p>Now take for instance the following UI <strong>without</strong> the fast button implementation. That is, all buttons in this list are activated on <code>click</code>, regardless of whether or not the device supports <code>touch</code> events.</p>

<p>Again, try <strong>scrolling</strong> the following list without activating a button on a touch device.</p>

<p>&#8230; that&#8217;s right. Note that you cannot accidentally activate a button. However, in this implementation, a button can only be activated after the <strong>300ms delay</strong>.</p>

<h2 id='the_cancelable_button'>The Cancel-able Button</h2>

<p>Most touch devices implement a concept of cancel-able touch interactions. When an interaction is initiated via touch, the interaction can be cancelled by holding then sliding away from the target. On a touch device, touch and hold each button. Notice that the &#8220;fast button&#8221; is immediately activated.</p>

<p>The non-fast button is not activated while you touch and hold, and dragging your finger away cancels the interaction.</p>
<div class='cancelable-button-demo'>
  <a class='fast' href='#'>
    I am a "fast button". I am not cancelable on a touch device.
  </a>
  <a class='normal' href='#'>
    I am not a "fast button". I am cancelable on a touch device.
  </a>
</div>
<p>The blue button above is activated on <code>touchstart</code> for devices with touch events &#8211; the <em>very instant</em> the button is touched, it is activated. No delay at all.</p>

<p>The yellow button above is activated on <code>click</code> only, regardless of the device. Although a small delay exists when touched, the interaction is cancel-able, which can be imperative to various UIs.</p>

<h2 id='conclusions_regarding_the_fast_button_implementation'>Conclusions regarding the Fast Button implementation</h2>

<p>Remember: mobile browsers were designed the way they were designed for a reason. Lots of thought and energy went into every interaction and paradigm. Therefore, developers should take great care when overriding browser defaults.</p>

<p>In the case of the scrolling buttons lists, take care to allow your users to scroll without firing events they don&#8217;t intend to fire.</p>

<p>Furthermore, for buttons in your user interface that have more serious implications (e.g. buttons that <strong>delete</strong> something, buttons that send a irretractable message), don&#8217;t apply the <strong>fast button</strong> technique. By not applying the fast button technique, you&#8217;re allowing your users the option of bailing out of an action at the last moment.</p>

<p>My main tip: <strong>use your best judgement</strong>. Take special care to <em>let the user do what they want to do</em>, and don&#8217;t force your users into interactions they don&#8217;t expect on the platform they&#8217;re currently using.</p>

<hr class='big'>
<h2>
  <i class='icon-lightbulb'></i>
  A tip for handling touch events in Javascript
</h2>
<p>First off, make sure you understand and <em>use</em> <a href='http://modernizr.com/'>Modernizr</a> and look at Modernizr&#8217;s <a href='http://modernizr.github.com/Modernizr/touch.html'>touch test suite</a>. I found that one of the best ways to handle touch/click events gracefully is, with the help of Modernizr, like so:</p>

<pre lang='javascript'><code class='javascript' lang='javascript'>var events        = {}&#x000A;events.startEvent = Modernizr.touch ? &#39;touchstart&#39; : &#39;click&#39;;&#x000A;events.endEvent   = Modernizr.touch ? &#39;touchend&#39; : &#39;mouseup&#39;;&#x000A;events.moveEvents = Modernizr.touch ? &#39;touchmove&#39; : &#39;mousemove&#39;;</code></pre>

<p>&#8230; then, you can bind to a DOM element like so:</p>

<pre lang='javascript'><code class='javascript' lang='javascript'>jQuery(&#39;.button&#39;).on( events.startEvent, function(){&#x000A;  // I fire on &#39;touchstart&#39; on touch devices&#x000A;  // but on &#39;click&#39; on non-touch devices&#x000A;})</code></pre>
