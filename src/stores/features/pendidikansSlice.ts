import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    pendidikans: any;
    isPendidikansError: boolean;
    isPendidikansSuccess: boolean;
    isPendidikansLoading: boolean;
    messagePendidikans: any;
}

const initialState : variabel = {
    pendidikans: null,
    isPendidikansError: false,
    isPendidikansSuccess: false,
    isPendidikansLoading: false,
    messagePendidikans: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getPendidikans : any = createAsyncThunk("getPendidikans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendidikans`,{
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

export const getPendidikansById : any = createAsyncThunk("getPendidikansById", async(pendidikans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendidikans/`+pendidikans.uuid,{
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

export const getPendidikansTable : any = createAsyncThunk("getPendidikansTable", async(pendidikans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pendidikans/${pendidikans.limit}&${pendidikans.page}`,{
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

export const createPendidikans : any = createAsyncThunk("createPendidikans", async(pendidikans : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/pendidikans`,{
            name: pendidikans.name,
            code: pendidikans.code,
            isActive: pendidikans.isActive
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

export const updatePendidikans : any = createAsyncThunk("updatePendidikans", async(pendidikans : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/pendidikans/`+pendidikans.uuid,{
            name: pendidikans.name,
            code: pendidikans.code,
            isActive: pendidikans.isActive
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

export const deletePendidikans : any = createAsyncThunk("deletePendidikans", async(pendidikans : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/pendidikans/`+pendidikans.uuid,{
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

export const pendidikansSlice = createSlice({
    name: "Pendidikans",
    initialState,
    reducers:{
        resetPendidikans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get pendidikan
        builder.addCase(getPendidikans.pending, (state) => {
            state.isPendidikansLoading = true;
        });
        builder.addCase(getPendidikans.fulfilled, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansSuccess = true;
            state.pendidikans = action.payload;
        });
        builder.addCase(getPendidikans.rejected, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansError = true;
            state.messagePendidikans = action.payload;
        });

        // get pendidikan by id
        builder.addCase(getPendidikansById.pending, (state) => {
            state.isPendidikansLoading = true;
        });
        builder.addCase(getPendidikansById.fulfilled, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansSuccess = true;
            state.pendidikans = action.payload;
        });
        builder.addCase(getPendidikansById.rejected, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansError = true;
            state.messagePendidikans = action.payload;
        });

        // get pendidikan table
        builder.addCase(getPendidikansTable.pending, (state) => {
            state.isPendidikansLoading = true;
        });
        builder.addCase(getPendidikansTable.fulfilled, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansSuccess = true;
            state.pendidikans = action.payload;
        });
        builder.addCase(getPendidikansTable.rejected, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansError = true;
            state.messagePendidikans = action.payload;
        })

        // create pendidikan
        builder.addCase(createPendidikans.pending, (state) => {
            state.isPendidikansLoading = true;
        });
        builder.addCase(createPendidikans.fulfilled, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansSuccess = true;
            state.messagePendidikans = action.payload;
        });
        builder.addCase(createPendidikans.rejected, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansError = true;
            state.messagePendidikans = action.payload;
        })

        // delete pendidikan
        builder.addCase(deletePendidikans.pending, (state) => {
            state.isPendidikansLoading = true;
        });
        builder.addCase(deletePendidikans.fulfilled, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansSuccess = true;
            state.messagePendidikans = action.payload;
        });
        builder.addCase(deletePendidikans.rejected, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansError = true;
            state.messagePendidikans = action.payload;
        })

        // update pendidikan
        builder.addCase(updatePendidikans.pending, (state) => {
            state.isPendidikansLoading = true;
        });
        builder.addCase(updatePendidikans.fulfilled, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansSuccess = true;
            state.messagePendidikans = action.payload;
        });
        builder.addCase(updatePendidikans.rejected, (state, action) => {
            state.isPendidikansLoading = false;
            state.isPendidikansError = true;
            state.messagePendidikans = action.payload;
        })
    }
})

export const {resetPendidikans} = pendidikansSlice.actions;
export default pendidikansSlice.reducer;