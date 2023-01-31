import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from "react-native";

type InputPropsType = {
    title: string
    changeTitle: (taskId: number, title: string) => void
    id: number
}

const Input = (props: InputPropsType) => {
    const [value, setValue] = useState(props.title)
    const changeTitle = (title: string) => {
        setValue(title)
    }

    return (
        <>
            <TextInput style={styles.input} value={value} onChangeText={(title) => changeTitle(title)}/>
            <Button title={'+'} onPress={() => props.changeTitle(props.id, value)}/>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '60%',
        backgroundColor: '#fffffe',
        borderRadius: 10,
        padding: 6,
        fontSize: 15,
    },
})

export default Input;