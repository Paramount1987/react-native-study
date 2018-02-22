import React, { Component } from 'react';
import {View, Text}   from 'react-native';
import { connect } from 'react-redux';

import PlaceInput   from '../../components/PlaceInput/PlaceInput';
import { addPlace }   from '../../store/actions/index';

class SharePlaceScreen extends Component {

    render() {
        return (
            <View>
                <PlaceInput addPlace={this.placeAddedHandler} />
            </View>
        );
    }

    placeAddedHandler = placeName => {
        this.props.addPlace(placeName)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
