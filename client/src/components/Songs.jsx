import { Card, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const Songs =()=>{
    const {id} = useParams();
    const [songs,setSongs] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3001/albums/${id}`)
        .then(res=>{
            //console.log(res.data);
            setSongs(res.data.album.songs)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return(
        <div style={{position:"relative", top:"100px", width:"90%", margin:"auto", display:"flex",flexDirection:"column", gap:"20px" }}>
            <Typography variant="h6">Songs</Typography>
            {
                songs?.map(song=><Card><Typography variant="h4" kay={song._id}>{song.title}</Typography></Card>)
            }
        </div>
    )
}