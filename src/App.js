import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Tours from './components/Tours'
import Loading from './components/Loading';

function App() {
    return <>
            <Routes>
              <Route path='/' element={<Layout />} />
              {/* <Route index element={<Loading />} /> */}
              <Route path="tours" element={<Tours />} />
              <Route path="Loading" element={<Loading />} />
            </Routes>
         </>
  
}

export default App;
