import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {ReactElement, ReactNode, useState} from "react";
import ExpoCheckbox from "expo-checkbox";

export default function App() {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: true},
        {id: 4, title: 'React', isDone: false},
        {id: 5, title: 'React Native', isDone: false},
    ])
    return (
        <View style={styles.container}>
            <HideKeyboard>
                <TextInput style={styles.input} value={value} onChangeText={setValue}/>
            </HideKeyboard>
            <View style={{width: '60%'}}>
                {tasks.map((t) => {
                    return <View key={t.id} style={[globalStyles.border, styles.boxTask]}>
                        <ExpoCheckbox value={t.isDone} onValueChange={() => {
                        }}/>
                        <Text>{t.title}</Text>
                    </View>
                })}
            </View>
        </View>
    );
}

const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0e17',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '60%',
        backgroundColor: '#fffffe',
        borderRadius: 10,
        padding: 6,
        fontSize: 15,
        marginBottom: 10
    },
    boxTask: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: "space-between",
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3,
    }
});

const globalStyles = StyleSheet.create({
    border: {
        // borderWidth: 1,
        // borderColor: '#0F0e17',
    }
});

