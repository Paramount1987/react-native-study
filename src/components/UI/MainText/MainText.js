import React from 'react';
import {Text, StyleSheet} from 'react-native';

function mainText(props) {
    return (
        <Text style={styles.mainText}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    mainText: {
        color: '#000',
        backgroundColor: 'transparent'
    }
});

export default mainText;
