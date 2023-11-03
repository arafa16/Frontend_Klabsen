import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    atasans: any;
    isAtasansError: boolean;
    isAtasansSuccess: boolean;
    isAtasansLoading: boolean;
    messageAtasans: any;
}

const initialState : variabel = {
    atasans: null,
    isAtasansError: false,
    isAtasansSuccess: false,
    isAtasansLoading: false,
    messageAtasans: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getAtasans : any = createAsyncThunk("getAtasans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/atasans`,{
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

export const atasansSlice = createSlice({
    name: "atasans",
    initialState,
    reducers:{
        resetAtasans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get atasans
        builder.addCase(getAtasans.pending, (state) => {
            state.isAtasansLoading = true;
        });
        builder.addCase(getAtasans.fulfilled, (state, action) => {
            state.isAtasansLoading = false;
            state.isAtasansSuccess = true;
            state.atasans = action.payload;
        });
        builder.addCase(getAtasans.rejected, (state, action) => {
            state.isAtasansLoading = false;
            state.isAtasansError = true;
            state.messageAtasans = action.payload;
        })
    }
})

export const {resetAtasans} = atasansSlice.actions;
export default atasansSlice.reducer;