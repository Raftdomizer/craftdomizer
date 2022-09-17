import {
    configureStore,
    createImmutableStateInvariantMiddleware
} from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import userOptionsSlice from "./slices/userOptionsSlice";

const immutableStateInvariantMiddleware = createImmutableStateInvariantMiddleware({});
const store = configureStore({
    reducer: {
        userOptions: userOptionsSlice,
    },
    middleware: [immutableStateInvariantMiddleware, thunk]
});

export default store;
