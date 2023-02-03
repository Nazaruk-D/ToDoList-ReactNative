import React, {useCallback, useEffect} from 'react';
import {AddItemForm} from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./Todolist/Todolist";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch, useAppSelector} from "../../reducers/store";
import {
    addTodolistTC,
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    deleteTodolistTC,
    fetchTodolistsThunk,
    FilterValuesType,
    TodolistDomainType
} from "../../reducers/todolists-reducer";
import {addTaskTC, fetchTasks, removeTaskTC, updateTaskTC} from "../../reducers/tasks-reducer";
import {authAPI, TaskStatus, todolistAPI} from "../../api/todolist-api";
import {TasksStateType} from "../../App/MainApp";
import {Navigate} from "react-router-dom";
import {StyleSheet, Text, View} from "react-native";
import {setAppStatusAC} from "../../reducers/app-reducer";
import {handleServerNetworkError} from "../../utils/error-utils";
import {Login} from "../Login/Login";

export const TodoLists = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    let todoLists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    let tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        // setTimeout(() => {
            dispatch(fetchTodolistsThunk())
        // },3000)
    }, [])

    //todolist:
    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatch(changeTodolistFilterAC({filter: value, id: todolistId}))
    }, [dispatch])
    const removeTodolist = useCallback((id: string) => {
        let action = deleteTodolistTC(id);
        dispatch(action)
    }, [dispatch])

    function changeTodolistTitle(id: string, title: string) {
        dispatch(changeTodolistTitleTC({title, id}))
    }

    const addTodolist = useCallback((title: string) => {
        let action = addTodolistTC(title)
        dispatch(action)
    }, [dispatch])

    //tasks:
    const removeTask = useCallback((taskId: string, todoId: string) => {
        dispatch(removeTaskTC({taskId, todoId}))
    }, [dispatch])
    const addTask = useCallback((title: string, todoId: string) => {
        dispatch(addTaskTC({todoId, title}))
    }, [dispatch])
    const changeTaskTitle = useCallback((taskId: string, newTitle: string, todoId: string) => {
        dispatch(updateTaskTC({todoId, domainModel: {title: newTitle}, taskId}))
    }, [dispatch])
    const changeStatus = useCallback((taskId: string, status: TaskStatus, todoId: string) => {
        dispatch(updateTaskTC({todoId, domainModel: {status}, taskId}))
    }, [dispatch])

    if (!isLoggedIn) {
        // return <Navigate to={"/login"}/>
    }

    return (
        <View>
            <View style={{padding: 5}}>
                {/*<Text>AddItemForm - не работает</Text>*/}
                {/*<AddItemForm addItem={addTodolist}/>*/}
            </View>
            {!isLoggedIn && <Login/>}
            <View style={styles.grid}>
            <Text>TodoLists</Text>
                <Text>
                    {todoLists.map(tl => {
                        return (
                            <View key={tl.id} style={{height: "100%", justifyContent: "center"}}>
                                <View style={[styles.todolistContainer, {backgroundColor: "rgba(255, 255, 255, 0.5)"}]}>
                                    <Todolist
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasks[tl.id]}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                        entityStatus={tl.entityStatus}
                                    />
                                </View>
                            </View>
                        )
                    })
                    }
                </Text>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        display: "flex",
        justifyContent: "center",
        color: 'white'
    },
    todolistContainer: {
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        minWidth: 280
    }
});



