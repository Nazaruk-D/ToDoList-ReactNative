import React, {ChangeEvent, FC, useCallback} from 'react';
import {EditableSpan} from "../../../../components/EditableSpan/EditableSpan";
import {TaskStatus, TaskType} from "../../../../api/todolist-api";
import {Text, View} from "react-native";

type PropsTaskType = {
    task: TaskType
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, status: TaskStatus, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
    todolistId: string
}

export const Task: FC<PropsTaskType> = React.memo(({task  , removeTask, changeTaskTitle, changeTaskStatus, todolistId}) => {

    const onClickHandler = useCallback(() => removeTask(task.id),[task.id])
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeTaskStatus(task.id, newIsDoneValue ? TaskStatus.Completed : TaskStatus.New, todolistId);
    },[task.id])
    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue);
    },[task.id])


    return (
        <View key={task.id}>
            {/*<li*/}
            {/*    key={task.id}*/}
            {/*    className={task.status ? "is-done" : ""}*/}
            {/*>*/}
                <Text>CheckBox</Text>
                <Text>Button</Text>
                {/*<Checkbox size={"small"}*/}
                {/*          color={"primary"}*/}
                {/*          onChange={onChangeHandler}*/}
                {/*          checked={task.status === TaskStatus.Completed}/>*/}
                <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
                {/*<IconButton aria-label="delete" onClick={onClickHandler}>*/}
                {/*    <HighlightOff/>*/}
                {/*</IconButton>*/}
            {/*</li>*/}
        </View>
    );
})
