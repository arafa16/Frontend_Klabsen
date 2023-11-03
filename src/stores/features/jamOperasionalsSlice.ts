import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    jamOperasionals: any;
    isJamOperasionalsError: boolean;
    isJamOperasionalsSuccess: boolean;
    isJamOperasionalsLoading: boolean;
    messageJamOperasionals: any;
}

const initialState : variabel = {
    jamOperasionals: null,
    isJamOperasionalsError: false,
    isJamOperasionalsSuccess: false,
    isJamOperasionalsLoading: false,
    messageJamOperasionals: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getJamOperasionals : any = createAsyncThunk("getJamOperasionals", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals`,{
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

export const jamOperasionalsSlice = createSlice({
    name: "jamOperasionals",
    initialState,
    reducers:{
        resetJamOperasionals: (state) => initialState
    },
    extraReducers:(builder) => {
        // get jam operasional
        builder.addCase(getJamOperasionals.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(getJamOperasionals.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.jamOperasionals = action.payload;
        });
        builder.addCase(getJamOperasionals.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })
    }
})

export const {resetJamOperasionals} = jamOperasionalsSlice.actions;
export default jamOperasionalsSlice.reducer;