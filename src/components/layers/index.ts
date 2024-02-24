import StoresLayer from './StoresLayer';
import SocialLayer from './SocialLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    StoresLayer(),
    SocialLayer(),
    // [hygen] Add layer
  ];
};
