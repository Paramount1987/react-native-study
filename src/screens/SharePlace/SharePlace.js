import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image }   from 'react-native';
import { connect } from 'react-redux';

import { addPlace }   from '../../store/actions/index';
import PlaceInput   from '../../components/PlaceInput/PlaceInput';
import PickImage    from '../../components/PickImage/PickImage';
import PickLocation    from '../../components/PickLocation/PickLocation';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class SharePlaceScreen extends Component {
    state = {
        placeName: ''
    }
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>

                    <PickImage />
                    <PickLocation />
                    <PlaceInput
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler} />

                    <View style={styles.button}>
                        <Button
                            title="Share the Place!"
                            onPress={this.placeAddedHandler} />
                    </View>

                </View>
            </ScrollView>
        );
    }

    onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                });
            }
        }
    }

    placeAddedHandler = () => {
        if(this.state.placeName.trim() !== '')
            this.props.addPlace(this.state.placeName);
    }

    placeNameChangedHandler = val => {
        this.setState({placeName: val});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        addPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
