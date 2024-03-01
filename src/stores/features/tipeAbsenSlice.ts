import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    tipeAbsens: any;
    isTipeAbsensError: boolean;
    isTipeAbsensSuccess: boolean;
    isTipeAbsensLoading: boolean;
    messageTipeAbsens: any;
}

const initialState : variabel = {
    tipeAbsens: null,
    isTipeAbsensError: false,
    isTipeAbsensSuccess: false,
    isTipeAbsensLoading: false,
    messageTipeAbsens: ""
}

export const getTipeAbsens : any = createAsyncThunk("getTipeAbsens", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens`,{
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

export const getTipeAbsensById : any = createAsyncThunk("getTipeAbsensById", async(tipeAbsens : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${tipeAbsens.uuid}`,{
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

export const getTipeAbsensTable : any = createAsyncThunk("getTipeAbsensTable", async(tipeAbsens : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${tipeAbsens.limit}&${tipeAbsens.page}`,{
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

export const createTipeAbsens : any = createAsyncThunk("createTipeAbsens", async(tipeAbsens : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens`,{
            name: tipeAbsens.name,
            code: tipeAbsens.code,
            isSelect : tipeAbsens.isSelect,
            isActive: tipeAbsens.isActive
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

export const updateTipeAbsens : any = createAsyncThunk("updateTipeAbsens", async(tipeAbsens : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${tipeAbsens.uuid}`,{
            name: tipeAbsens.name,
            code: tipeAbsens.code,
            isSelect : tipeAbsens.isSelect,
            isActive: tipeAbsens.isActive
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

export const deleteTipeAbsens : any = createAsyncThunk("deleteTipeAbsens", async(tipeAbsens : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipeAbsens/${tipeAbsens.uuid}`,{
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

export const tipeAbsensSlice = createSlice({
    name: "tipeAbsens",
    initialState,
    reducers:{
        resetTipeAbsens: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipeAbsens
        builder.addCase(getTipeAbsens.pending, (state) => {
            state.isTipeAbsensLoading = true;
        });
        builder.addCase(getTipeAbsens.fulfilled, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensSuccess = true;
            state.tipeAbsens = action.payload;
        });
        builder.addCase(getTipeAbsens.rejected, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensError = true;
            state.messageTipeAbsens = action.payload;
        })

        // get tipeAbsens by id
        builder.addCase(getTipeAbsensById.pending, (state) => {
            state.isTipeAbsensLoading = true;
        });
        builder.addCase(getTipeAbsensById.fulfilled, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensSuccess = true;
            state.tipeAbsens = action.payload;
        });
        builder.addCase(getTipeAbsensById.rejected, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensError = true;
            state.messageTipeAbsens = action.payload;
        })

        // get tipeAbsens table
        builder.addCase(getTipeAbsensTable.pending, (state) => {
            state.isTipeAbsensLoading = true;
        });
        builder.addCase(getTipeAbsensTable.fulfilled, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensSuccess = true;
            state.tipeAbsens = action.payload;
        });
        builder.addCase(getTipeAbsensTable.rejected, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensError = true;
            state.messageTipeAbsens = action.payload;
        })

        // create tipeAbsens
        builder.addCase(createTipeAbsens.pending, (state) => {
            state.isTipeAbsensLoading = true;
        });
        builder.addCase(createTipeAbsens.fulfilled, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensSuccess = true;
            state.messageTipeAbsens = action.payload;
        });
        builder.addCase(createTipeAbsens.rejected, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensError = true;
            state.messageTipeAbsens = action.payload;
        })

        // update tipeAbsens 
        builder.addCase(updateTipeAbsens.pending, (state) => {
            state.isTipeAbsensLoading = true;
        });
        builder.addCase(updateTipeAbsens.fulfilled, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensSuccess = true;
            state.messageTipeAbsens = action.payload;
        });
        builder.addCase(updateTipeAbsens.rejected, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensError = true;
            state.messageTipeAbsens = action.payload;
        })

        // delete tipeAbsens 
        builder.addCase(deleteTipeAbsens.pending, (state) => {
            state.isTipeAbsensLoading = true;
        });
        builder.addCase(deleteTipeAbsens.fulfilled, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensSuccess = true;
            state.messageTipeAbsens = action.payload;
        });
        builder.addCase(deleteTipeAbsens.rejected, (state, action) => {
            state.isTipeAbsensLoading = false;
            state.isTipeAbsensError = true;
            state.messageTipeAbsens = action.payload;
        });
    }
})

export const {resetTipeAbsens} = tipeAbsensSlice.actions;
export default tipeAbsensSlice.reducer;