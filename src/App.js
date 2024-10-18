import logo from './logo.svg';
import './App.css';
import NavBarra from './components/NavBarra.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/Login.jsx';
import Cadastros from './pages/Cadastros.jsx';
import Produtos from './pages/Produtos.jsx';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <NavBarra/> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/cadastros' element={<Cadastros />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
