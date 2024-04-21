import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    mesinAbsens: any;
    mesinAbsensTable: any;
    isMesinAbsensError: boolean;
    isMesinAbsensSuccess: boolean;
    isMesinAbsensLoading: boolean;
    messageMesinAbsens: any;
}

const initialState : variabel = {
    mesinAbsens: null,
    mesinAbsensTable: null,
    isMesinAbsensError: false,
    isMesinAbsensSuccess: false,
    isMesinAbsensLoading: false,
    messageMesinAbsens: ""
}

export const getMesinAbsensTable: any = createAsyncThunk("getMesinAbsensTable", async(mesinAbsens : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/mesinAbsens/table/${mesinAbsens.limit}&${mesinAbsens.page}&${mesinAbsens.status}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response.data, 'response');

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMesinAbsensById: any = createAsyncThunk("getMesinAbsensById", async(mesinAbsens : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/mesinAbsens/${mesinAbsens.id}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response.data, 'response');

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const createMesinAbsens: any = createAsyncThunk("createMesinAbsens", async(mesinAbsens : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/mesinAbsens`,{
            name: mesinAbsens.name,
            ipMesin: mesinAbsens.ipMesin,
            code: mesinAbsens.code,
            isActive: mesinAbsens.isActive
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

export const updateMesinAbsens: any = createAsyncThunk("updateMesinAbsens", async(mesinAbsens : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/mesinAbsens/${mesinAbsens.id}`,{
            name: mesinAbsens.name,
            ipMesin: mesinAbsens.ipMesin,
            code: mesinAbsens.code,
            isActive: mesinAbsens.isActive
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

export const deleteMesinAbsens: any = createAsyncThunk("deleteMesinAbsens", async(mesinAbsens : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/mesinAbsens/${mesinAbsens.id}`,{
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

export const mesinAbsensSlice = createSlice({
    name: "mesinAbsens",
    initialState,
    reducers:{
        resetMesinAbsens: (state) => initialState
    },
    extraReducers:(builder) => {


        // get mesin by table
        builder.addCase(getMesinAbsensTable.pending, (state) => {
            state.isMesinAbsensLoading = true;
        });
        builder.addCase(getMesinAbsensTable.fulfilled, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensSuccess = true;
            state.mesinAbsensTable = action.payload;
        });
        builder.addCase(getMesinAbsensTable.rejected, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensError = true;
            state.messageMesinAbsens = action.payload;
        })

        // get mesin by id
        builder.addCase(getMesinAbsensById.pending, (state) => {
            state.isMesinAbsensLoading = true;
        });
        builder.addCase(getMesinAbsensById.fulfilled, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensSuccess = true;
            state.mesinAbsens = action.payload;
        });
        builder.addCase(getMesinAbsensById.rejected, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensError = true;
            state.messageMesinAbsens = action.payload;
        })

        // create mesin
        builder.addCase(createMesinAbsens.pending, (state) => {
            state.isMesinAbsensLoading = true;
        });
        builder.addCase(createMesinAbsens.fulfilled, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensSuccess = true;
            state.messageMesinAbsens = action.payload;
        });
        builder.addCase(createMesinAbsens.rejected, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensError = true;
            state.messageMesinAbsens = action.payload;
        })

        // update mesin
        builder.addCase(updateMesinAbsens.pending, (state) => {
            state.isMesinAbsensLoading = true;
        });
        builder.addCase(updateMesinAbsens.fulfilled, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensSuccess = true;
            state.messageMesinAbsens = action.payload;
        });
        builder.addCase(updateMesinAbsens.rejected, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensError = true;
            state.messageMesinAbsens = action.payload;
        })

        // delete mesin
        builder.addCase(deleteMesinAbsens.pending, (state) => {
            state.isMesinAbsensLoading = true;
        });
        builder.addCase(deleteMesinAbsens.fulfilled, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensSuccess = true;
            state.messageMesinAbsens = action.payload;
        });
        builder.addCase(deleteMesinAbsens.rejected, (state, action) => {
            state.isMesinAbsensLoading = false;
            state.isMesinAbsensError = true;
            state.messageMesinAbsens = action.payload;
        });

    }
});

export const {resetMesinAbsens} = mesinAbsensSlice.actions;
export default mesinAbsensSlice.reducer;