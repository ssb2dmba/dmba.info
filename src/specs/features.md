---
title: Features
index: true
order: 1
icon: define
category:
  - Specs
---


### Each user choose who he is following

In a social network that operates on an opt-in only follow model, the following three benefits arise:

Mitigation of Bad Actors and Hate Speech: With the opt-in property, individuals have the power to opt-out of interactions with bad actors and hate speech. These harmful elements are thereby limited to shouting into an empty void, reducing their influence and impact within the network.

Cultivation of Incentivized Informative and Positive Behavior: The incentive to be followed creates a motivation for users to engage in informative and positive behavior. Knowing that their content and actions are actively sought after by others, individuals are encouraged to provide valuable and engaging contributions to the network.

Dynamic Sub-Networks and Diverse Exchange: While there is a possibility of sub-networks forming around shared ideas and philosophies, the nature of human imagination and perpetual oscillations ensures that complete philosophical homogeneity is not always the case. The network remains dynamic, allowing for the emergence of diverse perspectives and the potential for exchange and dialogue between individuals with varying beliefs and philosophies.

Same thins apply to software as a dishonest implementation would be quickly spotted and lose its reputation.


### Fast, energy efficient, easily installable relays and client

While mobile applications can be effortlessly deployed on phones and tablets, the network requires deployment on permanent nodes to function effectively. This specific software component is referred to as a relay.

Although cloud providers are progressively simplifying the onboarding process, utilizing such services can be problematic as it contradicts the objective of decentralization due to the reliance on central nodes. Similarly, the concentration of speech hosting in mega-instances presents legal consequences and issues related to centralization.

To address these challenges, the approach taken by DMBA is to facilitate hosting of various types of instances and their distribution. This approach aims to provide a network model similar to Mastodon's and beyond, employing the following tools:

- Distribution of specially optimized, ready-to-run appliances that are easy to use.
- Network traversal utilizing the Tor network as a built-in feature for relays.
- Integration with the Namecoin network to obtain decentralized relay identifiers that are human-readable.

The entire software stack will be packaged as:
- a pre-installed, Bluetooth-configurable Raspberry Pi with a large SSD network appliance. This comprehensive solution ensures fast, energy-efficient operation while maintaining ease of installation and configuration.
- Docker compose for hosting from home (or cloud)

### Private and public content, decentralized identifier

Users have the ability to create multiple thread contents.

We are currently working on an adaptation that will allow you to select whether one of your feeds is public or not, and if it is not public, you can filter who is allowed to follow it. Additionally, we are modifying the SSB protocol to enable message and feed deletion.

On the network, users are identified by their network identifier, which is displayed as user@server. Server names (@server) are made possible through a user-friendly Namecoin integration. A self-hosted relay software ensures name uniqueness, while Namecoin ensures affordable name uniqueness across servers.

Users have the ability to create multiple thread contents.

You can now choose to follow joe@somewhere.bit, start a server at home, and host your own content feed.





