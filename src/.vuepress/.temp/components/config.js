import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/@vueuse/core/index.mjs";
import Badge from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
