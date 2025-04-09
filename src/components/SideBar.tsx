import { Home, Video, History } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-16 bg-white shadow-md flex flex-col items-center py-4">
      <button className="mb-6"><Home /></button>
      <button className="mb-6"><Video /></button>
      <button className="mb-6"><History /></button>
    </div>
  );
}
