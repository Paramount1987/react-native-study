import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet, TouchableOpacity, Image}   from 'react-native';

function ListItem(props) {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>

    );
}

ListItem.propTypes = {};
ListItem.defaultProps = {};

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default ListItem;
