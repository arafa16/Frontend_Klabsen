import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    jabatans: any;
    isJabatansError: boolean;
    isJabatansSuccess: boolean;
    isJabatansLoading: boolean;
    messageJabatans: any;
}

const initialState : variabel = {
    jabatans: null,
    isJabatansError: false,
    isJabatansSuccess: false,
    isJabatansLoading: false,
    messageJabatans: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getJabatans : any = createAsyncThunk("getJabatans", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jabatans`,{
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

export const getJabatansTable : any = createAsyncThunk("getJabatansTable", async(jabatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jabatans/${jabatans.limit}&${jabatans.page}`,{
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

export const getJabatansById : any = createAsyncThunk("getJabatansById", async(jabatans : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jabatans/`+jabatans.uuid,{
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

export const updateJabatans : any = createAsyncThunk("updateJabatans", async(jabatans : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/jabatans/`+jabatans.uuid,{
            name: jabatans.name,
            code: jabatans.code,
            isActive: jabatans.isActive
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

export const createJabatans : any = createAsyncThunk("createJabatans", async(jabatans : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/jabatans`,{
            name: jabatans.name,
            code: jabatans.code,
            isActive: jabatans.isActive
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

export const deleteJabatans : any = createAsyncThunk("deleteJabatans", async(jabatans : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/jabatans/${jabatans.uuid}`,{
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

export const jabatansSlice = createSlice({
    name: "jabatans",
    initialState,
    reducers:{
        resetJabatans: (state) => initialState
    },
    extraReducers:(builder) => {
        // get jabatans
        builder.addCase(getJabatans.pending, (state) => {
            state.isJabatansLoading = true;
        });
        builder.addCase(getJabatans.fulfilled, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansSuccess = true;
            state.jabatans = action.payload;
        });
        builder.addCase(getJabatans.rejected, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansError = true;
            state.messageJabatans = action.payload;
        })

        // get jabatans table
        builder.addCase(getJabatansTable.pending, (state) => {
            state.isJabatansLoading = true;
        });
        builder.addCase(getJabatansTable.fulfilled, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansSuccess = true;
            state.jabatans = action.payload;
        });
        builder.addCase(getJabatansTable.rejected, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansError = true;
            state.messageJabatans = action.payload;
        })

        // get jabatans by id
        builder.addCase(getJabatansById.pending, (state) => {
            state.isJabatansLoading = true;
        });
        builder.addCase(getJabatansById.fulfilled, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansSuccess = true;
            state.jabatans = action.payload;
        });
        builder.addCase(getJabatansById.rejected, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansError = true;
            state.messageJabatans = action.payload;
        });

        // update jabatans
        builder.addCase(updateJabatans.pending, (state) => {
            state.isJabatansLoading = true;
        });
        builder.addCase(updateJabatans.fulfilled, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansSuccess = true;
            state.messageJabatans = action.payload;
        });
        builder.addCase(updateJabatans.rejected, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansError = true;
            state.messageJabatans = action.payload;
        })

        // create jabatans
        builder.addCase(createJabatans.pending, (state) => {
            state.isJabatansLoading = true;
        });
        builder.addCase(createJabatans.fulfilled, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansSuccess = true;
            state.messageJabatans = action.payload;
        });
        builder.addCase(createJabatans.rejected, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansError = true;
            state.messageJabatans = action.payload;
        })

        // delete jabatans
        builder.addCase(deleteJabatans.pending, (state) => {
            state.isJabatansLoading = true;
        });
        builder.addCase(deleteJabatans.fulfilled, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansSuccess = true;
            state.messageJabatans = action.payload;
        });
        builder.addCase(deleteJabatans.rejected, (state, action) => {
            state.isJabatansLoading = false;
            state.isJabatansError = true;
            state.messageJabatans = action.payload;
        })
    }
})

export const {resetJabatans} = jabatansSlice.actions;
export default jabatansSlice.reducer;