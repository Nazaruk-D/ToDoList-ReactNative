import {StyleSheet, View} from 'react-native';
import React from "react";
import {Provider} from "react-redux";
import {store} from "./src/reducers/store";
import Navigation from "./src/Navigation/Navigation";


export default function App() {
    return (
        <View style={styles.container}>
            <Provider store={store}>
                <Navigation/>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: '60%',
        backgroundColor: '#fffffe',
        borderRadius: 10,
        padding: 6,
        fontSize: 15,
    },
    boxTask: {
        flexDirection: 'row',
        backgroundColor: '#ff0000',
        justifyContent: "space-between",
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        zIndex: 10
    }
});