import Jimp from "jimp";

export const extractColor = async (imagePath) => {
  const image = await Jimp.read(imagePath);

  let r = 0, g = 0, b = 0, count = 0;

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    r += this.bitmap.data[idx];
    g += this.bitmap.data[idx + 1];
    b += this.bitmap.data[idx + 2];
    count++;
  });

  return {
    r: r / count,
    g: g / count,
    b: b / count
  };
};