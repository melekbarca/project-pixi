import { IPageLanguage } from "./home"


const signin:IPageLanguage={
    fr:{
        title: "Connexion",
        email: "email",
        password:"mot de passe",
        login:"Se Connecter",
        endTitle: "Vous n'avez pas encore de compte ?",
        signUpLink:"inscription",
        mailVerificationMessage:"Un courriel a été envoyé à",
        wrongPasswordMessage:"Le mot de passe entré est incorrect.",
        accountNotExistMessage:"L'adresse e-mail  que vous avez saisi(e) n'est pas associé(e) à un compte",
        somethingWrongMessage:"quelque chose ne va pas, veuillez réessayer plus tard"
        
    },
    en:{
        title: "Login",
        email: "email",
        password:"password",
        login:"login",
        endTitle: "Don't have an account yet?",
        signUpLink:"signup",
        mailVerificationMessage:"an email has been sent to",
        wrongPasswordMessage:"The entered password is incorrect.",
        accountNotExistMessage:"The email address you entered is not associated with an account",
        somethingWrongMessage:"something wrong please try again later"
    }
}
export default signin