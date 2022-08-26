import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    error: '',
    isLoading: false,
    contacts: {
        items: [],
        filter: {
            value: ""
        }
    }, 
};

const setError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts", async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts", async (id, { rejectWithValue, dispatch }) => {
        try {
            await axios.delete(`/contacts/${id}`);
            dispatch(removeContact(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts", async (credentials, { rejectWithValue, dispatch }) => {
        try {
           const contact = {
                name: credentials.name,
                number: credentials.phone,
            };

            const { data } = await axios.post("contacts", contact);
            
            dispatch(setContact(data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.contacts.filter.value = action.payload;
        },
        setContact: (state, action) => {
            state.contacts.items.push(action.payload);
        },
        removeContact: (state, action) => {
            let indexId = state.contacts.items.findIndex(el => el.id === action.payload);

            if (indexId === -1) {
                return alert(`Item with ${action.id} not wound`);
            };
            
            state.contacts.items.splice(indexId, 1);
        },
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: setError,
        [deleteContacts.rejected]: setError,
        [addContacts.rejected]: setError,
    },
});


export const { setFilter, setContact, removeContact} = contactsSlice.actions;

export default contactsSlice.reducer;

