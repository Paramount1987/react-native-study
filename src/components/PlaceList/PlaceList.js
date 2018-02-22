import React from 'react';
import PropTypes from 'prop-types';

import {View, ScrollView, FlatList, StyleSheet}   from 'react-native';

import ListItem from '../ListItem/ListItem';

function PlaceList(props) {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                  placeName={info.item.name}
                  placeImage={info.item.image}
                  onItemPressed={() => props.onItemSelected(info.item.key)} />
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList;
