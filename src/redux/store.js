import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/users.slice";
import {commentsReducer} from "./slices/comments.slice";
import {carsReducer} from "./slices/cars.slice";

const rootReducer = combineReducers({usersReducer, commentsReducer, carsReducer});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}