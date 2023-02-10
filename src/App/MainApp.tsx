import React from 'react';
import {useAppSelector} from "../reducers/store";
import {TaskType} from "../api/todolist-api";
import {TodoLists} from "../features/TodoLists/TodoLists";
import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {MainProps} from "../Type/NavigationType";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function MainApp({route, navigation}: MainProps) {
    const backgroundImage = useAppSelector(store => store.app.backgroundImage)

    return (
        <ImageBackground source={backgroundImage} style={styles.image}>
            <ScrollView style={styles.todolist}>
                <View style={{alignItems: 'center'}}>
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
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});

export default MainApp;
