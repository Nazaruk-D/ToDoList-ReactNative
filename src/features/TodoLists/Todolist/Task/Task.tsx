import React, {ChangeEvent, FC, useCallback} from 'react';
import {EditableSpan} from "../../../../components/EditableSpan/EditableSpan";
import {TaskStatus, TaskType} from "../../../../api/todolist-api";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ExpoCheckbox from "expo-checkbox";
import {Feather, MaterialIcons} from "@expo/vector-icons";

type PropsTaskType = {
    task: TaskType
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, status: TaskStatus, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
    todolistId: string
}

export const Task: FC<PropsTaskType> = React.memo(({
                                                       task,
                                                       removeTask,
                                                       changeTaskTitle,
                                                       changeTaskStatus,
                                                       todolistId
                                                   }) => {

    const onClickHandler = useCallback(() => removeTask(task.id), [task.id])
    const onChangeHandler = useCallback((checked: boolean) => {
        changeTaskStatus(task.id, checked ? TaskStatus.Completed : TaskStatus.New, todolistId);
    }, [task.id])
    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue);
    }, [task.id])


    return (
        <View key={task.id} style={task.status === TaskStatus.Completed ? {...styles.task, opacity: 0.5} : styles.task}>
            <View style={{flexDirection:'row'}}>
                <ExpoCheckbox
                    style={{marginRight:20}}
                    value={task.status === TaskStatus.Completed}
                    onValueChange={onChangeHandler}
                    color={task.status === TaskStatus.Completed ? '#4630EB' : undefined}
                />
                <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
            </View>
            <TouchableOpacity onPress={onClickHandler} style={{marginLeft: 15}}>
                <Feather name="delete" size={20} color="black" />
            </TouchableOpacity>
        </View>
    );
})

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'grey',
        paddingVertical: 5
    }
})
