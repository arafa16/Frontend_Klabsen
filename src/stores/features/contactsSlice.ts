import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    contacts: any;
    isContactsError: boolean;
    isContactsSuccess: boolean;
    isContactsLoading: boolean;
    messageContacts: any;
}

const initialState : variabel = {
    contacts: null,
    isContactsError: false,
    isContactsSuccess: false,
    isContactsLoading: false,
    messageContacts: ""
}

// interface varAuth {
//     email: string;
//     password: string;
// }

export const getContacts : any = createAsyncThunk("getContacts", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/contacts`,{
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

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers:{
        resetContacts: (state) => initialState
    },
    extraReducers:(builder) => {
        // get contact
        builder.addCase(getContacts.pending, (state) => {
            state.isContactsLoading = true;
        });
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsSuccess = true;
            state.contacts = action.payload;
        });
        builder.addCase(getContacts.rejected, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsError = true;
            state.messageContacts = action.payload;
        })
    }
})

export const {resetContacts} = contactsSlice.actions;
export default contactsSlice.reducer;