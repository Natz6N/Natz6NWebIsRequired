import { ProductCard, EventCard } from "../Components/UI/Card";
import SwiperCarousel from "../Components/UI/Swiper";
import WebsiteStats from "../Components/UI/WebState";
import { SwiperSlide } from "swiper/react";
import { stats, productData, article, faqData } from "@/Mock/AppMock.js";
import FAQ from "../Components/UI/FAQ";
export default function Home() {
  return (
    <div className="flex gap-[20px] flex-col md:mt-[70px] items-center justify-center">
      {/* head */}
      <div className="w-full relative flex items-center justify-center py-4">
        <div className="container md:rounded-md md:aspect-[5/2] aspect-[2/4] overflow-hidden relative">
          <img src="/head.gif" alt="" className="w-full h-full object-cover" />
          <div className="flex absolute items-start justify-center top-0 left-0 p-[40px] gap-4 flex-col bg-gradient-to-b from-transparant w-full h-full to-gray-900/60">
            <h2 className="text-3xl md:text-5xl md:max-w-[800px] max-w-[300px] font-bold text-white">
              <span className="bg-red-400">Hi there!,</span> Welcome to my
              website
            </h2>
            <p className="mt-2 font-semibold text-white max-w-[500px] text-gray-600 md:text-lg">
              I'm truly glad to have you here! Take your time to explore the
              content, discover something new, and enjoy everything this site
              has to offer.
            </p>
            <button className="flex items-center justify-center px-4 bg-blue-500 font-semibold text-white rounded hover:bg-blue-400 py-2">
              Scroll
            </button>
          </div>
        </div>
        {/* Website View */}
        <div className="flex absolute p-2 rounded-xl h-fit items-center w-full -bottom-[60px] max-w-[900px] bg-white">
          <WebsiteStats data={stats} />
        </div>
      </div>
      {/* Profile Singkat Pembuat */}
      <div className="container my-8 mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">Tentang Saya</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center p-8 ">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/8d/96/d0/8d96d0d81bc7994fac4c308401c8d82d.jpg"
              alt="Foto Natz"
              className="rounded-xl w-full aspect-square object-cover shadow-md hover:scale-105 transition-transform"
            />
          </div>

          {/* Profile Content */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Natanael Ben Iriyanto
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Saya adalah lulusan{" "}
              <span className="font-semibold">SMK Texmaco Semarang</span> dengan
              jurusan
              <span className="italic text-indigo-600">
                {" "}
                Rekayasa Perangkat Lunak (RPL)
              </span>
              . Saya memiliki ketertarikan tinggi di bidang
              <strong> editing, desain grafis,</strong> dan{" "}
              <strong>pengembangan perangkat lunak</strong>. Semangat saya dalam
              dunia kreatif mendorong saya untuk terus belajar, mengeksplorasi
              tools baru, dan menciptakan karya yang menggabungkan sisi estetika
              dan fungsi teknologi.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify mt-4">
              Dalam memanfaatkan website penyedia template, tools editing,
              maupun artikel yang tersedia secara online, saya mengajak setiap
              pengunjung untuk menggunakannya secara{" "}
              <span className="font-semibold text-indigo-700">
                bijak dan bertanggung jawab
              </span>
              . Jadikan sumber daya digital sebagai media belajar dan inspirasi,
              bukan sekadar copy-paste tanpa pemahaman. Kreativitas sejati
              muncul dari proses memahami, memodifikasi, dan menciptakan sesuatu
              yang orisinal dan bermanfaat.
            </p>

            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition duration-300">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center"></div>
      <div className="block container w-full px-2 my-[50px]">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">My Project</h1>
            <button>Baca Selengkapnya</button>
          </div>
          <p className="text-gray-600 w-full">
            Berikut adalah beberapa project yang pernah saya buat...
          </p>
        </div>

        {/* project grid */}

        <div className="grid gap-4 mt-[20px] grid-cols-2 w-full h-fit">
          <div className="block col-span-2 w-full aspect-video">
            <img
              src="https://i.pinimg.com/736x/5e/a5/bf/5ea5bffb9875a91ae319c9f97b1db65a.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
            <p className="text-sm mt-2 font-semibold md:text-xl">
              Anime Amv Indo
            </p>
          </div>
          <div className="block w-full aspect-square">
            <img
              src="https://i.pinimg.com/736x/5e/a5/bf/5ea5bffb9875a91ae319c9f97b1db65a.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
            <p className="text-sm mt-2 font-semibold md:text-xl">
              Anime Amv Indo
            </p>
          </div>
          <div className="block w-full aspect-square">
            <img
              src="https://i.pinimg.com/736x/5e/a5/bf/5ea5bffb9875a91ae319c9f97b1db65a.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
            <p className="text-sm mt-2 font-semibold md:text-xl">
              Anime Amv Indo
            </p>
          </div>
        </div>

        {/* swiper Carousel */}

        {/* swiper Carousel AMV*/}
        <div className="w-full my-[50px] block">
          <h1 className="text-3xl font-bold">Editing Project</h1>
          <SwiperCarousel className="mt-[40px]">
            {productData.map((items, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  product={items}
                  onAddToCart={() => alert("Added to cart!")}
                  onQuickView={() => alert("Quick view opened!")}
                />
              </SwiperSlide>
            ))}
          </SwiperCarousel>
        </div>

        {/* Project img swiper GMV */}
        <div className="w-full my-[50px] block">
          <h1 className="text-3xl font-bold">Design Graph</h1>
          <SwiperCarousel className="mt-[40px]">
            {productData.map((items, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  product={items}
                  onAddToCart={() => alert("Added to cart!")}
                  onQuickView={() => alert("Quick view opened!")}
                />
              </SwiperSlide>
            ))}
          </SwiperCarousel>
        </div>

        {/* Project img swiper Website */}
        <div className="w-full my-[50px] block">
          <h1 className="text-3xl font-bold">Website Project</h1>
          <SwiperCarousel className="mt-[40px]">
            {productData.map((items, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  product={items}
                  onAddToCart={() => alert("Added to cart!")}
                  onQuickView={() => alert("Quick view opened!")}
                />
              </SwiperSlide>
            ))}
          </SwiperCarousel>
        </div>
      </div>

      {/* Article img */}
      <div className="container">
        <h1 className="font-bold text-3xl">Article</h1>
        {article.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      {/* Timeline */}
      <div className="my-[80px]">
        <FAQ data={faqData} title="FAQ" allowMultiple={false} />
      </div>
      {/* Contact */}
      {/* Main Content */}
      <div className="bg-indigo-800 text-white px-6 py-4 md:rounded-lg shadow-md container mt-[20px] w-full mx-auto my-6">
        <p className="text-lg md:text-base leading-relaxed line-clamp-3">
          Terima kasih sudah mendukung saya di berbagai platform. Website ini
          hanya akan menyediakan kebutuhan Anda seperti template dan beberapa
          tutorial yang mungkin Anda lupa atau belum pelajari. Gunakan dengan
          bijak, ya!
        </p>
      </div>
    </div>
  );
}
