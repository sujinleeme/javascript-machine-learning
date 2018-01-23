import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./App.css"
import LinearRegressionCanvas from "./LinearRegressionCanvas"

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom"

class App extends Component {
	
	render() {
		return (
				
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/linearregression-osl'>Linear Regression - Ordinary Least Squares Method</Link></li>
					</ul>
					
					<Switch>
						<Route exact path="/" />
						<Route path="/linearregression-osl" component={LinearRegressionCanvas}/>
					</Switch>
				</nav>
		
		)
	}
}

export default App

