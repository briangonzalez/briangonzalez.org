---
title: Google Drive + Ruby
date: 2013-08-06 01:00:00
tags:
---

<p>Whenever it comes time for me to build a landing page or something similar where I am going to capture email addresses, I always survey the landscape for what&#8217;s currently out there. I am typically never happy with what I find.</p>

<p>There&#8217;s <a href='http://wufoo.com'>Wufoo</a>, <a href='http://formstack.com'>Formstack</a>, or even <a href='https://docs.google.com/forms/create'>Google Forms</a> &#8211; but each of these solutions requires embedding one of their forms into your page. This means a loss of control over styling and functionality, and it also means you&#8217;ll likely end up with their branding all over your page.</p>

<p>I recently began building a landing page for <a href='http://ncmcivil.com'>NCM Engineering Corporation</a>, and I devised a solution for saving email addresses straight to Google Drive. It&#8217;s called <a href='https://github.com/briangonzalez/google-drive-email-saver'>google-drive-email-saver</a>, and it relies heavily on a Ruby gem called <a href='https://github.com/gimite/google-drive-ruby'>google-drive-ruby</a> which is a very robust and powerful way to programmatically interact with Google Drive.</p>

<h2 id='how_to_use'>How to use</h2>

<p>Here&#8217;s a small snippet which shows just how easy it is to write an email address to a spreadsheet in Google Drive.</p>

<pre class='ruby'><code>require &#39;./google-drive-email-saver.rb&#39;&#x000A;&#x000A;# where 8675309abcdef is the spreadsheet key&#x000A;g = GoogleDriveEmailSaver.new(&#39;me@gmail.com&#39;, &#39;passwd123456&#39;, &#39;8675309abcdef&#39;) &#x000A;g.save_email(&#39;person.who@justsignedup.com&#39;)</code></pre>

<p>Once you&#8217;re done capturing email addresses, it&#8217;s incredibly easy to export all of them to a CSV file from the Google Drive interface.</p>

<h2 id='demo'>Demo</h2>

<p><img alt='demo-concealed' class='scale' src='google-drive-email-saver.gif' /></p>

<h2 id='questions'>Questions?</h2>

<p>Feel free to contact me <a href='http://twitter.com/brianmgonzalez'>@brianmgonzalez</a></p>

<p><a class='button' href='https://github.com/briangonzalez/google-drive-email-saver'>Code on Github</a></p>
