import { Button } from "./Button"
import styled from "styled-components"
import { Typography } from "@mui/material";
const Card = styled.div`
    background-color:#A793C8;
    heigth:auto;
    width:90%;
    margin:15px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    cursor:pointer;
    &:hover{
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    }

`
export const AlbumCard = ({album})=>{
   console.log(album)
    return (
        <Card>
            <div>

            <Typography variant="h6">{album.title}</Typography>
            <Typography variant="p" style={{color:"rgb(22, 101, 134)", fontSize:"14px"}}>{album.genre}</Typography>
            </div>
            <div >
                <Typography variant="p">{album.songs.length} songs</Typography>
            </div>
        </Card>
    )
}