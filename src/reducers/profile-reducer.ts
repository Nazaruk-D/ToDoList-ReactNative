import {authAPI, StatusCode} from "../api/todolist-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {profileAPI, RootObject} from "../api/profile-api";

export const getProfileInfo = createAsyncThunk(('profile/getProfileInfo'), async (userId: number, {dispatch}) => {
    try {
        const res = await profileAPI.profile(userId)
        return {userInfo: res.data}
    } catch (err: any) {
        handleServerNetworkError(err, dispatch)
    }
})


const slice = createSlice({
    name: "profile",
    initialState: {
        userInfo: {photos:{small:''}} as RootObject
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProfileInfo.fulfilled, (state, action) => {
           return ({...state.userInfo, userInfo: {...action.payload!.userInfo}})
        })
    }
})

export const profileReducer = slice.reducer;






