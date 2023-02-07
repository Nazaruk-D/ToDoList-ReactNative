import React from 'react';
import {Button, Text, View} from "react-native";
import {globalStyles} from "../../Styles/globalStyles";
import {RootAuthScreenProps} from "../../Type/NavigationType";

const Login = ({route, navigation}: RootAuthScreenProps) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>Login</Text>
            <Button title={'go to registration'} onPress={() => navigation.navigate('Auth', {
                screen: 'Registration',
                params: {id: 100, name: 'Alex'}
            })}/>
        </View>
    );
};

export default Login;