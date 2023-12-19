import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import ECharts from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Playground from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/katex/dist/katex.min.css";
import "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("/home/eflorent/PROJECTS/ssb-service/dmba.info/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
