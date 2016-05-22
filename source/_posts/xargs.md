---
title: xargs
date: 2013-06-26 01:00:00
tags:
---

<p>
  Ever wondered what 'xargs' was in a shell command? Here's a small example of how to use xargs.
</p>
<p>From the <code>man</code> page for <code>xargs</code>:</p>

<blockquote>
<p>The xargs utility reads space, tab, newline and end-of-file delimited strings from the standard input and executes utility with the strings as arguments.</p>
</blockquote>

<p>In essence, <code>xargs</code> takes a string and sends the string as arguments to another command.</p>

<h2 id='download_a_list_of_files'>Download a list of files</h2>

<p>Let&#8217;s say you wanted to download a list of Javascript files for use in a project. Instead of <code>curl</code>-ing all of the files one-by-one, here&#8217;s a more scalable solution.</p>

<p>Inside of a file called <code>urls.txt</code> you have:</p>

<pre class='bash'><code>http://code.jquery.com/jquery-2.0.2.min.js&#x000A;http://underscorejs.org/underscore-min.js&#x000A;http://backbonejs.org/backbone.js</code></pre>

<p>Then, download all of the files like so:</p>

<pre class='no-highlight'><code>xargs -P 4 -n 1 curl -O &lt; urls.txt</code></pre>

<p>Pretty cool, eh? Let&#8217;s break this command down. The <code>&lt;</code> denotes input redirection, i.e. it sends the contents of <code>urls.txt</code> to <code>xargs</code>. Next, <code>xargs</code> takes the lines inside of <code>urls.txt</code> and passes them as command-line arguments to <code>curl</code>. The <code>-P 4</code> tells <code>xargs</code> to use 4 threads and the <code>-n 1</code> says pass all of the text as one argument.</p>

<h2 id='concatenate_css_files'>Concatenate CSS files</h2>

<p>Sometimes you need an easy way to package some CSS files, quick and dirty style. If you&#8217;re current directory has several CSS files in it, the following command will recurse and pipe the contents of all of the CSS files into a new file called <code>all.css</code></p>

<pre class='bash'><code>find . -name &#39;*.css&#39; -not -name &quot;all.css&quot;  | xargs cat &gt; all.css</code></pre>

<h2 id='count_lines_in_files'>Count lines in files</h2>

<p>Suppose you had 3 text files in you current working directory, <code>lipsum.txt</code>, <code>lipsum_2.txt</code>, and <code>urls.txt</code> and you wanted to count all of the lines in each file and total them up. The following command will get you on your way:</p>

<pre class='bash'><code>ls -1 *.txt | xargs wc -l</code></pre>

<p>The output might look something like this:</p>

<pre class='bash'><code>18 lipsum.txt&#x000A;18 lipsum_2.txt&#x000A; 2 urls.txt&#x000A;38 total</code></pre>
