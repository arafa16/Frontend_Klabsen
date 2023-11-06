import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    groups: any;
    isGroupsError: boolean;
    isGroupsSuccess: boolean;
    isGroupsLoading: boolean;
    messageGroups: any;
}

const initialState : variabel = {
    groups: null,
    isGroupsError: false,
    isGroupsSuccess: false,
    isGroupsLoading: false,
    messageGroups: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getGroups : any = createAsyncThunk("getGroups", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/groups`,{
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

export const getGroupsById : any = createAsyncThunk("getGroupsById", async(groups : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/groups/${groups.uuid}`,{
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

export const getGroupsTable : any = createAsyncThunk("getGroupsTable", async(groups : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/groups/${groups.limit}&${groups.page}`,{
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

export const createGroups : any = createAsyncThunk("creatGroups", async(groups : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/groups`,{
            name: groups.name,
            code: groups.code,
            isActive: groups.isActive
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

export const updateGroups : any = createAsyncThunk("updateGroups", async(groups : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/groups/${groups.uuid}`,{
            name: groups.name,
            code: groups.code,
            isActive: groups.isActive
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

export const deleteGroups : any = createAsyncThunk("deleteGroups", async(groups : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/groups/${groups.uuid}`,{
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

export const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers:{
        resetGroups: (state) => initialState
    },
    extraReducers:(builder) => {
        // get groups
        builder.addCase(getGroups.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(getGroups.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.groups = action.payload;
        });
        builder.addCase(getGroups.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })

        // get groups
        builder.addCase(getGroupsTable.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(getGroupsTable.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.groups = action.payload;
        });
        builder.addCase(getGroupsTable.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })

        // get groups by id
        builder.addCase(getGroupsById.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(getGroupsById.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.groups = action.payload;
        });
        builder.addCase(getGroupsById.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })

        // create groups
        builder.addCase(createGroups.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(createGroups.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.messageGroups = action.payload;
        });
        builder.addCase(createGroups.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })

        // update groups
        builder.addCase(updateGroups.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(updateGroups.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.messageGroups = action.payload;
        });
        builder.addCase(updateGroups.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })

        // delete groups
        builder.addCase(deleteGroups.pending, (state) => {
            state.isGroupsLoading = true;
        });
        builder.addCase(deleteGroups.fulfilled, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsSuccess = true;
            state.messageGroups = action.payload;
        });
        builder.addCase(deleteGroups.rejected, (state, action) => {
            state.isGroupsLoading = false;
            state.isGroupsError = true;
            state.messageGroups = action.payload;
        })
    }
})

export const {resetGroups} = groupsSlice.actions;
export default groupsSlice.reducer;