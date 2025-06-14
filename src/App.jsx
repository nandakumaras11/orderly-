import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import FoodDetails from './pages/FoodDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="cart" element={<Cart />} /> */}
        </Route>
        <Route path="/FoodDetails" element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
