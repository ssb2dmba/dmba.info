<template><div><p>The invite-code client and relay exchange specification describe the delivery and usage of invites-code to clients.</p>
<ul>
<li>
<p><a href="https://ssbc.github.io/scuttlebutt-protocol-guide/#invites" target="_blank" rel="noopener noreferrer">Invites-code are specified here<ExternalLinkIcon/></a><br>
and can be redeemed on a server. Once a server get back an invitation it will follow the client and as described in <RouterLink to="/specs/spip-01.html">message flow specification</RouterLink>, server will allow authentication of the client and further network communication processing.</p>
</li>
<li>
<p>Relay serve a dedicated page for querying invite at GET <code v-pre>/invite</code>.</p>
</li>
<li>
<p>The <code v-pre>/invite/</code> page present a riddle intended to be solvable by a human only.</p>
</li>
<li>
<p>The <code v-pre>/invite/</code> page must be human-readable webpage.</p>
</li>
<li>
<p>The <code v-pre>/invite/</code> page must pose a session cookie, client must present back the session cookie on the next step.</p>
</li>
<li>
<p>Relay expect client to send POST http query <code v-pre>/invite/invite-captcha-reponse</code> with the variable <code v-pre>captcha</code> in POST <code v-pre>body</code> containing the human solved puzzle answer.</p>
</li>
<li>
<p>Clients should immediately connect to server using the <code v-pre>connectWithInvite</code> method.</p>
</li>
<li>
<p>Server must accept <code v-pre>connectWithInvite</code> and respond by internally publishing a follow client message.</p>
</li>
<li>
<p>Client must then immediately disconnect.</p>
</li>
<li>
<p>Server must accept SSB connection from client it follow and allow them the following methods: <code v-pre>follow</code>, <code v-pre>createHistoryStream</code></p>
</li>
</ul>
<p>In NodeJS this translates to this:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/invite/'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// remember riddle response in server session              </span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/invite/invite-captcha-reponse'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> riddleResponse <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>captcha<span class="token punctuation">;</span>
        <span class="token comment">// compare posted response with response expected in server session </span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using a sequence diagram this translates to this:</p>
<Mermaid id="mermaid-62" code="eJx9kc+KAjEMxu/7FLl52VH2z8mDsOBhYWEX1icIbbDBMaltZkSf3nGqzICDvRS+/JLva5Pp0JA4WjNuE+5foDsRk7HjiGLwVbOjB/Wfajx1al+FarUqyhK2ZDBbsLRstJh1RK9DdUV6eAmboEdI7H19nfurRqAtpVJ+vQ8KzR4FstYtgcNoLuCUX9Q8MixXdeOrRFEl03SMwoJT/yyGUxFyBke2cG+BqSAbconsG8XngDuCt/nH9OvHXCJ4n38O3ID9/QwmI5c151uiJ5lLG2eQ7qOxsaCJz+RBBVK/twtt0qFi"></Mermaid><ul>
<li>Upon success, <code v-pre>/invite/invite-captcha-reponse</code> must put the invite, as-is in its HTML <code v-pre>title</code> tag and may in the visible part of the webpage.</li>
<li>Upon failure, server must not generate and deliver invite.</li>
<li>Client may request and use invite at anytime to be followed and authenticated by the relay.</li>
<li><code v-pre>/invite/</code> and <code v-pre>/invite/invite-captcha-reponse</code> must be valid W3C HTML.</li>
<li>The <code v-pre>/invite/</code> and <code v-pre>/invite/invite-captcha-reponse</code> page must be served over HTTPS and port 443 for public domains</li>
<li>The <code v-pre>/invite/</code> and <code v-pre>/invite/invite-captcha-reponse</code> page must be served and over HTTP and port 80 for onions domains.</li>
<li>The <code v-pre>/invite/</code> and <code v-pre>/invite/invite-captcha-reponse</code> page must optimize for mobile with small screen devices</li>
</ul>
<figure><img src="/assets/captcha-example.png" alt="Example of captcha" tabindex="0" loading="lazy"><figcaption>Example of captcha</figcaption></figure>
</div></template>


