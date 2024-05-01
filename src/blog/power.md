---
title: With great power comes great responsibilities
icon: config
author: Emmanuel Florent
date: 2024-04-20

---

If you are new to this blog, [Delog](https://github.com/ssb2dmba/delog) is a decentralized Android mobile micro-blogging application. It works like Mastodon but is easier to host a server and it's mobile oriented. Delog is based on the [Secure Scuttlebut](https://en.wikipedia.org/wiki/Secure_Scuttlebutt) (SSB) [Protocol originaly created by Dominic Tar & friends](https://ssbc.github.io/scuttlebutt-protocol-guide/).

This quarter, Delog has made exceptional progress. First of all, we have implemented support for attachments, including images, videos, and other files. This change is crucial because it involves hosting these attachments on the relay server. Beyond the freedom to express a message in text (and rich text), with Delog, we can now share content.

I now use Delog every day to maintain a blog of photographs of my family. It's very convenient to be able to transfer my photos from my mobile to the server without any loss of quality, without compression. My relay server functions as a storage space for my photos.


However, this has several consequences, as it opens the door to content hosting through the relay server. The relay server becomes a powerful content host. 

Relay servers are designed to be hosted on [the Tor network](https://www.torproject.org/), this is in order to get closer to our decentralization goal :
- they do not rely on centralized DNS
- they can cross home network without specific configuration (plug and play)

As the word "Tor" is said we must understand that this is not automatically mean illegal activities but rather free to speech and decentralization.
As a reminder I would say again that hosting on Tor is not a *Panacea* for doing anything and if you do not get doxed by the network stack you might be by other means. Anyway that's not our goal, and we think as Delog as a public legal service, that comes with great power and great responsibilities.


One of the key laws that shields platforms from liability for user-generated content is [Section 230 of the Communications Decency Act](https://www.law.cornell.edu/uscode/text/47/230) (CDA) in the United States. Section 230 provides legal protections to online platforms, stating that they are not treated as the publisher or speaker of the content posted by their users. This law grants platforms immunity from certain legal claims related to user-generated content.

Under Section 230, online platforms are generally not held liable for defamation, libel, or other harmful content posted by their users. This protection allows platforms to host a wide range of user-generated content without assuming legal responsibility for each individual piece of content. However, it's important to note that platforms can still be held liable if they are directly involved in creating or developing the content, or if they knowingly engage in unlawful activities.

In European Union, articles 4, 5, 6 of the [Digital Services Act Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32022R2065), provides a similar limited liability exemption for online intermediaries, such as internet hosting providers, for the content posted by their users.

Under Article 6, online intermediaries are generally not held liable for the information they store or transmit on behalf of their users unless they have actual knowledge of illegal activity or, upon obtaining such knowledge, fail to act promptly to remove or disable access to the illegal content. This provision aims to strike a balance between the protection of freedom of speech and the need to combat illegal content.

The responsibility of the host consequently entails the need to:

- Restrict access to the thread by a shortlist
- Delete messages from the thread.
- Delete a thread.
- Report a message.
- Allow/forbid relay deliver invite

This was anticipated, and now the time for new milestones is approaching.
These are our next steps on roadmap now we have implemented basic application with attachments, 

Some points will require extensions to the existing [SSB protocol](https://ssbc.github.io/scuttlebutt-protocol-guide/) verb that are missing such as for example `post-edit` and `post-delete` 

Some other shall be handled through relay configuration:
- to allow or not deliver invite in general shall be a relay configuration option
- thread access restriction.

These features shall be specified under the umbrella of the Decentralized Microblogging Association.







