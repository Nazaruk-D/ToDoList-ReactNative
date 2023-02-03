import React, {ChangeEvent, useState} from 'react';
import {Text, View} from "react-native";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        // ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        ? <Text>Editable span</Text>
        : <Text onPress={activateEditMode}>{props.value}</Text>
}
