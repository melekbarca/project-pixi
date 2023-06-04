import { createSlice } from '@reduxjs/toolkit';
import { Elang, ISettingReducer } from '../../../interfaces';


const initialState: ISettingReducer = {
    lang: Elang.fr
};

const SettingReducer = createSlice({
    name: 'setting',
    initialState: initialState,
    reducers: {
        setLang: (state: ISettingReducer, action) => {
            state.lang=action.payload.lang
        },
   
    }
});

export const { setLang } = SettingReducer.actions;

export default SettingReducer.reducer;