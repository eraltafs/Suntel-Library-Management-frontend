import { useEffect, useState } from "react";
import { fetchBooks, toggleBookStatus } from "../services/api";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function BooksPage() {
  const { token, role } = useAuth();

  const [books, setBooks] = useState<any[]>([]);

  const loadBooks = async () => {
    if (!token) return;

    const data = await fetchBooks(token);
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleBorrow = async (id: string) => {
    if (!token) return;

    await toggleBookStatus(token, id);
    loadBooks();
  };

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">
          Books Dashboard
        </h1>

        {books.map((book) => (
          <div
            key={book._id}
            className="border p-3 mb-2 flex justify-between"
          >
            <div>
              <p className="font-semibold">{book.title}</p>
              <p>{book.author}</p>
              <p>Status: {book.status}</p>
            </div>

            <button
              onClick={() => handleBorrow(book._id)}
              className="bg-blue-500 text-white px-3 py-1"
            >
              {book.status === "available"
                ? "Borrow"
                : "Return"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}