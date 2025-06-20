import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import FoodDetails from './pages/FoodDetails';
import { CartProvider } from 'react-use-cart';
import CategoryDetails from './pages/CategoryDetails';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FoodDetails/:foodId" element={<FoodDetails />} />
          <Route path="/CategoryDetails/:categoryId" element={<CategoryDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
