import { ADD_PLACE, DELETE_PLACE }   from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        payload: {placeName: placeName}
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        payload: {placeKey: key}
    };
};
