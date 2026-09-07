import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      {/* Sits above the body background (which carries the page colour) and
          below the content. A negative z-index here would hide it behind an
          ancestor's own background. */}
      <div aria-hidden="true" className="dot-grid fixed inset-0 z-0" />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
