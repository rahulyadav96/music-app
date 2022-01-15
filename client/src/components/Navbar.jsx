import { Button } from "./Button"
import styled from "styled-components"
import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = styled.div`
margin:auto;
heigth:auto;
background-color:skyblue;
padding:10px 20px;
& > div{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
`
export const Navbar = () => {
  return (
    <NavBar>
      <div>
        <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
          <MenuIcon />
          <Typography variant="h6">Music Album</Typography>
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <Button>SignIn</Button>
        </div>

      </div>
    </NavBar>
  )
}