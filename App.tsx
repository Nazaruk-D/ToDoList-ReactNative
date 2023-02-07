import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import WithSafeAreaView from "./src/components/ComponentHelper/WithSafeAreaView";
import {ProfileProps, RootStackParamList, UserProps} from "./src/Type/NavigationType";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RootAuth from "./src/Screens/AuthScreens/RootAuth";


// function HomeScreen({navigation}: HomeProps) {
//     return (
//         <WithSafeAreaView>
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
//                 <Text>Home Screen</Text>
//                 <Button title={'change page'} onPress={() => navigation.navigate('Profile')}/>
//             </View>
//         </WithSafeAreaView>
//     );
// }

function ProfileScreen({navigation}: ProfileProps) {
    return (
        <WithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Profile Screen</Text>
                <Button title={'change page'} onPress={() => navigation.navigate('User')}/>
            </View>
        </WithSafeAreaView>
    );
}

function UserScreen({navigation}: UserProps) {
    return (
        <WithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>User Screen</Text>
                <Button title={'change page'} onPress={() => navigation.navigate('Auth', {screen: 'Login'})}/>
            </View>
        </WithSafeAreaView>
    );
}

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();

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

            {/*<Provider store={store}>*/}
            {/*    <MainApp/>*/}
            {/*</Provider>*/}
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Auth" component={RootAuth}/>
                        <Stack.Screen name="Profile" component={ProfileScreen}/>
                        <Stack.Screen name="User" component={UserScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
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
        // backgroundColor: '#0F0e17',
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        // justifyContent: 'center',
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

