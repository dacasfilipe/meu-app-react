export default function SearchBar() {
    return (
      <div className="flex items-center bg-white p-2 rounded shadow-md">
        <input
          type="text"
          placeholder="Pesquisar"
          className="flex-1 px-4 py-2 outline-none"
        />
        <button className="px-4 text-gray-500">🔍</button>
      </div>
    );
  }
  