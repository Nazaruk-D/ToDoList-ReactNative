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

    return <View>
        <View style={styles.box}>
            <TextInput style={styles.input} onChangeText={onChangeHandler} value={title} placeholder={'Enter text'}/>
            <TouchableOpacity>
                <MaterialIcons name="add" size={24} color="black" onPress={addItem} style={styles.deleteIcon}/>
            </TouchableOpacity>
        </View>
        {error && <div className="error-message">{error}</div>}
    </View>
})

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    deleteIcon: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 50
    },
    input: {
        width: '80%',
        height: 30,
        backgroundColor: '#3a2d4b',
        paddingLeft: 10,
        color: 'white',
        textDecorationColor: 'white',
        marginRight: 20,
        borderRadius: 10
    },
})
