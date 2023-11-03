import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    banks: any;
    isBanksError: boolean;
    isBanksSuccess: boolean;
    isBanksLoading: boolean;
    messageBanks: any;
}

const initialState : variabel = {
    banks: null,
    isBanksError: false,
    isBanksSuccess: false,
    isBanksLoading: false,
    messageBanks: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getBanks : any = createAsyncThunk("getBanks", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/banks`,{
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

export const banksSlice = createSlice({
    name: "banks",
    initialState,
    reducers:{
        resetBanks: (state) => initialState
    },
    extraReducers:(builder) => {
        // get banks
        builder.addCase(getBanks.pending, (state) => {
            state.isBanksLoading = true;
        });
        builder.addCase(getBanks.fulfilled, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksSuccess = true;
            state.banks = action.payload;
        });
        builder.addCase(getBanks.rejected, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksError = true;
            state.messageBanks = action.payload;
        })
    }
})

export const {resetBanks} = banksSlice.actions;
export default banksSlice.reducer;