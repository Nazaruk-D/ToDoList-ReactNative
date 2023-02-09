import React, {useState} from 'react';
import {Button, ImageBackground, StyleSheet, TextInput, View} from "react-native";
import {LoginProps} from "../../Type/NavigationType";
import {useAppDispatch, useAppSelector} from "../../reducers/store";
import {loginTC} from "../../features/Login/auth-reducer";
import {LoginParamsType} from "../../api/todolist-api";

const Login = ({route, navigation}: LoginProps) => {
    const dispatch = useAppDispatch()

    const backgroundImage = useAppSelector(store => store.app.backgroundImage)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

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

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.settingsContainer}>
                <View style={styles.settingsBlock}>
                        <View>
                            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder={'email'}/>
                            <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder={'password'} secureTextEntry={true}/>
                            {/*<AntDesign name="eye" size={24} color="black" />*/}
                            {/*<AntDesign name="eyeo" size={24} color="black" />*/}
                            <Button color={'#3e2465'} title={'Login'} onPress={onPressHandler}/>
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
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 15,
    },
    input: {
      backgroundColor: '#bea143',
        paddingLeft: 10,
        marginBottom: 20,
        width: 200,
    },
    settings: {
        width: '90%',
        height: '90%',
    },
});


export default Login;