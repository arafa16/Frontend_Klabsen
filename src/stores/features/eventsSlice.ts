import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    events: any;
    isEventsError: boolean;
    isEventsSuccess: boolean;
    isEventsLoading: boolean;
    messageEvents: any;
}

const initialState : variabel = {
    events: null,
    isEventsError: false,
    isEventsSuccess: false,
    isEventsLoading: false,
    messageEvents: ""
}

export const getEvents : any = createAsyncThunk("getEvents", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/events`,{
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

export const getEventsById : any = createAsyncThunk("getEventsById", async(events : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/events/`+events.id,{
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

export const getEventsTable : any = createAsyncThunk("getEventsTable", async(tipeEvents : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/events/table/${tipeEvents.limit}&${tipeEvents.page}`,{
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

export const updateEvents : any = createAsyncThunk("updateEvents", async(events : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/events/`+events.id,{
            name: events.name,
            tanggalMulai: events.tanggalMulai,
            tanggalSelesai: events.tanggalSelesai,
            tipeEventId: events.tipeEventId,
            code: events.code,
            isActive: events.isActive
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

export const deleteEvents : any = createAsyncThunk("deleteEvents", async(events : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/events/`+events.id,{
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

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers:{
        resetEvents: (state) => initialState
    },
    extraReducers:(builder) => {
        // get events
        builder.addCase(getEvents.pending, (state) => {
            state.isEventsLoading = true;
        });
        builder.addCase(getEvents.fulfilled, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsSuccess = true;
            state.events = action.payload;
        });
        builder.addCase(getEvents.rejected, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsError = true;
            state.messageEvents = action.payload;
        })

         // get events
         builder.addCase(getEventsById.pending, (state) => {
            state.isEventsLoading = true;
        });
        builder.addCase(getEventsById.fulfilled, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsSuccess = true;
            state.events = action.payload;
        });
        builder.addCase(getEventsById.rejected, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsError = true;
            state.messageEvents = action.payload;
        })

        // get events table
        builder.addCase(getEventsTable.pending, (state) => {
            state.isEventsLoading = true;
        });
        builder.addCase(getEventsTable.fulfilled, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsSuccess = true;
            state.events = action.payload;
        });
        builder.addCase(getEventsTable.rejected, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsError = true;
            state.messageEvents = action.payload;
        })

        // get events table
        builder.addCase(updateEvents.pending, (state) => {
            state.isEventsLoading = true;
        });
        builder.addCase(updateEvents.fulfilled, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsSuccess = true;
            state.messageEvents = action.payload;
        });
        builder.addCase(updateEvents.rejected, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsError = true;
            state.messageEvents = action.payload;
        })

        // deleteEvents
        builder.addCase(deleteEvents.pending, (state) => {
            state.isEventsLoading = true;
        });
        builder.addCase(deleteEvents.fulfilled, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsSuccess = true;
            state.messageEvents = action.payload;
        });
        builder.addCase(deleteEvents.rejected, (state, action) => {
            state.isEventsLoading = false;
            state.isEventsError = true;
            state.messageEvents = action.payload;
        })

    }
})

export const {resetEvents} = eventsSlice.actions;
export default eventsSlice.reducer;