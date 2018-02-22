import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }

    loginHandler = () => {
        startMainTabs();
    }
}

export default AuthScreen;
