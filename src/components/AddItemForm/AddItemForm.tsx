import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: string) => {
        setTitle(e)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <View>
        {/*<TextField*/}
        {/*    size={"small"}*/}
        {/*    variant={"outlined"}*/}
        {/*    value={title}*/}
        {/*    onChange={onChangeHandler}*/}
        {/*    onKeyPress={onKeyPressHandler}*/}
        {/*    error={!!error}*/}
        {/*    label={"Title"}*/}
        {/*    helperText={!!error}*/}
        {/*    style = {{width: 196, backgroundColor: "rgba(255, 255, 255, 0.5)"}}*/}
        {/*/>*/}
        {/*<IconButton aria-label="delete" onClick={addItem}>*/}
        {/*    <Add/>*/}
        {/*</IconButton>*/}
        <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.input} onChangeText={onChangeHandler} value={title}/>
            <TouchableOpacity>
                <MaterialIcons name="add" size={24} color="black"/>
            </TouchableOpacity>
        </View>


        {error && <div className="error-message">{error}</div>}
    </View>
})

const styles = StyleSheet.create({
    input: {
        width: 150,
        backgroundColor: '#af8a8a'
    }
})
