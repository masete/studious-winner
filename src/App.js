import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Tours from './components/Tours'

function App() {
    return <>
            <Routes>
              <Route path='/' element={<Layout />} />
              <Route index element={<Tours />} />
            </Routes>
         </>
  
}

export default App;
