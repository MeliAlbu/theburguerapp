import React from 'react';
import './Toolbar.css';
import Logo from '../../logo/Logo';

const toolbar = (props) => (
    <header className = {"Toolbar"}>
        <div>MENU</div>
        <Logo />
        <nav>
          ...
        </nav>
    </header>

);

export default toolbar;