import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/users.slice";

const rootReducer = combineReducers({usersReducer});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}