import React, { Component } from 'react';
import { View ,Button, Image, StyleSheet }   from 'react-native';
import ImagePicker  from 'react-native-image-picker';

class PickImage extends Component {
    state = {
        pickedImage: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image
                        source={this.state.pickedImage}
                        style={styles.previewImage}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={this.pickImageHandler} />
                </View>
            </View>
        );
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: 'Pick an Image',
            maxWidth: 800,
            maxHeight: 600
        }, res => {
            if (res.didCancel) {
                console.log('User cancelled!');
            } else if (res.error) {
                console.log('Error', res.error);
            } else {
                this.setState({
                    pickedImage: {
                        uri: res.uri
                    }
                });
                this.props.onImagePicked({uri: res.uri, base64: res.data});
            }
        });
    }

    reset = () => {
        this.setState({
            pickedImage: null
        });
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    placeholder: {
        width: '80%',
        height: 150,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#eee'
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
});

export default PickImage;
