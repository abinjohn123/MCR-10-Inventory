import { Routes, Route } from 'react-router';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Departments from './components/Departments';
import './styles/App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </>
  );
}

export default App;
