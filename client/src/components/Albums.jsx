import { Typography,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AlbumCard } from './AlbumCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { Button } from './Button';

const AlbumContainer = styled.div`
width:80%;
heigth:auto;
padding:10px;
position:relative;
top:80px;
margin: auto;
`
export const Album = () => {
    const [albums, setAlbums] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        axios.get(`http://localhost:3001/albums`,)
            .then(res => {
                setAlbums(res.data.albums)
            })
    }, [page])

    const handleClick = (id) => {
        console.log(id)
    }
    return (
        <AlbumContainer>
            <Typography variant='h6'> All Albums</Typography>
            <div>
                {
                    albums?.map(data => <div key={data._id}>
                        <Link to={`/albums/${data._id}`}>
                            <AlbumCard album={data} />
                        </Link>
                        </div>)
                }
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <Button onClick={() => setPage(page - 1)} variant='contained'>Prev</Button>
                    <Button onClick={() => setPage(page + 1)} variant='contained'>Next</Button>
                </div>
            </div>
        </AlbumContainer>
    )
}