import { ADD_PLACE, DELETE_PLACE }   from './actionTypes';

export const addPlace = (placeName, location, image) => {
    return dispatch => {
        const placeData = {
            name: placeName,
            location: location
        };
        fetch('https://awesome-places-84c12.firebaseio.com/places.json', {
            method: 'POST',
            body: JSON.stringify(placeData)
        })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
            });
    }
    // return {
    //     type: ADD_PLACE,
    //     payload: {
    //         placeName: placeName,
    //         location: location,
    //         uri: image.uri,
    //         base64: image.base64
    //     }
    // };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        payload: {placeKey: key}
    };
};
