import styled from "styled-components"
import { Typography } from "@mui/material";
const Card = styled.div`
    background-color:white;
    heigth:auto;
    width:100%;
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
    return (
        <Card>
            <div style={{flex:"0.6"}}>
                <Typography variant="h6">{album.title}</Typography>
                <Typography variant="p" style={{color:"grey", fontSize:"14px"}}>{album.genre}</Typography>
            </div>
            <Typography variant="p" style={{flex:"0.2"}}>{album.year}</Typography>
            <div >
                <Typography variant="p" style={{flex:"0.2"}}>{album.songs.length} songs</Typography>
            </div>
        </Card>
    )
}