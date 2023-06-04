import { store } from "../../redux/Store/store"

export interface IAuthReducer {
    accessToken: string,
    refreshToken: string,
    user: object | null
}

export interface ISettingReducer {
    lang: string
}
export interface IScreenReducer{
    width:number,
    height:number
}

export type RootState = ReturnType<typeof store.getState> 
