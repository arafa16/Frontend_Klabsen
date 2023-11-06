import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    ganders: any;
    isGandersError: boolean;
    isGandersSuccess: boolean;
    isGandersLoading: boolean;
    messageGanders: any;
}

const initialState : variabel = {
    ganders: null,
    isGandersError: false,
    isGandersSuccess: false,
    isGandersLoading: false,
    messageGanders: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getGanders : any = createAsyncThunk("getGanders", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/ganders`,{
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

export const getGandersById : any = createAsyncThunk("getGandersById", async(ganders : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/ganders/${ganders.uuid}`,{
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

export const getGandersTable : any = createAsyncThunk("getGandersTable", async(ganders : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/ganders/${ganders.limit}&${ganders.page}`,{
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

export const createGanders : any = createAsyncThunk("createGanders", async(ganders : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/ganders`,{
            name: ganders.name,
            code: ganders.code,
            isActive: ganders.isActive
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

export const updateGanders : any = createAsyncThunk("updateGanders", async(ganders : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/ganders/${ganders.uuid}`,{
            name: ganders.name,
            code: ganders.code,
            isActive: ganders.isActive
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

export const deleteGanders : any = createAsyncThunk("deleteGanders", async(ganders : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/ganders/${ganders.uuid}`,{
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

export const gandersSlice = createSlice({
    name: "ganders",
    initialState,
    reducers:{
        resetGanders: (state) => initialState
    },
    extraReducers:(builder) => {
        // get ganders
        builder.addCase(getGanders.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(getGanders.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.ganders = action.payload;
        });
        builder.addCase(getGanders.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })

        // get ganders
        builder.addCase(getGandersById.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(getGandersById.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.ganders = action.payload;
        });
        builder.addCase(getGandersById.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })

        // get ganders table
        builder.addCase(getGandersTable.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(getGandersTable.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.ganders = action.payload;
        });
        builder.addCase(getGandersTable.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })

        // get ganders table
        builder.addCase(createGanders.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(createGanders.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.messageGanders = action.payload;
        });
        builder.addCase(createGanders.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })

        // get ganders table
        builder.addCase(updateGanders.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(updateGanders.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.messageGanders = action.payload;
        });
        builder.addCase(updateGanders.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })

        // get ganders table
        builder.addCase(deleteGanders.pending, (state) => {
            state.isGandersLoading = true;
        });
        builder.addCase(deleteGanders.fulfilled, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersSuccess = true;
            state.messageGanders = action.payload;
        });
        builder.addCase(deleteGanders.rejected, (state, action) => {
            state.isGandersLoading = false;
            state.isGandersError = true;
            state.messageGanders = action.payload;
        })
    }
})

export const {resetGanders} = gandersSlice.actions;
export default gandersSlice.reducer;