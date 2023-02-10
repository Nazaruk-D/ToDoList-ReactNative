import React from 'react';
import {Button, ImageBackground, StyleSheet, View} from "react-native";
import {LogoutProps} from "../../Type/NavigationType";
import {useAppDispatch, useAppSelector} from "../../reducers/store";
import {logoutTC} from "../../features/Login/auth-reducer";

const Logout = ({route, navigation}: LogoutProps) => {
    const dispatch = useAppDispatch()
    const backgroundImage = useAppSelector(store => store.app.backgroundImage)

    const onPressHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.settingsContainer}>
                <View style={styles.settingsBlock}>
                    <View>
                        <Button color={'#3e2465'} title={'Logout'} onPress={onPressHandler}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    settingsContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsBlock: {
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 15,
    },
    settings: {
        width: '90%',
        height: '90%',
    },
});


export default Logout;