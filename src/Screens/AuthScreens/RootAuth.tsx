import React from 'react';
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./Login";
import Registration from "./Registration";
import {AuthProps, RootAuthScreenProps} from "../../Type/NavigationType";

const Stack = createStackNavigator()

const RootAuth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Registration'} component={Registration}/>
        </Stack.Navigator>
    );
};

export default RootAuth;