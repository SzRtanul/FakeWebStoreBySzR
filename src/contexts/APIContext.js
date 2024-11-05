import { myAxios } from "./MyAxios";

import { createContext, useEffect, useState } from "react";

export const APIContext=createContext("");
export const APIProvider=({children})=>{
   // function setTermekLista(){}

    const [termeklista, setTermekLista] = useState([]);
   const getAdat = async (vegpont) => {
        try{
            const response = await myAxios.get(vegpont);
            console.log(response.data);
            setTermekLista(response.data);
        }
        catch{
            console.log("Oh baz! Ez nem sikerült.")
        }
   };
     useEffect(() => {
        getAdat("/products");
    }, []);

    return <APIContext.Provider value={{termeklista}}>
            { children }
        </APIContext.Provider>;
};