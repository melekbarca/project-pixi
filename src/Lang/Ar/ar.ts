import { IKeys } from "../../interfaces";
import home, { IPageLanguage } from "../pages/home";
import signin from "../pages/signIn-lang";
import signup from "../pages/signUp-lang";

const lang:IPageLanguage = {
    home: home.ar,
    signup:signup.en,
    signin:signin.en
}

export default lang