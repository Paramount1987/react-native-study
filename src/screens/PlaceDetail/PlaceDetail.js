import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect }  from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace }   from '../../store/actions/index';

class PlaceDetail extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.deleteBtn}>
                            <Icon size={30} name="ios-trash" color="red"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>);
    }

    placeDeletedHandler = () => {
       this.props.onDeletedItem(this.props.selectedPlace.key);

        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    deleteBtn: {
        alignItems: 'center'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeletedItem: key => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
