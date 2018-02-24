import { ADD_PLACE, DELETE_PLACE }   from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    const {payload} = action;
    switch(action.type) {

        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: payload.placeName,
                    image: {
                        uri: "https://www.wmj.ru/imgs/2016/12/05/04/857357/39de5fe6678aba85c54e043d6bfa433c91a51f4f.jpg"
                    },
                    location: payload.location
                })
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