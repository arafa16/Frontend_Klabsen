import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    groups: any;
    isGroupsError: boolean;
    isGroupsSuccess: boolean;
    isGroupsLoading: boolean;
    messageGroups: any;
}

const initialState : variabel = {
    groups: null,
    isGroupsError: false,
    isGroupsSuccess: false,
    isGroupsLoading: false,
    messageGroups: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getGroups : any = createAsyncThunk("getGroups", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/groups`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers:{
        resetGroups: (state) => initialState
    },
    extraReducers:(builder) => {
        // get groups
        builder.addCase(getGroups.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(getGroups.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.groups = action.payload;
        });
        builder.addCase(getGroups.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })
    }
})

export const {resetGroups} = groupsSlice.actions;
export default groupsSlice.reducer;