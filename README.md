# CARTO REACT MAP APPLICATION

Welcome, this application uses CARTO for React! The best way to develop location intelligence applications using CARTO Cloud Native platform + deck.gl. It is based on datasets:
- `carto-demo-data.demo_tables.retail_stores`.
- `carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup`.

In addition, some new features have been added. A new widget that allows you to configure the following layer styles
- Fill colour 
- Outline size and colour
- Radius
- Fill colour based on a column in your dataset: sales (retail_stores) or population (sociodemographics).

## Getting started

This application has been deployed in [Render](https://dashboard.render.com/), which you can access via a public URL: 
https://carto-react-map.onrender.com

Login and you will see the map with two top menus; Stores and Social. These will render the two datasets as layers on top of the map. Then you can play around with the Point Styles widget on the left.

If you want to run this project locally, you will need to change the `cliendId` to one that allows `https://127.0.0.1:3000` domain and then run the project with `npm run dev`.

## Development choices
To achieve the desired new widget, I've created a new common component `src/components/common/widgets/PointStyles.tsx` where all the new controls will be placed. New data has been added to the redux state to manage the properties of the new component and to be shared across layers and views. 

## Future improvements
- Styling can be improved, some styles have been made with [MUI](https://mui.com/) to at least have something visible.
- UI/UX can be improved, I would like to change the placement of colour pickers, improve widget titles and labels, and load states.
- Testing needs to be developed by adding some coverage of unit and integration testing.
- Remove all unnecessary files and data from the application. CARTO for React includes a lot of files and some of them aren't used.
- Refactor outline size and radius slider multipliers to make them more user friendly.
- Remove hardcoded values for max population and max revenue and get them from the sources.
- Include more colour grading options for column-based filtering.
- Refactor code to switch between `clientId' tokens on different environments.