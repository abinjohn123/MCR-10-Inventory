import { Routes, Route } from 'react-router';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './styles/App.scss';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
