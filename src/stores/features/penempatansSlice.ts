import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    penempatans: any;
    isPenempatansError: boolean;
    isPenempatansSuccess: boolean;
    isPenempatansLoading: boolean;
    messagePenempatans: any;
}

const initialState : variabel = {
    penempatans: null,
    isPenempatansError: false,
    isPenempatansSuccess: false,
    isPenempatansLoading: false,
    messagePenempatans: ""
}

export const getPenempatans : any = createAsyncThunk("getPenempatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/penempatans`,{
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

export const getPenempatansTable : any = createAsyncThunk("getPenempatansTable", async(penempatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/penempatans/${penempatans.limit}&${penempatans.page}`,{
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

export const getPenempatansById : any = createAsyncThunk("getPenempatansById", async(penempatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/penempatans/`+penempatans.uuid,{
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

export const updatePenempatans : any = createAsyncThunk("updatePenempatans", async(penempatans : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/penempatans/`+penempatans.uuid, {
            name: penempatans.name,
            code: penempatans.code,
            isActive: penempatans.isActive
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

export const createPenempatans : any = createAsyncThunk("createPenempatans", async(penempatans : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/penempatans`, {
            name: penempatans.name,
            code: penempatans.code,
            isActive: penempatans.isActive
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

export const deletePenempatans : any = createAsyncThunk("deletePenempatans", async(penempatans : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/penempatans/${penempatans.uuid}`, {
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

export const penempatansSlice = createSlice({
    name: "penempatans",
    initialState,
    reducers:{
        resetPenempatans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get penempatans
        builder.addCase(getPenempatans.pending, (state) => {
            state.isPenempatansLoading = true;
        });
        builder.addCase(getPenempatans.fulfilled, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansSuccess = true;
            state.penempatans = action.payload;
        });
        builder.addCase(getPenempatans.rejected, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansError = true;
            state.messagePenempatans = action.payload;
        })

        // get penempatans table
        builder.addCase(getPenempatansTable.pending, (state) => {
            state.isPenempatansLoading = true;
        });
        builder.addCase(getPenempatansTable.fulfilled, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansSuccess = true;
            state.penempatans = action.payload;
        });
        builder.addCase(getPenempatansTable.rejected, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansError = true;
            state.messagePenempatans = action.payload;
        })

        // get penempatans by id
        builder.addCase(getPenempatansById.pending, (state) => {
            state.isPenempatansLoading = true;
        });
        builder.addCase(getPenempatansById.fulfilled, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansSuccess = true;
            state.penempatans = action.payload;
        });
        builder.addCase(getPenempatansById.rejected, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansError = true;
            state.messagePenempatans = action.payload;
        })

        // update penempatans
        builder.addCase(updatePenempatans.pending, (state) => {
            state.isPenempatansLoading = true;
        });
        builder.addCase(updatePenempatans.fulfilled, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansSuccess = true;
            state.messagePenempatans = action.payload;
        });
        builder.addCase(updatePenempatans.rejected, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansError = true;
            state.messagePenempatans = action.payload;
        })

        // create penempatans
        builder.addCase(createPenempatans.pending, (state) => {
            state.isPenempatansLoading = true;
        });
        builder.addCase(createPenempatans.fulfilled, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansSuccess = true;
            state.messagePenempatans = action.payload;
        });
        builder.addCase(createPenempatans.rejected, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansError = true;
            state.messagePenempatans = action.payload;
        })

        // delete penempatans
        builder.addCase(deletePenempatans.pending, (state) => {
            state.isPenempatansLoading = true;
        });
        builder.addCase(deletePenempatans.fulfilled, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansSuccess = true;
            state.messagePenempatans = action.payload;
        });
        builder.addCase(deletePenempatans.rejected, (state, action) => {
            state.isPenempatansLoading = false;
            state.isPenempatansError = true;
            state.messagePenempatans = action.payload;
        })
    }
})

export const {resetPenempatans} = penempatansSlice.actions;
export default penempatansSlice.reducer;