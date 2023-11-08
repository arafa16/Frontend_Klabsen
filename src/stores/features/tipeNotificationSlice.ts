import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    tipeNotifications: any;
    isTipeNotificationsError: boolean;
    isTipeNotificationsSuccess: boolean;
    isTipeNotificationsLoading: boolean;
    messageTipeNotifications: any;
}

const initialState : variabel = {
    tipeNotifications: null,
    isTipeNotificationsError: false,
    isTipeNotificationsSuccess: false,
    isTipeNotificationsLoading: false,
    messageTipeNotifications: ""
}

export const getTipeNotifications : any = createAsyncThunk("getTipeNotifications", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications`,{
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

export const getTipeNotificationsById : any = createAsyncThunk("getTipeNotificationsById", async(tipeNotifications : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${tipeNotifications.uuid}`,{
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

export const getTipeNotificationsTable : any = createAsyncThunk("getTipeNotificationsTable", async(tipeNotifications : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${tipeNotifications.limit}&${tipeNotifications.page}`,{
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

export const createTipeNotifications : any = createAsyncThunk("createTipeNotifications", async(tipeNotifications : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications`,{
            name: tipeNotifications.name,
            code: tipeNotifications.code,
            isActive: tipeNotifications.isActive
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

export const updateTipeNotifications : any = createAsyncThunk("updateTipeNotifications", async(tipeNotifications : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${tipeNotifications.uuid}`,{
            name: tipeNotifications.name,
            code: tipeNotifications.code,
            isActive: tipeNotifications.isActive
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

export const deleteTipeNotifications : any = createAsyncThunk("deleteTipeNotifications", async(tipeNotifications : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${tipeNotifications.uuid}`,{
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

export const tipeNotificationsSlice = createSlice({
    name: "tipeNotifications",
    initialState,
    reducers:{
        resetTipeNotifications: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipeNotifications
        builder.addCase(getTipeNotifications.pending, (state) => {
            state.isTipeNotificationsLoading = true;
        });
        builder.addCase(getTipeNotifications.fulfilled, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsSuccess = true;
            state.tipeNotifications = action.payload;
        });
        builder.addCase(getTipeNotifications.rejected, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsError = true;
            state.messageTipeNotifications = action.payload;
        })

        // get tipeNotifications by id
        builder.addCase(getTipeNotificationsById.pending, (state) => {
            state.isTipeNotificationsLoading = true;
        });
        builder.addCase(getTipeNotificationsById.fulfilled, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsSuccess = true;
            state.tipeNotifications = action.payload;
        });
        builder.addCase(getTipeNotificationsById.rejected, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsError = true;
            state.messageTipeNotifications = action.payload;
        })

        // get tipeNotifications table
        builder.addCase(getTipeNotificationsTable.pending, (state) => {
            state.isTipeNotificationsLoading = true;
        });
        builder.addCase(getTipeNotificationsTable.fulfilled, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsSuccess = true;
            state.tipeNotifications = action.payload;
        });
        builder.addCase(getTipeNotificationsTable.rejected, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsError = true;
            state.messageTipeNotifications = action.payload;
        })

        // create tipeNotifications
        builder.addCase(createTipeNotifications.pending, (state) => {
            state.isTipeNotificationsLoading = true;
        });
        builder.addCase(createTipeNotifications.fulfilled, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsSuccess = true;
            state.messageTipeNotifications = action.payload;
        });
        builder.addCase(createTipeNotifications.rejected, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsError = true;
            state.messageTipeNotifications = action.payload;
        })

        // update tipeNotifications 
        builder.addCase(updateTipeNotifications.pending, (state) => {
            state.isTipeNotificationsLoading = true;
        });
        builder.addCase(updateTipeNotifications.fulfilled, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsSuccess = true;
            state.messageTipeNotifications = action.payload;
        });
        builder.addCase(updateTipeNotifications.rejected, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsError = true;
            state.messageTipeNotifications = action.payload;
        })

        // delete tipeNotifications 
        builder.addCase(deleteTipeNotifications.pending, (state) => {
            state.isTipeNotificationsLoading = true;
        });
        builder.addCase(deleteTipeNotifications.fulfilled, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsSuccess = true;
            state.messageTipeNotifications = action.payload;
        });
        builder.addCase(deleteTipeNotifications.rejected, (state, action) => {
            state.isTipeNotificationsLoading = false;
            state.isTipeNotificationsError = true;
            state.messageTipeNotifications = action.payload;
        });
    }
})

export const {resetTipeNotifications} = tipeNotificationsSlice.actions;
export default tipeNotificationsSlice.reducer;