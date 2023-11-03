import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    golonganDarahs: any;
    isGolonganDarahsError: boolean;
    isGolonganDarahsSuccess: boolean;
    isGolonganDarahsLoading: boolean;
    messageGolonganDarahs: any;
}

const initialState : variabel = {
    golonganDarahs: null,
    isGolonganDarahsError: false,
    isGolonganDarahsSuccess: false,
    isGolonganDarahsLoading: false,
    messageGolonganDarahs: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getGolonganDarahs : any = createAsyncThunk("getGolonganDarahs", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs`,{
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

export const golonganDarahsSlice = createSlice({
    name: "golonganDarahs",
    initialState,
    reducers:{
        resetGolonganDarahs: (state) => initialState
    },
    extraReducers:(builder) => {
        // get golongan darah
        builder.addCase(getGolonganDarahs.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(getGolonganDarahs.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.golonganDarahs = action.payload;
        });
        builder.addCase(getGolonganDarahs.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })
    }
})

export const {resetGolonganDarahs} = golonganDarahsSlice.actions;
export default golonganDarahsSlice.reducer;