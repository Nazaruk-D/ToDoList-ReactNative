import React, {useCallback} from 'react';
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm';
import {EditableSpan} from '../../../components/EditableSpan/EditableSpan';
import {Task} from "./Task/Task";
import {FilterValuesType} from "../../../reducers/todolists-reducer";
import {TaskStatus, TaskType} from "../../../api/todolist-api";
import {RequestStatusType} from "../../../reducers/app-reducer";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FilterButton from "../../../components/FilterButton/FilterButton";
import LoadingSmallIndicator from "../../../components/LoadingSmallIndicator/LoadingSmallIndicator";
import {MaterialIcons} from "@expo/vector-icons";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatus, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    entityStatus: RequestStatusType
}

export const Todolist = React.memo((props: PropsType) => {

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.id, props.addTask])

    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id);
    }, [props.id])
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props.changeTodolistTitle, props.id])

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props.changeFilter, props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props.changeFilter, props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props.changeFilter, props.id]);

    let tasks = props.tasks;
    let tasksForTodolist = tasks;

    if (props.filter === "active") {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatus.New);
    }
    if (props.filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.status === TaskStatus.Completed);
    }

    console.log(props.entityStatus)

    return <View>
        <View style={styles.todolist}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
                <EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            </Text>
            {props.entityStatus === "loading"
                ? <Text style={{marginLeft: 10}}><LoadingSmallIndicator/></Text>
                : <TouchableOpacity onPress={removeTodolist} style={{marginLeft: 15}}>
                    <MaterialIcons name="delete-forever" size={24} color="black"/>
                </TouchableOpacity>
            }
        </View>
        <View style={{}}>
            <AddItemForm addItem={addTask}/>
        </View>
        <View style={{paddingVertical: 10}}>
            {
                tasksForTodolist.map(t => {
                    const removeTask = (taskId: string) => props.removeTask(taskId, props.id)
                    const changeTaskTitle = (taskId: string, newTaskTitle: string) => {
                        props.changeTaskTitle(taskId, newTaskTitle, props.id);
                    }
                    const changeTaskStatus = (taskId: string, newTaskTitle: TaskStatus) => {
                        props.changeTaskStatus(taskId, newTaskTitle, props.id);
                    }

                    return <Task key={t.id} todolistId={props.id} task={t} removeTask={removeTask}
                                 changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle}/>
                })
            }
        </View>
        <View style={styles.buttonBlock}>
            <FilterButton title={'Completed'} onPress={onCompletedClickHandler} active={props.filter === "completed"}/>
            <FilterButton title={'Active'} onPress={onActiveClickHandler} active={props.filter === "active"}/>
            <FilterButton title={'All'} onPress={onAllClickHandler} active={props.filter === "all"}/>
        </View>
    </View>
})


const styles = StyleSheet.create({
    todolist: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});





