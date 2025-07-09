import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayouts from "@/Layouts/appLayouts";
import Home from "./Pages/Home";
import NoPages from "@/Pages/NoPages";
import Browse from "./Pages/Browse";
import CustomMouse from "./Components/UI/Mouse";

function App() {
  return (
    <BrowserRouter>
      <CustomMouse
        size={30}
        hoverSize={50}
        color="#273F4F"
        mixBlendMode="difference"
        bounceIntensity={0.3}
        bounceDecay={2}
      />
      <Routes>
        <Route path="/" element={<AppLayouts />}>
          <Route index element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
