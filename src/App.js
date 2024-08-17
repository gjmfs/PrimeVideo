import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { MoviePage } from "./components/Card";
import Header from "./NavBar";
import Footer from "./Footer";
import { NotFound } from "./components/NotFound";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/PrimeVideoClone" element={<Home />}></Route>
        <Route
          path="/PrimeVideoClone/moviePage"
          element={<MoviePage />}
        ></Route>
        <Route path="/PrimeVideoClone/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
