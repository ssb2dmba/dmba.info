---
title: "Integrating ActivityPub and SecureScuttlebutt: Enhancing Decentralized Social Networks"
icon: config
author: Emmanuel Florent
date: 2024-08-16
---

It is expected that the success of ActivityPub will be immense. The fediverse is a very pleasant network. 
The discussions there remind me of the early days of the Internet.
Technically, the network is modern, its design is elaborate and well thought out.
Sufficiently so to make its understanding both difficult and accessible.
With an exponential adoption that seems irreversible, one can say that the power of the design is proven.

Among the relevant criticisms, I have noted that the protocol is said to be defective because the client-server part does not follow the protocol.

According to this criticism, the network would be centralized because users have to register on a server.
This criticism is, for example, echoed on the Nostr network, which claims that this is not the case for them.

We believe that the Fediverse can be improved thanks to SecureScuttlebutt.


## What SecureScuttlebutt can bring to ActivityPub

- A fast and smooth client-server identification protocol (secret-stack).
- An end-to-end encryption protocol (e2ee).
- A server registration protocol (ssb-invite).
- A client-first approach where data primarily remains on the client.

Consequently, an improvement in portability:
- of identities
- of data

## What ActivityPub can bring to SecureScuttlebutt

- Full access to the Fediverse.
- Solid and proven specifications, de facto standard, complete for the operation of a social network. This includes, among other things, likes, votes, server migrations, deletions, content warnings, etc. The Fediverse has its own vocabulary, its implementation details.

## How could this work?

Beautiful ActivityPub libraries are now available. 
It is possible to use them so that ssb-relay servers publish and receive activities from the Fediverse.
It is possible to adapt the details of SSB messages (votes, likes, etc.) to align them with the Mastodon standard.

## Conclusion

Such an implementation would achieve a Fediverse-compatible client/server that is portable, where data is primarily carried on the client through a cryptographic signature chain. Always, Namecoin or DNS remains a goal for identity naming.
A simplified installation solution and Tor as a firewall traversal solution also seem always relevant to us.


