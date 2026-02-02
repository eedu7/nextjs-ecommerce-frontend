export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  username: string;
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role: "customer" | "vendor" | "admin" | "staff";
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: AuthToken;
}
