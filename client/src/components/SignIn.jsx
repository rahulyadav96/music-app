import styled from "styled-components"
import { Button, Input, Typography } from "@mui/material"
import { Forms } from "./Form";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext"
import { useContext, useState } from "react";
import axios from "axios";
const SigninDiv = styled.div`

    position:relative;
    top:100px;
    text-align:center;
`
export const SignIn = ()=>{
    const { authToken,setUserName, setAuthToken } = useContext(AuthContext);

    const [details,setDetails] = useState({
        email:"",
        password:"",
    })

    const handleClick = ()=>{
        axios.post(`http://localhost:3001/signIn`,{
            email:details.email,
            password:details.password
        })
        .then(res=>{
            // console.log(res);
            setAuthToken(res.data.token);
            setUserName(res.data.user.name);
        })
        .catch(err=>{
            console.log("front",err)
        })
    }
    
    if(authToken!="")return <Redirect to="/"></Redirect>


    return (
        <SigninDiv>
            <Typography variant="h6">Artist Sigh-In</Typography>
            <Forms>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Email"name="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email} />
                    
                </div>
                <div>
                <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password} />
                </div>
                <div style={{textAlign:"center"}}>
                        <Button variant="contained" onClick={()=>handleClick()}>
                            Sign In
                        </Button>
                </div>
                <Typography variant="p" style={{textAlign:"center"}}>If haven't any Account? <Link to="/sighUp">Sigh-Up</Link></Typography>
            </Forms>
            
        </SigninDiv>
    )
}