import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../reducers/store";
import {TaskType} from "../api/todolist-api";
import {initializeAppTC} from "../reducers/app-reducer";
import {Navigate, Route, Routes, useRoutes} from "react-router-dom";
import {TodoLists} from "../features/TodoLists/TodoLists";
import Page404 from "../components/Page404/Page404";
import {StyleSheet, Text, View} from "react-native";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function MainApp() {
    const dispatch = useAppDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(store => store.app.initialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <Text style={styles.test}>
            {/*<CircularProgress/>*/}
            CircularProgress
        </Text>
    }

    // const routes = useRoutes([
    //     {path: '/', element: <TodoLists/>},
    //     {path: '/404', element: <Page404/>},
    //     {path: '*', element: <Navigate to="/404"/>},
    // ])
    // return routes
    return (
        <View>
            <TodoLists/>
        </View>
    );
}


const styles = StyleSheet.create({
    test: {
        position: 'absolute',
        top: '30%',
        textAlign: 'center',
        width: '100%'
    }
});

export default MainApp;
