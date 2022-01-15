import {Typography,Card, CardActions, CardContent, CardMedia, CssBaseline,Grid,Container} from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AlbumCard } from './AlbumCard';
import axios from 'axios';
import { Button } from './Button';

const AlbumContainer = styled.div`
width:80%;
margin:50px auto;
heigth:auto;
padding:10px;
`
export const Album = ()=>{
    const [albums,setAlbums] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        axios.get(`http://localhost:3001/albums`,)
        .then(res=>{
            console.log(res.data)
            setAlbums(res.data.albums)
        })
    },[page])

    const handleClick = (id)=>{
        console.log(id)
    }
    return (
        <AlbumContainer>
            <Typography variant='h6'> All Albums</Typography>
            <div>
                {
                    albums?.map(data=><div key={data._id} onClick={()=>handleClick(data._id)}><AlbumCard  album={data} /></div>)
                }
                <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
                    <Button onClick={()=>setPage(page-1)}>Prev</Button>
                    <Button onClick={()=>setPage(page+1)}>Next</Button>
                </div>
            </div>
        </AlbumContainer>
    )
}