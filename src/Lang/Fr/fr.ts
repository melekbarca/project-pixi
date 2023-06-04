import { IKeys } from "../../interfaces";
import home, { IPageLanguage } from "../pages/home";
import signin from "../pages/signIn-lang";
import signup from "../pages/signUp-lang";
export type ILang = {
    [key: string]:IKeys
}
const lang:IPageLanguage= {
    home: home.fr,
    signup:signup.fr,
    signin:signin.fr
}

export default lang