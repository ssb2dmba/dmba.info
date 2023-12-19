import {
  flowRendererV2,
  flowStyles
} from "./chunk-HAZ7HSNU.js";
import {
  flowDb,
  parser$1
} from "./chunk-BOL7V6CC.js";
import "./chunk-IRRUZQYL.js";
import "./chunk-SHAXHELD.js";
import "./chunk-KDWYYPCL.js";
import "./chunk-ET6HFVE6.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-RX3ILTS4.js";
import {
  __toESM
} from "./chunk-HM4MQYWN.js";

// node_modules/mermaid/dist/flowDiagram-v2-855bc5b3.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-855bc5b3-KHFLAJXO.js.map
