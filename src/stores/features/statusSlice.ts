import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    status: any;
    isStatusError: boolean;
    isStatusSuccess: boolean;
    isStatusLoading: boolean;
    messageStatus: any;
}

const initialState : variabel = {
    status: null,
    isStatusError: false,
    isStatusSuccess: false,
    isStatusLoading: false,
    messageStatus: ""
}

export const getStatus : any = createAsyncThunk("getStatus", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status`,{
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

export const getStatusById : any = createAsyncThunk("getStatusById", async(status : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status/${status.uuid}`,{
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

export const getStatusTable : any = createAsyncThunk("getStatusTable", async(status : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/status/${status.limit}&${status.page}`,{
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

export const createStatus : any = createAsyncThunk("createStatus", async(status : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/status`,{
            name: status.name,
            code: status.code,
            isActive: status.isActive
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

export const updateStatus : any = createAsyncThunk("updateStatus", async(status : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/status/${status.uuid}`,{
            name: status.name,
            code: status.code,
            isActive: status.isActive
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

export const deleteStatus : any = createAsyncThunk("deleteStatus", async(status : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/status/${status.uuid}`,{
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

export const statusSlice = createSlice({
    name: "Status",
    initialState,
    reducers:{
        resetStatus: (state) => initialState
    },
    extraReducers:(builder) => {
        // get status
        builder.addCase(getStatus.pending, (state) => {
            state.isStatusLoading = true;
        });
        builder.addCase(getStatus.fulfilled, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusSuccess = true;
            state.status = action.payload;
        });
        builder.addCase(getStatus.rejected, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusError = true;
            state.messageStatus = action.payload;
        })

        // get status by id
        builder.addCase(getStatusById.pending, (state) => {
            state.isStatusLoading = true;
        });
        builder.addCase(getStatusById.fulfilled, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusSuccess = true;
            state.status = action.payload;
        });
        builder.addCase(getStatusById.rejected, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusError = true;
            state.messageStatus = action.payload;
        })


        // get status table
        builder.addCase(getStatusTable.pending, (state) => {
            state.isStatusLoading = true;
        });
        builder.addCase(getStatusTable.fulfilled, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusSuccess = true;
            state.status = action.payload;
        });
        builder.addCase(getStatusTable.rejected, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusError = true;
            state.messageStatus = action.payload;
        })

        // create status 
        builder.addCase(createStatus.pending, (state) => {
            state.isStatusLoading = true;
        });
        builder.addCase(createStatus.fulfilled, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusSuccess = true;
            state.messageStatus = action.payload;
        });
        builder.addCase(createStatus.rejected, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusError = true;
            state.messageStatus = action.payload;
        })

        // create status 
        builder.addCase(updateStatus.pending, (state) => {
            state.isStatusLoading = true;
        });
        builder.addCase(updateStatus.fulfilled, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusSuccess = true;
            state.messageStatus = action.payload;
        });
        builder.addCase(updateStatus.rejected, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusError = true;
            state.messageStatus = action.payload;
        })

        // create status 
        builder.addCase(deleteStatus.pending, (state) => {
            state.isStatusLoading = true;
        });
        builder.addCase(deleteStatus.fulfilled, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusSuccess = true;
            state.messageStatus = action.payload;
        });
        builder.addCase(deleteStatus.rejected, (state, action) => {
            state.isStatusLoading = false;
            state.isStatusError = true;
            state.messageStatus = action.payload;
        })
    }
})

export const {resetStatus} = statusSlice.actions;
export default statusSlice.reducer;