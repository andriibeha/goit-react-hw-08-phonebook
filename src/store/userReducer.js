import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: { 
        email: "",
        password: "",
        name: "",
        token: ""
    },
};

const setError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const addUser = createAsyncThunk(
    "user/addUser",
    async function (data, { rejectWithValue, dispatch }) { 
        try { 
            
            const user = {
                name: data.name,
                email: data.email,
                password: data.password,
            };
            console.log(user)

            const response = await fetch(`https://connections-api.herokuapp.com/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) { 
                throw new Error('Sorry cant add user:(');  
            };

            dispatch(setUser(data));
        } catch (error) { 
            return rejectWithValue(error.message);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => { 
            console.log("state", state);
            console.log("action", action.payload);
        },
    },
    extraReducers: {
        [addUser.rejected]: setError,
    },
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;

