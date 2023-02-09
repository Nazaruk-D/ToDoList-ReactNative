import React, {useEffect, useState} from 'react';
import {Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {LoginProps} from "../../Type/NavigationType";
import {useAppDispatch, useAppSelector} from "../../reducers/store";
import {loginTC} from "../../features/Login/auth-reducer";
import {LoginParamsType} from "../../api/todolist-api";
import Checkbox from 'expo-checkbox';
import {AntDesign} from "@expo/vector-icons";

const Login = ({route, navigation}: LoginProps) => {
    const dispatch = useAppDispatch()

    const backgroundImage = useAppSelector(store => store.app.backgroundImage)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState(true)
    const [rememberMe, setRememberMe] = useState(false)
    const [error, serError] = useState({
        email: false,
        password: false,
    })

    useEffect(() => {
        // if(email === '') serError({...error, email: 'error email'})
    }, [email])


    const onPressHandler = () => {
        const params: LoginParamsType = {
            email,
            password,
            rememberMe
        }
        dispatch(loginTC(params))
        setEmail('')
        setPassword('')
        setRememberMe(false)
    }

    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            serError({...error, email: true})
        } else {
            serError({...error, email: false})
        }
    };

    const validatePassword = (password: string) => {
        const re = /^[A-Za-z]\w{3,14}$/;
        if (!re.test(password)) {
            serError({...error, password: true})
        } else {
            serError({...error, password: false})
        }
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.settingsContainer}>
                <View style={styles.settingsBlock}>
                    <View style={{position: 'relative'}}>
                        <Text style={styles.description}>To log in get registered here</Text>
                        <Text style={styles.description}> or use common test account credentials:</Text>
                        <Text style={styles.description}> Email: <Text
                            style={{fontWeight: "600"}}>free@samuraijs.com</Text></Text>
                        <Text style={styles.description}> Password: <Text style={{fontWeight: "600"}}>free</Text>
                        </Text>
                        <TextInput style={styles.inputEmail} onChangeText={setEmail} value={email} placeholder={'email'}
                                   onBlur={() => validateEmail(email)}/>

                        <TextInput style={styles.inputPassword} onChangeText={setPassword} value={password}
                                   placeholder={'password'} secureTextEntry={eye}
                                   onBlur={() => validatePassword(password)}/>
                        {error.email && <Text style={{color: 'red'}}>Please enter correct email</Text>}
                        {error.password && <Text style={{color: 'red'}}>Please enter correct password</Text>}
                        <AntDesign name={eye ? 'eye' : 'eyeo'} size={24} color="black" style={styles.eye}
                                   onPress={() => setEye(!eye)}/>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Checkbox value={rememberMe} onValueChange={() => setRememberMe(!rememberMe)}
                                      color={rememberMe ? '#3e2465' : undefined} style={{marginBottom: 20}}/>
                            <Text style={{marginLeft: 10}}>Remember me</Text>
                        </View>
                        <Button color={'#3e2465'} title={'Login'} onPress={onPressHandler} disabled={error.email || error.password}/>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    settingsContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsBlock: {
        width: 300,
        height: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 15,
    },
    description: {
        marginBottom: 10
    },
    inputEmail: {
        backgroundColor: '#bea143',
        paddingLeft: 10,
        width: 200,
    },
    inputPassword: {
        backgroundColor: '#bea143',
        paddingLeft: 10,
        marginTop: 20,
        width: 200,
        position: 'relative',
    },
    eye: {
        position: 'absolute',
        top: 167,
        right: 70,
    }
});


export default Login;