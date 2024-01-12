import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer"
import Error from "./pages/Error"
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col mx-auto bg-darkBgPrimary w-full h-full font-Poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
