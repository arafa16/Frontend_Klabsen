import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    tipePendapatans: any;
    isTipePendapatansError: boolean;
    isTipePendapatansSuccess: boolean;
    isTipePendapatansLoading: boolean;
    messageTipePendapatans: any;
}

const initialState : variabel = {
    tipePendapatans: null,
    isTipePendapatansError: false,
    isTipePendapatansSuccess: false,
    isTipePendapatansLoading: false,
    messageTipePendapatans: ""
}

export const getTipePendapatans : any = createAsyncThunk("getTipePendapatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipePendapatans`,{
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

export const getTipePendapatansById : any = createAsyncThunk("getTipePendapatansById", async(tipePendapatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipePendapatans/${tipePendapatans.uuid}`,{
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

export const getTipePendapatansTable : any = createAsyncThunk("getTipePendapatansTable", async(tipePendapatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipePendapatans/${tipePendapatans.limit}&${tipePendapatans.page}`,{
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

export const createTipePendapatans : any = createAsyncThunk("createTipePendapatans", async(tipePendapatans : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipePendapatans`,{
            name: tipePendapatans.name,
            code: tipePendapatans.code,
            isActive: tipePendapatans.isActive
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

export const updateTipePendapatans : any = createAsyncThunk("updateTipePendapatans", async(tipePendapatans : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipePendapatans/${tipePendapatans.uuid}`,{
            name: tipePendapatans.name,
            code: tipePendapatans.code,
            isActive: tipePendapatans.isActive
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

export const deleteTipePendapatans : any = createAsyncThunk("deleteTipePendapatans", async(tipePendapatans : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipePendapatans/${tipePendapatans.uuid}`,{
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

export const tipePendapatansSlice = createSlice({
    name: "tipePendapatans",
    initialState,
    reducers:{
        resetTipePendapatans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipePendapatans
        builder.addCase(getTipePendapatans.pending, (state) => {
            state.isTipePendapatansLoading = true;
        });
        builder.addCase(getTipePendapatans.fulfilled, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansSuccess = true;
            state.tipePendapatans = action.payload;
        });
        builder.addCase(getTipePendapatans.rejected, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansError = true;
            state.messageTipePendapatans = action.payload;
        })

        // get tipePendapatans by id
        builder.addCase(getTipePendapatansById.pending, (state) => {
            state.isTipePendapatansLoading = true;
        });
        builder.addCase(getTipePendapatansById.fulfilled, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansSuccess = true;
            state.tipePendapatans = action.payload;
        });
        builder.addCase(getTipePendapatansById.rejected, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansError = true;
            state.messageTipePendapatans = action.payload;
        })

        // get tipePendapatans table
        builder.addCase(getTipePendapatansTable.pending, (state) => {
            state.isTipePendapatansLoading = true;
        });
        builder.addCase(getTipePendapatansTable.fulfilled, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansSuccess = true;
            state.tipePendapatans = action.payload;
        });
        builder.addCase(getTipePendapatansTable.rejected, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansError = true;
            state.messageTipePendapatans = action.payload;
        })

        // create tipePendapatans
        builder.addCase(createTipePendapatans.pending, (state) => {
            state.isTipePendapatansLoading = true;
        });
        builder.addCase(createTipePendapatans.fulfilled, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansSuccess = true;
            state.messageTipePendapatans = action.payload;
        });
        builder.addCase(createTipePendapatans.rejected, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansError = true;
            state.messageTipePendapatans = action.payload;
        })

        // update tipePendapatans 
        builder.addCase(updateTipePendapatans.pending, (state) => {
            state.isTipePendapatansLoading = true;
        });
        builder.addCase(updateTipePendapatans.fulfilled, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansSuccess = true;
            state.messageTipePendapatans = action.payload;
        });
        builder.addCase(updateTipePendapatans.rejected, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansError = true;
            state.messageTipePendapatans = action.payload;
        })

        // delete tipePendapatans 
        builder.addCase(deleteTipePendapatans.pending, (state) => {
            state.isTipePendapatansLoading = true;
        });
        builder.addCase(deleteTipePendapatans.fulfilled, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansSuccess = true;
            state.messageTipePendapatans = action.payload;
        });
        builder.addCase(deleteTipePendapatans.rejected, (state, action) => {
            state.isTipePendapatansLoading = false;
            state.isTipePendapatansError = true;
            state.messageTipePendapatans = action.payload;
        });
    }
})

export const {resetTipePendapatans} = tipePendapatansSlice.actions;
export default tipePendapatansSlice.reducer;