import { VOYAGER } from '@carto/react-basemaps';
import { InitialCarto3State } from '@carto/react-redux';
// @ts-ignore
import { API_VERSIONS } from '@deck.gl/carto';

export const initialState: InitialCarto3State = {
  viewState: {
    latitude: 31.802892,
    longitude: -103.007813,
    zoom: 2,
    pitch: 0,
    bearing: 0,
    dragRotate: false,
  },
  basemap: VOYAGER,
  credentials: {
    apiVersion: API_VERSIONS.V3,
    apiBaseUrl: 'https://gcp-europe-west1.api.carto.com',
  },
  googleApiKey: '', // only required when using a Google Basemap,
  googleMapId: '', // only required when using a Google Custom Basemap
  accountsUrl: 'http://app.carto.com/',
  oauth: {
    domain: 'auth.carto.com',
    clientId: 'jyVRsLjoyoy7nJnW6PJ38Xgk03Jmxak3', // type here your application clientId
    organizationId: '', // organizationId is required for SSO
    namespace: 'http://app.carto.com/',
    scopes: [
      'read:current_user',
      'update:current_user',
      'read:connections',
      'write:connections',
      'read:maps',
      'write:maps',
      'read:account',
      'admin:account',
    ],
    audience: 'carto-cloud-native-api',
    authorizeEndPoint: 'https://carto.com/oauth2/authorize', // only valid if keeping https://localhost:3000/oauthCallback
  },
};