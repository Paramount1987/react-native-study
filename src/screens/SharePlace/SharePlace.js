import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';

import {addPlace} from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    state = {
        placeName: '',
        location: {
            value: null,
            valid: false
        },
        image: {
            value: null,
            valid: false
        }
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    render() {
        let submitButton =  (<Button
                                title="Share the Place!"
                                onPress={this.placeAddedHandler}
                            />);

        if (this.props.isLoading) {
            submitButton = <ActivityIndicator />;
        }

        return (
            <ScrollView>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>

                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>

                    <PickImage
                        onImagePicked={this.imagePickedHandler}
                    />
                    <PickLocation onLocationPick={this.locationPickedHandler}/>

                    <PlaceInput
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler}/>

                    <View style={styles.button}>{submitButton}</View>

                </KeyboardAvoidingView>
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

    locationPickedHandler = location => {
        this.setState(prevState => {
            return {
                ...prevState,
                location: {
                    value: location,
                    valid: true
                }
            }
        });
    }

    imagePickedHandler = image => {
        this.setState(prevState => {
            return {
                ...prevState,
                image: {
                    value: image,
                    valid: true
                }
            }
        });
    }

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== '')
            this.props.addPlace(
                this.state.placeName,
                this.state.location.value,
                this.state.image.value
                );
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

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace: (placeName, location, image) => dispatch(addPlace(placeName, location, image))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);
