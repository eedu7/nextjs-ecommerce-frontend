import { clientApiFetch } from "@/lib/api/client";
import type {
  AuthResponse,
  LoginPayload,
  LogoutPayload,
  RegisterPayload,
} from "../types/auth.types";

export async function registerUser(
  data: RegisterPayload,
): Promise<AuthResponse> {
  return clientApiFetch<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function loginUser(data: LoginPayload): Promise<AuthResponse> {
  return clientApiFetch<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function logoutUser(data: LogoutPayload) {
  return clientApiFetch("/auth/logout", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
