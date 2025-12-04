import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuSlice"

const AppStore = configureStore({
  reducer: {
    MenuToggle : MenuReducer,
  },
});

export default AppStore;