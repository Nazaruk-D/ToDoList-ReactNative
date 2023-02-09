import {authAPI, StatusCode} from "../api/todolist-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initializeAppTC = createAsyncThunk(('app/initializeApp'), async (param, {dispatch}) => {
    try {
        const res = await authAPI.me()
        if (res.data.resultCode === StatusCode.OK) {
            dispatch(setIsLoggedInAC({value: true}));
            return {id: res.data.data.id}
        } else {
            handleServerAppError(res.data, dispatch)
            return {id: null}
        }
    } catch (err: any) {
        handleServerNetworkError(err, dispatch)
    }
})


const slice = createSlice({
    name: "app",
    initialState: {
        status: 'loading' as RequestStatusType,
        error: null as null | string,
        initialized: false,
        userId: null as null | number,
        backgroundImage: {uri: "https://sun9-67.userapi.com/impg/GuUb0aTcpvq21WRK6P3S-UXEKsZ98CbvUlpsCA/bYRcwosii0M.jpg?size=1024x1024&quality=95&sign=24a0919d4052bade4d17062f9cb79e49&type=album"},
    },
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppErrorAC(state, action: PayloadAction<{ message: null | string }>) {
            state.error = action.payload.message
        },
        setNewBackgroundImage(state, action: PayloadAction<{ url: string }>) {
            state.backgroundImage.uri = action.payload.url
        },
    },
    extraReducers: builder => {
        builder.addCase(initializeAppTC.fulfilled, (state, action) => {
            state.initialized = true
            state.userId = action.payload!.id
        })
    },
})

export const appReducer = slice.reducer;

export const {setAppStatusAC, setAppErrorAC, setNewBackgroundImage} = slice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'




