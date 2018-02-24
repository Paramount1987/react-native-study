import { ADD_PLACE, DELETE_PLACE }   from './actionTypes';

export const addPlace = (placeName, location, image) => {
    return {
        type: ADD_PLACE,
        payload: {
            placeName: placeName,
            location: location,
            uri: image.uri,
            base64: image.base64
        }
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        payload: {placeKey: key}
    };
};
