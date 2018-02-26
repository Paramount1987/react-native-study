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

import { startAddPlace }   from '../../store/actions/index';

class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentWillMount() {
        this.reset();
    }

    componentDidUpdate() {
        if (this.props.placeAdded) {
            this.props.navigator.switchToTab({tabIndex: 0});
            //this.props.onStartAddPlace();
        }
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
                        ref={ref => (this.imagePicker = ref)}
                    />
                    <PickLocation
                        onLocationPick={this.locationPickedHandler}
                        ref={ref => (this.locationPicker = ref)}
                    />

                    <PlaceInput
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler}/>

                    <View style={styles.button}>{submitButton}</View>

                </KeyboardAvoidingView>
            </ScrollView>
        );
    }

    onNavigatorEvent = (event) => {
        if (event.type === 'ScreenChangedEvent') {
            if (event.id === 'willAppear') {
                this.props.onStartAddPlace();
            }
        }
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

        this.reset();
        this.imagePicker.reset();
        this.locationPicker.reset();
    }

    placeNameChangedHandler = val => {
        this.setState({placeName: val});
    }

    reset = () => {
        this.setState({
            placeName: '',
            location: {
                value: null,
                valid: false
            },
            image: {
                value: null,
                valid: false
            }
        });
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
        isLoading: state.ui.isLoading,
        placeAdded: state.places.placeAdded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace: (placeName, location, image) => dispatch(addPlace(placeName, location, image)),
        onStartAddPlace: () => dispatch(startAddPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);
