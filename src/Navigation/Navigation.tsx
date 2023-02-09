import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainApp from "../App/MainApp";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import Profile from "../Screens/Profile/Profile";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {RootStackParamList} from "../Type/NavigationType";
import {AppRootStateType, useAppDispatch, useAppSelector} from "../reducers/store";
import Login from "../Screens/Login/Login";
import Logout from "../Screens/Logout/Logout";
import {initializeAppTC} from "../reducers/app-reducer";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";


const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
    const isLogin = useAppSelector(store => store.auth.isLoggedIn)
    const isInitialized = useSelector<AppRootStateType, boolean>(store => store.app.initialized)
    const dispatch = useAppDispatch()
    let startPage;


    useEffect(() => {
        dispatch(initializeAppTC())
    }, [isInitialized])

    useEffect(() => {
        startPage = isLogin ? 'Home' : 'Login'
    }, [isLogin])


    if (!isInitialized) {
        return <View style={styles.progress}>
            <ActivityIndicator size="large" color="#3e2465"/>
        </View>
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {isLogin
                    ? <Stack.Navigator initialRouteName={startPage}
                                       activeColor="black"
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
                            <Stack.Screen name="Logout"
                                            component={Logout}
                                            options={{
                                                tabBarLabel: 'Logout',
                                                tabBarIcon: ({color}) => (
                                                    <MaterialCommunityIcons name="logout" size={24} color={color}/>
                                                ),
                                            }}
                            />
                        <Stack.Screen name="Profile"
                                      component={Profile}
                                      options={{
                                          tabBarLabel: 'Profile',
                                          tabBarIcon: ({color}) => (
                                              <Feather name="settings" size={24} color={color}/>
                                          ),
                                      }}
                        />
                    </Stack.Navigator>
                    : <Stack.Navigator activeColor="black"
                                       inactiveColor="#3e2465"
                                       barStyle={{backgroundColor: '#bea143'}}>
                        <Stack.Screen name="Login"
                                      component={Login}
                                      options={{
                                          tabBarLabel: 'Login',
                                          tabBarIcon: ({color}) => (
                                              <MaterialCommunityIcons name="login" size={24} color={color}/>
                                          ),
                                      }}
                        />

                    </Stack.Navigator>
                }

            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    progress: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        width: '100%',
        fontSize: 30
    }
});

export default Navigation;