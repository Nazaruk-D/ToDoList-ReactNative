import React, {useEffect, useState} from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {getProfileInfo} from "../../reducers/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../reducers/store";
import {setNewBackgroundImage} from "../../reducers/app-reducer";
import {ProfileProps} from "../../Type/NavigationType";


const img = {
    width: 100,
    height: 100,
    uri: 'https://sun9-16.userapi.com/impg/AN-ikCmTp9yLRpLCkoACsL5dMQC9PfxIv9sX-g/zJ5bKUy8JMk.jpg?size=1080x1920&quality=95&sign=0da9f7871dde6f0032cc304b2cd2dec7&type=album'
}

const Profile = ({route, navigation}: ProfileProps) => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector( s => s.app.userId)
    const profileInfo = useAppSelector( s => s.profile.userInfo)
    const backgroundImage = useAppSelector(store => store.app.backgroundImage)

    let [url, setUrl] = useState<string>("")

    useEffect(()=>{
        dispatch(getProfileInfo(userId!))
    },[])

    const onPressHandler = () => {
        dispatch(setNewBackgroundImage({url}))
        setUrl("")
    }

    if(profileInfo.photos.small === '') {
        return <Text>Loading...</Text>
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.settingsContainer}>
                <View style={styles.settingsBlock}>
                    <View style={styles.settings}>
                        <View style={styles.avatar}>
                            <Image source={profileInfo.photos.large ? img : img} style={styles.img}/>
                        </View>
                        <View>
                            <Text>Login name: <Text style={{fontWeight: "600"}}>{profileInfo.fullName}</Text> </Text>
                            <Text>Id:  <Text style={{fontWeight: "600"}}>{profileInfo.userId}</Text></Text>
                            <TextInput onChangeText={setUrl} value={url} placeholder={'URL link'}/>
                            <Button title={'change background image'} onPress={onPressHandler}/>
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
        borderRadius: 50
    }

});

export default Profile;