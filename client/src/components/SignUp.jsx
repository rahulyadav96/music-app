import styled from "styled-components"
import { Forms } from "./Form";
import { Link ,Redirect} from "react-router-dom";
import { Typography , Button, } from "@mui/material";
const SignunDiv = styled.div`
    position:relative;
    top:100px;
    text-align:center;
`
export const SignUp = ()=>{
    return (
        <SignunDiv>
            <Typography variant="h6">Artist Sigh-Up</Typography>
            <Forms>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Email"/>
                    
                </div>
                <div>
                <label>Password</label>
                    <input type="text" placeholder="Password"/>
                </div>
                <div style={{textAlign:"center"}}>
                        <Button variant="contained">
                            Sign Up
                        </Button>
                </div>
                <Typography variant="p" style={{textAlign:"center"}}>Already have an account? <Link to="/signin">Sigh-In</Link></Typography>
            </Forms>
        </SignunDiv>
    )
}