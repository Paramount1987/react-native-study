import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText  from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBg from '../../components/UI/ButtonWithBg/ButtonWithBg';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    }
    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', dims => this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
        });
    }

    render() {
        let headingText = null;

        if (this.state.viewMode === 'portrait') {
            headingText = (
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
            );
        }

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    {headingText}

                    <ButtonWithBg color="#29aaf4">Switch to Login</ButtonWithBg>

                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-mail address" style={styles.input}/>
                        <View style={
                                    this.state.viewMode === 'portrait'
                                    ? styles.portraitPasswordContainer
                                    : styles.landscapePasswordContainer
                              }
                        >
                            <View style={
                                    this.state.viewMode === 'portrait'
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper
                                }
                            >
                                <DefaultInput placeholder="Password" style={styles.input}/>
                            </View>
                            <View style={
                                    this.state.viewMode === 'portrait'
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper
                                }
                            >
                                <DefaultInput placeholder="Confirm password" style={styles.input}/>
                            </View>
                        </View>
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
    },
    landscapePasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    portraitPasswordContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    landscapePasswordWrapper: {
        width: '45%'
    },
    portraitPasswordWrapper: {
        width: '100%'
    }
});

export default AuthScreen;
