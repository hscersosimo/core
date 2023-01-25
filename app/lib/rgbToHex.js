function rgbToHex(rgb) {
  // Convert a RGB value to HEX code
  // Extract the three RGB values
  const [r, g, b] = rgb
    .replace(/^(rgb|rgba)\(/, "")
    .replace(/\)$/, "")
    .replace(/\s/g, "")
    .split(",")
    .map(Number);

  // Convert the RGB values to hex codes
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Return the concatenated hex code
  return `#${hexR}${hexG}${hexB}`;
}
export default rgbToHex;
