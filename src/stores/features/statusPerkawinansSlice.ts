import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    statusPerkawinans: any;
    isStatusPerkawinansError: boolean;
    isStatusPerkawinansSuccess: boolean;
    isStatusPerkawinansLoading: boolean;
    messageStatusPerkawinans: any;
}

const initialState : variabel = {
    statusPerkawinans: null,
    isStatusPerkawinansError: false,
    isStatusPerkawinansSuccess: false,
    isStatusPerkawinansLoading: false,
    messageStatusPerkawinans: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getStatusPerkawinans : any = createAsyncThunk("getStatusPerkawinans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans`,{
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

export const getStatusPerkawinansById : any = createAsyncThunk("getStatusPerkawinansById", async(statusPerkawinans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans/${statusPerkawinans.uuid}`,{
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

export const getStatusPerkawinansTable : any = createAsyncThunk("getStatusPerkawinansTable", async(statusPerkawinans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans/${statusPerkawinans.limit}&${statusPerkawinans.page}`,{
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

export const createStatusPerkawinans : any = createAsyncThunk("createStatusPerkawinans", async(statusPerkawinans : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans`,{
            name: statusPerkawinans.name,
            code: statusPerkawinans.code,
            isActive: statusPerkawinans.isActive
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

export const updateStatusPerkawinans : any = createAsyncThunk("updateStatusPerkawinans", async(statusPerkawinans : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans/${statusPerkawinans.uuid}`,{
            name: statusPerkawinans.name,
            code: statusPerkawinans.code,
            isActive: statusPerkawinans.isActive
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

export const deleteStatusPerkawinans : any = createAsyncThunk("deleteStatusPerkawinans", async(statusPerkawinans : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/statusPerkawinans/${statusPerkawinans.uuid}`,{
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

export const statusPerkawinansSlice = createSlice({
    name: "StatusPerkawinans",
    initialState,
    reducers:{
        resetStatusPerkawinans: (state) => initialState
    },
    extraReducers:(builder) => {
        // getstatus perkawinan
        builder.addCase(getStatusPerkawinans.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(getStatusPerkawinans.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.statusPerkawinans = action.payload;
        });
        builder.addCase(getStatusPerkawinans.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })

        // get status perkawinan by id
        builder.addCase(getStatusPerkawinansById.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(getStatusPerkawinansById.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.statusPerkawinans = action.payload;
        });
        builder.addCase(getStatusPerkawinansById.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })

        // get status perkawinan
        builder.addCase(getStatusPerkawinansTable.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(getStatusPerkawinansTable.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.statusPerkawinans = action.payload;
        });
        builder.addCase(getStatusPerkawinansTable.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })

        // create status perkawinan
        builder.addCase(createStatusPerkawinans.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(createStatusPerkawinans.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.messageStatusPerkawinans = action.payload;
        });
        builder.addCase(createStatusPerkawinans.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })

        // update status perkawinan
        builder.addCase(updateStatusPerkawinans.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(updateStatusPerkawinans.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.messageStatusPerkawinans = action.payload;
        });
        builder.addCase(updateStatusPerkawinans.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })

        // update status perkawinan
        builder.addCase(deleteStatusPerkawinans.pending, (state) => {
            state.isStatusPerkawinansLoading = true;
        });
        builder.addCase(deleteStatusPerkawinans.fulfilled, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansSuccess = true;
            state.messageStatusPerkawinans = action.payload;
        });
        builder.addCase(deleteStatusPerkawinans.rejected, (state, action) => {
            state.isStatusPerkawinansLoading = false;
            state.isStatusPerkawinansError = true;
            state.messageStatusPerkawinans = action.payload;
        })
    }
})

export const {resetStatusPerkawinans} = statusPerkawinansSlice.actions;
export default statusPerkawinansSlice.reducer;