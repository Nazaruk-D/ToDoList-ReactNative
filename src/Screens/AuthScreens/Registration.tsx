import React from 'react';
import {Button, Text, View} from "react-native";
import {globalStyles} from "../../Styles/globalStyles";
import {RootAuthScreenProps} from "../../Type/NavigationType";

const Registration = ({route ,navigation}: RootAuthScreenProps) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>Registration</Text>
            {/*<Button title={'go to User'} onPress={() => navigation.navigate('User')}/>*/}
            <Text>{JSON.stringify(route.params, null, 2)}</Text>
        </View>
    );
};

export default Registration;