import { IState } from "@piximind/custom-hook";

export interface IPulicOragnism {
    onChange: Function,
    isLogin?:boolean,
    isRegister?:boolean,
    title?:string,
    form:IState,
    onSubmit:Function,
    isResetPass?:boolean,
    isForgetPass?:boolean
    getIsinValidConfirmPassword?:boolean
    getIsValidConfirmPassword ?:boolean

}