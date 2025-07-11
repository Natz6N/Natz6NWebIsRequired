import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Notification from "../Components/UI/Notification";
export default function AppLayouts() {
  return (
    <>

      <Navbar />
      <Outlet />
      <div className="fixed bottom-2 w-full">
        <Notification
          className="max-w-[1400px] z-[99] mx-auto"
          type="base"
          message="ini adalah prototipe dari website yang akan tayang di kemudian hari karena kekurangan seperti hosting dan website jadi hanya tampilan saja dan juga untuk modk yang di tambahkan di dalam berikut adalah data yang di ambil di beberapa tempat"
        />
      </div>
      <Footer />
    </>
  );
}
