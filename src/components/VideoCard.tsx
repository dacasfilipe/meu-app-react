type Props = {
    thumbnail: string;
    title: string;
    channel: string;
    views: string;
    time: string;
  };
  
  export default function VideoCard({ thumbnail, title, channel, views, time }: Props) {
    return (
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <img src={thumbnail} alt="thumbnail" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-sm">{title}</h2>
          <p className="text-xs text-gray-600">{channel}</p>
          <p className="text-xs text-gray-500">{views} • {time}</p>
        </div>
      </div>
    );
  }
  