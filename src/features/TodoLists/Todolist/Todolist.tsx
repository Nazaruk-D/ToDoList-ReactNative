import React, {useCallback} from 'react';
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm';
import {EditableSpan} from '../../../components/EditableSpan/EditableSpan';
import {Task} from "./Task/Task";
import {FilterValuesType} from "../../../reducers/todolists-reducer";
import {TaskStatus, TaskType} from "../../../api/todolist-api";
import {RequestStatusType} from "../../../reducers/app-reducer";
import {Text, View} from "react-native";


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

    return <View>
        {/*<EditableSpan value={props.title} onChange={changeTodolistTitle}/>*/}
            <Text>Delete Button</Text>
            {/*<IconButton aria-label="delete" onClick={removeTodolist} disabled={props.entityStatus === "loading"}>*/}
            {/*    <Delete/>*/}
            {/*</IconButton>*/}
        {/*<AddItemForm addItem={addTask}/>*/}
        <View>
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
        <View>
            <Text>Button</Text>
            <Text>Button</Text>
            <Text>Button</Text>

            {/*<Button size={"small"}*/}
            {/*        variant={"contained"}*/}
            {/*        color={props.filter === 'all' ? "secondary" : "primary"}*/}
            {/*        disableElevation*/}
            {/*        onClick={onAllClickHandler}>All*/}
            {/*</Button>*/}

            {/*<Button size={"small"}*/}
            {/*        variant={"contained"}*/}
            {/*        color={props.filter === 'active' ? "secondary" : "primary"}*/}
            {/*        style={{marginLeft: "2px"}}*/}
            {/*        disableElevation*/}
            {/*        onClick={onActiveClickHandler}>Active*/}
            {/*</Button>*/}
            {/*<Button size={"small"}*/}
            {/*        variant={"contained"}*/}
            {/*        color={props.filter === 'completed' ? "secondary" : "primary"}*/}
            {/*        style={{marginLeft: "2px"}}*/}
            {/*        disableElevation*/}
            {/*        onClick={onCompletedClickHandler}>Completed*/}
            {/*</Button>*/}
        </View>
    </View>
})


