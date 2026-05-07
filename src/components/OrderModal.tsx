import { useState } from "react";

const products = [
  "Zirconia Classic",
  "Zirconia Monolithic Premium",
  "Implant Prosthetics",
  "DMLS Crown & Bridge",
  "DMLS Full Metal",
  "E-Max CAD",
  "E-Max Veneer CAD",
  "Precision Attachments",
  "Night Guard",
  "Bleaching Tray",
];

const shades = [
  "A1",
  "A2",
  "A3",
  "A3.5",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "C1",
  "C2",
  "C3",
  "C4",
  "D2",
  "D3",
  "D4",
  "BL1",
  "BL2",
  "BL3",
  "BL4",
];
const toothNumbers = [
  18, 17, 16, 15, 14, 13, 12, 11,
  21, 22, 23, 24, 25, 26, 27, 28,
  48, 47, 46, 45, 44, 43, 42, 41,
  31, 32, 33, 34, 35, 36, 37, 38,
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function OrderModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [shade, setShade] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedTeeth, setSelectedTeeth] = useState<number[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);

  if (!open) return null; const toggleTooth = (tooth: number) => {
    setSelectedTeeth((prev) =>
      prev.includes(tooth)
        ? prev.filter((t) => t !== tooth)
        : [...prev, tooth]
    );
  };

  const submitOrder = () => {
    const message = `
🦷 *NEW DMLS ORDER*

👤 Name: ${name}
📞 Phone: ${phone}

📦 Product: ${product}
🎨 Shade: ${shade}

🦷 Teeth: ${selectedTeeth.join(", ")}

📝 Notes:
${notes}

📎 Files Attached: ${files?.length || 0}
`;

    const whatsappUrl = `https://wa.me/918217216397?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };
   return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative bg-white w-full max-w-4xl rounded-[28px] shadow-2xl max-h-[95vh] overflow-y-auto">
        {/* HEADER */}
        <div className="sticky top-0 bg-white z-20 border-b px-5 sm:px-8 py-5 flex items-center justify-between rounded-t-[28px]">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Place Order
              
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Fill in the details below. Our team will contact you.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-10">
          {/* CUSTOMER INFO */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Customer Information
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">
                  Your Name *
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. John Smith"
                  className="w-full border rounded-xl px-4 py-4 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number *
                </label>

                <div className="flex gap-2">
                  <div className="border rounded-xl px-4 flex items-center bg-gray-50">
                    +91
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="flex-1 border rounded-xl px-4 py-4 outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
                    {/* PRODUCT */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Product Selection
            </h3>

            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full border rounded-xl px-4 py-4 outline-none focus:border-purple-500"
            >
              <option value="">Select Product</option>

              {products.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* SHADE */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Shade Selection
            </h3>

            <select
              value={shade}
              onChange={(e) => setShade(e.target.value)}
              className="w-full border rounded-xl px-4 py-4 outline-none focus:border-purple-500"
            >
              <option value="">Select Shade</option>

              {shades.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* TOOTH NUMBERS */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Tooth Numbers (FDI)
            </h3>

            <p className="text-gray-500 mb-6">
              Click on teeth to select/deselect
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-8 gap-3">
              {toothNumbers.map((tooth) => {
                const active = selectedTeeth.includes(tooth);

                return (
                  <button
                    key={tooth}
                    onClick={() => toggleTooth(tooth)}
                    className={`
                      h-14 rounded-xl border font-semibold transition-all
                      ${
                        active
                          ? "bg-purple-600 text-white border-purple-600 scale-105"
                          : "bg-white hover:border-purple-400"
                      }
                    `}
                  >
                    {tooth}
                  </button>
                );
              })}
            </div>
          </div>
          {/* NOTES */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Additional Notes
            </h3>

            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special instructions or requirements..."
              className="w-full border rounded-xl px-4 py-4 outline-none focus:border-purple-500 resize-none"
            />
          </div>

          {/* FILES */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-5">
              Upload Files (Optional)
            </h3>

            <div className="border-2 border-dashed rounded-2xl p-6 bg-gray-50">
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                className="w-full"
              />

              <p className="text-sm text-gray-500 mt-3">
                Accepted: STL, OBJ, PLY, JPG, PNG, PDF
              </p>
            </div>
            </div>

          {/* BUTTONS */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <button
              onClick={onClose}
              className="h-14 rounded-xl border text-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>

            <button
              onClick={submitOrder}
              className="h-14 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}