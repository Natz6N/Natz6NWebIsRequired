
import WebsiteStats from "../Components/UI/WebState";
export default function Home() {
  const stats = [
    { label: "Web View", value: "120+" },
    { label: "Users", value: "80+" },
    { label: "Projects", value: "25" },
    { label: "Likes", value: "300+" },
  ];

  return (
    <div className="flex gap-[20px] flex-col mt-[70px] items-center justify-center">
      {/* head */}
      <div className=" w-full flex items-center justify-center py-4">
        <div className="container rounded-md aspect-[5/2] rounded-xl overflow-hidden relative">
          <img src="/head.gif" alt="" className="w-full h-full object-cover" />
          <div className="flex absolute items-start justify-center top-0 left-0 p-[40px] gap-4 flex-col bg-gradient-to-b from-transparant w-full h-full to-gray-900/60">
            <h2 className="text-6xl max-w-[800px] font-bold text-white">
              <span className="bg-red-400">Hi there!,</span> Welcome to my
              website
            </h2>
            <p className="mt-2 font-semibold text-white max-w-[500px] text-gray-600 text-lg">
              I'm truly glad to have you here! Take your time to explore the
              content, discover something new, and enjoy everything this site
              has to offer.
            </p>
            <button>Scroll</button>
          </div>
        </div>
      </div>

      {/* Website View */}
      <WebsiteStats data={stats} />
      {/* Project video swiper*/}
      {/* Project img swiper GMV */}
      {/* Article img swiper Project Coding*/}
      {/* testimonials with clients*/}
      {/* Profile singkat pembuat */}
      {/* Timeline */}
      {/* Contact */}
    </div>
  );
}
