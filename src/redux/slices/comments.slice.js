import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    comments: []
}

const slice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setAllComments: (state, action) => {
            state.comments = action.payload;
        },
        addNewComment: (state, action) => {
            state.comments = [...state.comments, action.payload];
        }
    }
});

const {reducer: commentsReducer, actions} = slice;
const commentsActions = {...actions};

export {
    commentsReducer,
    commentsActions
}