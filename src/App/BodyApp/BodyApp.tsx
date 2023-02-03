import React from 'react'
import {StyleSheet} from "react-native";

export const BodyApp = () => {

    return <div style={styles.body}></div>
}

const styles = StyleSheet.create({
    body: {
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        zIndex: 0,
        backgroundColor: "grey"
    }
});

