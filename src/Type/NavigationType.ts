import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    User: undefined;
};

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;