import React from 'react';
import Aux from '../../AuxHoc';
import '../Layout/Layout';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="Content">

            {props.children}
        </main>
    </Aux>
)

export default layout;