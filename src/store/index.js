import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./reducer";


const store = configureStore({
    reducer: {
    contactsSlice,
  },
});

export default store;









