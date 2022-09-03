import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { format } from "timeago.js";
import { publicRequest } from "../requestMethods";
import axios from "axios";
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 300px;
`;
const CardImage = styled.img`
    width: 100%;
    height: 202px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
`;

const CardDetails = styled.div`
    padding: 0 4px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    margin-top: 14px;
`;
const ChannelDp = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #999;
`;

const VideoTitle = styled.h5`
    color: ${({ theme }) => theme.text};
    font-weight: 500;
`;

const ViewsDetails = styled.div`
    padding: 0 50px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const ChannelName = styled.span`
    color: ${({ theme }) => theme.textSoft};
    font-size: 13px;
`;

const ViewsCount = styled.span`
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;
const Card = ({ video }) => {
    // console.log(video);
    const [channel, setChannel] = useState([]);

    useEffect(() => {
        const fetchChannel = async () => {
            //  METHOD -GET http://localhost:5000/api/user/find/userId
            // get a user
            // userId from video document
            const userRes = await axios.get(`/user/find/${video.userId}`);
            // const videoRes = await axios.get(`/video/find/${}`)
            setChannel(userRes.data);
        };
        fetchChannel();
    }, [video.userId]);
    // console.log(channel)
    return (
        <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
            <Container>
                <Wrapper>
                    <CardImage src={video.imgUrl} />
                    <CardDetails>
                        <ChannelDp src={channel?.img} />
                        <VideoTitle>{video.title}</VideoTitle>
                    </CardDetails>
                    <ViewsDetails>
                        <ChannelName>{channel?.name || "defalt name"}</ChannelName>
                        <ViewsCount>
                            {video.views} views* <span style={{ fontSize: "10px" }}> {format(video.createdAt)}</span>
                        </ViewsCount>
                    </ViewsDetails>
                </Wrapper>
            </Container>
        </Link>
    );
};

export default Card;
