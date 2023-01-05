/**
 * This function is used to darken or lighten a color from a hex value
 *
 * @param color the hex value of the color
 * @param percent percent to darken or lighten the color, negative values will darken the color, positive values will lighten the color
 * @returns string the hex value of the new color
 */
export const shadeColor = (color: string, percent: number): string => {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(String((R * (100 + percent)) / 100), 10);
  G = parseInt(String((G * (100 + percent)) / 100), 10);
  B = parseInt(String((B * (100 + percent)) / 100), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R / 10) * 10;
  G = Math.round(G / 10) * 10;
  B = Math.round(B / 10) * 10;

  var RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};
