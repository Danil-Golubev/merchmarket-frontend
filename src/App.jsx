import { StrictMode } from 'react';

import { Route, Routes } from 'react-router-dom';

import { BottomHeader } from './components/BottomHeader';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/index';
import { Contact } from './pages/Contact/index';
import { Home } from './pages/Home/index';
import { Product } from './pages/Product/index';

function App() {
	return (
		<>
			<StrictMode>
				<Header />
				<Routes>
					<Route element={<Home />} path='/merchmarket-frontend' />
					<Route element={<Contact />} path='merchmarket-frontend/contact' />
					<Route element={<Product />} path='merchmarket-frontend/item/:id' />
					<Route element={<Cart />} path='merchmarket-frontend/cart' />
				</Routes>
				<BottomHeader />
			</StrictMode>
		</>
	);
}

export default App;
