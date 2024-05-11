
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/index'
import {Music} from './pages/Music/index'
import {Header} from './components/Header'
import { Apparel } from './pages/Apparel/index';
import { Other } from './pages/Other/index';
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
<Route path = "/collections/music" element = {<Music/>}/>
<Route path = "/collections/apparel" element = {<Apparel/>}/>
<Route path = "/collections/other" element = {<Other/>}/>
<Route path = "/item/:id" element = {<Product/>}/>
<Route path = "/cart" element = {<Cart/>}/>
</Routes>
</StrictMode>
</>
  );
}

export default App;
