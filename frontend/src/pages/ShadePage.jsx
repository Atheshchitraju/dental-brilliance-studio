import { useState } from "react";
import axios from "axios";

const shadeGroups = {
  A: {
    name: "A Group",
    subtitle: "Reddish Brown",
    shades: [
      { code: "A1", color: "#F5EDE1", description: "Light reddish brown" },
      { code: "A2", color: "#EBE0D1", description: "Medium reddish brown" },
      { code: "A3", color: "#D9C9B3", description: "Dark reddish brown" },
      { code: "A3.5", color: "#D1C0A5", description: "Very dark reddish brown" },
      { code: "A4", color: "#C8B89A", description: "Darkest reddish brown" },
    ],
  },
  B: {
    name: "B Group",
    subtitle: "Reddish Yellow",
    shades: [
      { code: "B1", color: "#F5EDDB", description: "Light reddish yellow" },
      { code: "B2", color: "#EBE1CB", description: "Medium reddish yellow" },
      { code: "B3", color: "#DFD2B8", description: "Dark reddish yellow" },
      { code: "B4", color: "#D3C5A9", description: "Very dark reddish yellow" },
    ],
  },
  C: {
    name: "C Group",
    subtitle: "Grey",
    shades: [
      { code: "C1", color: "#EDE9E1", description: "Light grey" },
      { code: "C2", color: "#DFDBD1", description: "Medium grey" },
      { code: "C3", color: "#CFCBBE", description: "Dark grey" },
      { code: "C4", color: "#C3BDAF", description: "Very dark grey" },
    ],
  },
  D: {
    name: "D Group",
    subtitle: "Reddish Grey",
    shades: [
      { code: "D2", color: "#E8DFD1", description: "Light reddish grey" },
      { code: "D3", color: "#D9CFBE", description: "Medium reddish grey" },
      { code: "D4", color: "#CCC1AD", description: "Dark reddish grey" },
    ],
  },
  BL: {
    name: "Bleach",
    subtitle: "Extra Light",
    shades: [
      { code: "BL1", color: "#FAF8F2", description: "Lightest bleach" },
      { code: "BL2", color: "#F5F2EA", description: "Light bleach" },
      { code: "BL3", color: "#F0ECE2", description: "Medium bleach" },
      { code: "BL4", color: "#EBE6DA", description: "Dark bleach" },
    ],
  },
};


const ShadePage = () => {
  const [selectedShade, setSelectedShade] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (code) => setSelectedShade(code);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedShade(null);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDetect = async () => {
    if (!image) return alert("Upload image first");

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);

      const res = await axios.post(
        "http://localhost:5000/api/shade",
        formData
      );

      setSelectedShade(res.data.shade);
    } catch {
      alert("Detection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 space-y-10">

      {/* HEADER */}
      <div>
        <p className="text-sm tracking-widest text-muted-foreground">
          SHADE MATCHING TOOL
        </p>

        <h1 className="text-4xl font-bold">
          VITA Classical <span className="gradient-text">Shade Guide</span>
        </h1>

        <p className="text-muted-foreground mt-2">
          Select manually or let AI detect from dental image
        </p>
      </div>

      {/* AI BOX */}
      <div className="glass p-6 rounded-2xl shadow-glass space-y-4">

        <p className="text-sm text-muted-foreground">
          Upload dental image for AI detection
        </p>

        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full text-sm"
        />

        {preview && (
          <img
            src={preview}
            className="w-60 rounded-xl border border-border"
          />
        )}

        <button
          onClick={handleDetect}
          className="px-6 py-2 rounded-lg bg-gradient-primary text-white shadow-soft"
        >
          {loading ? "Analyzing..." : "Detect Shade"}
        </button>
      </div>

      {/* RESULT */}
      {selectedShade && (
        <div className="glass p-4 rounded-xl shadow-soft">
          <h2 className="text-lg font-semibold">
            Selected Shade: <span className="gradient-text">{selectedShade}</span>
          </h2>
        </div>
      )}

      {/* GROUPS */}
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
                onClick={() => handleSelect(shade.code)}
                className={`
                  w-44 p-4 rounded-xl cursor-pointer transition
                  bg-card shadow-soft border
                  hover:scale-105
                  ${selectedShade === shade.code
                    ? "ring-2 ring-primary shadow-glow"
                    : "border-border"}
                `}
              >
                <div
                  className="h-20 rounded-lg mb-3"
                  style={{ background: shade.color }}
                />

                <h3 className="font-semibold">{shade.code}</h3>
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
};

export default ShadePage;