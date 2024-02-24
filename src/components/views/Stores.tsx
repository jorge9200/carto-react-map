import { useEffect } from 'react';
import storesSource from 'data/sources/storesSource';
import { STORES_LAYER_ID } from 'components/layers/StoresLayer';
import { useDispatch } from 'react-redux';
import {
  addLayer,
  removeLayer,
  addSource,
  removeSource,
} from '@carto/react-redux';

import { Grid } from '@mui/material';
import PointStyles from 'components/common/widgets/PointStyles';

export default function Stores() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSource(storesSource));

    dispatch(
      addLayer({
        id: STORES_LAYER_ID,
        source: storesSource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(STORES_LAYER_ID));
      dispatch(removeSource(storesSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column'>
      <div>
        <PointStyles type="table"/>
      </div>
    </Grid>
  );
}
