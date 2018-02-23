import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText  from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBg from '../../components/UI/ButtonWithBg/ButtonWithBg';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Please Log In</HeadingText>
                    </MainText>

                    <ButtonWithBg color="#29aaf4">Switch to Login</ButtonWithBg>

                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-mail address" style={styles.input}/>
                        <DefaultInput placeholder="Password" style={styles.input}/>
                        <DefaultInput placeholder="Confirm password" style={styles.input}/>
                    </View>

                    <ButtonWithBg onPress={this.loginHandler} color="#29aaf4">Submut</ButtonWithBg>
                </View>
            </ImageBackground>
        );
    }

    loginHandler = () => {
        startMainTabs();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    }
});

export default AuthScreen;
