import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./reducer";
import userSlice  from "./userReducer";


const store = configureStore({
    reducer: {
    contactsSlice,
    userSlice,
  },
});

export default store;









