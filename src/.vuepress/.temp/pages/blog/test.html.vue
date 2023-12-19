<template><div><p>There is a quite nice protocol for decentralized self-certified social network named Secure Scuttlebutt.<br>
(Learn more)[<a href="https://ssbc.github.io/scuttlebutt-protocol-guide/index.html" target="_blank" rel="noopener noreferrer">https://ssbc.github.io/scuttlebutt-protocol-guide/index.html<ExternalLinkIcon/></a>]<br>
I think that it should have succeeded being a decentralized Twitter alternative, but observation shows it has not.<br>
Many people think about it or just wish it.<br>
SSB has everything for crypto self certified decentralized network, unfortunately the user experience is bad, and the ecosystem is locked in a never growing paradigm.<br>
I though that it is essentially because the UI interface is not suited for energy efficiency and that nobody went on the same server side problem.<br>
In extended study running projects are facing issue with the Javascript database and indexes and other problems that can be fixed (such as a webfinger protocol scheme in order to map like in Mastodon users to publick keys)<br>
So the idea would be to bring a relational database (PostgreSQL) on the server side and Room to the rescue.<br>
Fix the isses of UI with and Jetpack Compose ( fortunatly Apache ported the ssb protocol to Java/Kotlin recently).<br>
Here are my implementations, they are very early, just a POC.<br>
client <a href="https://github.com/ssb2dmba/delog" target="_blank" rel="noopener noreferrer">https://github.com/ssb2dmba/delog<ExternalLinkIcon/></a><br>
server   <a href="https://github.com/ssb2dmba/ssb-relay" target="_blank" rel="noopener noreferrer">https://github.com/ssb2dmba/ssb-relay<ExternalLinkIcon/></a></p>
<p>According to your developer experience, does this plan make senses ?<br>
What would you think of the initiative ?<br>
Given the ssb protocol, the ssb-ecosystem, how many time wil it take to get the ultimate twitter dapp replacement ?</p>
</div></template>


