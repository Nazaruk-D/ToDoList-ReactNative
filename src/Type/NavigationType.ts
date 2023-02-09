import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {StackScreenProps} from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Logout: undefined;
    Profile: undefined;
};

export type MainProps  = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type LogoutProps = NativeStackScreenProps<RootStackParamList, 'Logout'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

