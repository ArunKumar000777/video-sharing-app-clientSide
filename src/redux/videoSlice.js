import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        currentVideo: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        fetchStart: (state) => {
            state.isFetching = true;
        },
        fetchSuccess: (state, action) => {
            state.isFetching = false;
            state.currentVideo = action.payload;
        },
        fetchFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        like: (state, action) => {
            if (!state.currentVideo.likes.includes(action.payload)) {
                state.currentVideo.likes.push(action.payload);
                state.currentVideo.dislikes.splice(
                    state.currentVideo.dislikes.findIndex((userId) => userId === action.payload),
                    1
                );
            }
        },
        dislike: (state, action) => {
            if (!state.currentVideo.dislikes.includes(action.payload)) {
                state.currentVideo.dislikes.push(action.payload);
                state.currentVideo.likes.splice(
                    state.currentVideo.likes.findIndex((userId) => userId === action.payload),
                    1
                );
            }
        },
       
    },
});

export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } = videoSlice.actions;

export default videoSlice.reducer;
