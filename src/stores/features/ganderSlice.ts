import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    ganders: any;
    isGandersError: boolean;
    isGandersSuccess: boolean;
    isGandersLoading: boolean;
    messageGanders: any;
}

const initialState : variabel = {
    ganders: null,
    isGandersError: false,
    isGandersSuccess: false,
    isGandersLoading: false,
    messageGanders: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getGanders : any = createAsyncThunk("getGanders", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/ganders`,{
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

export const gandersSlice = createSlice({
    name: "ganders",
    initialState,
    reducers:{
        resetGanders: (state) => initialState
    },
    extraReducers:(builder) => {
        // get ganders
        builder.addCase(getGanders.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(getGanders.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.ganders = action.payload;
        });
        builder.addCase(getGanders.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })
    }
})

export const {resetGanders} = gandersSlice.actions;
export default gandersSlice.reducer;