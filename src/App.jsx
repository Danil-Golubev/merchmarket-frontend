import { StrictMode } from 'react';

import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/index';
import { Contact } from './pages/Contact/index';
import { Faqs } from './pages/Faqs/index';
import { Home } from './pages/Home/index';
import { Product } from './pages/Product/index';

function App() {
	return (
		<>
			{' '}
			<StrictMode>
				<Header />
				<ScrollToTop />
				<Routes>
					<Route element={<Home />} path='/merchmarket-frontend' />
					<Route element={<Contact />} path='merchmarket-frontend/contact' />
					<Route element={<Faqs />} path='merchmarket-frontend/faqs' />
					<Route element={<Product />} path='merchmarket-frontend/item/:id' />
					<Route element={<Cart />} path='merchmarket-frontend/cart' />
				</Routes>
				<Footer />
			</StrictMode>
		</>
	);
}

export default App;
