import { Routes, Route } from 'react-router';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Departments from './components/Departments';
import ProductListing from './components/Products';
import NewProduct from './components/Products/NewProduct';
import ProductDetails from './components/Products/ProductDetails';
import './styles/App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
