export default function WebsiteStats({ data = [] }) {
  return (
    <div className="container mx-auto py-10 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center">
        👋 WELCOME AND THANK YOU SO MUCH
      </h1>
      <p className="mt-4 text-center text-gray-600 max-w-xl text-lg">
        We're grateful for your visit! Here's a quick look at how our website is
        growing.
      </p>

      {/* Stats Grid */}
      <div className="mt-8 flex gap-2 w-full max-w-5xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="py-5 w-full rounded-md flex flex-col items-center justify-center bg-blue-500 text-white shadow-md transition-transform hover:scale-105"
          >
            <p className="text-sm font-medium mb-1">{item.label}</p>
            <span className="text-2xl font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
