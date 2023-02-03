import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {ReactElement, ReactNode, useEffect, useState} from "react";
import MainApp from "./src/App/MainApp";
import {Provider} from "react-redux";
import {store} from "./src/reducers/store";
import {authAPI, todolistAPI} from "./src/api/todolist-api";

export default function App() {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(0)
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: true},
        {id: 4, title: 'React', isDone: false},
        {id: 5, title: 'React Native', isDone: false},
    ])

    const addTask = () => {
        const newTask = {id: tasks.length + 1, title: value, isDone: false}
        setTasks(prev => [...prev, newTask])
        setValue('')
    }

    const changeStatus = (taskId: number, status: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: !status} : t))
    }

    const changeTitle = (taskId: number, title: string) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, title} : t))
        setShow(0)
    }

    return (
        <View style={styles.container}>
            {/*<HideKeyboard>*/}
            {/*    <View style={{width: '100%', alignItems: 'center', paddingVertical: 20}}>*/}
            {/*        <TextInput style={styles.input} value={value} onChangeText={setValue}/>*/}
            {/*    </View>*/}
            {/*</HideKeyboard>*/}
            {/*<View>*/}
            {/*    <Button color={'#ff8906'} title={'Add task'} onPress={addTask}/>*/}
            {/*</View>*/}
            {/*<View style={{width: '60%'}}>*/}
            {/*    {tasks.map((t) => {*/}
            {/*        return <View key={t.id} style={[globalStyles.border, styles.boxTask]}>*/}
            {/*            <ExpoCheckbox value={t.isDone} onValueChange={() => changeStatus(t.id, t.isDone)}/>*/}
            {/*            {show === t.id*/}
            {/*                ? <Input title={t.title} changeTitle={changeTitle} id={t.id}/>*/}
            {/*                : <Text onPress={() => setShow(t.id)}>{t.title}</Text>}*/}
            {/*        </View>*/}
            {/*    })}*/}
            {/*</View>*/}
            <Provider store={store}>
                <MainApp/>
            </Provider>
        </View>
    );
}

// const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         {children}
//     </TouchableWithoutFeedback>
// )


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0e17',
        // backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '60%',
        backgroundColor: '#fffffe',
        borderRadius: 10,
        padding: 6,
        fontSize: 15,
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

