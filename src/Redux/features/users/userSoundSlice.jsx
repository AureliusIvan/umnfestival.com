import React from 'react'
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    sound: true,
    isPlaying: null,
    canPlay: null,
    loading: false,
};


const userSoundSlice = createSlice({
    name: 'userSound',
    initialState,
    reducers: {
        userSoundControl(state, action) {
            state.sound = action.payload;
        },
        userCanPlay(state, action) {
            state.canPlay = action.payload;
        },
        pageLoading(state) {
            state.loading = true;
        }
    },

})




export const selectSound = (state) => state.userSound.sound;

export const selectIsPlaying = (state) => state.userSound.isPlaying;

export const selectCanPlay = (state) => state.userSound.canPlay;

export const selectPageLoading = (state) => state.userSound.loading;

export const { userSoundControl, userCanPlay, pageLoading } = userSoundSlice.actions;

export default userSoundSlice.reducer;