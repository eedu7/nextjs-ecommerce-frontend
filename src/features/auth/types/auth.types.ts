export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  username: string;
}

export interface LogoutPayload {
  access_token: string;
  refresh_token: string;
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
}

export interface AuthToken {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: AuthToken;
}
