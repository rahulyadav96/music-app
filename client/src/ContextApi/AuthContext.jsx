import { useState } from "react";
import {createContext} from "react";

export const  AuthContext = createContext();

export const  AuthContextProvider = ({children})=>{
    const [authToken,setAuthToken] = useState("")
    const [username,setUserName] = useState("")
    return (
            <AuthContext.Provider value={{authToken,username,setUserName,setAuthToken}}>
                {children}
            </AuthContext.Provider>
    )
}