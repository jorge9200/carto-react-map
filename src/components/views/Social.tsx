import { useEffect } from 'react';
import socialSource from 'data/sources/socialSource';
import { SOCIAL_LAYER_ID } from 'components/layers/SocialLayer';
import { useDispatch } from 'react-redux';
import {
  addLayer,
  removeLayer,
  addSource,
  removeSource,
} from '@carto/react-redux';

import { Grid } from '@mui/material';
import PointStyles from 'components/common/widgets/PointStyles';

export default function Social() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSource(socialSource));

    dispatch(
      addLayer({
        id: SOCIAL_LAYER_ID,
        source: socialSource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(SOCIAL_LAYER_ID));
      dispatch(removeSource(socialSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column'>
      <div>
        <PointStyles type="tileset"/>
      </div>
    </Grid>
  );
}
