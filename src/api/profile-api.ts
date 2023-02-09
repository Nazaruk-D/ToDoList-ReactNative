import {instanceSocialNetwork} from "./instance";


export const profileAPI = {
    profile(userId: number){
        return instanceSocialNetwork.get<RootObject>(`/profile/${userId}`)
    }
}


export type RootObject = {
	aboutMe: string;
	contacts: RootObjectContacts;
	fullName: string;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	photos: RootObjectPhotos;
	userId: number;
}
export type RootObjectContacts = {
	facebook: string;
	github: string;
	instagram: string;
	mainLink: string;
	twitter: string;
	vk: string;
	website: string;
	youtube: string;
}
export type RootObjectPhotos = {
	large: string;
	small: string | null
}