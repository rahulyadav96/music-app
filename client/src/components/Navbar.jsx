import { Button, Typography, AppBar, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import { AuthContext } from "../ContextApi/AuthContext"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const InputBox = styled.div`
flex:0.7;
height:auto;
outline:1px;
&>input{
  width:50%;
  margin-left:25%;
  height:30px;
  font-size:16px;
  padding:5px 10px 0px 10px;
  border:none;
  border-radius:5px;
  background-color:skyblue;
  
}
`
export const Navbar = () => {
  const { authToken, setAuthToken ,username} = useContext(AuthContext)
  const [query, setQuery] = useState("")
  return (
    <AppBar >
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Link to="/" style={{color:"white"}}>
            <MenuIcon />
          </Link>
          <Typography variant="h6">Music Album</Typography>
        </div>
        <InputBox>
          <input type="text" placeholder="Search" value={query} onChange={e=>setQuery(e.target.value)}/>
        </InputBox>
        <div>
          <div style={{width:"auto"}}>
          {
          (authToken == "") ? <Link to="/signin" style={{textDecoration:"none", color:"white"}}>Sign IN</Link>:  <Button variant="text" style={{ color: "white" }} onClick={()=>setAuthToken("")}>welcome {username}</Button>
          }
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}