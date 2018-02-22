import React from 'react';
import { StyleSheet, View} from 'react-native';
import {connect}    from 'react-redux';

import PlaceList from './PlaceList/PlaceList';
import PlaceInput   from './PlaceInput/PlaceInput';
import PlaceDetail  from './PlaceDetail/PlaceDetail';
import placeImage   from '../assets/phuket.jpg';
import {addPlace, deletePlace, selectPlace, deselectPlace}   from '../../src/store/actions/index';

class AppContainer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                    selectedPlace={this.props.selectedPlace}
                />
                <PlaceInput
                    addPlace={this.addPlace}
                />
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.selectPlace}
                />
            </View>
        );
    }

    addPlace = (place) => {
        this.props.onAddPlace(place);
        console.log('Place added');
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    }

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    }

    selectPlace = key => {
        this.props.onSelectPlace(key);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F1E3',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);