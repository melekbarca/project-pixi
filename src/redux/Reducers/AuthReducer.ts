import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from '../../interfaces';


const initialState: IAuthReducer = {
    accessToken: "",
    refreshToken: ""

};

const AuthReducer = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLogin: (state: IAuthReducer, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        setLogout: (state: IAuthReducer) => {
            state.accessToken = "",
            state.refreshToken = ""
        },
    }
});

export const { setLogin, setLogout } = AuthReducer.actions;

export default AuthReducer.reducer;