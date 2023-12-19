---
title: message flow
index: true
order: 12
icon: enum
category:
  - Specs
---


The message flow specification describes the flow of messages. 

- Message flow essentially work with the `createHistoryStream` and `publish` SSB [RPC method described here](https://ssbc.github.io/scuttlebutt-protocol-guide/#createHistoryStream).

```mermaid
sequenceDiagram
    actor Alice
    participant Relay
  Alice ->> Alice: write and edit drafts
  Alice ->> Alice: internally publish message
  Note over Alice, Relay: time to time Alice connect to relay
  Alice ->>+ Relay: SecretHandshake 1.3
  Relay -->>+ Alice: SecretHandshare 2.4

  Note over Alice, Relay: Handle multiple devices and backup use case
  Alice ->> Relay: createHistoryStream(self, last_sequence)
  Relay -->> Alice: message stream of Alice's own message

  Note over Alice, Relay: on connect Alice message's end
  Relay ->> Alice: createHistoryStream(alice, last_sequence)
  Alice -->> Relay: message stream if any

  Note over Alice, Relay: Check for message of people alice follow
  loop Every contacts
      Alice->Relay: createHistoryStream(self, last_sequence)
      Relay-->Alice: message stream of Alice's contacts
  end

```


- In order to prevent a race condition:
    - Server must wait for clients owns `createHistoryStream` response end to emit his own. 
    - Client may finalize publication at a time when the server is synced.
- Both client en relay must not check for sequence continuity. This is important for several use cases such as message delete.

