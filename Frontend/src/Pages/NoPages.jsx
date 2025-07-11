import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NoPages() {
  useEffect(() => {
    console.log("404 Page not found");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        Maaf, halaman yang kamu cari tidak tersedia. Mungkin URL-nya salah atau
        halaman sudah dihapus.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
