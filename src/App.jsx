import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer"
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col mx-auto bg-darkBgPrimary w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
