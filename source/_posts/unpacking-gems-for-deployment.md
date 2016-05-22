---
title: Unpacking Ruby Gems for Production
date: 2013-07-17 01:00:00
tags:
---

<p>If you&#8217;re not unpacking your Ruby gems for your production environment, you&#8217;re likely doing something wrong.</p>

<h2 id='setup_bundler'>Setup Bundler</h2>

<p><a href='http://gembundler.com'>Bundler</a> makes the process dead simple. Make sure you have <em>bundler</em> installed:</p>

<pre class='bash'><code>gem install bundler</code></pre>

<p>then make sure you have a valid <code>Gemfile</code> with all of your app&#8217;s dependencies in it.</p>

<h2 id='unpack_your_ruby_gems'>Unpack your Ruby gems</h2>

<p>Unpacking all of your gems is dead simple:</p>

<pre class='bash'><code>bundle install --deployment</code></pre>

<p>This will unpack all of your gems into <code>./vendor/bundle</code>. If you want to unpack your gems into a specific location, use the <code>--path</code> command-line switch:</p>

<pre class='bash'><code>bundle install --deployment --path gems/go/here</code></pre>
