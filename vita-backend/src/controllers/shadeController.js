import { processImage } from "../services/imageProcessor.js";
import { extractColor } from "../services/colorExtractor.js";
import { matchShade } from "../services/shadeMatcher.js";

export const detectShade = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        detail: "No file uploaded"
      });
    }

    const processed = await processImage(req.file.path);
    const rgb = await extractColor(processed);
    const result = matchShade(rgb);

    return res.json({
      success: true,
      data: result
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      detail: "Processing failed"
    });
  }
};