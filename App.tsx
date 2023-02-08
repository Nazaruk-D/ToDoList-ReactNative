import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {RootStackParamList} from "./src/Type/NavigationType";
import RootAuth from "./src/Screens/AuthScreens/RootAuth";
import MainApp from "./src/App/MainApp";
import {Provider} from "react-redux";
import {store} from "./src/reducers/store";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";

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

// function ProfileScreen({navigation}: ProfileProps) {
//     return (
//         <WithSafeAreaView>
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
//                 <Text>Profile Screen</Text>
//                 {/*<Button title={'change page'} onPress={() => navigation.navigate('User')}/>*/}
//             </View>
//         </WithSafeAreaView>
//     );
// }
//
// function UserScreen({navigation}: any) {
//     return (
//         <WithSafeAreaView>
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
//                 <Text>User Screen</Text>
//                 <Button title={'change page'} onPress={() => navigation.navigate('Auth', {screen: 'Login'})}/>
//             </View>
//         </WithSafeAreaView>
//     );
// }

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createBottomTabNavigator<RootStackParamList>();
const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

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

    const [backGroundImage, setBackGroundImage] = useState<{ uri: string }>({
        uri: "https://sun9-67.userapi.com/impg/GuUb0aTcpvq21WRK6P3S-UXEKsZ98CbvUlpsCA/bYRcwosii0M.jpg?size=1024x1024&quality=95&sign=24a0919d4052bade4d17062f9cb79e49&type=album"
    })

    const ThemeContext = React.createContext<string>(backGroundImage.uri);
    const image = {uri: "https://sun9-67.userapi.com/impg/GuUb0aTcpvq21WRK6P3S-UXEKsZ98CbvUlpsCA/bYRcwosii0M.jpg?size=1024x1024&quality=95&sign=24a0919d4052bade4d17062f9cb79e49&type=album"};

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
                {/*<ImageBackground source={image} style={styles.image}>*/}
                {/*<ThemeContext.Provider value={backGroundImage.uri}>*/}
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home"
                                         activeColor="#f0edf6"
                                         inactiveColor="#3e2465"
                                         barStyle={{backgroundColor: '#bea143'}}>

                            <Stack.Screen name="Home"
                                          component={MainApp}
                                          options={{
                                              tabBarLabel: 'Home',
                                              tabBarIcon: ({color}) => (
                                                  <MaterialCommunityIcons name="home" color={color} size={26}/>
                                              ),
                                          }}
                            />
                            <Stack.Screen
                                name="Auth"
                                component={RootAuth}
                                options={{
                                    tabBarLabel: 'Auth',
                                    tabBarIcon: ({color}) => (
                                        <MaterialCommunityIcons name="login" size={24} color={color}/>
                                    ),
                                }}
                            />
                            <Stack.Screen
                                name="Settings"
                                component={RootAuth}
                                options={{
                                    tabBarLabel: 'Settings',
                                    tabBarIcon: ({color}) => (
                                        <Feather name="settings" size={24} color={color}/>
                                    ),
                                }}
                            />
                            {/*<Stack.Screen name="Profile" component={ProfileScreen}/>*/}
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
                {/*</ThemeContext.Provider>*/}
                {/*</ImageBackground>*/}
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
        // height: 1200
        // backgroundColor: '#0F0e17',
        // backgroundColor: '#ffffff',
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
        backgroundColor: '#ff0000',
        justifyContent: "space-between",
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        zIndex: 10
    }
});

const globalStyles = StyleSheet.create({
    border: {
        // borderWidth: 1,
        // borderColor: '#0F0e17',
    }
});

