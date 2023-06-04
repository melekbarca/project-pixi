import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from '../../../interfaces';


const initialState: IAuthReducer = {
    accessToken: "",
    refreshToken: "",
    user:null

};

const AuthReducer = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLogin: (state: IAuthReducer, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.user=action.payload.user
        },
        setLogout: (state: IAuthReducer) => {
            state.accessToken = ""
            state.refreshToken = ""
            state.user=null
        },
    }
});

export const { setLogin, setLogout } = AuthReducer.actions;

export default AuthReducer.reducer;