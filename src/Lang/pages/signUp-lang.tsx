
import { IPageLanguage } from "./home"

const signup:IPageLanguage={
    fr:{
        title: "Inscription",
        firstName: "Prénom",
        lastName: "Nom",
        email: "email",
        password: "mot de passe",
        signup: "inscription",
        endTitle: "Vous avez déjà un compte ?",
        loginLink: "Se Connecter",
        emailUsedMessage:"Cette adresse e-mail est déjà utilisée",
        somethingWrongMessage:"quelque chose ne va pas, veuillez réessayer plus tard"

    },
    en:{
        title: "Registration",
        firstName: "firstName",
        lastName: "lastName",
        email: "email",
        password: "password",
        signup: "signup",
        endTitle: "Already have an account?",
        loginLink: "Login now",
        emailUsedMessage:"This email address is already used",
        somethingWrongMessage:"something wrong please try again later"
    }
}
export default signup