import { Routes, Route } from 'react-router';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Departments from './components/Departments';
import ProductListing from './components/Products';
import './styles/App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </>
  );
}

export default App;
