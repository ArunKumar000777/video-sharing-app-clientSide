import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginOut } from "../redux/userSlice";
import Upload from "./Upload";

const Container = styled.div`
    background-color: ${({ theme }) => theme.bgLighter};
    display: flex;
    justify-content: center;
    height: 60px;
    position: sticky;
    top: 0;
`;
const Wrpper = styled.div`
    display: flex;
    padding: 0 20px;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    position: relative;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    padding: 5px;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
    flex: 1;
    padding: 4px 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin-right: 20px;
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #999;
`;

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const [q,setQ] = useState('')
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    return (
        <>
            <Container>
                <Wrpper>
                    <Search>
                        <Input placeholder="    Search"  onChange={(e)=>setQ(e.target.value)}/>
                        <SearchIcon style={{ backgroundColor: "transparent", color: "#9f9898d2", cursor: "pointer" }}  onClick={()=>navigate(`/search?q=${q}`)}/>
                    </Search>
                    {currentUser ? (
                        <>
                            <User>
                                <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
                                <Avatar src={currentUser.img} />
                                {currentUser.name}
                            </User>
                            <Button
                                onClick={() => {
                                    dispatch(loginOut());
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Link to="signin" style={{ textDecoration: "none" }}>
                            <Button style={{ textDecoration: "none" }}>
                                <AccountCircleOutlinedIcon />
                                SIGN IN
                            </Button>
                        </Link>
                    )}
                </Wrpper>
            </Container>
            {open && <Upload setOpen={setOpen} />}
        </>
    );
};

export default Navbar;
