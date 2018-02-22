import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to Login" />
                <TextInput placeholder="Your E-mail address" />
                <TextInput placeholder="Password" />
                <TextInput placeholder="Confirm password" />
                <Button title="Submit" onPress={this.loginHandler} />
            </View>
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
    }
});

export default AuthScreen;
