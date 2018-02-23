import React, { Component } from 'react';
import { View ,Button, Image, StyleSheet }   from 'react-native';

import imagePlaceholder from '../../assets/phuket.jpg';

class PickImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={imagePlaceholder} style={styles.previewImage} />
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={() => alert('clicked')} />
                </View>
            </View>
        );
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
