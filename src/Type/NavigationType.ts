import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {StackScreenProps} from "@react-navigation/stack";

export type RootStackParamList = {
    Main: undefined;
    Auth: NavigatorScreenParams<RootAuthParamList>;
    Profile: undefined;
};

export type RootAuthParamList = {
    Registration: {id: number, name: string} | undefined;
    Login: undefined;
};

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type AuthProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;
export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export type RootAuthScreenProps = CompositeScreenProps<BottomTabScreenProps<RootStackParamList, 'Auth'>, StackScreenProps<RootAuthParamList> >