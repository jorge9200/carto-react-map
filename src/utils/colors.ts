import * as d3 from 'd3';

const COLORS = [
  [209, 238, 234],
  [168, 219, 217],
  [133, 196, 201],
  [104, 171, 184],
  [79, 144, 166],
];

export const storeColors = d3.scaleQuantize([0, 2094290], COLORS);
