---
title: A PolyFill for WebSockets
date: 2013-02-25 01:00:00
tags:
---

<p>IE9 and below require the use of a Flash-based polyfill. I&#8217;ve had good luck with <a href='https://github.com/gimite/web-socket-js'>web-socket-js</a>.</p>

<p>The main &#8220;gotcha&#8221; involved with the Flash fallback included in <a href='https://github.com/gimite/web-socket-js'>web-socket-js</a> is the <em>Flash socket policy file</em>, which is outlined <a href='http://www.lightsphere.com/dev/articles/flash_socket_policy.html'>here</a>. Basically, for security, socket connections in Flash require a policy XML file hosted on port <strong>843</strong> of the same location the websockets server is running. It should return the following:</p>

<pre><code>&lt;cross-domain-policy&gt;&#x000A;  &lt;allow-access-from domain=&quot;*&quot; to-ports=&quot;*&quot; /&gt;&#x000A;&lt;/cross-domain-policy&gt;</code></pre>

<p>So, for instance, if you&#8217;re WebSockets server is running on <code>localhost:1234</code>, you&#8217;ll need a policy server running on <code>localhost:843</code>. Here&#8217;s a simple Ruby Flash Socket Policy Server (which should only be used for testing locally).</p>

<h2 id='a_simple_flash_socket_policy_server'>A simple Flash Socket Policy Server</h2>

<p>Place the following in a file called <code>flash_socket_policy_server.rb</code>:</p>

<pre class='ruby'><code>require &quot;socket&quot;&#x000A;&#x000A;puts &quot;Starting policy server...&quot;&#x000A;&#x000A;webserver = TCPServer.new(nil, 843)&#x000A;while (session = webserver.accept)&#x000A;  session.print(&#39;&lt;cross-domain-policy&gt;&lt;allow-access-from domain=&quot;*&quot; to-ports=&quot;*&quot; /&gt;&lt;/cross-domain-policy&gt;&#39;)&#x000A;  session.close&#x000A;end</code></pre>

<p>Then fire it up like so:</p>

<pre class='bash'><code>sudo ruby flash_socket_policy_server.rb</code></pre>

<p><strong>Note</strong> the <code>sudo</code> command, which is needed because port <code>843</code> is so low.</p>
