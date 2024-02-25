# CARTO REACT MAP APPLICATION

Welcome, this application is using CARTO for React! The best way to develop Location Intelligence Apps using CARTO Cloud Native platform + deck.gl. It is cosuming to data sets:
- `carto-demo-data.demo_tables.retail_stores`
- `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`

On top of it some features have been added. A new widget where allows to configure the following styles of the layer:
- Fill color 
- Outline size and color
- Radius
- Fill color based on a column of your dataset: revenue (retail_stores) or population (sociodemographics).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [https://127.0.0.1:3000](https://127.0.0.1:3000) with your browser to see the result.

## Development decisions
In order to achieve the desired new widget I've created a new common component `src/components/common/widgets/PointStyles.tsx` where all new controls will be placed. New data has been added to the redux state to manage the properties of the new component and be shared across de layers and views. 

## Future improvements
- Styling can be improved, some styles with [MUI](https://mui.com/) have been made in order to have something at least visible.
- UI/UX can be improved, I would like to change placements of the color pickers, improve titles and labels of the widget and loading states.
- Testing needs to be developed by adding some coverage of unit and integration testing.
- Remove all non necessary files and data from the app. CARTO for React includes lot of files and some of them won't be used.
- Refactor outline size and radius sliders multipliers to adjust more to the desired effect by the users.
- Remove hardcoded values of max population and max revenue and get it from the sources.
- Include more options for color grading on column based filering.
