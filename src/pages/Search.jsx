import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
const Search = () => {
    const [videos, setVideos] = useState([]);
    const query = useLocation().search;
    console.log(query);
    useEffect(() => {
        const fetchvideos = async () => {
            const res = await axios.get(`/video/search${query}`);
            setVideos(res.data);
        };
        fetchvideos()
    }, [query]);
    return <Container>
        {videos.map(video=>(
            <Card key={video._id} video={video}/>
        ))}
    </Container>;
};

export default Search;
