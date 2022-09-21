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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch