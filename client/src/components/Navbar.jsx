
import { Button, Typography,AppBar,Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
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
  
}
`
export const Navbar = () => {
  return (
    <AppBar >
      <Toolbar style={{display:"flex",justifyContent:"space-between", alignItems:"center",}}>
        <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
          <MenuIcon />
          <Typography variant="h6">Music Album</Typography>
        </div>
        <InputBox>
          <input type="text" placeholder="Search" />
        </InputBox>
        <div>
        <Button variant="text" style={{color:"white"}}>Sigin</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}