import React from 'react';
import burguerLogo from '../../assets/images/burguer-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className={"Logo"}>
        <img src={burguerLogo} alt="MyBurguer"/>
    </div>

);

export default logo;
