import { useState } from "react";
import { loginRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = await loginRequest(username, password);

    login(data.token, data.role);

    navigate("/books");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="shadow-md p-6 rounded"
      >
        <input
          className="border p-2 mb-2 block"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 mb-4 block"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-500 px-4 py-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
}