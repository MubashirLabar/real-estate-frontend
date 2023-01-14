// Style
import "./styles/globals.css";
import "./styles/loader.css";
import "react-tooltip/dist/react-tooltip.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
