import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

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
    const changeTitle = (e: string) => {
        setTitle(e)
    }

    return editMode
        ? <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.input} onChangeText={changeTitle} value={title}/>
            <View>
                <AntDesign name="check" size={24} color="black" onPress={activateViewMode}/>
            </View>
        </View>
        : <Text onPress={activateEditMode} onLongPress={activateEditMode}>{props.value}</Text>
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        backgroundColor: '#af8a8a'
    }
})

