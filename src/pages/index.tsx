import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  const videos = [
    {
      thumbnail: "/devs-trailer.jpg",
      title: "Devs (Hulu) Trailer HD - Nick Offerman, Sonoya Mizuno series",
      channel: "TV Promos",
      views: "1,3 mi de visualizações",
      time: "há 5 anos",
    },
    {
      thumbnail: "/devs-explicada.jpg",
      title: "DEVS EXPLICADA | Breaking Nerd",
      channel: "Breaking Nerd",
      views: "5,3 mil visualizações",
      time: "há 2 anos",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </main>
    </div>
  );
}
