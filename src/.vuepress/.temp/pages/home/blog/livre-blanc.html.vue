<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Dans la transmission instantanée des nouvelles par Internet, ce que l'ont appelle les réseaux sociaux, s'appuie essentiellement sur des entreprises commerciales.
Celle-ci faisant l'office d'entremetteur pour la transmission de l'information. Bien que le système fonctionne bien dans la plupart des cas, il souffre des faiblesses dues à l'utilisation d'un tiers de confiance, pour l'identification et, la modération.</p>
<p>Afin de garantir votre identité et la modération du service contre les contenus illégaux ou allant contre les intêret de l'organisateur du réseau social, il vous est demandé vos informations personnelles. Parfois plus que nécessaire pour assurer le fonctionnnement du service.</p>
<p>Souvent géographiquement localisés, parfois sous contrôle gouvernemental, les réseaux sociaux tels qu'ils existent ne peuvent pas éviter une modération active.</p>
<p>Ceci à un coût. Les frais du services sont rémunérés par la publicité et la revente des informations personnelles.</p>
<p>Cependant nous pensons que les réseaux sociaux peuvent apporter des bénéfices humains, pour chacun de mieux connaitre l'autre, pour trouver de l'information, voire même construire une intelligence collective. Il existe une grande quantité de littérature étudiants les effets négatifs des réseaux sociaux sur le comportement.</p>
<p>Globalement les réseaux sociaux peuvent être améliorés.</p>
<p>Des travaux de recherche de solution alternatives existent. Tandis que d'autres groupes travaillaient sur la problématique de la messagerie instantanée, tel que le groupe à l'initiative de Matrix, assurant la plus faible consommation énergétique possible tout en garantissant un service sécurisé, par une identité décentralisée, nous nous concentrons sur la problématique des réseaux d'informations instantanées de types à rumeur et colportages, par lesquels transitent des nouvelles éditées le plus souvent depuis un appareil mobile.
En partant d'art antérieur nous proposons de continuer le chemin.</p>
<h2 id="art-anterieur" tabindex="-1"><a class="header-anchor" href="#art-anterieur" aria-hidden="true">#</a> Art Antérieur</h2>
<p>L'idée d'une clé privé correspondant à une clé publique, Diffie &amp; Hellman (1976), permet de prouver avoir été l'auteur d'un message, ayant été et étant en possession de la clé privé.
En signifiant sa clé publique une identité peut être vérifiée comme étant celle d'un signifiant.<br>
Il n'est dès lors plus nécessaire à un tiers de confiance pour organiser la sécurisation de l'intégrité de vos messages.
On peut resumer la clé publique et la clé privé a deux grands nombres. Si l'on met sur un axe des clé publiques en abscysses et les clé privées en ordonnée, la courbe representant l'ensemble des points est appellée courbe elliptique cryptographique. Concue pour être  moins consommatrice en énérgie,  Bernstein (2011) et son équipe propose l'utilisation de la courbe eliptique cryptographique d'Edwards (2007).
En publiant &quot;Not A Cryptographic Library&quot; (NACL), ils délivrent une implentation de référence des outils cryptographiques, en 2017, Franck Denis, publie LibSodium, une librairie cryptographique portable moderne basée sur les courbes d'Edwards et Dominic Tar s'appuyerra dessus pour proposer:</p>
<ul>
<li>Secret Handshake Protocol [<a href="https://dominictarr.github.io/secret-handshake-paper/shs.pdf" target="_blank" rel="noopener noreferrer">https://dominictarr.github.io/secret-handshake-paper/shs.pdf<ExternalLinkIcon/></a>], un systeme d'execution de fonction à distance sécurisé,</li>
<li>le protocole Secure ScuttleBut , [<a href="https://ssbc.github.io/scuttlebutt-protocol-guide/" target="_blank" rel="noopener noreferrer">https://ssbc.github.io/scuttlebutt-protocol-guide/<ExternalLinkIcon/></a>] (ci-après désigné ssb)</li>
</ul>
<p>Ssb se définie comme une boite à outils subjective pour construire un réseau social.
La librairie propose tous les verbes pour construire un réseau social (suivre, bloquer, se présenter, inviter, ...).</p>
<p>Helas, malgré toutes ses capacités nous  n'avons pas encore trouvé d'implémentation populaire du protocole SSB. Il n'y a pas de réseau social basé sur le protocole ssb ayant un nombre d'utilisateurs significatifs. De fait beaucoup de messages rapportent la même chose sur les forums, nous pensons que c'est parce qu'il n'y a pas encore eu de mise en œuvre suffisament complête, signifiée. Des tentatives existent mais:</p>
<ul>
<li>l'expérience utilisateur sur les appareils mobile est pauvre rapportent les utilisateurs,</li>
<li>les mises en oeuvres ne sont optimisé pour optimiser la consommation énérgetique appareils mobiles, rencontrent des problemes de débordement de stockage et des temps attentes de création d'index.</li>
<li>certaines questions ne sont pas completements adréssées, telles que la découvertes des pairs sur Internet,</li>
</ul>
<p>Notre travail propose donc plusieurs compléments implémmentations :</p>
<ul>
<li>clients mobiles optimisées pour la consommation de batterie, natifs.</li>
<li>serveur décentralisé s'appuyant sur une base de donnée relationnelle à grande capacité (telle que Postgres),</li>
<li>client pour ordinateurs de bureau optimisées pour l'édition et l'automatisation
et des compléments au protocole, de parti-pris, de décisions, comme autant d'hypothèses.</li>
</ul>
<h2 id="resistance-au-spam-harcelement-en-ligne-fausses-informations-et-toxicite" tabindex="-1"><a class="header-anchor" href="#resistance-au-spam-harcelement-en-ligne-fausses-informations-et-toxicite" aria-hidden="true">#</a> Resistance au spam, harcèlement en ligne, fausses informations et toxicité</h2>
<ul>
<li>chaque utilisateur choisi qui il suit, recoit dans son fil, les messages des clients suivis.</li>
<li>les fils de réponses sont alimentés par tous les messages connus, il est possible de bloquer.</li>
<li>le serveur comprends les reponses bloquées par l'auteur comme bloquées pour tous</li>
<li>le serveur postgresql offre une recherche sur les textes complets</li>
<li>les serveurs et les clients sont capable de fonctionneer dans le réseau Tor et comme passerelle Tor/Internet</li>
<li>les serveurs ssb-pub sont équipées de limitateurs de requetes (api-rate, par clé par id connection Tor et Ip)</li>
</ul>
<h2 id="engagement-de-legal-du-service-heberge-droit-a-l-oubli-sauvegarde-des-messages-rotation-des-secrets-recuperation-des-secrets" tabindex="-1"><a class="header-anchor" href="#engagement-de-legal-du-service-heberge-droit-a-l-oubli-sauvegarde-des-messages-rotation-des-secrets-recuperation-des-secrets" aria-hidden="true">#</a> Engagement de légal du service hébergé, droit à l'oubli, sauvegarde des messages, rotation des secrets, récupération des secrets</h2>
<p>Rejoindre un serveur implique d'accepter ses conditions d'utilisations, librement consenties, et de passer une protections contre les robots
Si le serveur ne se comporte pas correctement, celà pourrait être dévoilé et il aura mauvaise réputation.
Le protocole ssb est augmenté des fontions suivantes:</p>
<ul>
<li>feed-delete : le serveur efface toutes les données</li>
<li>post-delete : le serveur va blanchie le post, permettant de conserver la chaine et signaler que le message a été supprimé</li>
<li>post-edit: le serveur va remplacer et effectuer l'opération map-reduce lors des prochaines interrogations</li>
<li>id-delete: le serveur va effacer l'ensebme des données du fils</li>
<li>feed-tombstone: pour deplacer changer de clés (un message va etre posté les clients vont deplacer leur liste de suivis)</li>
</ul>
<p>Un client qui a éffacé ses données pourra les récuperer en se reconnectant au dernier serveur-pub.
Une phrase mnémonique permet de rétablir une clé privé.</p>
<h2 id="decouvertes-des-pairs" tabindex="-1"><a class="header-anchor" href="#decouvertes-des-pairs" aria-hidden="true">#</a> Decouvertes des pairs</h2>
<p>L'ajout d'une misen en oeuvre du réseau DAT dans le serveur pub.
Invitation et suivi automatique à decouverte des serveur-pub entre eux.
Utilisation de l'implementation originale ssb-ebt (extended-broadcast-tree) dans ce contexte
En mode serveur à serveur, le relay du suiveur, suit le suivi lors de connection régulière en utilisant l'algorythme EBT, optimisé par la reference suivi-serveur relais.</p>
<p>&quot;info&quot; est un client léger Android natif et moderne optimisé pour sa consommation énergétique.</p>
<p>&quot;ssb-relay&quot; est un serveur de réplication performant basé sur la suite logicielle ssb au-dessus d'une base de donnée relationnelle à haute capacité.
Additionnellement doté d'un service de découverte des autres pairs sur le réseau Internet et Tor et implémentants les règles de gestion dictée par le consensus inscrit dans le code.</p>
<p>&quot;European Association for Micro Blogging&quot; est une association, chargée d'organiser la consitution du réseau, des règles de gestion dictée par le consensus inscrit dans le code.</p>
</div></template>


