import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = { 
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    }
}

const initialState = {
    user: { name: null, email: null},
    token: null,
    isloggedIn: false,
    isRefreshing: false,
};

export const addUser = createAsyncThunk(
    "user/addUser", async credentials => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return alert("Email or paswword of name is wrong! Pls try again") 
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser", async (credentials, {rejectWithValue}) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return alert("Email or paswword is wrong! Pls try again") 
        }
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout", async () => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            
        }
    }
);

export const refreshCurrentUser = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistatedToken = state.userSlice.token;

    if (persistatedToken === null) { 
        return thunkAPI.rejectWithValue()
    };

    token.set(persistatedToken);
    
    try { 
        const { data } = await axios.get('users/current');
        return data
    } catch (error) { 
        
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [addUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isloggedIn = true;
        },
        [loginUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isloggedIn = true;
        },
        [logoutUser.fulfilled](state) {
            state.user = null;
            state.token = null;
            state.isloggedIn = false;
        },
        [refreshCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isloggedIn = true;
            state.isRefreshing = false;
        },
        [refreshCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;

