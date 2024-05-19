
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
<Route path = "/" element = {<Home/>}/>
<Route path = "/contact" element = {<Contact/>}/>
<Route path = "/item/:id" element = {<Product/>}/>
<Route path = "/cart" element = {<Cart/>}/>

</Routes>
<BottomHeader/>
</StrictMode>
</>
  );
}

export default App;
