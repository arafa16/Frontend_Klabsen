import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    golonganDarahs: any;
    isGolonganDarahsError: boolean;
    isGolonganDarahsSuccess: boolean;
    isGolonganDarahsLoading: boolean;
    messageGolonganDarahs: any;
}

const initialState : variabel = {
    golonganDarahs: null,
    isGolonganDarahsError: false,
    isGolonganDarahsSuccess: false,
    isGolonganDarahsLoading: false,
    messageGolonganDarahs: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getGolonganDarahs : any = createAsyncThunk("getGolonganDarahs", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs`,{
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

export const getGolonganDarahsById : any = createAsyncThunk("getGolonganDarahsById", async(golonganDarahs : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${golonganDarahs.uuid}`,{
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

export const getGolonganDarahsTable : any = createAsyncThunk("getGolonganDarahsTable", async(golonganDarahs : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${golonganDarahs.limit}&${golonganDarahs.page}`,{
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

export const createGolonganDarahs : any = createAsyncThunk("createGolonganDarahs", async(golonganDarahs : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs`,{
            name: golonganDarahs.name,
            code: golonganDarahs.code,
            isActive: golonganDarahs.isActive
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

export const updateGolonganDarahs : any = createAsyncThunk("updateGolonganDarahs", async(golonganDarahs : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${golonganDarahs.uuid}`,{
            name: golonganDarahs.name,
            code: golonganDarahs.code,
            isActive: golonganDarahs.isActive
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

export const deleteGolonganDarahs : any = createAsyncThunk("deleteGolonganDarahs", async(golonganDarahs : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/golonganDarahs/${golonganDarahs.uuid}`,{
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

export const golonganDarahsSlice = createSlice({
    name: "golonganDarahs",
    initialState,
    reducers:{
        resetGolonganDarahs: (state) => initialState
    },
    extraReducers:(builder) => {
        // get golongan darah
        builder.addCase(getGolonganDarahs.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(getGolonganDarahs.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.golonganDarahs = action.payload;
        });
        builder.addCase(getGolonganDarahs.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })

        // get golongan darah table
        builder.addCase(getGolonganDarahsTable.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(getGolonganDarahsTable.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.golonganDarahs = action.payload;
        });
        builder.addCase(getGolonganDarahsTable.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })

        // get golongan darah by id
        builder.addCase(getGolonganDarahsById.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(getGolonganDarahsById.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.golonganDarahs = action.payload;
        });
        builder.addCase(getGolonganDarahsById.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })

        // create golongan darah
        builder.addCase(createGolonganDarahs.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(createGolonganDarahs.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.messageGolonganDarahs = action.payload;
        });
        builder.addCase(createGolonganDarahs.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })

        // update golongan darah
        builder.addCase(updateGolonganDarahs.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(updateGolonganDarahs.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.messageGolonganDarahs = action.payload;
        });
        builder.addCase(updateGolonganDarahs.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })

        // delete golongan darah
        builder.addCase(deleteGolonganDarahs.pending, (state) => {
            state.isGolonganDarahsLoading = true;
        });
        builder.addCase(deleteGolonganDarahs.fulfilled, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsSuccess = true;
            state.messageGolonganDarahs = action.payload;
        });
        builder.addCase(deleteGolonganDarahs.rejected, (state, action) => {
            state.isGolonganDarahsLoading = false;
            state.isGolonganDarahsError = true;
            state.messageGolonganDarahs = action.payload;
        })
    }
})

export const {resetGolonganDarahs} = golonganDarahsSlice.actions;
export default golonganDarahsSlice.reducer;