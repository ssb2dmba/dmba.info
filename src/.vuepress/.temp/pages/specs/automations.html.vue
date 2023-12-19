<template><div><p>## Automation</p>
<h3 id="chaque-utilisateur-choisi-qui-il-suit-recoit-dans-son-fil-les-messages-des-clients-suivis" tabindex="-1"><a class="header-anchor" href="#chaque-utilisateur-choisi-qui-il-suit-recoit-dans-son-fil-les-messages-des-clients-suivis" aria-hidden="true">#</a> chaque utilisateur choisi qui il suit, recoit dans son fil, les messages des clients suivis.</h3>
<ul>
<li>
<p>A connection le client appelle là commande <code v-pre>createHistoryStream</code> sur le serveur relais, à partir de l'index n, qui lui est connu pour toutes les identitées pour lesquelles il à signé un message de type <code v-pre>follow true</code> non suivi d'un message <code v-pre>follow false</code></p>
</li>
<li>
<p>Le client défini combiens il convient d'archiver de données dans le temps. Une adressee peut etre accrochée de sorte à ne pas être archivée dans le temps. Il peut y avoir un paramètre par date ou par taille pour les messages et pour les attachements. A date, ou à taille le client automatise la suppressions des messages qui ne sont pas les siens et qui ne sont pas marqués comme accrochés.</p>
</li>
<li>
<p>exeption est faite pour les reponses aux messages pour lesquelles le suiveur du client du message racine est signifié.</p>
</li>
<li>
<p>Protection contre les incivilitées, le spam,
Si les fils de réponses sont alimentés par tous les messages connus, il est possible de bloquer.</p>
</li>
<li>
<p>le serveur comprends les reponses bloquées par l'auteur comme bloquées pour tous</p>
</li>
<li>
<p>le serveur postgresql offre une recherche sur les textes complets</p>
</li>
<li>
<p>les serveurs et les clients sont capable de fonctionneer dans le réseau Tor et comme passerelle Tor/Internet</p>
</li>
<li>
<p>les serveurs ssb-pub sont équipées de limitateurs de requetes (api-rate, par clé par id connection Tor et Ip)</p>
</li>
</ul>
</div></template>


