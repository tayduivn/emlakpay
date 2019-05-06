import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Navigation from "./Components/Layout/Navigation"
import Landing from './Components/Layout/Landing';
import Footer from "./Components/Layout/Footer";
import Register from './Components/Auth/Register';
import Login from "./Components/Auth/Login";


const App = () =>(
	<Router>
		<div className="wrapper">
			<Navigation />
			<Route exact path='/' component={Landing} />
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</Switch>
			<Footer />
		</div>
	</Router>   
 
)




export default App;
