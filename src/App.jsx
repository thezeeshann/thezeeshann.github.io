import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer"
import Error from "./pages/Error"
import "./App.css";

function App() {
  return (
    <>
      <main className=" border-2  xl:border-blue-500 lg:border-red-500 md:border-green-500  sm:border-yellow-500 flex flex-col mx-auto bg-darkBgPrimary w-full h-full font-Poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </main>
    </>
  );
}

export default App;
