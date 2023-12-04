import React from 'react';
import './App.css';
import Navbar from './navbar';
import Product from './product';
// import Profile from "./profile";
// import Login from "./login";
import Register from './register';
import Header from './header';
import Footer from './footer';
import Chart from './chart';
import Login from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
    <Navbar/>
			<Router>
				<Routes>
					<Route path="App" element={<App />} />
					<Route path="Product" element={<Product />} />
					<Route path="Header" element={<Header />} />
					<Route path="Login" element={<Login />} />
					<Route path="Register" element={<Register />} />
				</Routes>
			</Router>
		</>
		// <div className='App'>
		//   <Nav/>
		//   <Header/>
		//   {/* <Login/> */}
		//   <Chart/>
		//   <Product sabor={'chocolate'} />
		//   <Product sabor={'vainilla'}/>
		//   <Product sabor={'banano'}/>
		//   <Footer/>
		// </div>
	);
}

export default App;
