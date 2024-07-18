import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home'
import {MoviePage} from './components/MoviePage'
import Header from './Header';
import Footer from './Footer';
import { NotFound } from './components/NotFound';
function App() {
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='moviePage' element={<MoviePage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
