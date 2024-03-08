import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    tipeEvents: any;
    isTipeEventsError: boolean;
    isTipeEventsSuccess: boolean;
    isTipeEventsLoading: boolean;
    messageTipeEvents: any;
}

const initialState : variabel = {
    tipeEvents: null,
    isTipeEventsError: false,
    isTipeEventsSuccess: false,
    isTipeEventsLoading: false,
    messageTipeEvents: ""
}

export const getTipeEvents : any = createAsyncThunk("getTipeEvents", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents`,{
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

export const getTipeEventsById : any = createAsyncThunk("getTipeEventsById", async(tipeEvents : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/`+tipeEvents.id,{
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

export const getTipeEventsTable : any = createAsyncThunk("getTipeEventsTable", async(tipeEvents : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/table/${tipeEvents.limit}&${tipeEvents.page}`,{
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

export const createTipeEvents : any = createAsyncThunk("createTipeEvents", async(tipeEvents : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents`,{
            name: tipeEvents.name,
            code: tipeEvents.code,
            isActive: tipeEvents.isActive
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

export const updateTipeEvents : any = createAsyncThunk("updateTipeEvents", async(tipeEvents : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/`+tipeEvents.id,{
            name: tipeEvents.name,
            code: tipeEvents.code,
            isActive: tipeEvents.isActive
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

export const deleteTipeEvents : any = createAsyncThunk("deleteTipeEvents", async(tipeEvents : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipeEvents/`+tipeEvents.id,{
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

export const tipeEventsSlice = createSlice({
    name: "tipeEvents",
    initialState,
    reducers:{
        resetTipeEvents: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipeNotifications
        builder.addCase(getTipeEvents.pending, (state) => {
            state.isTipeEventsLoading = true;
        });
        builder.addCase(getTipeEvents.fulfilled, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsSuccess = true;
            state.tipeEvents = action.payload;
        });
        builder.addCase(getTipeEvents.rejected, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsError = true;
            state.messageTipeEvents = action.payload;
        })

        // get tipeNotifications
        builder.addCase(getTipeEventsById.pending, (state) => {
            state.isTipeEventsLoading = true;
        });
        builder.addCase(getTipeEventsById.fulfilled, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsSuccess = true;
            state.tipeEvents = action.payload;
        });
        builder.addCase(getTipeEventsById.rejected, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsError = true;
            state.messageTipeEvents = action.payload;
        })

        // get tipeNotifications
        builder.addCase(getTipeEventsTable.pending, (state) => {
            state.isTipeEventsLoading = true;
        });
        builder.addCase(getTipeEventsTable.fulfilled, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsSuccess = true;
            state.tipeEvents = action.payload;
        });
        builder.addCase(getTipeEventsTable.rejected, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsError = true;
            state.messageTipeEvents = action.payload;
        })

        // get tipeNotifications
        builder.addCase(createTipeEvents.pending, (state) => {
            state.isTipeEventsLoading = true;
        });
        builder.addCase(createTipeEvents.fulfilled, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsSuccess = true;
            state.messageTipeEvents = action.payload;
        });
        builder.addCase(createTipeEvents.rejected, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsError = true;
            state.messageTipeEvents = action.payload;
        })

        // update tipeNotifications
        builder.addCase(updateTipeEvents.pending, (state) => {
            state.isTipeEventsLoading = true;
        });
        builder.addCase(updateTipeEvents.fulfilled, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsSuccess = true;
            state.messageTipeEvents = action.payload;
        });
        builder.addCase(updateTipeEvents.rejected, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsError = true;
            state.messageTipeEvents = action.payload;
        })

        // update tipeNotifications
        builder.addCase(deleteTipeEvents.pending, (state) => {
            state.isTipeEventsLoading = true;
        });
        builder.addCase(deleteTipeEvents.fulfilled, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsSuccess = true;
            state.messageTipeEvents = action.payload;
        });
        builder.addCase(deleteTipeEvents.rejected, (state, action) => {
            state.isTipeEventsLoading = false;
            state.isTipeEventsError = true;
            state.messageTipeEvents = action.payload;
        })

    }
})

export const {resetTipeEvents} = tipeEventsSlice.actions;
export default tipeEventsSlice.reducer;