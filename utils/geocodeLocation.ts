import Geocode from 'react-geocode';
import each from 'lodash/each';
import { ILocation } from '../interfaces';

Geocode.setApiKey(process.env.NEXT_PUBLIC_GEOCODE_API_KEY);
Geocode.setRegion(process.env.NEXT_PUBLIC_GEOCODE_REGION);

export const convertAddressToLatLong = async (locations: ILocation[] = []) => {

    let locationsLatLongArray : ILocation[] = [];
    each(locations, (location: ILocation) => {

        Geocode.fromAddress(location?.address).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              locationsLatLongArray.push({ ...location, viewPort : {latitude : lat, longitude : lng , zoom : 12, width : 100, height : 100}});
              console.log(lat, lng);
            },
            (error) => {
              console.error(error);
            }
        );
    });
    return locationsLatLongArray;
};

export const GEO_LOCATE_CONTROL_STYLE = {
    right: 10,
    top: 10
  };
