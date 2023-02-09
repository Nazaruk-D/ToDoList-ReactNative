import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainApp from "../App/MainApp";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import Profile from "../Screens/Profile/Profile";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {RootStackParamList} from "../Type/NavigationType";
import {useAppSelector} from "../reducers/store";
import Login from "../Screens/Login/Login";
import Logout from "../Screens/Logout/Logout";


const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
    const isLogin = useAppSelector(store => store.auth.isLoggedIn)
    let startPage;

    useEffect(() => {
        startPage = isLogin ? 'Home' : 'Login'
    }, [isLogin])

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

export default Navigation;