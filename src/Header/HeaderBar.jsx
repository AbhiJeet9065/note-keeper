import React from "react";
import logo from '../Images/logo.png';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import './HeaderBar.css';

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`

const HeaderBar = () => {
    return <>
        <div className="Header">
            <img src={logo} alt="logo" width='70' height='50' />
            <Heading>Note Keeper</Heading>
        </div>
    </>
};

export default HeaderBar;