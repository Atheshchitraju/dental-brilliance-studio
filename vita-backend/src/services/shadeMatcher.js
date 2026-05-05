import { rgbToLab } from "../utils/lab.js";
import { deltaE } from "../utils/deltaE.js";

const VITA = {
  A1:{L:85,a:2,b:18}, A2:{L:80,a:3,b:20}, A3:{L:75,a:4,b:22},
  A3_5:{L:73,a:4,b:23}, A4:{L:70,a:5,b:24},

  B1:{L:88,a:1,b:15}, B2:{L:84,a:2,b:18}, B3:{L:80,a:3,b:20}, B4:{L:76,a:4,b:22},

  C1:{L:78,a:0,b:10}, C2:{L:74,a:0,b:9}, C3:{L:70,a:0,b:8}, C4:{L:66,a:0,b:7},

  D2:{L:82,a:2,b:12}, D3:{L:78,a:2,b:11}, D4:{L:74,a:3,b:10}
};

export function matchShade(rgb) {
  const lab = rgbToLab(rgb);

  let best = null;
  let min = Infinity;

  for (const key in VITA) {
    const diff = deltaE(lab, VITA[key]);

    if (diff < min) {
      min = diff;
      best = key.replace("_", ".");
    }
  }

  return {
    shade: best,
    confidence: min < 5 ? "high" : min < 10 ? "medium" : "low",
    notes: `ΔE difference: ${min.toFixed(2)}`
  };
}