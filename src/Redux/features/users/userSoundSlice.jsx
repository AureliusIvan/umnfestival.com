import {createSlice} from '@reduxjs/toolkit';

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
    }
  },
})


export const selectPageLoading = (state) => state.userSound.loading;

export const {userSoundControl, userCanPlay} = userSoundSlice.actions;

export default userSoundSlice.reducer;