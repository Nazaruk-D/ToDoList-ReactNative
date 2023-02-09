import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch, useAppSelector} from "../reducers/store";
import {TaskType} from "../api/todolist-api";
import {initializeAppTC} from "../reducers/app-reducer";
import {TodoLists} from "../features/TodoLists/TodoLists";
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {MainProps} from "../Type/NavigationType";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function MainApp({route, navigation}: MainProps) {
    const dispatch = useAppDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(store => store.app.initialized)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const backgroundImage = useAppSelector( store => store.app.backgroundImage)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <Text style={styles.progress}>
            {/*<CircularProgress/>*/}
            CircularProgress
        </Text>
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.image}>
            <ScrollView style={styles.todolist}>
                <View style={{alignItems:'center'}}>
                    <TodoLists/>
                </View>
            </ScrollView>
        </ImageBackground>

    );
}


const styles = StyleSheet.create({
    todolist: {
        flex: 1,
        display: 'flex',
        paddingTop: 30,
        marginBottom: 30
    },
    progress: {
        position: 'absolute',
        top: '30%',
        textAlign: 'center',
        width: '100%'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});

export default MainApp;
