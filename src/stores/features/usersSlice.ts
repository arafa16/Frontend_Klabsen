import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    users: any;
    isUsersError: boolean;
    isUsersSuccess: boolean;
    isUsersLoading: boolean;
    messageUsers: any;
}

const initialState : variabel = {
    users: null,
    isUsersError: false,
    isUsersSuccess: false,
    isUsersLoading: false,
    messageUsers: ""
}

interface varPassword {
    id: string;
    password: string;
}

export const changePassword : any = createAsyncThunk("users/changePassword", async(users : varPassword, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+users.id+'/password', {
            password: users.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getUserById : any = createAsyncThunk("users/getUserById", async(users : varPassword, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+users.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        resetUsers: (state) => initialState
    },
    extraReducers:(builder) => {

        //change password
        builder.addCase(changePassword.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.messageUsers = action.payload;
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });

        //get users by id
        builder.addCase(getUserById.pending, (state) => {
            state.isUsersLoading = true;
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersSuccess = true;
            state.users = action.payload;
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            state.isUsersLoading = false;
            state.isUsersError = true;
            state.messageUsers = action.payload;
        });
    }
})

export const {resetUsers} = usersSlice.actions;
export default usersSlice.reducer;