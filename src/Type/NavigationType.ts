import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {StackScreenProps} from "@react-navigation/stack";

export type RootStackParamList = {
    Auth: NavigatorScreenParams<RootAuthParamList>;
    Profile: undefined;
    User: undefined;
};

export type RootAuthParamList = {
    Registration: {id: number, name: string} | undefined;
    Login: undefined;
};

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type AuthProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;

export type RootAuthScreenProps = CompositeScreenProps<BottomTabScreenProps<RootStackParamList, 'Auth'>, StackScreenProps<RootAuthParamList> >