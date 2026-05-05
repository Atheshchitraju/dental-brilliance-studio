import sharp from "sharp";

export const processImage = async (path) => {
  const output = path + "_processed.jpg";

  await sharp(path)
    .resize(300, 300)
    .normalize()
    .toFile(output);

  return output;
};