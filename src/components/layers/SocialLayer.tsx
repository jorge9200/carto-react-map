import { useSelector } from 'react-redux';
// @ts-ignore
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';
import { RootState } from 'store/store';
import { socialColors } from 'utils/colors';

export const SOCIAL_LAYER_ID = 'socialLayer';

export default function SocialLayer() {
  const { socialLayer } = useSelector((state: RootState) => state.carto.layers);
  const source = useSelector((state) =>
    selectSourceById(state, socialLayer?.source),
  );
  const cartoLayerProps = useCartoLayerProps({ source });
  const pointStyles = useSelector(
    (state: RootState) => state.app.pointStyles,
  );

  if (socialLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: `${SOCIAL_LAYER_ID}?columnBased=${pointStyles.columnBased}`,
      getFillColor: (d: any) => {
        if (pointStyles.columnBased) {
          return socialColors(d.properties.total_pop);
        } else {
          return Object.values(pointStyles.fillColor);
        }
      },
      getLineWidth: pointStyles.outlineSize,
      getLineColor: Object.values(pointStyles.outlineColor),      
      pointRadiusMinPixels: pointStyles.radius,
      pickable: true,
      onHover: (info: any) => {
        if (info?.object) {
          info.object = {
            // @ts-ignore
            html: htmlForFeature({ feature: info.object }),
            style: {},
          };
        }
      },
    });
  }
}
