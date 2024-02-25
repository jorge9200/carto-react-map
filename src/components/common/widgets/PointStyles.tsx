import { WrapperWidgetUI } from '@carto/react-ui';
import { Compact, rgbaToHexa } from '@uiw/react-color';
import { setPointStyles } from 'store/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Slider from '@mui/material/Slider';
import { FormControlLabel, Switch } from '@mui/material';

export default function PointStyles({ type }: { type: string }) {
  const dispatch = useDispatch();
  const pointStyles = useSelector((state: RootState) => state.app.pointStyles);

  if (!pointStyles) {
    return <></>;
  }

  return (
    <>
      <WrapperWidgetUI title={'Point Styles'}>
        <h5>Fill Color</h5>
        {!pointStyles.columnBased && (
          <Compact
            color={rgbaToHexa(pointStyles?.fillColor)}
            onChange={(color) => {
              dispatch(setPointStyles({ fillColor: color.rgb }));
            }}
          />
        )}

        <FormControlLabel
          control={
            <Switch
              checked={pointStyles.columnBased}
              onChange={() => {
                dispatch(
                  setPointStyles({
                    columnBased: !pointStyles.columnBased,
                  }),
                );
              }}
            />
          }
          label='Fill color based on specific data'
        />
        <h5>Outline</h5>
        <Slider
          size='small'
          value={pointStyles.outlineSize}
          onChange={(e, value) => {
            dispatch(setPointStyles({ outlineSize: Number(value) }));
          }}
          aria-label='Small'
          valueLabelDisplay='auto'
        />
        <Compact
          color={rgbaToHexa(pointStyles.outlineColor)}
          onChange={(color) => {
            dispatch(setPointStyles({ outlineColor: color.rgb }));
          }}
        />
        {type === 'table' && (
          <>
            <h5>Radius</h5>
            <Slider
              size='small'
              value={pointStyles.radius}
              onChange={(e, value) => {
                dispatch(setPointStyles({ radius: Number(value) }));
              }}
              aria-label='Small'
              valueLabelDisplay='auto'
            />
          </>
        )}
      </WrapperWidgetUI>
    </>
  );
}
