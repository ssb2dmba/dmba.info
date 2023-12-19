import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DMBA",
      description: "Decentralized Micro Blogging Association",
    },
    "/fr/": {
      lang: "fr-FR",
      title: "Français",
      description: "Decentralized Micro Blogging Association",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
