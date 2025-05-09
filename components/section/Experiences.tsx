export default function Experiences() {
  const events = [
    { date: "November 2023 - May 2025", title: "PT. Hanatekindo Mulia Abadi", description: "IT Staff", active: true },
    { date: "September 2021 - November 2021", title: "PT. Kreatif Solusi Informatika", description: "IT Staff", active: false },
  ];

  return (
    <div id="experiences" className="w-full sm:h-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-start font-bold text-2xl">Experiences</h1>
      <div className="space-y-6">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-center space-x-4">
          <div className={`h-4 w-4 rounded-full ${event.active === true ? 'bg-green-500':'bg-blue-500'} `}></div>
          <div>
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
