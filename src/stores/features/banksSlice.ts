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

export const getBanksById : any = createAsyncThunk("getBanksById", async(banks : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${banks.uuid}`,{
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

export const getBanksTable : any = createAsyncThunk("getBanksTable", async(banks :any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${banks.limit}&${banks.page}`,{
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

export const createBanks : any = createAsyncThunk("createBanks", async(banks : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/banks`,{
            name: banks.name,
            code: banks.code,
            isActive: banks.isActive
        },{
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

export const updateBanks : any = createAsyncThunk("updateBanks", async(banks : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${banks.uuid}`,{
            name: banks.name,
            code: banks.code,
            isActive: banks.isActive
        },{
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

export const deleteBanks : any = createAsyncThunk("deleteBanks", async(banks : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/banks/${banks.uuid}`,{
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

        // get banks by id
        builder.addCase(getBanksById.pending, (state) => {
            state.isBanksLoading = true;
        });
        builder.addCase(getBanksById.fulfilled, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksSuccess = true;
            state.banks = action.payload;
        });
        builder.addCase(getBanksById.rejected, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksError = true;
            state.messageBanks = action.payload;
        })

        // get banks table
        builder.addCase(getBanksTable.pending, (state) => {
            state.isBanksLoading = true;
        });
        builder.addCase(getBanksTable.fulfilled, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksSuccess = true;
            state.banks = action.payload;
        });
        builder.addCase(getBanksTable.rejected, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksError = true;
            state.messageBanks = action.payload;
        })

        // create banks
        builder.addCase(createBanks.pending, (state) => {
            state.isBanksLoading = true;
        });
        builder.addCase(createBanks.fulfilled, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksSuccess = true;
            state.messageBanks = action.payload;
        });
        builder.addCase(createBanks.rejected, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksError = true;
            state.messageBanks = action.payload;
        })

        // update banks
        builder.addCase(updateBanks.pending, (state) => {
            state.isBanksLoading = true;
        });
        builder.addCase(updateBanks.fulfilled, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksSuccess = true;
            state.messageBanks = action.payload;
        });
        builder.addCase(updateBanks.rejected, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksError = true;
            state.messageBanks = action.payload;
        })

        // create banks
        builder.addCase(deleteBanks.pending, (state) => {
            state.isBanksLoading = true;
        });
        builder.addCase(deleteBanks.fulfilled, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksSuccess = true;
            state.messageBanks = action.payload;
        });
        builder.addCase(deleteBanks.rejected, (state, action) => {
            state.isBanksLoading = false;
            state.isBanksError = true;
            state.messageBanks = action.payload;
        })
    }
})

export const {resetBanks} = banksSlice.actions;
export default banksSlice.reducer;