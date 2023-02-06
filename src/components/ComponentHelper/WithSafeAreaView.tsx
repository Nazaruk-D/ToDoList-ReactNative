import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";

type WithSafeAreaViewPropsType = {
    children: JSX.Element
}

const WithSafeAreaView = (props: WithSafeAreaViewPropsType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {props.children}
        </SafeAreaView>
    );
};

export default WithSafeAreaView;