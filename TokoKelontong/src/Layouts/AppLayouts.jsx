import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
export default function AppLayouts() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
