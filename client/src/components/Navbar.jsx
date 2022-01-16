
import { Button, Typography, AppBar, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import { AuthContext } from "../ContextApi/AuthContext"
import { useContext } from "react";
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
  const { authToken, setAuthToken } = useContext(AuthContext)
  console.log(authToken)
  const handleClick = () => {
    if (authToken == "") setAuthToken(Date.now());
    else setAuthToken("");
  }
  return (
    <AppBar >
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <MenuIcon />
          <Typography variant="h6">Music Album</Typography>
        </div>
        <InputBox>
          <input type="text" placeholder="Search" />
        </InputBox>
        <div>
          <div style={{width:"100px"}}>

            <Button variant="text" style={{ color: "white" }} onClick={() => handleClick()}>{(authToken == "") ? "Sigh In" : "Welcome"}</Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}