import React, { Component } from 'react';
//import './App.css';
import Layout from './components/Layout/Layout';
import BurguerBuilder from "./containers/BurguerBuilder/BurguerBuilder"
import './components/Layout/Layout.css';
class App extends Component {
  render () {
  return (
    <div >
     <Layout>
       <BurguerBuilder/>
     </Layout>
    </div>
  );
 }
}

export default App;
