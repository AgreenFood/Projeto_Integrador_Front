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
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
<<<<<<< HEAD
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto';
=======
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
>>>>>>> 3989de0b77f16252a5d0f4e0d30b9b6b6c224b50


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
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path='/categorias' element={<ListaCategoria />} />
            <Route path='/editarCategoria/:id' element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
<<<<<<< HEAD
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
=======

            <Route path='/produtos' element={<ListaProdutos />} />
>>>>>>> 3989de0b77f16252a5d0f4e0d30b9b6b6c224b50
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;