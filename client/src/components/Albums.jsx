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
const FilterArea = styled.div`

    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:rgb(22, 101, 255);
    border-radius:8px;
    color:white;
    width:80%;
    margin: 10px auto;
    height:auto;
    min-height:100px;
    font-size:18px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    letter-spacing:1px;
    &>div{
        & > select{
            min-width:200px;
            height:25px;
            cursor:pointer;

            &> option{
                width:100%;
                font-size:18px;
            }
        }
    }
`
export const Album = () => {
    const [albums, setAlbums] = useState([]);
    const [page, setPage] = useState(1);
    const [genre,setGenre] = useState("");
    const [sorting,setSort]= useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/albums?page=${page}`,)
            .then(res => {
                //console.log(res.data.albums)
                setAlbums(res.data.albums)
            })
    }, [page,genre,sorting])

    
    return (
        <AlbumContainer>
            <FilterArea style={{display:"flex", justifyContent:"space-around"}}>
                <div>
                    Filter by genre:&nbsp; 
                     <select onChange={e=>setGenre(e.target.value)}>
                        <option selected disabled>select</option>
                        <option value="hip hop">Hip Hop</option>
                        <option value="oldies">Oldies</option>
                        <option value="jazz">Jazz</option>
                        <option value="indie rock">Indie Rock</option>
                        <option value="">All</option>
                    </select>
                </div>
                <div>
                    Sort by release year: &nbsp;
                    <select onChange={e=>setSort(e.target.value)}>
                        <option selected disabled>select</option>
                        <option value="inc">Increasing Year</option>
                        <option value="dec">Descreasing Year</option>
                    </select>
                </div>
            </FilterArea>
            <Typography variant='h5'> All Albums</Typography>
            <div>
                {
                    albums?.filter((ele)=>{
                        if(genre=="") return ele;
                        else if(genre.toLowerCase()==ele.genre.toLowerCase()) return ele
                    }).sort((a,b)=>{
                        //console.log(a,b);
                        if(sorting!=""&& sorting=="inc") return a.year-b.year;
                        else if(sorting !="" && sorting =="dec") return b.year-a.year;
                    }).map(data => <div key={data._id}>
                        <Link to={`/albums/${data._id}`} style={{textDecoration:"none", color:"black"}}>
                            <AlbumCard album={data} />
                        </Link>
                        </div>)
                }
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <Button onClick={() => setPage(page - 1)} variant='contained' disabled={page==1?true:false}>Prev</Button>
                    <Button onClick={() => setPage(page + 1)} variant='contained'>Next</Button>
                </div>
            </div>
        </AlbumContainer>
    )
}