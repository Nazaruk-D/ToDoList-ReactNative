import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../reducers/store";
import {TaskType} from "../api/todolist-api";
import {initializeAppTC} from "../reducers/app-reducer";
import {TodoLists} from "../features/TodoLists/TodoLists";
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

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
    const image = {uri: "https://sun9-67.userapi.com/impg/GuUb0aTcpvq21WRK6P3S-UXEKsZ98CbvUlpsCA/bYRcwosii0M.jpg?size=1024x1024&quality=95&sign=24a0919d4052bade4d17062f9cb79e49&type=album"};

    return (
        <ImageBackground source={image} style={styles.image}>
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
    test: {
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
