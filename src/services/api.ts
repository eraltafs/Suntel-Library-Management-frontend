import type { LoginResponse } from "../types/auth.types";

const API_URL = "http://localhost:3000/api";

export const loginRequest = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Login failed");

  return res.json();
};

export const fetchBooks = async (token: string) => {
  const res = await fetch(`${API_URL}/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch books");

  return res.json();
};

export const addBook = async (token: string, bookData: any) => {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });

  return res.json();
};

export const toggleBookStatus = async (
  token: string,
  bookId: string
) => {
  const res = await fetch(
    `${API_URL}/books/${bookId}/status`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};