import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    pendapatans: any;
    isPendapatansError: boolean;
    isPendapatansSuccess: boolean;
    isPendapatansLoading: boolean;
    messagePendapatans: any;
}

const initialState : variabel = {
    pendapatans: null,
    isPendapatansError: false,
    isPendapatansSuccess: false,
    isPendapatansLoading: false,
    messagePendapatans: ""
}

export const getPendapatans : any = createAsyncThunk("getPendapatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatans`,{
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

export const getPendapatansById : any = createAsyncThunk("getPendapatansById", async(pendapatans : any, thunkAPI) => {

    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatans/${pendapatans.id}`,{
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

export const getPendapatansTable : any = createAsyncThunk("getPendapatansTable", async(pendapatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatans/${pendapatans.limit}&${pendapatans.page}&${pendapatans.search}/table`,{
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

export const getPendapatansTableById : any = createAsyncThunk("getPendapatansTableById", async(pendapatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendapatans/${pendapatans.id}&${pendapatans.type}&${pendapatans.limit}&${pendapatans.page}&${pendapatans.search}/tableById`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response, 'by id');
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const pendapatansSlice = createSlice({
    name: "pendapatans",
    initialState,
    reducers:{
        resetPendapatans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get Pendapatans
        builder.addCase(getPendapatans.pending, (state) => {
            state.isPendapatansLoading = true;
        });
        builder.addCase(getPendapatans.fulfilled, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansSuccess = true;
            state.pendapatans = action.payload;
        });
        builder.addCase(getPendapatans.rejected, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansError = true;
            state.messagePendapatans = action.payload;
        })

        // get Pendapatans by Id
        builder.addCase(getPendapatansById.pending, (state) => {
            state.isPendapatansLoading = true;
        });
        builder.addCase(getPendapatansById.fulfilled, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansSuccess = true;
            state.pendapatans = action.payload;
        });
        builder.addCase(getPendapatansById.rejected, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansError = true;
            state.messagePendapatans = action.payload;
        })

        // get Pendapatans table
        builder.addCase(getPendapatansTable.pending, (state) => {
            state.isPendapatansLoading = true;
        });
        builder.addCase(getPendapatansTable.fulfilled, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansSuccess = true;
            state.pendapatans = action.payload;
        });
        builder.addCase(getPendapatansTable.rejected, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansError = true;
            state.messagePendapatans = action.payload;
        })

        // get Pendapatans table by id
        builder.addCase(getPendapatansTableById.pending, (state) => {
            state.isPendapatansLoading = true;
        });
        builder.addCase(getPendapatansTableById.fulfilled, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansSuccess = true;
            state.pendapatans = action.payload;
        });
        builder.addCase(getPendapatansTableById.rejected, (state, action) => {
            state.isPendapatansLoading = false;
            state.isPendapatansError = true;
            state.messagePendapatans = action.payload;
        })
    }
})

export const {resetPendapatans} = pendapatansSlice.actions;
export default pendapatansSlice.reducer;