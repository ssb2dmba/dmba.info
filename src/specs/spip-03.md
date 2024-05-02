---
title: message deletion
article: False
index: False
order: 13
icon: enum
category:
  - Specs
---


The SPIP-03 add a new verb of message type: `post-delete` and the message must contains one an only one mention, link, reference to the message to delete.

This is a courtesy of all actors of the network.

Upon reception any client or relay server:

- MUST verify the signature of the message.
- MUST verify that the sender of the message and the author of message to delete are the same
If the above conditions are satisfied:
- MUST delete the linked message.
- MUST delete the linked attachment if, by reception date, the message to delete is the first to mention the attachment, not by using the timestamp in message the timestamp of reception.

On all feed synchronization such a `post-delete` message MUST be sent as any other message, example in `createHistoryStream` remote procedure call.


An example of such message could be:
```json
{
  "key": "%BWUnxLJCQvJEDa132tzZOGaV9FzIKkCJ+/dy2i72IgU=.sha256",
  "value": {
    "previous": "%GG5U0b/uC2xFFPKp19H5BYjwQu3sz1/ROOC8BQw3IWo=.sha256",
    "sequence": 24,
    "author": "@XVm2XGanhTuBPawgvjjAmbmAi3ENdJk4vGNFd+euT80=.ed25519",
    "timestamp": 1708077261865,
    "hash": "sha256",
    "content": {
      "type": "post-delete",
      "mentions": [
        {
          "link": "%GG5U0b/uC2xFFPKp19H5BYjwQu3sz1/ROOC8BQw3IWo=.sha256"
        }
      ],
    },
    "signature": "KCeVYM6vp2zbhob6xt/tLJM4tyH6nh9X9wVlaWWmX4Pcp/+xbpypgHhERAUlTGEaxbfDXDV9hHuMPtb2qRMwAw==.sig.ed25519"
  }
}

```