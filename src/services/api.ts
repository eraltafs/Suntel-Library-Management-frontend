import type { LoginResponse } from "../types/auth.types";

const API_URL = "http://localhost:3000";

export const loginRequest = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
};