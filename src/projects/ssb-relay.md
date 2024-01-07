---
title: ssb-relay
article: false
icon: any
category:
  - projects
---

A Secure Scuttlebutt (SSB) relay server is an entry point for accessing the SSB network. It is an instance that operates the Secret Handshake and SSB protocol. Plus some SSB Protocol Improvements Proposals aimed at making the network useful and friendly.
Users can register on one or more shared instances. The server is open-source and can be installed by anyone who wishes to do so.

https://github.com/ssb2dmba/ssb-relay

- [x] SecretStack, the original SSB stack
- [x] Available on Github
- [x] Licensed under GnuGPL V3 license
- [x] Serve invite on captcha
- [x] easy client onboarding & message flow
- [x] Postgres database and pg-stream
- [x] Tor embedded
- [x] Namecoin name_search and wallet embedded
- [x] Packaged for Raspberry Pi


Unordered important and missing features on roadmap are:
- [ ] Serve decentralized identifier at `.well-know` address
- [ ] Serve user handle at `.well-known` address
- [ ] Feed delete, Message delete
- [ ] Content management system for hosting webpages (contact, information, term of service, ...)
- [ ] admin API interface
- [ ] Postgres Full Text Search & search
- [ ] intelligent database forget strategy and cleanup
- [ ] Raspberry Pi integration with Bluetooth onboarding
- [ ] Namecoin integration
- [ ] Tor integration
- [ ] invite on co-optation only
- [ ] network rate limiting
- [ ] CI/CD
