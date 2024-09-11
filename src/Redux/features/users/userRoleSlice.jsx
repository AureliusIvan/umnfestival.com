import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userRole: null,
  userInfo: {},
  userToken: null,
  userDivision: null,
  userName: null,
  userNim: null,
  userEmail: null,
  loading: true,
  error: null,
  success: false,
  isLogin: false,
  isJoin: false,
  isVerify: null,
  file: null,
};


const userRoleSlice = createSlice({
  name: 'userRole',
  initialState,
  reducers: {
    userRoleAdded(state, action) {
      state.userRole = action.payload;
    },
    userTokenAdded(state, action) {
      state.userToken = action.payload;
    },
    userDivisionAdded(state, action) {
      state.userToken = action.payload;
    },
    userDataAdded(state, action) {
      state.userName = action.payload.name;
      state.userNim = action.payload.nim;
      state.userEmail = action.payload.email;
    },
    userLoadingAdded(state, action) {
      state.loading = action.payload;
    },
    userFileAdded(state, action) {
      state.file = action.payload;
    },
    isVerifyAdded(state, action) {
      state.isVerify = action.payload;
    },
    isJoinAdded(state, action) {
      state.isJoin = action.payload;
    }
  },

})


export const selectUserRole = (state) => state.userRole.userRole;

export const checkVerify = (state) => state.userRole.isVerify;

export const {
  isJoinAdded,
  isVerifyAdded,
  userDataAdded,
  userRoleAdded,
  userLoadingAdded,
  userTokenAdded,
  userDivisionAdded,
  userFileAdded
} = userRoleSlice.actions;

export default userRoleSlice.reducer;