import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import axios from "axios";

export const Route = createFileRoute("/shade/")({
  component: ShadePage,
});

const shadeGroups = {
  A: {
    name: "A Group",
    subtitle: "Reddish Brown",
    shades: [
      {
        code: "A1",
        color: "#F5EDE1",
        description: "Light reddish brown",
        info: "Bright shade used for younger teeth. High value and low chroma with natural enamel look."
      },
      {
        code: "A2",
        color: "#EBE0D1",
        description: "Medium reddish brown",
        info: "Most common natural shade. Balanced brightness and warmth."
      },
      {
        code: "A3",
        color: "#D9C9B3",
        description: "Dark reddish brown",
        info: "Mid-range shade seen in adult dentition. Natural warm tone with moderate chroma."
      },
      {
        code: "A3.5",
        color: "#D1C0A5",
        description: "Very dark reddish brown",
        info: "Darker than A3 with increased chroma. Used for deeper dentin tones."
      },
      {
        code: "A4",
        color: "#C8B89A",
        description: "Darkest reddish brown",
        info: "Low value shade used for older teeth or darker restorations."
      },
    ],
  },
  B: {
    name: "B Group",
    subtitle: "Reddish Yellow",
    shades: [
      {
        code: "B1",
        color: "#F5EDDB",
        description: "Light reddish yellow",
        info: "Bright yellowish shade used in aesthetic restorations."
      },
      {
        code: "B2",
        color: "#EBE1CB",
        description: "Medium reddish yellow",
        info: "Balanced yellow tone commonly seen in natural teeth."
      },
      {
        code: "B3",
        color: "#DFD2B8",
        description: "Dark reddish yellow",
        info: "Deeper yellow tone for mature dentition."
      },
      {
        code: "B4",
        color: "#D3C5A9",
        description: "Very dark reddish yellow",
        info: "Dark yellow shade with higher chroma."
      },
    ],
  },
  C: {
    name: "C Group",
    subtitle: "Grey",
    shades: [
      {
        code: "C1",
        color: "#EDE9E1",
        description: "Light grey",
        info: "Low chroma shade with subtle grey tone."
      },
      {
        code: "C2",
        color: "#DFDBD1",
        description: "Medium grey",
        info: "Moderate grey tone found in natural enamel."
      },
      {
        code: "C3",
        color: "#CFCBBE",
        description: "Dark grey",
        info: "Darker grey shade used in aged teeth."
      },
      {
        code: "C4",
        color: "#C3BDAF",
        description: "Very dark grey",
        info: "Deep grey tone with low brightness."
      },
    ],
  },
  D: {
    name: "D Group",
    subtitle: "Reddish Grey",
    shades: [
      {
        code: "D2",
        color: "#E8DFD1",
        description: "Light reddish grey",
        info: "Light shade with mixed red-grey tone."
      },
      {
        code: "D3",
        color: "#D9CFBE",
        description: "Medium reddish grey",
        info: "Natural tone used for balanced restorations."
      },
      {
        code: "D4",
        color: "#CCC1AD",
        description: "Dark reddish grey",
        info: "Darker shade used in older dentition."
      },
    ],
  },
  BL: {
    name: "Bleach",
    subtitle: "Extra Light",
    shades: [
      {
        code: "BL1",
        color: "#FAF8F2",
        description: "Lightest bleach",
        info: "Highest brightness shade for bleaching cases."
      },
      {
        code: "BL2",
        color: "#F5F2EA",
        description: "Light bleach",
        info: "Slightly reduced brightness from BL1."
      },
      {
        code: "BL3",
        color: "#F0ECE2",
        description: "Medium bleach",
        info: "Balanced bleach tone."
      },
      {
        code: "BL4",
        color: "#EBE6DA",
        description: "Dark bleach",
        info: "Lowest brightness in bleach category."
      },
    ],
  },
};

