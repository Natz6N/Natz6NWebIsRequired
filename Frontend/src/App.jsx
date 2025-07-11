import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayouts from "@/Layouts/appLayouts";
import Home from "./Pages/Home";
import NoPages from "@/Pages/NoPages";
import Browse from "./Pages/Browse";
import BackToTopButton from "./Components/UI/BackToTopBtn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Group semua yang pakai layout di sini */}
        <Route path="/" element={<AppLayouts />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
        </Route>

        {/* Tangkap semua route yang tidak dikenali */}
        <Route path="*" element={<NoPages />} />
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
