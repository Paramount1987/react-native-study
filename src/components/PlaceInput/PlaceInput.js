import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place"
                    onChangeText = {this.placeNameChangedHandler}
                    value={this.state.placeName}/>
                <Button
                    onPress={this.placeSubmitHandler}
                    title="Add" />
            </View>
        );
    }

    placeNameChangedHandler = (val) => {
        this.setState({placeName: val});
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') return;

        this.props.addPlace(this.state.placeName);
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        //alignItems: "center"
    },
    placeInput: {
        width: "70%",
        height: 35,
        borderWidth: 1
    }
});

export default PlaceInput;
