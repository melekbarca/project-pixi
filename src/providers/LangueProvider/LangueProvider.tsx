import React from 'react'
import { useSelector } from 'react-redux'
import { Elang, IKeys, IPageProps, RootState } from '../../interfaces'
import Ar from '../../Lang/Ar/ar'
import Fr from '../../Lang/Fr/fr'
import En from '../../Lang/En/en'
import { IPageLanguage } from '../../Lang/pages/home'
type ILang = {
    [key: string]:IKeys
}
export const LangContext = React.createContext<IPageLanguage>(Fr)
export default function LangueProvider(props: IPageProps): JSX.Element {
    const Lang = useSelector((state: RootState) => state.setting.lang)
    
    let type = Fr

    if (Lang === Elang.en) type = En

    if (Lang === Elang.ar) type = Ar

    console.log(type);
    

    return (
   <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
  )
}
