import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();

export const useLocalization = ()=> {
    return useContext(LocalizationContext)
}

export function LocalizationProvider({children}){

    const [locale,setLocale] = useState('en');

    const localizedString ={
        en:{
            greeting:'Hello World!',
            welcome:'Welcome to my app.'
        },
        es:{
            greeting:'Hola mundo!',
            welcome:'Bienvenido a mi aplicacion'
        }
    };

    const translate = (key) => {
        return localizedString[locale][key]
    }

    return (
        <LocalizationContext.Provider value={{setLocale,locale,translate}}>
            {children}
        </LocalizationContext.Provider>
    )


}