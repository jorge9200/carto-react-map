import { useSelector } from 'react-redux';
// @ts-ignore
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';
import { RootState } from 'store/store';
import { storeColors } from 'utils/colors';

export const STORES_LAYER_ID = 'storesLayer';

export default function StoresLayer() {
  const { storesLayer } = useSelector((state: RootState) => state.carto.layers);
  const source = useSelector((state) =>
    selectSourceById(state, storesLayer?.source),
  );
  const cartoLayerProps = useCartoLayerProps({ source });
  const pointStyles = useSelector(
    (state: RootState) => state.app.pointStyles,
  );

  if (storesLayer && source && pointStyles) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: `${STORES_LAYER_ID}?revenued=${pointStyles.revenueBased}`,
      getFillColor: (d: any) => {
        if (pointStyles.revenueBased) {
          return storeColors(d.properties.revenue);
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
