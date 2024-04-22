import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    jamOperasionalGroups: any;
    isJamOperasionalGroupsError: boolean;
    isJamOperasionalGroupsSuccess: boolean;
    isJamOperasionalGroupsLoading: boolean;
    messageJamOperasionalGroups: any;
}

const initialState : variabel = {
    jamOperasionalGroups: null,
    isJamOperasionalGroupsError: false,
    isJamOperasionalGroupsSuccess: false,
    isJamOperasionalGroupsLoading: false,
    messageJamOperasionalGroups: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getJamOperasionalGroups : any = createAsyncThunk("getJamOperasionalGroups", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionalGroups`,{
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

export const getJamOperasionalGroupsTable : any = createAsyncThunk("getJamOperasionalGroupsTable", async(jamOperasionalGroups : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionalGroups/table/${jamOperasionalGroups.limit}&${jamOperasionalGroups.page}`,{
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

export const getJamOperasionalGroupsById : any = createAsyncThunk("getJamOperasionalGroupsById", async(jamOperasionalGroups : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionalGroups/${jamOperasionalGroups.uuid}`,{
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

export const createJamOperasionalGroups: any = createAsyncThunk("createJamOperasionalGroups", async(jamOperasionalGroups : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionalGroups`,{
            name: jamOperasionalGroups.name,
            keterangan: jamOperasionalGroups.keterangan,
            code: jamOperasionalGroups.code,
            isActive: jamOperasionalGroups.isActive
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

export const updateJamOperasionalGroups: any = createAsyncThunk("updateJamOperasionalGroups", async(jamOperasionalGroups : any, thunkAPI) => {

    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionalGroups/${jamOperasionalGroups.uuid}`,{
            name: jamOperasionalGroups.name,
            keterangan: jamOperasionalGroups.keterangan,
            code: jamOperasionalGroups.code,
            isActive: jamOperasionalGroups.isActive
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

export const deleteJamOperasionalGroups: any = createAsyncThunk("deleteJamOperasionalGroups", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/jamOperasionalGroups/${jamOperasionals.uuid}`,{
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

export const jamOperasionalGroupsSlice = createSlice({
    name: "jamOperasionalGroups",
    initialState,
    reducers:{
        resetJamOperasionalGroups: (state) => initialState
    },
    extraReducers:(builder) => {
        // get jam operasional
        builder.addCase(getJamOperasionalGroups.pending, (state) => {
            state.isJamOperasionalGroupsLoading = true;
        });
        builder.addCase(getJamOperasionalGroups.fulfilled, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsSuccess = true;
            state.jamOperasionalGroups = action.payload;
        });
        builder.addCase(getJamOperasionalGroups.rejected, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsError = true;
            state.messageJamOperasionalGroups = action.payload;
        })

        // get jam operasional by id
        builder.addCase(getJamOperasionalGroupsById.pending, (state) => {
            state.isJamOperasionalGroupsLoading = true;
        });
        builder.addCase(getJamOperasionalGroupsById.fulfilled, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsSuccess = true;
            state.jamOperasionalGroups = action.payload;
        });
        builder.addCase(getJamOperasionalGroupsById.rejected, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsError = true;
            state.messageJamOperasionalGroups = action.payload;
        })

        // get jam operasional table
        builder.addCase(getJamOperasionalGroupsTable.pending, (state) => {
            state.isJamOperasionalGroupsLoading = true;
        });
        builder.addCase(getJamOperasionalGroupsTable.fulfilled, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsSuccess = true;
            state.jamOperasionalGroups = action.payload;
        });
        builder.addCase(getJamOperasionalGroupsTable.rejected, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsError = true;
            state.messageJamOperasionalGroups = action.payload;
        })

        // create jam operasional 
        builder.addCase(createJamOperasionalGroups.pending, (state) => {
            state.isJamOperasionalGroupsLoading = true;
        });
        builder.addCase(createJamOperasionalGroups.fulfilled, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsSuccess = true;
            state.messageJamOperasionalGroups = action.payload;
        });
        builder.addCase(createJamOperasionalGroups.rejected, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsError = true;
            state.messageJamOperasionalGroups = action.payload;
        })

        // update jam operasional 
        builder.addCase(updateJamOperasionalGroups.pending, (state) => {
            state.isJamOperasionalGroupsLoading = true;
        });
        builder.addCase(updateJamOperasionalGroups.fulfilled, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsSuccess = true;
            state.messageJamOperasionalGroups = action.payload;
        });
        builder.addCase(updateJamOperasionalGroups.rejected, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsError = true;
            state.messageJamOperasionalGroups = action.payload;
        })

        // delete jam operasional 
        builder.addCase(deleteJamOperasionalGroups.pending, (state) => {
            state.isJamOperasionalGroupsLoading = true;
        });
        builder.addCase(deleteJamOperasionalGroups.fulfilled, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsSuccess = true;
            state.messageJamOperasionalGroups = action.payload;
        });
        builder.addCase(deleteJamOperasionalGroups.rejected, (state, action) => {
            state.isJamOperasionalGroupsLoading = false;
            state.isJamOperasionalGroupsError = true;
            state.messageJamOperasionalGroups = action.payload;
        })
    }
})

export const {resetJamOperasionalGroups} = jamOperasionalGroupsSlice.actions;
export default jamOperasionalGroupsSlice.reducer;