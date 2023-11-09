import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    jamOperasionals: any;
    isJamOperasionalsError: boolean;
    isJamOperasionalsSuccess: boolean;
    isJamOperasionalsLoading: boolean;
    messageJamOperasionals: any;
}

const initialState : variabel = {
    jamOperasionals: null,
    isJamOperasionalsError: false,
    isJamOperasionalsSuccess: false,
    isJamOperasionalsLoading: false,
    messageJamOperasionals: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getJamOperasionals : any = createAsyncThunk("getJamOperasionals", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals`,{
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

export const getJamOperasionalsTable : any = createAsyncThunk("getJamOperasionalsTable", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals/${jamOperasionals.limit}&${jamOperasionals.page}`,{
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

export const getJamOperasionalsById : any = createAsyncThunk("getJamOperasionalsById", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals/${jamOperasionals.uuid}`,{
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

export const createJamOperasionals: any = createAsyncThunk("createJamOperasionals", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals`,{
            name: jamOperasionals.name,
            jamMasuk: jamOperasionals.jamMasuk,
            jamPulang: jamOperasionals.jamPulang,
            keterangan: jamOperasionals.keterangan,
            code: jamOperasionals.code,
            isActive: jamOperasionals.isActive
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

export const updateJamOperasionals: any = createAsyncThunk("updateJamOperasionals", async(jamOperasionals : any, thunkAPI) => {
    console.log(jamOperasionals, 'jam operasional');
    
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals/${jamOperasionals.uuid}`,{
            name: jamOperasionals.name,
            jamMasuk: jamOperasionals.jamMasuk,
            jamPulang: jamOperasionals.jamPulang,
            keterangan: jamOperasionals.keterangan,
            code: jamOperasionals.code,
            isActive: jamOperasionals.isActive
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

export const deleteJamOperasionals: any = createAsyncThunk("deleteJamOperasionals", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionals/${jamOperasionals.uuid}`,{
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

export const jamOperasionalsSlice = createSlice({
    name: "jamOperasionals",
    initialState,
    reducers:{
        resetJamOperasionals: (state) => initialState
    },
    extraReducers:(builder) => {
        // get jam operasional
        builder.addCase(getJamOperasionals.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(getJamOperasionals.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.jamOperasionals = action.payload;
        });
        builder.addCase(getJamOperasionals.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })

        // get jam operasional by id
        builder.addCase(getJamOperasionalsById.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(getJamOperasionalsById.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.jamOperasionals = action.payload;
        });
        builder.addCase(getJamOperasionalsById.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })

        // get jam operasional table
        builder.addCase(getJamOperasionalsTable.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(getJamOperasionalsTable.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.jamOperasionals = action.payload;
        });
        builder.addCase(getJamOperasionalsTable.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })

        // create jam operasional 
        builder.addCase(createJamOperasionals.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(createJamOperasionals.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.messageJamOperasionals = action.payload;
        });
        builder.addCase(createJamOperasionals.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })

        // update jam operasional 
        builder.addCase(updateJamOperasionals.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(updateJamOperasionals.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.messageJamOperasionals = action.payload;
        });
        builder.addCase(updateJamOperasionals.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })

        // delete jam operasional 
        builder.addCase(deleteJamOperasionals.pending, (state) => {
            state.isJamOperasionalsLoading = true;
        });
        builder.addCase(deleteJamOperasionals.fulfilled, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsSuccess = true;
            state.messageJamOperasionals = action.payload;
        });
        builder.addCase(deleteJamOperasionals.rejected, (state, action) => {
            state.isJamOperasionalsLoading = false;
            state.isJamOperasionalsError = true;
            state.messageJamOperasionals = action.payload;
        })
    }
})

export const {resetJamOperasionals} = jamOperasionalsSlice.actions;
export default jamOperasionalsSlice.reducer;