import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    inOuts: any;
    isInOutsError: boolean;
    isInOutsSuccess: boolean;
    isInOutsLoading: boolean;
    messageInOuts: any;
}

const initialState : variabel = {
    inOuts: null,
    isInOutsError: false,
    isInOutsSuccess: false,
    isInOutsLoading: false,
    messageInOuts: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getInOuts : any = createAsyncThunk("getInOuts", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts`,{
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

export const getInOutsById : any = createAsyncThunk("getInOutsById", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.uuid}`,{
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

export const getInOutsByUser : any = createAsyncThunk("getInOutsByUser", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/user/${inOuts.uuid}`,{
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

export const getInOutsTable : any = createAsyncThunk("getInOutsTable", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.limit}&${inOuts.page}`,{
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

export const createInOuts : any = createAsyncThunk("creatInOuts", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts`,{
            name: inOuts.name,
            code: inOuts.code,
            isActive: inOuts.isActive
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

export const updateInOuts : any = createAsyncThunk("updateInOuts", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.uuid}`,{
            name: inOuts.name,
            code: inOuts.code,
            isActive: inOuts.isActive
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

export const deleteInOuts : any = createAsyncThunk("deleteInOuts", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.uuid}`,{
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

export const inOutsSlice = createSlice({
    name: "inOuts",
    initialState,
    reducers:{
        resetInOuts: (state) => initialState
    },
    extraReducers:(builder) => {
        // get inOuts
        builder.addCase(getInOuts.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(getInOuts.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.inOuts = action.payload;
        });
        builder.addCase(getInOuts.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })

        // get inOuts
        builder.addCase(getInOutsTable.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(getInOutsTable.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.inOuts = action.payload;
        });
        builder.addCase(getInOutsTable.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })

        // get inOuts by id
        builder.addCase(getInOutsById.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(getInOutsById.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.inOuts = action.payload;
        });
        builder.addCase(getInOutsById.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })

        // get inOuts by user
        builder.addCase(getInOutsByUser.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(getInOutsByUser.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.inOuts = action.payload;
        });
        builder.addCase(getInOutsByUser.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })

        // create inOuts
        builder.addCase(createInOuts.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(createInOuts.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.messageInOuts = action.payload;
        });
        builder.addCase(createInOuts.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })

        // update inOuts
        builder.addCase(updateInOuts.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(updateInOuts.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.messageInOuts = action.payload;
        });
        builder.addCase(updateInOuts.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })

        // delete inOuts
        builder.addCase(deleteInOuts.pending, (state) => {
            state.isInOutsLoading = true;
        });
        builder.addCase(deleteInOuts.fulfilled, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsSuccess = true;
            state.messageInOuts = action.payload;
        });
        builder.addCase(deleteInOuts.rejected, (state, action) => {
            state.isInOutsLoading = false;
            state.isInOutsError = true;
            state.messageInOuts = action.payload;
        })
    }
})

export const {resetInOuts} = inOutsSlice.actions;
export default inOutsSlice.reducer;