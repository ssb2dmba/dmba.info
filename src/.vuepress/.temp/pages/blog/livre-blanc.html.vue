<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Dans la transmission instantanée des nouvelles par Internet, les réseaux sociaux, sont essentiellement des entreprises commerciales.<br>
Il y a des entités qui servent d'intermédiaire pour la transmission de l'information et donne leur nom à un réseau.<br>
Bien que le système fonctionne bien dans la plupart des cas, il souffre des faiblesses dues à l'utilisation d'un tiers de confiance, pour l'identification et, la modération.</p>
<p>Afin de garantir votre identité et la modération du service contre les contenus illégaux ou allant contre les intérêts de l'organisateur du réseau social, il vous est demandé vos informations personnelles. Parfois plus que nécessaire pour assurer le fonctionnement du service et les frais de service sont rémunérés par la publicité, une information pas objective. Les couts sont en parties absorbées par la revente des informations personnelles, éventuellement <a href="https://www.washingtonpost.com/dc-md-va/2023/03/09/catholics-gay-priests-grindr-data-bishops/" target="_blank" rel="noopener noreferrer">a des fin questionnables<ExternalLinkIcon/></a>.</p>
<p>Souvent géographiquement localisées, <a href="https://www.bloomberg.com/news/articles/2012-02-19/china-asks-baidu-to-help-govt-control-information-on-internet#xj4y7vzkg" target="_blank" rel="noopener noreferrer">parfois sous contrôle gouvernemental<ExternalLinkIcon/></a>, les réseaux sociaux tels qu'ils existent ne peuvent pas éviter une modération active. Le risque d'être influencé par la plateforme ou par des organisations souhaitant influencer la plateforme est important, comme le montre <a href="https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html" target="_blank" rel="noopener noreferrer">l'affaire Cambridge Analityca<ExternalLinkIcon/></a>. Tous ceci à un coût.</p>
<p>Cependant, nous pensons que les réseaux sociaux peuvent apporter des bénéfices humains, pour chacun de mieux connaitre l'autre, pour trouver de l'information, voire construire une intelligence collective. Il existe une grande quantité de recherches étudiant les effets négatifs des réseaux sociaux sur le comportement, nous pensons qu'ils ont aussi des effets positifs et que le résultat net peut être espéré :</p>
<ul>
<li><a href="https://link.springer.com/chapter/10.1007/978-3-642-02930-1_31#:~:text=Rumor%20spreading%20is%20one%20of,model%20of%20Bollob%C3%A1s%20et%20al." target="_blank" rel="noopener noreferrer">les réseaux sociaux répandent l'information rapidement<ExternalLinkIcon/></a>,</li>
<li><em>knowledge itself is power</em>, a dit Sir Francis Bacon,</li>
<li><a href="https://arxiv.org/abs/2301.01609" target="_blank" rel="noopener noreferrer">il est possible qu'il développent l'intelligence collective<ExternalLinkIcon/></a>.</li>
<li>La connaissance de l'autre ou <a href="https://www.scirp.org/journal/paperinformation.aspx?paperid=87316" target="_blank" rel="noopener noreferrer">l'acculturation<ExternalLinkIcon/></a></li>
<li>le renseignement de source ouverte (<a href="https://ieeexplore.ieee.org/abstract/document/7752338" target="_blank" rel="noopener noreferrer">exemple<ExternalLinkIcon/></a>) ou le journalisme.</li>
</ul>
<p>L'initiative Bluesky a constitué <a href="https://gitlab.com/bluesky-community1/decentralized-ecosystem" target="_blank" rel="noopener noreferrer">une matrice des projets décentralisés existants<ExternalLinkIcon/></a>. Ils sont tous moins <a href="https://datareportal.com/social-media-users" target="_blank" rel="noopener noreferrer">moins populaire que les réseaux centralisés<ExternalLinkIcon/></a>, tous à vocation commerciale.</p>
<p>Globalement les réseaux sociaux peuvent être améliorés. En partant d'art antérieur, nous proposons de continuer le chemin, en particulier sur ce qui nous paraît être une très bonne construction le protocole Secure Scuttlebut (SSB).<br>
Pour un réseau social ouvert, décentralisé, résistant à la censure, légal et le moins toxique possible.</p>
<h2 id="historique" tabindex="-1"><a class="header-anchor" href="#historique" aria-hidden="true">#</a> Historique</h2>
<p>L'idée en cryptographie que des clés privées correspondent à des clés publiques est attribuée à <a href="https://dl.acm.org/doi/abs/10.1145/1499799.1499815" target="_blank" rel="noopener noreferrer">Diffie et Hellman, 1976<ExternalLinkIcon/></a>). La signature d'un message avec une clé privée permet de prouver qu'on en est l'auteur, ayant été et étant en possession de la clé. Une autre personne ne peut pas signer un message à ma place sans connaître ma clé privée. Le signataire constitue alors une identité. Cette application cryptographique est largement utilisée maintenant. Il n'est dès lors plus nécessaire d'avoir recours à un tiers de confiance pour organiser la sécurisation de l'intégrité de vos messages.</p>
<p>En 2008, Daniel J. Bernstein et son équipe proposent <a href="https://link.springer.com/chapter/10.1007/978-3-540-85053-3_16" target="_blank" rel="noopener noreferrer">l'utilisation de la courbe elliptique cryptographique d'Edward<ExternalLinkIcon/></a> qui sera suivie d'une librairie cryptographique à haute vitesse. Les avantages de la cryptographie par courbe elliptique par rapport aux autres méthodes cryptographiques, telles que RSA, sont une sécurité équivalente avec des clés plus courtes et une efficacité computationnelle accrue. Par exemple, une clé ECC de 256 bits offre un niveau de sécurité similaire à une clé RSA de 3072 bits.</p>
<p>Ainsi, en signant avec sa clé publique, une identité peut être vérifiée comme étant celle d'un signataire. Une librairie logicielle, démontrant ces travaux mathématiques, à travers des fonctions pratiques est publiée : &quot;Not a Cryptographic Library&quot; (NaCl), délivre une librairie logicielle de référence (<a href="https://link.springer.com/chapter/10.1007/978-3-642-33481-8_9" target="_blank" rel="noopener noreferrer">Daniel J. Bernstein 2012<ExternalLinkIcon/></a>)</p>
<p>Il est possible d'exporter et d'importer sa clé privée sous forme de phrase mnémonique.</p>
<p>En 2013, Frank Denis publie  <a href="http://labs.opendns.com/2013/03/06/announcing-sodium-a-new-cryptographiclibrary/" target="_blank" rel="noopener noreferrer">&quot;Introducing Sodium, a new cryptographic library, 2013.&quot;<ExternalLinkIcon/></a> et LibSodium, une librairie cryptographique portable moderne basée reprenant les interfaces de NaCl.</p>
<p>Dominic Tar s'appuiera sur ces travaux pour proposer <a href="https://dominictarr.github.io/secret-handshake-paper/shs.pdf" target="_blank" rel="noopener noreferrer">Secret Handshake Protocol<ExternalLinkIcon/></a>(SHS connu aussi sous le nom de SecretStack).</p>
<p>La clé publique du serveur autorise l'accès sécurisé à des fonctions à distance. Dominic Tar publie une implémentation de référence à un problème pas simple, un client-serveur d'exécution de procédure à distance. On peut la définir comme une construction logicielle qui rend simple l'exécution de commande à distance en utilisant une authentification par clé publique, la clé publique ayant été autorisé pour certaines capacités (lire les messages, poster un nouveau message, par exemple).</p>
<p>Additionnellement, il propose le protocole Secure ScuttleBut (SSB). SSB se définit comme une boîte à outils subjective pour construire un réseau social. La librairie propose tous les verbes pour construire un réseau social (suivre, bloquer, se présenter, inviter, ...).</p>
<p>Pour une description rapide du protocole Secure Scutllebut, SSB voir <a href="https://web.archive.org/web/20190716152343/https://infourminutes.co/whitepaper/scuttlebutt" target="_blank" rel="noopener noreferrer">le livre blanc en 4mn<ExternalLinkIcon/></a>, et <a href="https://ssbc.github.io/scuttlebutt-protocol-guide/" target="_blank" rel="noopener noreferrer">le guide du protocole SSB<ExternalLinkIcon/></a>.</p>
<h2 id="observations" tabindex="-1"><a class="header-anchor" href="#observations" aria-hidden="true">#</a> Observations</h2>
<p>Hélas, malgré toutes ses capacités nous n'avons pas encore trouvé d'application populaire du protocole SSB. Il n'y a pas de réseau social basé sur le protocole SSB ayant un nombre d'utilisateurs significatifs. Est-ce à cause de l'absence de mise en œuvre suffisamment complète ?</p>
<ul>
<li>
<p>Mastodon est actuellement populaire, mais non sans rencontrer de problèmes.<br>
Il ne propose pas une vraiment une identité décentralisée, celle-ci étant portée in-fine par l'instance.<br>
Il ne propose pas non plus d'interface utilisateur optimisée pour mobile, et hors connexion.<br>
<a href="https://www.w3.org/TR/activitypub/" target="_blank" rel="noopener noreferrer">Le protocole ActivityPub<ExternalLinkIcon/></a> <a href="https://mastodon.social/@atomicpoet/110007834836602630" target="_blank" rel="noopener noreferrer">ne facilite pas l'uniformité<ExternalLinkIcon/></a> et les applications ne se fédèrent pas complètements toutes entre elles. Mastodon n'est pas optimisé d'abord sur appareils mobiles.</p>
</li>
<li>
<p><a href="https://github.com/nostr-protocol/nostr" target="_blank" rel="noopener noreferrer">Le protocole Nostr<ExternalLinkIcon/></a> a aussi une approche similaire à la nôtre, se basant sur SBB mais <a href="https://github.com/nostr-protocol/nostr#the-problem-with-ssb-secure-scuttlebutt" target="_blank" rel="noopener noreferrer">en décidant de changer<ExternalLinkIcon/></a>, le format de message, et de ne pas reprendre SHS tel quel. Nostr ne propose pas, d'implémentation de référence, mais s'appuie sur un écosystème de clients et de serveur encore émergent.<br>
Nostr est différent de SSB semble se priver d'outils présents dans SSB, tels que les invitations, les attachements ou la chaine de message. Il ne propose pas de communication serveur à serveur, en conséquence les clients se connectent à plusieurs serveurs. C'est une propriété essentielle pour la résistance à la censure du réseau. Matt Lorentz a écrit <a href="https://mattlorentz.com/weblog/2023/01/18/nostr-v-ssb.html" target="_blank" rel="noopener noreferrer">un comparatif entre Nostr et SSB<ExternalLinkIcon/></a>.</p>
</li>
<li>
<p><a href="https://atproto.com/" target="_blank" rel="noopener noreferrer">Le protocole AT<ExternalLinkIcon/></a>, propose une couche de communication neuve. Un lexicon est proposé pour les fonctions à distance et des services basés sur http. La disponibilité du produit est prévue prochainement. Si le protocole AT semble prometteur en termes de performance, par exemple quand il utilisera <a href="https://en.wikipedia.org/wiki/QUIC" target="_blank" rel="noopener noreferrer">QUIC<ExternalLinkIcon/></a>, il n'est toutefois encore seulement en conception.</p>
</li>
</ul>
<p>Les deux solutions n'abordent pas les questions des &quot;attachements&quot;, pièces jointes comme les images, vidéos et autres fichiers.</p>
<h2 id="problematique" tabindex="-1"><a class="header-anchor" href="#problematique" aria-hidden="true">#</a> Problématique</h2>
<p>Micro-blogger implique la publication d'information sur Internet publique. Les messages publics pourront être copiés. Ils sont par conséquent ineffaçables. Il conviendra toujours à l'avenir de continuer à éduquer en ce sens. L'existence même de ce type de réseau est questionnable. Il faut se demander pourquoi l'on se connecte a un tel réseau. Ainsi ne pas pouvoir supprimer ou éditer ses messages dans le protocole SSB actuel est problématique.</p>
<p>Dans le protocole SSB les serveurs pub n'aurait pas été assez considérés comme nécessaire et craint en raison des risques de centralisation. Il y aurait eu un mantra qui veuille que le réseau soit pair à pair, de sorte que la topologie du réseau soit égale à la topologie des connexions sociales.</p>
<p>Pourtant, des serveurs fédérés, ayant autant d'instances de donnée relationnelle à grande capacité (telle que Postgres), sont encore logiquement nécessaires si on envisage des stockages très importants et des flux de taille planétaire.</p>
<p>Certains problèmes ne sont pas complètement, ou pas encore résolus :</p>
<ul>
<li>la découverte des serveurs pub pairs sur Internet,</li>
<li>la rotation des clés ou la récupération des mots de passe,</li>
<li>la netiquette,</li>
</ul>
<h2 id="methodologie" tabindex="-1"><a class="header-anchor" href="#methodologie" aria-hidden="true">#</a> Méthodologie</h2>
<p>En partant de SSB nous proposons la mise en œuvre:</p>
<ul>
<li>d'un client mobile, en effet, <a href="https://www.broadbandsearch.net/blog/mobile-desktop-internet-usage-statistics" target="_blank" rel="noopener noreferrer">86% de l'utilisation de Twitter est sur téléphone<ExternalLinkIcon/></a>.</li>
<li>d'un serveur de référence. Afin d'être capable de gérer un grand nombre de message nous proposons de les appuyer sur une base de donnée relationnelle.</li>
<li>Afin de transmettre les informations rapidement, nous proposons que le client utilise plusieurs serveurs relais. Avec la topologie de réseau suivante:</li>
</ul>
<Mermaid id="mermaid-159" code="eJxLy8kvT85ILCpRCHHiUgCC5JzM1LwSBV1dO4Wi1JzESrAgmAUWg0iDBR1zMpNTFdQUnPKTEMoNMaRs8MjBpYzwaDPiAgASPC0d"></Mermaid><Mermaid id="mermaid-160" code="eJxLy8kvT85ILCpRCHHiUgCCkPxcBTUFv8zkbCDllZ8KJB1zMpNBtFN+EpAsSs1JrDSEMYwUdHXtIExjLgBnBxYC"></Mermaid><p>Sans préjuger de règles de fonctionnement d'un logiciel qui reste aujourd'hui à définir, voici pour exemple : <em>Lors de l'utilisation d'une invitation le serveur relais doit afficher un message d'avertissement contenant les points suivants ...</em><br>
Dans certaines conditions les règles de fonctionnement du serveur relais serait alors opposables (devant la loi).</p>
<h3 id="scuttlebut-functionnal-rules-sfr" tabindex="-1"><a class="header-anchor" href="#scuttlebut-functionnal-rules-sfr" aria-hidden="true">#</a> Scuttlebut functionnal rules (SFR)</h3>
<p>L'idée est de définir les règles de communication par-dessus le protocole entre les clients et les serveurs.<br>
Par exemple si l'on souhaite utiliser le serveur comme sauvegarde et pivot de réplication entre plusieurs machines on peut réaliser le besoin avec une règle fonctionnelle.</p>
<p><em>Exemple de règle fonctionnelle, le comportement du client et du serveur doit suivre la séquence suivante</em> :</p>
<Mermaid id="mermaid-173" code="eJyNkL1Ow0AQhPs8xVABkhEioaKIhEQBDQU8weY8iQ323XE/QXl7NmcrjkiKXHXanZn9diN/Mq3hSyubIP0M+ryE1JrWi0147lrDk+oHO9lptXSBu+VyKD3hkyYwvYqtYyPfxEO1UF1pqm4vLJ5/wkDMq0cVvrtEuC3DIKvG1OydhXHW0iTcY8W1U4vPq66NzVkO31EiEWlr9EQniTHpL0bZMOINvQJZl9DIljggHhPeNNQhe7bFZFwH1yMU7c5l1M5ejxlXt1PKFHI5wLBDARh3OMyfH/u+sub8Bj3U7A8NeZCV"></Mermaid><p>Il y a d'autres règles qui peuvent être utiles. La méthode consiste à définir ses règles en utilisant une organisation qui entoure l'émergences de SFR.</p>
<h3 id="scuttlebut-protocol-improvment-proposal-spip" tabindex="-1"><a class="header-anchor" href="#scuttlebut-protocol-improvment-proposal-spip" aria-hidden="true">#</a> Scuttlebut Protocol Improvment Proposal (SPIP)</h3>
<p>Puisque la suppression des messages est en Europe une obligation légale, nous proposons d'augmenter le protocole de la possibilité de supprimer son compte.</p>
<ul>
<li><code v-pre>feed-delete</code> : le serveur efface toutes les données</li>
</ul>
<p>Aussi, le protocole SSB pourrait être augmenté de fonctions nécessaires pour l'utilisateur :</p>
<ul>
<li><code v-pre>post-delete</code> : le contenu du message cité sera supprimé du relais,</li>
<li><code v-pre>post-edit</code> : le serveur va effacer et rediriger ses réponses vers le nouveau message lors des prochaines interrogations,</li>
<li><code v-pre>feed-rotate</code> : pour déplacer, changer de clés (un message va être posté les clients vont déplacer leur liste de suivis).</li>
</ul>
<h2 id="decentralized-micro-blogging-association" tabindex="-1"><a class="header-anchor" href="#decentralized-micro-blogging-association" aria-hidden="true">#</a> Decentralized Micro Blogging Association</h2>
<p>Classiquement, Les BIPs sont conçues pour permettre à la communauté Bitcoin de se réunir et de discuter des améliorations potentielles du protocole, et de fournir un processus structuré pour la mise en œuvre de ces améliorations. Les BIPS sont accéptées par consensus.</p>
<p>Nous proposons le même processus pour l'organisation des développements, c'est-à-dire que les mise en œuvre soient intégrées dans le code source suivant le processus classique de demande de fusion avec approbation par les pairs.</p>
<p>Idéalement ce fonctionnement serait démocratique, construit sur les échanges, encadrés par des règles chargées de diriger les entrées et les sorties d'échanges et de changements :<br>
Les utilisateurs définissent les règles, les règles deviennent le logiciel et le logiciel un réseau.</p>
<p>Nous proposons de créer un point de rencontre, une association pour le micro-blogging décentralisé (MDBA). Idéalement MDBA devrait aussi organiser l'émergence et aussi l'assurance qualité du logiciel de référence. Une des hypothèses pour expliquer les faiblesses des réseaux sociaux existants, est qu'une entité ne devrait pas dicter seule les règles du réseau.</p>
<p>Notre méthodologie se base donc sur trois outils :</p>
<ul>
<li>clients mobiles optimisées pour la consommation de batterie, natifs.</li>
<li>Serveurs décentralisés s'appuyant sur une base de donnée relationnelle à grande capacité (telle que Postgres),</li>
<li>une association à but non lucratif qui organise le vote des règles de fonctionnement du logiciel, et donc du réseau, et délivre un engagement sur les spécifications du code sous forme de SPIP et de SFR, délivré dans une application de référence.</li>
</ul>
<h2 id="resistance-au-pourriel-harcelement-en-ligne-et-toxicite" tabindex="-1"><a class="header-anchor" href="#resistance-au-pourriel-harcelement-en-ligne-et-toxicite" aria-hidden="true">#</a> Résistance au pourriel, harcèlement en ligne et toxicité.</h2>
<p>Chaque utilisateur choisi qui il suit, reçoit dans son fil, les messages des clients suivis. Le pourriel ne peut pas arriver dans la boite aux lettres sauf si l'utilisateur à expressément demander de suivre.</p>
<Mermaid id="mermaid-251" code="eJyNkE0OgjAQhfeeYpawMNxAE4O6c6ULrS4aGJRYWjODIcR6dyktaGJi7KI/0++9NxnoVqFMk10k1bBNJ66wFjek0uRlJpVqIbtgdoXCEGhsoEJmeUY+wXQ6gxWVqHNOF71wfIkoXEGVXMee9cziURlCIFSy5fnT/dg9sgWfvRRJyAsGPTimJiG2Z1NvNZDeDGzr3Ja/CG1s6GYlomANXBvqzvj01WboctOpDl7lbQhlbmHHSH31EOVGY/zHJOxdF0Z1Y/9Qu4tI3H4M0IC8Zzx5ASImhY8="></Mermaid><p>Ce mécanisme simple, exprimable sous forme de SFR, devraient rendre les robots simples largement inutiles, pourquoi poster si personne ne les suit ?</p>
<h2 id="identites-decentralisees" tabindex="-1"><a class="header-anchor" href="#identites-decentralisees" aria-hidden="true">#</a> Identités décentralisées</h2>
<p>Il est pratique dans un réseau social de disposer d'un surnom lisible.</p>
<Mermaid id="mermaid-261" code="eJxtjTEOwjAMRXdO8TcmOECHUhB3QIxOcMBSEos4FertSYnE1MWyn973N37PnD1fhZ6F0g4gX7Xgou6/n6N4bldjwGEcOxhwe1GFGBadC+TBuUqVwAWnJv+cpq9+Cw6QujdMtOI+AyWJy9Frwsbzu87wlEHRFEFj1A8SozVicuomMxcoW49/AY59PzY="></Mermaid><p>La vérification du surnom est assurée en faisant une demande au serveur associé au pseudonyme pour vérification.</p>
<Mermaid id="mermaid-265" code="eJxdjUsOgkAQBfecoi8wPWhCopNAWGg8gG5cNjOtjs5PwBBu7wcXhM3bVKVex88XB807S9eWfAbQxEZQSiCqCshZzRfy1o2oo1dw2J/g1vdJSblgEgd2TjxCHMLEpLEG710Mn+hCBvGt/58U1D887UwqoT6nIyKWyGZdFKut2uR5rlp2NKKNkL0BZZk/KA=="></Mermaid><p>Ce système est <a href="https://w3c-ccg.github.io/did-method-web/" target="_blank" rel="noopener noreferrer">normalisé par le W3C<ExternalLinkIcon/></a> et connu sous le nom de web-did. <a href="https://en.wikipedia.org/wiki/Decentralized_identifier" target="_blank" rel="noopener noreferrer">définition<ExternalLinkIcon/></a></p>
<Mermaid id="mermaid-269" code="eJwrTi0sTc1LTnXJTEwvSszlUlBIyk/STSwoUNC1s1MoLk5KS8wr1kvOz7VSKChNyskszlBIy8/JyS9XcIgsCNbT07PVS00xMjU1tARqRVIO1l6UmpOYqZeZb4VTDwCYqShe"></Mermaid><p>Si un utilisateur est membre d'une institution, il peut poser le lien sur son site, cela semble une très bonne solution pour une vérification de pseudonyme.</p>
<h2 id="retrouver-des-fils" tabindex="-1"><a class="header-anchor" href="#retrouver-des-fils" aria-hidden="true">#</a> Retrouver des fils</h2>
<p>Disposer d'un réseau social où l'on ne reçoit que le message des personnes que l'on suit, est une bonne proposition pour limiter les pourriels ou les harcèlements. Mais avec seulement cela comment découvrir de nouveaux fils ?</p>
<ul>
<li>Il a déjà été proposé d'augmenter le protocole SSB du verbe <code v-pre>search</code>. Le serveur Postgres offre une recherche sur les textes complets parmi les plus puissantes du marché.</li>
<li>Il a déjà été proposé d'utiliser des liens pour citer et ouvrir des fils ou des messages (ssb-uri) comme des liens hypertextes, dès lors qu'ils commencent par ssb://. Ceci permet une découverte du réseau par l'intérieur et par l'extérieur. Un lien vers un fil ou un lien vers un message ouvre une application compatible.</li>
<li>Les réponses aux messages permettent de connaitre de nouveaux contacts. Sans préjuger des règles qui seront mise en œuvre, voici, un exemple :
<ul>
<li><em>les fils de réponses sont alimentés par tous les messages connus du relais lors de l'interrogation du fil du message&quot; - &quot;il est possible de bloquer&quot;</em></li>
<li><em>le serveur comprend les réponses bloquées par l'auteur comme bloquées pour tous, par le lecteur comme bloqué par lui</em></li>
</ul>
</li>
</ul>
<p>La toxicité facilement éliminable avec un mécanisme de blocage par serveur relais entier, probablement pour les cas relevant du cadre légal...<br>
L'auteur perdrait alors toute sa réputation, une pénalité sévère.<br>
À l'inverse si le relais pratique trop la censure, selon les utilisateurs, il sera, quitté, du fait de sa mauvaise réputation.<br>
Brefs des équilibres de modérations devraient se former comme autant de sphères, néanmoins communicantes.</p>
<p>L'utilisation de dispositif de limitations des appels, devrait constituer une partie intégrante du serveur relais pour la protection des attaques de type déni de service.</p>
<h2 id="gestion-de-l-espace-de-stockage" tabindex="-1"><a class="header-anchor" href="#gestion-de-l-espace-de-stockage" aria-hidden="true">#</a> Gestion de l'espace de stockage</h2>
<p>On peut distinguer au moins deux types de messages :</p>
<ul>
<li>les messages que l'on souhaite conserver pour toujours, ce sont vos messages essentiellement.</li>
<li>Les messages que l'on est prêt à effacer.</li>
</ul>
<p>En séparant ces deux classes de messages il est possible d'en effacer une partie sur la base, par exemple de leur dernier accès et de la taille de stockage que l'on souhaite allouer. Il est toujours possible de naviguer vers les profils et de re-récupérer des messages effacés. Idéalement l'application client pourrait alors marquer comme à conserver, ceci pour des messages sélectionnés en particulier. Inutile de dire que les messages des personnes que l'on ne suit plus peuvent aussi être supprimés. Pour optimiser encore on pourrait appliquer une politique de rétention différente deux projets ne justifient pas, pourquoi ils ne reprennent pas le protocole SSB. (lien description protocole SSB).es selon les types de messages (votes, à propos, ...).</p>
<p>Des serveurs relais dédiés pourrait faire office de stockage perenne à froid. Dans tous les cas suivant le flux proposé plus haut les serveurs relais sert de sauvegarde.</p>
<h2 id="decouverte-des-pairs" tabindex="-1"><a class="header-anchor" href="#decouverte-des-pairs" aria-hidden="true">#</a> Découverte des pairs</h2>
<p>Et si tous les serveurs relais pouvait se voir et se &quot;serrer la main&quot; ?<br>
L'ajout d'une mise en œuvre, dans le serveur pub, d'un service de découverte par &quot;Distributed Hash Table&quot; (<a href="https://en.wikipedia.org/wiki/Distributed_hash_table" target="_blank" rel="noopener noreferrer">définition<ExternalLinkIcon/></a>, <a href="https://www.npmjs.com/package/hyperswarm" target="_blank" rel="noopener noreferrer">exemple de mise en œuvre<ExternalLinkIcon/></a>) semble complètement pertinent.</p>
<ul>
<li>Invitation et suivi automatique à découverte des serveurs relais entre eux ?</li>
<li>Quelles règles pour l'utilisation de l'algorithme de diffusion épidémique ?</li>
<li>Si le réseau SSB est essentiellement basé sur le fait que les clients tirent les messages, ne faut-il pas introduire entre les serveurs relais un fonctionnement de type &quot;poussé&quot; pour optimiser les transmissions ? Quelles optimisations sont à faire ?</li>
</ul>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2>
<p>Après un troisième coup d'œil re-mettre en marche SSB, apparait comme une piste de recherche intéressante. Avec quelques améliorations, il est possible de mettre le réseau en conformité légale tout en ayant une décentralisation forte.<br>
Les problématiques de la résistance à la censure, l'utilisation de netiquette sécurisée, de confiance, sans tiers, ou de rotation des clés peuvent trouver des réponses.<br>
Il en est de même pour la suppression et la modification des messages en ligne.</p>
<p>Aujourd'hui la limites de 240 caractères ou de formatage est questionnable. Le langage de balisage Markdown utilisé pour réaliser ce document et ce site est plébiscité.</p>
<p>L'engouement autour plateforme sociale orientées photographies montre l'intérêt du public pour des visuels attrayants, voire des velléités artistiques. Le protocole prévoit déjà d'embarquer de l'émoji simplement, des liens hypertextes, des citations, des images animées et des courtes vidéos. La qualité de l'expérience devrait être cruciale.</p>
<p>Les biologistes, les physiciens, les écologistes et d'autres scientifiques utilisent le terme &quot;émergent&quot; pour décrire une autoorganisation, des comportements communs qui apparaissent quand une grande collection de chose agissent comme une seule. La combinaison d'atomes sans vie forme les cellules vivantes, les molécules d'eau créent des vagues. L'expérimentation continue ici :</p>
<ul>
<li><a href="http://www.dmba.info" target="_blank" rel="noopener noreferrer">Decentralised Micro Blogging Association<ExternalLinkIcon/></a></li>
<li><a href="http://github.com/ssb2dmba/delog" target="_blank" rel="noopener noreferrer">Delog une application SSB Android<ExternalLinkIcon/></a></li>
<li><a href="http://github.com/ssb2dmba/ssb-postgres" target="_blank" rel="noopener noreferrer">ssb-postgres un module Postgres remplaçant ssb-db<ExternalLinkIcon/></a></li>
<li><a href="http://github.com/ssb2dmba/ssb-postgres" target="_blank" rel="noopener noreferrer">ssb-relay un serveur SSB qui met en œuvre les SPIPs et les SFR<ExternalLinkIcon/></a></li>
</ul>
</div></template>


