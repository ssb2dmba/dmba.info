import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar( [
  { 
    text: "Decentralized Micro Blogging Association",
//   prefix: "/",
   children:[
      {
        text: "dmba",
        icon: "flower-tulip",
        prefix: "/about/",
        children: [ 
          { text: "contact", icon: "more", link: "contact" }    
        ],
      },
      {
        text: "projects",
        icon: "config",
        prefix: "/projects/",
        children: [
          { text: "delog", icon: "android", link: "delog" },     
          { text: "ssb-relay", icon: "any", link: "ssb-relay" }    
        ],
      },
      {
        text: "specs",
        icon: "config",
        prefix: "/specs/",
        children: [
          { text: "features", icon: "define", link: "features" },
          { text: "protocol", icon: "api", link: "protocol" }
        ],
      }, 
      {
        text: "governance",
        icon: "config",
        prefix: "/governance/",
        children: [
          { text: "statement", icon: "object", link: "statement" },
          { text: "organisation", icon: "change", link: "organisation" }
        ],
      },     
    ]  
  }
    ],
  );
