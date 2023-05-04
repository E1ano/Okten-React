import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const slice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            state.users = action.payload;
        },
        addNewUser: (state, action) => {
            state.users = [...state.users, action.payload];
        }
    }
});

const {reducer: usersReducer, actions} = slice;
const usersActions = {...actions};

export {
    usersReducer,
    usersActions
}