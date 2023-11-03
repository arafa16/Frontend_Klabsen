import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    meData: any;
    isMeDataError: boolean;
    isMeDataSuccess: boolean;
    isMeDataLoading: boolean;
    messageMeData: any;
}

const initialState : variabel = {
    meData: null,
    isMeDataError: false,
    isMeDataSuccess: false,
    isMeDataLoading: false,
    messageMeData: ""
}

export const getMe : any = createAsyncThunk("meData/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/me',{
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

export const meSlice = createSlice({
    name: "meData",
    initialState,
    reducers:{
        resetMeData: (state) => initialState
    },
    extraReducers:(builder) => {


        // get me
        builder.addCase(getMe.pending, (state) => {
            state.isMeDataLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isMeDataLoading = false;
            state.isMeDataSuccess = true;
            state.meData = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isMeDataLoading = false;
            state.isMeDataError = true;
            state.messageMeData = action.payload;
        })
    }
})

export const {resetMeData} = meSlice.actions;
export default meSlice.reducer;