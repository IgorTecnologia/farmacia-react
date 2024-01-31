import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ListarCategoria from './pages/categoria/listaCategoria/ListarCategoria';
import FormularioCategoria from './pages/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './pages/categoria/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        
    </>
  );
}
export default App;
