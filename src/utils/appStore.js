import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import userReducer from "./userSlice";

const appStore = configureStore(
  { reducer: { user: userReducer } },
  composeWithDevTools()
);

export default appStore;
