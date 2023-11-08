import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    statusKoreksi: any;
    isStatusKoreksiError: boolean;
    isStatusKoreksiSuccess: boolean;
    isStatusKoreksiLoading: boolean;
    messageStatusKoreksi: any;
}

const initialState : variabel = {
    statusKoreksi: null,
    isStatusKoreksiError: false,
    isStatusKoreksiSuccess: false,
    isStatusKoreksiLoading: false,
    messageStatusKoreksi: ""
}

export const getStatusKoreksi : any = createAsyncThunk("getStatusKoreksi", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusKoreksi`,{
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

export const getStatusKoreksiById : any = createAsyncThunk("getStatusKoreksiById", async(statusKoreksi : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusKoreksi/${statusKoreksi.uuid}`,{
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

export const getStatusKoreksiTable : any = createAsyncThunk("getStatusKoreksiTable", async(statusKoreksi : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusKoreksi/${statusKoreksi.limit}&${statusKoreksi.page}`,{
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

export const createStatusKoreksi : any = createAsyncThunk("createStatusKoreksi", async(statusKoreksi : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/statusKoreksi`,{
            name: statusKoreksi.name,
            code: statusKoreksi.code,
            isActive: statusKoreksi.isActive
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

export const updateStatusKoreksi : any = createAsyncThunk("updateStatusKoreksi", async(statusKoreksi : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/statusKoreksi/${statusKoreksi.uuid}`,{
            name: statusKoreksi.name,
            code: statusKoreksi.code,
            isActive: statusKoreksi.isActive
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

export const deleteStatusKoreksi : any = createAsyncThunk("deleteStatusKoreksi", async(statusKoreksi : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/statusKoreksi/${statusKoreksi.uuid}`,{
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

export const statusKoreksiSlice = createSlice({
    name: "StatusKoreksi",
    initialState,
    reducers:{
        resetStatusKoreksi: (state) => initialState
    },
    extraReducers:(builder) => {
        // get StatusKoreksi
        builder.addCase(getStatusKoreksi.pending, (state) => {
            state.isStatusKoreksiLoading = true;
        });
        builder.addCase(getStatusKoreksi.fulfilled, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiSuccess = true;
            state.statusKoreksi = action.payload;
        });
        builder.addCase(getStatusKoreksi.rejected, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiError = true;
            state.messageStatusKoreksi = action.payload;
        })

        // get StatusKoreksi by id
        builder.addCase(getStatusKoreksiById.pending, (state) => {
            state.isStatusKoreksiLoading = true;
        });
        builder.addCase(getStatusKoreksiById.fulfilled, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiSuccess = true;
            state.statusKoreksi = action.payload;
        });
        builder.addCase(getStatusKoreksiById.rejected, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiError = true;
            state.messageStatusKoreksi = action.payload;
        })


        // get StatusKoreksi table
        builder.addCase(getStatusKoreksiTable.pending, (state) => {
            state.isStatusKoreksiLoading = true;
        });
        builder.addCase(getStatusKoreksiTable.fulfilled, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiSuccess = true;
            state.statusKoreksi = action.payload;
        });
        builder.addCase(getStatusKoreksiTable.rejected, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiError = true;
            state.messageStatusKoreksi = action.payload;
        })

        // create StatusKoreksi 
        builder.addCase(createStatusKoreksi.pending, (state) => {
            state.isStatusKoreksiLoading = true;
        });
        builder.addCase(createStatusKoreksi.fulfilled, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiSuccess = true;
            state.messageStatusKoreksi = action.payload;
        });
        builder.addCase(createStatusKoreksi.rejected, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiError = true;
            state.messageStatusKoreksi = action.payload;
        })

        // create StatusKoreksi 
        builder.addCase(updateStatusKoreksi.pending, (state) => {
            state.isStatusKoreksiLoading = true;
        });
        builder.addCase(updateStatusKoreksi.fulfilled, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiSuccess = true;
            state.messageStatusKoreksi = action.payload;
        });
        builder.addCase(updateStatusKoreksi.rejected, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiError = true;
            state.messageStatusKoreksi = action.payload;
        })

        // create StatusKoreksi 
        builder.addCase(deleteStatusKoreksi.pending, (state) => {
            state.isStatusKoreksiLoading = true;
        });
        builder.addCase(deleteStatusKoreksi.fulfilled, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiSuccess = true;
            state.messageStatusKoreksi = action.payload;
        });
        builder.addCase(deleteStatusKoreksi.rejected, (state, action) => {
            state.isStatusKoreksiLoading = false;
            state.isStatusKoreksiError = true;
            state.messageStatusKoreksi = action.payload;
        })
    }
})

export const {resetStatusKoreksi} = statusKoreksiSlice.actions;
export default statusKoreksiSlice.reducer;