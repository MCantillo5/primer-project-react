import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Product from './components/product';
// import Profile from "./components/profile";
// import Login from "./components/login";
import Register from './components/register';
import Home from './components/home';
import Footer from './components/footer';
import Chart from './components/chart';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
    <Navbar/>
			<Router>
				<Routes>
					<Route path="App" element={<App />} />
					<Route path="Product" element={<Product />} />
					<Route path="Home" element={<Home />} />
					<Route path="Login" element={<Login />} />
					<Route path="Register" element={<Register />} />
				</Routes>
			</Router>
      <Footer/>
		</>
		 
	);
}

export default App;
