export function rgbToLab({ r, g, b }) {
  r /= 255; 
  g /= 255; 
  b /= 255;

  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;

  return {
    L: y * 100,
    a: (x - y) * 128,
    b: (y - z) * 128
  };
}