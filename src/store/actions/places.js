import { ADD_PLACE, DELETE_PLACE }   from './actionTypes';
import { uiStopLoading, uiStartLoading } from    './index';

export const addPlace = (placeName, location, image) => {
    return dispatch => {
        dispatch(uiStartLoading());

        fetch('https://us-central1-awesome-places-84c12.cloudfunctions.net/storeImage', {
            method: 'POST',
            body: JSON.stringify({
                image: image.base64
            })
        })
            .catch(err => {
                console.log(err);
                alert('Something went wrong, please try again');
                dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                const placeData = {
                    name: placeName,
                    location: location,
                    image: parsedRes.imageUrl
                };

                return   fetch('https://awesome-places-84c12.firebaseio.com/places.json', {
                                method: 'POST',
                                body: JSON.stringify(placeData)
                            });
            })
                .catch(err => {
                    console.log(err);
                    alert('Something went wrong, please try again');
                    dispatch(uiStopLoading());
                })
                .then(res => res.json())
                .then(parsedRes => {
                    console.log(parsedRes);
                    dispatch(uiStopLoading());
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
