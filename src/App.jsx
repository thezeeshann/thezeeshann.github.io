import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <>
      <main className="flex flex-col w-full h-full min-h-screen mx-auto transition-colors bg-bgPrimary dark:bg-darkBgPrimary font-Inter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
