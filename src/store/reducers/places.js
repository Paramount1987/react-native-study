import { SET_PLACES, DELETE_PLACE }   from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    const {payload} = action;

    switch(action.type) {
        case SET_PLACES:
            return {
                ...state,
                places: payload.places
            };

        case DELETE_PLACE:
            const {placeKey} = payload;

            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== placeKey;
                })
            };

        default:
            return state
    }
};

export default reducer