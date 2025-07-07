import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayouts from "./Layouts/appLayouts";
import Home from "./Pages/Home";
import NoPages from "@/Pages/NoPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayouts />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
