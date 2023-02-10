import React, {useEffect, useState} from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {getProfileInfo} from "../../reducers/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../reducers/store";
import {setNewBackgroundImage} from "../../reducers/app-reducer";
import {ProfileProps} from "../../Type/NavigationType";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";


const Profile = ({route, navigation}: ProfileProps) => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector(s => s.app.userId)
    const profileInfo = useAppSelector(s => s.profile.userInfo)
    const backgroundImage = useAppSelector(store => store.app.backgroundImage)
    let [url, setUrl] = useState<string>("")

    useEffect(() => {
        dispatch(getProfileInfo(userId!))
    }, [])

    const onPressHandler = () => {
        dispatch(setNewBackgroundImage({url}))
        setUrl("")
    }

    const img = {
        width: 120,
        height: 120,
        uri: profileInfo.photos.small ? profileInfo.photos.small : 'https://sun9-8.userapi.com/impg/PQbI4nn--y6Ig5WN_d3o938Zi2qTF_3nfGn_LQ/5jZFSI6xofo.jpg?size=200x200&quality=96&sign=201bca872cd1956597e13db1a4cd7bfd&type=album'
    }

    if (profileInfo.photos.small === '') {
        return <LoadingIndicator/>
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.settingsContainer}>
                <View style={styles.settingsBlock}>
                    <View style={styles.settings}>
                        <View style={styles.avatar}>
                            <Image source={img} style={styles.img}/>
                        </View>
                        <View>
                            <Text>Login name: <Text style={{fontWeight: "600"}}>{profileInfo.fullName}</Text> </Text>
                            <Text>Id: <Text style={{fontWeight: "600"}}>{profileInfo.userId}</Text></Text>
                            <TextInput style={styles.input} onChangeText={setUrl} value={url} placeholder={'URL link'}/>
                            <Button title={'change background image'} onPress={onPressHandler} color={'#3e2465'}/>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}

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
    settings: {
        width: '90%',
        height: '90%',
    },
    avatar: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    img: {
        borderRadius: 100,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#bea143'
    },
    input: {
        backgroundColor: '#bea143',
        paddingLeft: 10,
        width: '100%',
        marginVertical: 10
    },
});

export default Profile;