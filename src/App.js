import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Filters from "./components/Filters";
import Properties from "./components/Properties";
import Footer from "./components/Footer";
import Sell from "./components/Sell";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={[<Banner />, <Filters />, <Properties />, <Footer />]}
          >
          </Route>

          <Route path="/sell"
            element={[<Sell />, <Footer />]}
          >


          </Route>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
