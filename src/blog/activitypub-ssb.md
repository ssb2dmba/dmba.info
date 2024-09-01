---
title: "Integrating ActivityPub and SecureScuttlebutt: Enhancing Decentralized Social Networks"
icon: config
author: Emmanuel Florent
date: 2024-08-16
---

It is expected that the success of [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) will be immense. The  [Fediverse](https://en.wikipedia.org/wiki/Fediverse) is a very pleasant network.  The discussions there remind me of the early days of the Internet. Technically, the network is modern, its design is elaborate and well-thought-out. Sufficiently so to make its understanding both difficult and accessible. With an exponential adoption that seems irreversible, one can say that the power of the design is proven.

Among the relevant criticisms, I have noted that the protocol is said to be defective because the client-server communication itself does not follow the protocol. According to this criticism, the network would be centralized, and users have to register on a server.
This criticism is, for example, echoed on the Nostr network, which claims that this is not the case for them.

We believe that the Fediverse can be improved thanks to [Secure Scuttlebutt](https://en.wikipedia.org/wiki/Secure_Scuttlebutt) (SSB).


## What SecureScuttlebutt can bring to ActivityPub

- A fast and smooth client-server identification protocol [secret-stack](https://ssbc.github.io/scuttlebutt-protocol-guide/#peer-connections). Secret Stack uses ed25519 and LibSodium strong primitives. It provides a capability based identification protocol ensuring both identification of sender and message integrity.
- An end-to-end encryption protocol (e2ee): SSB offers and-to-end encryption (E2EE) made possible with the libsodium library by using a combination of cryptographic algorithms and techniques that ensure that only the communicating parties can access the encrypted data. [SSB private messages are described here](https://ssbc.github.io/scuttlebutt-protocol-guide/#private-messages).
- A server registration protocol [ssb-invites](https://ssbc.github.io/scuttlebutt-protocol-guide/#invites): a decentralized mechanism for securely inviting new members to join an SSB network by exchanging signed invitation messages and establishing trust relationships. It enables discovery and connection to other nodes in the network without relying on centralized authorities or infrastructure. 
- A client-first approach where data primarily remains on the client. The point could be pushed to the limit where and ssb-relay could delete messages after having it distributed them and just keep the like counter.

Consequently, SSB bring an improvement in portability of identities and data

## What ActivityPub can bring to SecureScuttlebutt

- Full access to the Fediverse.
- Solid and proven specifications, de facto standard, complete for the operation of a social network. This includes, among other things, likes, votes, server migrations, deletions, content warnings, etc. The Fediverse has its own vocabulary, its implementation details.

## How could this work?

Beautiful ActivityPub libraries are now available. In order to complete the existing ssb-relay project, the [Fedify library](https://fedify.dev/) seemed excellent to us. It is possible to use it so that ssb-relay servers publish and receive activities from the Fediverse.
Non-local users and non-ssb users would be translated to ssb message signed by ephemeral keys generated on the server, just as most ActivtyPub implementations works.
It is possible to adapt the details of SSB messages (votes, likes, etc.) to align them with the [Mastodon](https://en.wikipedia.org/wiki/Mastodon) standard.

## Conclusion

Such an implementation would achieve a Fediverse compatible client/server that is portable, where data is primarily carried on the client through a cryptographic signature chain. Always, [Namecoin](https://en.wikipedia.org/wiki/Namecoin#Uses) or DNS remains a goal for identity naming.
A simplified installation solution and Tor as a firewall traversal solution also always seem relevant to us.


