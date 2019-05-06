import React from 'react';
import './App.css';

import Navigation from "./Components/Layout/Navigation"
import Slider from './Components/Layout/Slider';
import Footer from "./Components/Layout/Footer"

const App = () =>(
    <div className="wrapper">
        <Navigation />
        <Slider />
        <Footer />
    </div>
)




export default App;
