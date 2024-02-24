// @ts-ignore
import { MAP_TYPES } from '@deck.gl/carto';

const SOCIAL_SOURCE_ID = 'socialSource';

const source = {
  id: SOCIAL_SOURCE_ID,
  type: MAP_TYPES.TILESET,
  connection: 'carto_dw',
  data: `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`,
};

export default source;
