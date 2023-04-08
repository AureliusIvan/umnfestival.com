import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./features/users/userRoleSlice";
import userDataReducer from "./features/users/userDataSlice";
import userSoundReducer from "./features/users/userSoundSlice"

export const store = configureStore({
    reducer: {
        userRole: userRoleReducer,
        userData: userDataReducer,
        userSound: userSoundReducer,
    },
});