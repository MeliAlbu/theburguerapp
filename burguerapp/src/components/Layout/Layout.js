import React from 'react';
import Aux from '../../AuxHoc';
import '../Layout/Layout';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">

            {props.children}
        </main>
    </Aux>
)

export default layout;