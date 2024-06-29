
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/index'
import {Header} from './components/Header'
import {BottomHeader} from './components/BottomHeader'
import { Contact } from './pages/Contact/index';
import { Product} from './pages/Product/index';
import { StrictMode } from 'react';
import {Cart} from './pages/Cart/index';
 
function App() {
  return (
<>
<StrictMode>
<Header/>
<Routes>
<Route path = "/merchmarket-frontend" element = {<Home/>}/>
<Route path = "/merchmarket-frontend/contact" element = {<Contact/>}/>
<Route path = "/merchmarket-frontend/item/:id" element = {<Product/>}/>
<Route path = "/merchmarket-frontend/cart" element = {<Cart/>}/>

</Routes>
<BottomHeader/>
</StrictMode>
</>
  );
}

export default App;
