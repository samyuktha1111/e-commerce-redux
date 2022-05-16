import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tailwind from './components/products/Tailwind';
import Order from './components/products/Order';
import Home from './components/products/Home';
import Cart from './components/products/Cart';
import store from './components/store';
import {Provider} from 'react-redux'
import {useState} from 'react'
function App() {
	const[item,setItem]=useState('')
	const category=item1=>
	{
		setItem(item1)
	}
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Routes>
						<Route exact path="/" element={<Home category={category} />} />
						<Route exact path="/tailwind" element={<Tailwind item={item} />} />
						<Route exact path="/order" element={<Order />} />
						<Route exact path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
