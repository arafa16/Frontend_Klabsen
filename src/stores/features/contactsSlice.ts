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

export const getContactsById : any = createAsyncThunk("getContactsById", async(contacts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/contacts/${contacts.uuid}`,{
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

export const getContactsTable : any = createAsyncThunk("getContactsTable", async(contacts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/contacts/${contacts.limit}&${contacts.page}`,{
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

export const createContacts : any = createAsyncThunk("createContacts", async(contacts : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/contacts`,{
            name: contacts.name,
            code: contacts.code,
            isActive: contacts.isActive
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

export const updateContacts : any = createAsyncThunk("updateContacts", async(contacts : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/contacts/${contacts.uuid}`,{
            name: contacts.name,
            code: contacts.code,
            isActive: contacts.isActive
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

export const deleteContacts : any = createAsyncThunk("deleteContacts", async(contacts : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/contacts/${contacts.uuid}`,{
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

        // get contact by id
        builder.addCase(getContactsById.pending, (state) => {
            state.isContactsLoading = true;
        });
        builder.addCase(getContactsById.fulfilled, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsSuccess = true;
            state.contacts = action.payload;
        });
        builder.addCase(getContactsById.rejected, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsError = true;
            state.messageContacts = action.payload;
        });

        // get contact
        builder.addCase(getContactsTable.pending, (state) => {
            state.isContactsLoading = true;
        });
        builder.addCase(getContactsTable.fulfilled, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsSuccess = true;
            state.contacts = action.payload;
        });
        builder.addCase(getContactsTable.rejected, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsError = true;
            state.messageContacts = action.payload;
        });

        // create contact
        builder.addCase(createContacts.pending, (state) => {
            state.isContactsLoading = true;
        });
        builder.addCase(createContacts.fulfilled, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsSuccess = true;
            state.messageContacts = action.payload;
        });
        builder.addCase(createContacts.rejected, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsError = true;
            state.messageContacts = action.payload;
        });

        // update contact
        builder.addCase(updateContacts.pending, (state) => {
            state.isContactsLoading = true;
        });
        builder.addCase(updateContacts.fulfilled, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsSuccess = true;
            state.messageContacts = action.payload;
        });
        builder.addCase(updateContacts.rejected, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsError = true;
            state.messageContacts = action.payload;
        })

        // delete contact
        builder.addCase(deleteContacts.pending, (state) => {
            state.isContactsLoading = true;
        });
        builder.addCase(deleteContacts.fulfilled, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsSuccess = true;
            state.messageContacts = action.payload;
        });
        builder.addCase(deleteContacts.rejected, (state, action) => {
            state.isContactsLoading = false;
            state.isContactsError = true;
            state.messageContacts = action.payload;
        })
    }
})

export const {resetContacts} = contactsSlice.actions;
export default contactsSlice.reducer;