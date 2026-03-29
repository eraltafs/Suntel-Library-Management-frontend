export interface AuthState {
  token: string | null;
  role: string | null;
}

export interface LoginResponse {
  token: string;
  role: string;
}