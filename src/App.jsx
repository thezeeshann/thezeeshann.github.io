import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <>
      <main className="flex flex-col w-full h-full mx-auto bg-darkBgPrimary font-Poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
