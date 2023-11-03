import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    statusPerkawinans: any;
    isStatusPerkawinansError: boolean;
    isStatusPerkawinansSuccess: boolean;
    isStatusPerkawinansLoading: boolean;
    messageStatusPerkawinans: any;
}

const initialState : variabel = {
    statusPerkawinans: null,
    isStatusPerkawinansError: false,
    isStatusPerkawinansSuccess: false,
    isStatusPerkawinansLoading: false,
    messageStatusPerkawinans: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getStatusPerkawinans : any = createAsyncThunk("getStatusPerkawinans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans`,{
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

export const statusPerkawinansSlice = createSlice({
    name: "StatusPerkawinans",
    initialState,
    reducers:{
        resetStatusPerkawinans: (state) => initialState
    },
    extraReducers:(builder) => {
        // getstatus perkawinan
        builder.addCase(getStatusPerkawinans.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(getStatusPerkawinans.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.statusPerkawinans = action.payload;
        });
        builder.addCase(getStatusPerkawinans.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })
    }
})

export const {resetStatusPerkawinans} = statusPerkawinansSlice.actions;
export default statusPerkawinansSlice.reducer;