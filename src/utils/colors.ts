import * as d3 from 'd3';

const COLORS = [
  [209, 238, 234],
  [168, 219, 217],
  [133, 196, 201],
  [104, 171, 184],
  [79, 144, 166],
];
const MAX_REVENUE = 2094290;
const MAX_POP = 55407;

export const storeColors = d3.scaleQuantize([0, MAX_REVENUE], COLORS);
export const socialColors = d3.scaleQuantize([0, MAX_POP], COLORS);
