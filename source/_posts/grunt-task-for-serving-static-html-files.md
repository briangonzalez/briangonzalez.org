---
title: Grunt Task for Serving Static HTML Files
date: 2013-06-30 01:00:00
tags:
---

<p>Sometimes you need to serve up some static HTML, Javascript, CSS, and other static assets in your <a href='https://github.com/gruntjs/grunt/wiki/Getting-started'>grunt</a> project.</p>

<p>Part of my <a href='http://qunitjs.com/'>Qunit</a> test suite in a <a href='https://github.com/briangonzalez/underscore-template-fetcher'>recent project</a> required making AJAX requests for Javascript templates. I needed a way to serve the HTML files in my <code>test</code> directory &#8211; I couldn&#8217;t simply view the file in the browser because the browser doesn&#8217;t allow AJAX requests over the <code>file://</code> scheme.</p>

<p>Here&#8217;s how you can fire up an HTTP server for you grunt projects.</p>

<h2 id='writing__running_the_task'>Writing &amp; running the task</h2>

<p>First off, install the <a href='https://github.com/arturadib/shelljs'>shelljs</a> module.</p>

<pre class='bash'><code>npm install shelljs --save-dev</code></pre>

<p>Note, the <code>--save-dev</code> flag adds the dependency to your <code>package.json</code> file, making your life easier in the future.</p>

<p>Then add this task to <code>Gruntfile.js</code>:</p>

<pre><code>grunt.registerTask(&#39;serve&#39;, &#39;Serves any directory on given port&#39;, function (env) {&#x000A;  var shell = require(&#39;shelljs&#39;);&#x000A;  var port  = grunt.option(&#39;port&#39;) || 8000;&#x000A;  var dir   = grunt.option(&#39;dir&#39;)  || &#39;.&#39;;&#x000A;  console.log([&#39;Serving&#39;, dir,&#39;on port:&#39;, port].join(&#39; &#39;))&#x000A;  shell.exec(&#39;cd &#39;+ dir +&#39; &amp;&amp; python -m SimpleHTTPServer &#39; + port);&#x000A;});</code></pre>

<p>Then start up the server with the following command:</p>

<pre class='bash'><code>grunt serve</code></pre>

<p>In my case, I run the command like so, serving the <code>test</code> directory on port 5000:</p>

<pre class='bash'><code>grunt serve --port=5000 --dir=test</code></pre>
