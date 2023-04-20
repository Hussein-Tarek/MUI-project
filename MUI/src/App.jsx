import { CssBaseline } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="#hero" element={<Hero />}></Route>
          <Route path="#hero" element={<Hero />}></Route>
          <Route path="#hero" element={<Hero />}></Route>
          <Route path="#hero" element={<Hero />}></Route>
          <Route path="#hero" element={<Hero />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
