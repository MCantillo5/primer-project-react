import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Product from './components/product';
// import Profile from "./components/profile";
// import Login from "./components/login";
import Register from './components/register';
import Header from './components/header';
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
					<Route path="Header" element={<Header />} />
					<Route path="Login" element={<Login />} />
					<Route path="Register" element={<Register />} />
				</Routes>
			</Router>
      <Footer/>
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
