import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
// import axios from "axios";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
    gap: 15px;
    padding: 0 30px;
    /* height: 100vh; */
`;

const Home = ({ type }) => {
    // const res = await publicRequest.post("/auth/login", user);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVidos = async () => {
            const res = await axios.get(`/video/${type}`,{withCredentials:true});
            setVideos(res.data);
        }
        fetchVidos();
    }, [type]);

    // console.log(videos);

    return (
        <Container>
            {videos.map((video) => (
                <Card key={video._id} video={video} />
            ))}
        </Container>
    );
};

export default Home;
