import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "./features/users/userRoleSlice";
import userDataReducer from "./features/users/userDataSlice";
import pageReducer from "./features/page/pageSlice";
import userSoundReducer from "./features/users/userSoundSlice"

export const store = configureStore({
    reducer: {
        userRole: userRoleReducer,
        userData: userDataReducer,
        page: pageReducer,
        userSound: userSoundReducer,
    },
});