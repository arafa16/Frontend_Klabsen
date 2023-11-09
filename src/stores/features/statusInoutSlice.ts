import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    statusInout: any;
    isStatusInoutError: boolean;
    isStatusInoutSuccess: boolean;
    isStatusInoutLoading: boolean;
    messageStatusInout: any;
}

const initialState : variabel = {
    statusInout: null,
    isStatusInoutError: false,
    isStatusInoutSuccess: false,
    isStatusInoutLoading: false,
    messageStatusInout: ""
}

export const getStatusInout : any = createAsyncThunk("getStatusInout", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout`,{
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

export const getStatusInoutById : any = createAsyncThunk("getStatusInoutById", async(statusInout : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${statusInout.uuid}`,{
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

export const getStatusInoutTable : any = createAsyncThunk("getStatusInoutTable", async(statusInout : any, thunkAPI) => {
    
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${statusInout.limit}&${statusInout.page}`,{
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

export const createStatusInout : any = createAsyncThunk("createStatusInout", async(statusInout : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout`,{
            name: statusInout.name,
            code: statusInout.code,
            isActive: statusInout.isActive
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

export const updateStatusInout : any = createAsyncThunk("updateStatusInout", async(statusInout : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${statusInout.uuid}`,{
            name: statusInout.name,
            code: statusInout.code,
            isActive: statusInout.isActive
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

export const deleteStatusInout : any = createAsyncThunk("deleteStatusInout", async(statusInout : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${statusInout.uuid}`,{
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

export const statusInoutSlice = createSlice({
    name: "StatusInout",
    initialState,
    reducers:{
        resetStatusInout: (state) => initialState
    },
    extraReducers:(builder) => {
        // get StatusInout
        builder.addCase(getStatusInout.pending, (state) => {
            state.isStatusInoutLoading = true;
        });
        builder.addCase(getStatusInout.fulfilled, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutSuccess = true;
            state.statusInout = action.payload;
        });
        builder.addCase(getStatusInout.rejected, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutError = true;
            state.messageStatusInout = action.payload;
        })

        // get StatusInout by id
        builder.addCase(getStatusInoutById.pending, (state) => {
            state.isStatusInoutLoading = true;
        });
        builder.addCase(getStatusInoutById.fulfilled, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutSuccess = true;
            state.statusInout = action.payload;
        });
        builder.addCase(getStatusInoutById.rejected, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutError = true;
            state.messageStatusInout = action.payload;
        })


        // get StatusInout table
        builder.addCase(getStatusInoutTable.pending, (state) => {
            state.isStatusInoutLoading = true;
        });
        builder.addCase(getStatusInoutTable.fulfilled, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutSuccess = true;
            state.statusInout = action.payload;
        });
        builder.addCase(getStatusInoutTable.rejected, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutError = true;
            state.messageStatusInout = action.payload;
        })

        // create StatusInout 
        builder.addCase(createStatusInout.pending, (state) => {
            state.isStatusInoutLoading = true;
        });
        builder.addCase(createStatusInout.fulfilled, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutSuccess = true;
            state.messageStatusInout = action.payload;
        });
        builder.addCase(createStatusInout.rejected, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutError = true;
            state.messageStatusInout = action.payload;
        })

        // create StatusInout 
        builder.addCase(updateStatusInout.pending, (state) => {
            state.isStatusInoutLoading = true;
        });
        builder.addCase(updateStatusInout.fulfilled, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutSuccess = true;
            state.messageStatusInout = action.payload;
        });
        builder.addCase(updateStatusInout.rejected, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutError = true;
            state.messageStatusInout = action.payload;
        })

        // create StatusInout 
        builder.addCase(deleteStatusInout.pending, (state) => {
            state.isStatusInoutLoading = true;
        });
        builder.addCase(deleteStatusInout.fulfilled, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutSuccess = true;
            state.messageStatusInout = action.payload;
        });
        builder.addCase(deleteStatusInout.rejected, (state, action) => {
            state.isStatusInoutLoading = false;
            state.isStatusInoutError = true;
            state.messageStatusInout = action.payload;
        })
    }
})

export const {resetStatusInout} = statusInoutSlice.actions;
export default statusInoutSlice.reducer;