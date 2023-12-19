<template><div><p>The message flow specification describes the flow of messages.</p>
<ul>
<li>Message flow essentially work with the <code v-pre>createHistoryStream</code> and <code v-pre>publish</code> SSB <a href="https://ssbc.github.io/scuttlebutt-protocol-guide/#createHistoryStream" target="_blank" rel="noopener noreferrer">RPC method described here<ExternalLinkIcon/></a>.</li>
</ul>
<Mermaid id="mermaid-10" code="eJyVUs1OwzAMvu8pfAPENomf0w6TECDtxIE9APJSd4uWJiVxN/XtcZJ2f0xF5NIktr+/JtB3Q1bRm8a1x2oEslCx8/BitKJ0rtGzVrpGy/BJBlu5TVWYzOd5N4O910yAtgAqNEPhseRwrVFbJm/RmBbqZmV02EBFIeA6kn04AXE76ujHmW8GrCsCdvmbIZWzlhTHW38p6r6fW5LyxAuRFTa4JXiYPklfKsIkNXaqzho9weP0eTSgJzYagqoxrGvZFLSTckj+V6i2TQ1NEI0YoqtjBt24cCHTQgcJul2ynKrbQKYcg8HAX/1PuTvT2kvt0oKQ5sCVuXATwO3tIcsB8c4ewsvKuhlBIFscOY+U1/RixvwluDN74vZCsC4lpnZI4OuG1BZKeYT9qJisycWkE63UjHF7gTDO1fAuEG30xPJ046OLK0FO5v9PPK40JR7+jPyENGY3+gGj6BqM"></Mermaid><ul>
<li>In order to prevent a race condition:
<ul>
<li>Server must wait for clients owns <code v-pre>createHistoryStream</code> response end to emit his own.</li>
<li>Client may finalize publication at a time when the server is synced.</li>
</ul>
</li>
<li>Both client en relay must not check for sequence continuity. This is important for several use cases such as message delete.</li>
</ul>
</div></template>


