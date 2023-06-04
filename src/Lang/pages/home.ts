
export interface IPageLanguage  {
    [key:string]:{
        [key:string]:string
    };
};

const home:IPageLanguage = {
    fr: {
        title: "acceuil"
    },
    en: {
        title: "home"
    },
    ar: {
        title: "acceuil"
    }

}

export default home