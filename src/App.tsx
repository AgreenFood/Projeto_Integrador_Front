import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Equipe from './components/equipe/Equipe';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import HomeLogado from './pages/homeLogado/HomeLogado'
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomeLogado />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path='/Contato' element={<Contato />} />
            <Route path='/equipe' element={<Equipe />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastroCategoria" element={<ListaCategoria />} />
            <Route path='/editarCategoria/:id' element={<FormularioCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;