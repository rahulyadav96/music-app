import { useState } from "react";
import {createContext} from "react";

export const  AuthContext = createContext();

export const  AuthContextProvider = ({children})=>{
    const [authToken,setAuthToken] = useState("")

    return (
            <AuthContext.Provider value={{authToken,setAuthToken}}>
                {children}
            </AuthContext.Provider>
    )
}