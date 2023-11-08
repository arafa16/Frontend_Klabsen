import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    pelanggarans: any;
    isPelanggaransError: boolean;
    isPelanggaransSuccess: boolean;
    isPelanggaransLoading: boolean;
    messagePelanggarans: any;
}

const initialState : variabel = {
    pelanggarans: null,
    isPelanggaransError: false,
    isPelanggaransSuccess: false,
    isPelanggaransLoading: false,
    messagePelanggarans: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getPelanggarans : any = createAsyncThunk("getPelanggarans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggarans`,{
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

export const getPelanggaransById : any = createAsyncThunk("getPelanggaransById", async(pelanggarans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggarans/`+pelanggarans.uuid,{
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

export const getPelanggaransTable : any = createAsyncThunk("getPelanggaransTable", async(pelanggarans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggarans/${pelanggarans.limit}&${pelanggarans.page}`,{
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

export const createPelanggarans : any = createAsyncThunk("createPelanggarans", async(pelanggarans : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggarans`,{
            name: pelanggarans.name,
            code: pelanggarans.code,
            isActive: pelanggarans.isActive
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

export const updatePelanggarans : any = createAsyncThunk("updatePelanggarans", async(pelanggarans : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggarans/`+pelanggarans.uuid,{
            name: pelanggarans.name,
            code: pelanggarans.code,
            isActive: pelanggarans.isActive
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

export const deletePelanggarans : any = createAsyncThunk("deletePelanggarans", async(pelanggarans : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/pelanggarans/`+pelanggarans.uuid,{
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

export const pelanggaransSlice = createSlice({
    name: "Pelanggarans",
    initialState,
    reducers:{
        resetPelanggarans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get pendidikan
        builder.addCase(getPelanggarans.pending, (state) => {
            state.isPelanggaransLoading = true;
        });
        builder.addCase(getPelanggarans.fulfilled, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransSuccess = true;
            state.pelanggarans = action.payload;
        });
        builder.addCase(getPelanggarans.rejected, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransError = true;
            state.messagePelanggarans = action.payload;
        });

        // get pendidikan by id
        builder.addCase(getPelanggaransById.pending, (state) => {
            state.isPelanggaransLoading = true;
        });
        builder.addCase(getPelanggaransById.fulfilled, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransSuccess = true;
            state.pelanggarans = action.payload;
        });
        builder.addCase(getPelanggaransById.rejected, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransError = true;
            state.messagePelanggarans = action.payload;
        });

        // get pendidikan table
        builder.addCase(getPelanggaransTable.pending, (state) => {
            state.isPelanggaransLoading = true;
        });
        builder.addCase(getPelanggaransTable.fulfilled, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransSuccess = true;
            state.pelanggarans = action.payload;
        });
        builder.addCase(getPelanggaransTable.rejected, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransError = true;
            state.messagePelanggarans = action.payload;
        })

        // create pendidikan
        builder.addCase(createPelanggarans.pending, (state) => {
            state.isPelanggaransLoading = true;
        });
        builder.addCase(createPelanggarans.fulfilled, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransSuccess = true;
            state.messagePelanggarans = action.payload;
        });
        builder.addCase(createPelanggarans.rejected, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransError = true;
            state.messagePelanggarans = action.payload;
        })

        // delete pendidikan
        builder.addCase(deletePelanggarans.pending, (state) => {
            state.isPelanggaransLoading = true;
        });
        builder.addCase(deletePelanggarans.fulfilled, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransSuccess = true;
            state.messagePelanggarans = action.payload;
        });
        builder.addCase(deletePelanggarans.rejected, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransError = true;
            state.messagePelanggarans = action.payload;
        })

        // update pendidikan
        builder.addCase(updatePelanggarans.pending, (state) => {
            state.isPelanggaransLoading = true;
        });
        builder.addCase(updatePelanggarans.fulfilled, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransSuccess = true;
            state.messagePelanggarans = action.payload;
        });
        builder.addCase(updatePelanggarans.rejected, (state, action) => {
            state.isPelanggaransLoading = false;
            state.isPelanggaransError = true;
            state.messagePelanggarans = action.payload;
        })
    }
})

export const {resetPelanggarans} = pelanggaransSlice.actions;
export default pelanggaransSlice.reducer;