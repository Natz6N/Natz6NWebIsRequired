export default function WebsiteStats({ data = [] }) {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
  
      {/* Stats Grid */}
      <div className="flex gap-2 w-full max-w-5xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="py-5 w-full rounded-md flex flex-col items-center justify-center bg-blue-500 text-white"
          >
            <p className="text-sm font-medium mb-1">{item.label}</p>
            <span className="text-2xl font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