function ShadePage() {
  const [selectedShade, setSelectedShade] = useState<any>(null);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (shade: any) => {
    setSelectedShade(shade.code);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedShade(null);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  function rgbToLab(r: number, g: number, b: number) {
    let rr = r / 255, gg = g / 255, bb = b / 255;
    rr = rr > 0.04045 ? Math.pow((rr + 0.055) / 1.055, 2.4) : rr / 12.92;
    gg = gg > 0.04045 ? Math.pow((gg + 0.055) / 1.055, 2.4) : gg / 12.92;
    bb = bb > 0.04045 ? Math.pow((bb + 0.055) / 1.055, 2.4) : bb / 12.92;
    let x = (rr * 0.4124 + gg * 0.3576 + bb * 0.1805) / 0.95047;
    let y = (rr * 0.2126 + gg * 0.7152 + bb * 0.0722);
    let z = (rr * 0.0193 + gg * 0.1192 + bb * 0.9505) / 1.08883;
    const f = (v: number) =>
      v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116;
    return [116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z))];
  }

  function deltaE(l1: number, a1: number, b1: number, l2: number, a2: number, b2: number) {
    return Math.sqrt((l1 - l2) ** 2 + (a1 - a2) ** 2 + (b1 - b2) ** 2);
  }

  function hexToRgb(hex: string) {
    return [
      parseInt(hex.substr(1, 2), 16),
      parseInt(hex.substr(3, 2), 16),
      parseInt(hex.substr(5, 2), 16),
    ];
  }

  const handleImageClick = (e: any) => {
    const img = e.target;
    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx?.drawImage(img, 0, 0);
    const data = ctx?.getImageData(px - 8, py - 8, 16, 16).data;

    let rSum = 0, gSum = 0, bSum = 0, count = 0;

    for (let i = 0; i < data!.length; i += 4) {
      const r = data![i];
      const g = data![i + 1];
      const b = data![i + 2];
      if (r > 240 && g > 240 && b > 240) continue;
      rSum += r;
      gSum += g;
      bSum += b;
      count++;
    }

    if (!count) return;

    const r = Math.round(rSum / count);
    const g = Math.round(gSum / count);
    const b = Math.round(bSum / count);

    const lab = rgbToLab(r, g, b);
    const normalizedSample = [65, lab[1], lab[2]];

    const allShades = Object.values(shadeGroups).flatMap(g => g.shades);

    const ranked = allShades
      .map(shade => {
        const [sr, sg, sb] = hexToRgb(shade.color);
        const shadeLab = rgbToLab(sr, sg, sb);
        const normalizedShade = [65, shadeLab[1], shadeLab[2]];
        return {
          ...shade,
          de: deltaE(
            normalizedSample[0],
            normalizedSample[1],
            normalizedSample[2],
            normalizedShade[0],
            normalizedShade[1],
            normalizedShade[2]
          ),
        };
      })
      .sort((a, b) => a.de - b.de);

    setSelectedShade(ranked[0].code);
  };

  const handleDetect = async () => {
    alert("Click on the image to detect shade");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

      <br></br>
      <br></br>

      <div className="space-y-4">
        <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Shade Matching Tool
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          VITA Classical <span className="gradient-text">Shade Guide</span>
        </h1>

        <p className="text-muted-foreground max-w-xl">
          Select manually or let AI detect from a dental photo.
        </p>

        <button
          onClick={() => {
            if (selectedShade) {
              navigator.clipboard.writeText(selectedShade);
              alert("Copied!");
            }
          }}
          className="mt-2 px-4 py-2 border rounded-lg text-sm"
        >
          Copy Selection
        </button>
      </div>

      <div className="bg-muted/40 border rounded-2xl p-8 space-y-6">

        <div>
          <p className="text-xs uppercase text-muted-foreground">
            AI Shade Detection
          </p>
          <p className="text-muted-foreground mt-2">
            Upload a dental photo and detect closest VITA shade.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">

          <div className="flex-1">
            {!preview ? (
              <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl h-56 cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl">📷</div>
                  <p>Click to upload</p>
                </div>
                <input type="file" onChange={handleImageChange} className="hidden" />
              </label>
            ) : (
              <div className="relative w-full h-64 border rounded-xl overflow-hidden">
                <img
                  src={preview}
                  onClick={handleImageClick}
                  className="w-full h-full object-cover cursor-crosshair"
                />

                <button
                  onClick={() => {
                    setPreview(null);
                    setImage(null);
                    setSelectedShade(null);
                  }}
                  className="absolute top-2 right-2 bg-white px-2 rounded"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className="w-64 border rounded-xl p-4">
            {selectedShade ? (
              <>
                <p className="text-xs uppercase text-muted-foreground">
                  AI Result
                </p>
                <h2 className="text-2xl font-bold">{selectedShade}</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Detected from uploaded image
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                No result yet
              </p>
            )}
          </div>
        </div>

        <button
          onClick={handleDetect}
          className="px-6 py-2 bg-black text-white rounded-lg"
        >
          Click Image Instead
        </button>
      </div>

      {Object.values(shadeGroups).map((group) => (
        <div key={group.name} className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{group.name}</h2>
            <p className="text-muted-foreground">{group.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {group.shades.map((shade) => (
              <div
                key={shade.code}
                onClick={() => handleSelect(shade)}
                className={`w-44 p-4 rounded-xl cursor-pointer border ${
                  selectedShade === shade.code ? "ring-2 ring-black" : ""
                }`}
              >
                <div
                  className="h-20 rounded mb-3"
                  style={{ background: shade.color }}
                />
                <h3>{shade.code}</h3>
                <p className="text-sm text-muted-foreground">
                  {shade.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}