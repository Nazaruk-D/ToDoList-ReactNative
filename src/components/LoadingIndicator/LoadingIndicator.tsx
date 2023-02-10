import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";

const LoadingIndicator = () => {
    return (
        <View style={styles.progress}>
            <ActivityIndicator size="large" color="#3e2465"/>
        </View>
    );
};

const styles = StyleSheet.create({
    progress: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        width: '100%',
        fontSize: 30
    }
});

export default LoadingIndicator;