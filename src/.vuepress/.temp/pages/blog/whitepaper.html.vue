<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>In the instantaneous transmission of news via the Internet, social networks are essentially commercial enterprises.<br>
There are entities that serve as an intermediary for the transmission of information and give their name to a network.<br>
Although the system works well in most cases, it suffers from weaknesses due to the use of a trusted third party for identification and moderation.</p>
<p>In order to guarantee your identity and the moderation of the service against illegal content or going against the interests of the organizer of the social network, you are asked for your personal information. Sometimes more than necessary to ensure the operation of the service and the service costs are paid for by advertising, not objective information. Costs are partly absorbed by the resale of personal information, possibly<br>
<a href="https://www.washingtonpost.com/dc-md-va/2023/03/09/catholics-gay-priests-grindr-data-bishops/" target="_blank" rel="noopener noreferrer">for questionable purposes<ExternalLinkIcon/></a></p>
<p>Often geographically localized, <a href="https://www.bloomberg.com/news/articles/2012-02-19/china-asks-baidu-to-help-govt-control-information-on-internet#xj4y7vzkg" target="_blank" rel="noopener noreferrer">sometimes under government control<ExternalLinkIcon/></a>, social networks as they exist cannot avoid active moderation. The risk of being influenced by the platform or by organizations wishing to influence the platform is significant, as shown by <a href="https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html" target="_blank" rel="noopener noreferrer">the Cambridge Analityca case<ExternalLinkIcon/></a>. All this has a cost.</p>
<p>However, we believe that social networks can bring human benefits, for everyone to know the other better, to find information, even to build a collective intelligence. There is a large amount of research investigating the negative effects of social media on behavior, we believe they also have positive effects and a net result shall be expected, as said Sir Francis Bacon, <em>Knowledge itself is power</em>.</p>
<p>Useful because spreading global knowledge, social networks can be improved. Starting from the prior art, we propose to continue the path, in particular on what seems to us to be a very good construction, the Secure Scuttlebut (SSB) protocol. There is an avenue for building an open product, a decentralized, censorship-resistant, legal social network of the future. we propose a reference SSB2 client and server under the umbrella of a non-profit organization.</p>
<h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2>
<p>The idea in cryptography that private keys correspond to public keys is attributed to <a href="https://dl.acm.org/doi/abs/10.1145/1499799.1499815" target="_blank" rel="noopener noreferrer">Diffie and Hellman (1976)<ExternalLinkIcon/></a>. Signing a message with a private key proves that you are the author, having been and being in possession of the key. Another person cannot sign a message for me without knowing my private key. The signatory then constitutes an identity. It is therefore no longer necessary to have recourse to a trusted third party to organize the integrity of your messages.</p>
<p>It is going to be possible to export and import a private key in the form of a mnemonic phrase.</p>
<p>In 2008, Daniel J. Bernstein and his team publish <a href="https://link.springer.com/chapter/10.1007/978-3-540-85053-3_16" target="_blank" rel="noopener noreferrer">the use of Edward's cryptographic elliptic curve<ExternalLinkIcon/></a> which will be followed by a high-speed cryptographic library. The advantages of elliptic curve cryptography over other cryptographic methods, such as RSA, are equivalent security with shorter keys and increased computational efficiency. For example, a 256-bit ECC key provides a similar level of security as a 3072-bit RSA key. Soon after he deliver a reference software library, &quot;Not a Cryptographic Library&quot; (NaCl). library (<a href="https://link.springer.com/chapter/10.1007/978-3-642-33481-8_9" target="_blank" rel="noopener noreferrer">Daniel J. Bernstein, 2012<ExternalLinkIcon/></a>),  demonstrating this mathematical work, through practical functions.</p>
<p>Soon after, Frank Denis published <a href="http://labs.opendns.com/2013/03/06/announcing-sodium-a-new-cryptographiclibrary/" target="_blank" rel="noopener noreferrer">&quot;Introducing Sodium, a new cryptographic library&quot;<ExternalLinkIcon/></a> (2013) and <a href="https://doc.libsodium.org/" target="_blank" rel="noopener noreferrer">LibSodium<ExternalLinkIcon/></a>, a modern portable cryptographic library based on the interfaces of NaCl.</p>
<p>On top of this, Dominic Tar will publish <a href="https://dominictarr.github.io/secret-handshake-paper/shs.pdf" target="_blank" rel="noopener noreferrer">Secret Handshake Protocol<ExternalLinkIcon/></a>(SHS also known as SecretStack).</p>
<p>The server's public key allows secure access to remote functions. Dominic Tar publishes a reference implementation to a not simple problem, a client-server remote procedure execution. It can be defined as a software construct that makes remote command execution simple by using public key authentication, the public key having been authorized for certain capabilities (reading messages, posting a new message, for example).</p>
<p>Additionally, he publish the Secure ScuttleBut (SSB) protocol. SSB defines itself as a subjective toolbox for building a social network. The library offers all the verbs to build a social network (follow, block, present, invite, ...).</p>
<p>For a quick description of the Secure Scutllebut protocol, SSB see <a href="https://web.archive.org/web/20190716152343/https://infourminutes.co/whitepaper/scuttlebutt" target="_blank" rel="noopener noreferrer">the white paper in 4mn<ExternalLinkIcon/></a>, and <a href="https://ssbc.github.io/scuttlebutt-protocol-guide/" target="_blank" rel="noopener noreferrer">the guide of the SSB protocol<ExternalLinkIcon/></a>.</p>
<h2 id="overview-of-current-status" tabindex="-1"><a class="header-anchor" href="#overview-of-current-status" aria-hidden="true">#</a> Overview of current status</h2>
<p>Alas, despite all its capabilities we have yet to find a popular application of the SSB protocol. There is no social network based on the SSB protocol with a significant number of users. Is it because of the lack of sufficiently comprehensive implementation?</p>
<p>The Bluesky initiative has put together <a href="https://gitlab.com/bluesky-community1/decentralized-ecosystem" target="_blank" rel="noopener noreferrer">a matrix of existing decentralized projects<ExternalLinkIcon/></a>. They are all <a href="https://datareportal.com/social-media-users" target="_blank" rel="noopener noreferrer">less popular than centralized networks<ExternalLinkIcon/></a>, all commercially oriented.</p>
<ul>
<li>
<p>Mastodon is currently popular, but not without encountering problems.<br>
It does not really offer a decentralized identity, which is ultimately carried by the instance.<br>
It also lacks a mobile-optimized, offline user interface.<br>
<a href="https://www.w3.org/TR/activitypub/" target="_blank" rel="noopener noreferrer">The ActivityPub protocol<ExternalLinkIcon/></a> <a href="https://mastodon.social/@atomicpoet/110007834836602630" target="_blank" rel="noopener noreferrer">does not facilitate uniformity<ExternalLinkIcon/></a> and applications do not federate completely all together. Mastodon is not optimized for mobile devices first.</p>
</li>
<li>
<p><a href="https://github.com/nostr-protocol/nostr" target="_blank" rel="noopener noreferrer">The Nostr protocol<ExternalLinkIcon/></a> looks a lot SBB but <a href="https://github.com/nostr-protocol/nostr#the-problem-with-ssb-secure-scuttlebutt" target="_blank" rel="noopener noreferrer">decided to change<ExternalLinkIcon/></a>, the message format, and not to resume SHS as is. Nostr does not offer a reference implementation, but relies on a still emerging ecosystem of clients and servers.<br>
Nostr is different from SSB seems to deprive itself of tools present in SSB, such as invitations, attachments or the message chain. It does not offer server-to-server communication, so clients connect to multiple servers. It interestingly has an essential property of censorship resistance of the network but seems sensible to spam.</p>
</li>
<li>
<p><a href="https://atproto.com/" target="_blank" rel="noopener noreferrer">The AT protocol<ExternalLinkIcon/></a>, offers a new communication layer. A lexicon is provided for remote functions and http-based services. Product availability is expected soon. If the AT protocol seems promising in terms of performance, for example when it will use <a href="https://en.wikipedia.org/wiki/QUIC" target="_blank" rel="noopener noreferrer">QUIC<ExternalLinkIcon/></a>, it is however still only in design. Both solutions do not address yet the questions of &quot;attachments&quot;, attachments like images, videos and other files, yet.</p>
</li>
</ul>
<p>Fact that there are other initiative tend to prove that there is a need for a product. SSB current protocol lacks verbs such as <code v-pre>feed-delete</code> to erase our entire identifier, <code v-pre>post-edit</code>, <code v-pre>post-delete</code> in order to comply with basic users requirements (i.e. European laws kindly make this mandatory).</p>
<h2 id="methodology" tabindex="-1"><a class="header-anchor" href="#methodology" aria-hidden="true">#</a> Methodology</h2>
<p>Starting from SSB we propose a reference client and server under the umbrella of a non-profit organization. All code named below is available here: <a href="https://github.com/ssb2dmba" target="_blank" rel="noopener noreferrer">https://github.com/ssb2dmba<ExternalLinkIcon/></a></p>
<ul>
<li><strong>delog</strong>, a mobile client, indeed, <a href="https://www.broadbandsearch.net/blog/mobile-desktop-internet-usage-statistics" target="_blank" rel="noopener noreferrer">86% of Twitter usage is on the phone<ExternalLinkIcon/></a>.</li>
<li><strong>ssb-relay</strong>, a reference server. In order to be able to manage a large number of messages, we propose to support them on a relational database (i.e. <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">Postgres<ExternalLinkIcon/></a>). Such servers shall be easily installable, for exemple over a Rasberry PI a Tor for network addressing without having a domain name and a static ip adress (the more network has server the healthiest it is).</li>
<li><strong>dmba</strong>, a non-profit organization under European Union laws.</li>
</ul>
<h2 id="decentralized-identifiers" tabindex="-1"><a class="header-anchor" href="#decentralized-identifiers" aria-hidden="true">#</a> Decentralized identifiers</h2>
<p>It is practical in a social network to have a readable name, an alias. Email and Mastodon for example does that well.</p>
<Mermaid id="mermaid-103" code="eJxljbEOwjAMRPd+xW1M/YEOpSD+ATE6wQFLSSziRKh/T1okFhbLd3p3Z/xqnD1fhB6F0gCQr1pwVvf7T1E8d9U9jPP81ROuT6oQw6qtQO6cqwThcuzkTmDc4B6aIPVgoM1c9hsoSVz/K2/a4Cl31BRBY9Q3EqPvOHWLmQuUbfgAjy86iA=="></Mermaid><p>We see that social network identifier are written in the form user@domain and can be easily exchanged.</p>
<p>Network is going to:</p>
<ul>
<li>ensure name uniqueness</li>
<li>map user@domain to a cryptographic public key (pk) to an onion domain</li>
</ul>
<p>For this:</p>
<ul>
<li>relay ensure name uniqueness inside a domain</li>
<li>relay that serve over Tor register their name through the Namecoin network. This is the recommended way to use the network.</li>
<li>Relays that serve over public DNS get their name uniqueness handled by the public DNS service</li>
</ul>
<p>Pseudonym verification is provided by posting a simple request to the server associated with the alias for verification.</p>
<Mermaid id="mermaid-145" code="eJxljk0OgjAQhfeeYi5Ai0YSbQJhofEAujHGmAEGqEKpLYrcXlNJRF3Oz/e9Z+l6I5XSSmJhsJ4AJE3iodbgRREorMmSuZMRsFnv3HyyhCYtASuZUo61rPoX9fl04CAR8MADY+yYEOWsUbJRPwkjyzuibFttBed/IGcdVZV3UU2nuMN4JjN2ts458oD31cBd4vE9hHivt04fMspmQTBdioXv+8Ltit626Ryzoe8TxRdgMA=="></Mermaid><p>This system is <a href="https://w3c-ccg.github.io/did-method-web/" target="_blank" rel="noopener noreferrer">standardized by the W3C<ExternalLinkIcon/></a> and known as <a href="https://en.wikipedia.org/wiki/Decentralized_identifier" target="_blank" rel="noopener noreferrer">web-did<ExternalLinkIcon/></a></p>
<ul>
<li>domain names are unique and signed over the Namecoin network</li>
<li>usernames are unique and signed by the user exposing its public key and the relay</li>
</ul>
<p>That me that social graph would be constituted of decentralized identifiers such as bob@cryptofamily, a request of the client on well-known address would resolve to a history of public keys and a set of relays.</p>
<h2 id="scuttlebut-functional-rules-sfr" tabindex="-1"><a class="header-anchor" href="#scuttlebut-functional-rules-sfr" aria-hidden="true">#</a> Scuttlebut functional rules (SFR)</h2>
<p>The idea is to define the communication rules on top of the protocol between clients and servers.<br>
For example, if you want to use the server as a backup and replication hub between several machines, you can fulfill the need with a functional rule.</p>
<p><em>Example of a functional rule, the behavior of the client and the server must follow the following sequence</em>, implementing this sequence allow client backup on relay (and also cross client uses):</p>
<Mermaid id="mermaid-173" code="eJyVUs1OwzAMvu8pfAPENomf0w6TECDtxIE9APJSd4uWJiVxN/XtcZJ2f0xF5NIktr+/JtB3Q1bRm8a1x2oEslCx8/BitKJ0rtGzVrpGy/BJBlu5TVWYzOd5N4O910yAtgAqNEPhseRwrVFbJm/RmBbqZmV02EBFIeA6kn04AXE76ujHmW8GrCsCdvmbIZWzlhTHW38p6r6fW5LyxAuRFTa4JXiYPklfKsIkNXaqzho9weP0eTSgJzYagqoxrGvZFLSTckj+V6i2TQ1NEI0YoqtjBt24cCHTQgcJul2ynKrbQKYcg8HAX/1PuTvT2kvt0oKQ5sCVuXATwO3tIcsB8c4ewsvKuhlBIFscOY+U1/RixvwluDN74vZCsC4lpnZI4OuG1BZKeYT9qJisycWkE63UjHF7gTDO1fAuEG30xPJ046OLK0FO5v9PPK40JR7+jPyENGY3+gGj6BqM"></Mermaid><p>There are other rules that may be useful. The method consists in defining its rules using an organization that surrounds the emergence of SFR.</p>
<ul>
<li>Users should own their data, and give limit trust in relay.</li>
<li>Users should own their social graph, and not even discard it. One possibility not to disclose the social graph it to let the relay act as a proxy. It is possible by letting client contact relay server where a decentralized identity is replicated.</li>
</ul>
<h2 id="network-topology" tabindex="-1"><a class="header-anchor" href="#network-topology" aria-hidden="true">#</a> Network topology</h2>
<p>In order to transmit the information quickly, and to prevent censorship users shall use several relay servers.</p>
<ul>
<li>The network can be defined like being similar to a mail network where relay act as point of presence on the network.</li>
<li>Client can connect to multiple point of presence.</li>
<li>Relays may be notified by another relay</li>
<li>Relays can check other relays for new messages</li>
</ul>
<p>Network topology would look like:</p>
<Mermaid id="mermaid-220" code="eJxLy8kvT85ILCpR8AniUgACx5zM5FQFBV1dO4Wi1JzESkewKIQJFgUrwKrUCSzqlJ+ELgRhgkWBssgG2uBWGZKfq6Cm4JeZnA2kvPJTuQC8uy4R"></Mermaid><p>Alice is kept is sync with relay A. It also send private messages directly to Bob's relayB. RelayB get also notified of Alice activity through relayA. Tom, Nick and Joe also follow Alice and Bob.</p>
<h2 id="decentralized-micro-blogging-association" tabindex="-1"><a class="header-anchor" href="#decentralized-micro-blogging-association" aria-hidden="true">#</a> Decentralized Micro Blogging Association</h2>
<p>The Decentralized Micro Blogging Association. DMBA organize the emergence and also the quality assurance of the reference software. One of the hypotheses to explain the weaknesses of existing social networks is that an entity should not dictate the rules of the network alone.</p>
<p>Same as in much software development community, functional rules and protocol changes are accepted by consensus, through the process of improvements proposals, formalized in a tested implementation, as code (implementations are integrated into the source code following the traditional merge request process with peer approval).</p>
<p>Ideally this operation would be democratic, built on exchanges, framed by rules responsible for directing the inflow and outflow of exchanges and changes:<br>
Users define rules, rules become software, and the software become a network.</p>
<p>Our methodology is therefore based on three tools:</p>
<ul>
<li>Mobile clients optimized for battery consumption, native.</li>
<li>Decentralized servers based on a large capacity relational database (such as Postgres),</li>
<li>a non-profit association which organizes the vote on the operating rules of the software, and therefore of the network.</li>
</ul>
<h2 id="resistance-to-spam-online-harassment-and-toxicity" tabindex="-1"><a class="header-anchor" href="#resistance-to-spam-online-harassment-and-toxicity" aria-hidden="true">#</a> Resistance to spam, online harassment and toxicity.</h2>
<p>Each user chose who he follows. He receives in his thread only the messages of the friends followed. Spam cannot arrive in the mailbox unless the user specifically asks to follow.</p>
<Mermaid id="mermaid-262" code="eJyNkLsOwjAMRXe+wmM7oP4BSKjAxgQDBIaodaEiJMguQhXh32ka85CQEBnycM691zJ0qzLuWhw0NbDMB6EwV2ek2pV1oY1poThgcYTKEVi8wgmZ9R55B8PhCGZUoy05n/TC10slcgVTc5NGNjKT28kRAqHRLY/v4cevkT3E7KnKJE8MevCVmklsz+bRSsjoBb4NZtMfgHVeepmpRIyBG0fdme6+mpQeF51qE1XRhlCXHlaM1Fc3Sekspn/MwV9s5Uw39A91uKgs7FuBnsh7woMHYqSFTw=="></Mermaid><p>This simple mechanism, expressible as an SFR, should make simple bots largely useless, why post if no one is following them?</p>
<h2 id="find-threads" tabindex="-1"><a class="header-anchor" href="#find-threads" aria-hidden="true">#</a> Find threads</h2>
<p>Having a social network where you only receive messages from people you follow is a good way to limit spam or harassment. But with only that how to discover new threads?</p>
<ul>
<li>It has already been proposed to augment the SSB protocol with the <code v-pre>search</code> verb. The Postgres server offers some of the most powerful full-text search on the market.</li>
<li>It has already been proposed to use links to quote and open threads or messages (ssb-uri) as hypertext links, when they begin with ssb://.<br>
This would allow discovery of the network from the inside and from the outside. A link to a thread or a link to a message opens a compatible application.</li>
<li>Replies to messages make possible to know new contacts. Without prejudging the rules that will be implemented, here is an example:
<ul>
<li><em>response threads are fed by all messages known to the relay when querying the thread of the message&quot; - &quot;it is possible to block&quot;</em></li>
<li><em>the server understands answers blocked by the author as blocked for all, by the reader as blocked by him</em></li>
</ul>
</li>
</ul>
<p>Toxicity can be contained with a blocking mechanism per entire relay server, probably for cases falling within the legal framework...<br>
The perpetrator would then lose all reputation, a severe penalty.<br>
Conversely, if the relay practices too much censorship, according to users, it will be left because of its bad reputation.<br>
Brief balances of moderation should be formed like so many spheres, nevertheless communicating.</p>
<p>The use of call limitation devices should be an integral part of the relay server for the protection of denial of service type attacks.</p>
<h2 id="peer-discovery" tabindex="-1"><a class="header-anchor" href="#peer-discovery" aria-hidden="true">#</a> Peer discovery</h2>
<p>What if all relay servers could see each other and &quot;shake hands&quot;, may be only on invite ?<br>
The addition of an implementation, in the pub server, of a discovery service by &quot;Distributed Hash Table&quot; (<a href="https://en.wikipedia.org/wiki/Distributed_hash_table" target="_blank" rel="noopener noreferrer">definition<ExternalLinkIcon/></a>, <a href="https://www.npmjs.com/package/hyperswarm" target="_blank" rel="noopener noreferrer">example of implementation<ExternalLinkIcon/></a>) seems completely relevant.</p>
<ul>
<li>Invitation and automatic follow-up to discover relay servers between them?</li>
<li>What rules for the use of the epidemic diffusion algorithm?</li>
<li>If the SSB network is essentially based on the fact that the clients pull the messages, shouldn't a &quot;push&quot; type operation be introduced between the relay servers to optimize transmissions? What are others optimizations to be done ?</li>
</ul>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2>
<p>SSB2 appears as an interesting avenue of research. With a few improvements, it is possible to bring the network into legal compliance, users basic requirements, while having a strong decentralization.<br>
The issues of censorship resistance, the use of netiquette, trust, without third parties, or key rotation can be answered and same is true for deleting and modifying messages online. Secured online voting would be a Graal and command protocol extension are unlimited, home based backup could help in archiving and storing medias from the mobile devices. The quality of the experience should be crucial and that might be a long road.</p>
</div></template>


