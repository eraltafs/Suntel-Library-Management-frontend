import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { role, logout } = useAuth();

  return (
    <div className="flex justify-between p-4 shadow">
      <h2 className="font-bold">Library Dashboard</h2>

      <div className="flex gap-3">
        {role === "admin" && (
          <button className="bg-green-500 px-3 py-1 text-white">
            Add Book
          </button>
        )}

        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}