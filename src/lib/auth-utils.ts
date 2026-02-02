import { redirect } from "next/navigation";
import { ApiError } from "./api/errors";
import { serverApiFetch } from "./api/server";


interface User {
  id: string;
  username: string;
  email: string;
}

export async function requireAuth() {
  try {
    return await serverApiFetch<User>("/users/me");
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      redirect("/login");
    }
  }
}

export async function requireUnAuth() {
  try {
    await serverApiFetch<User>("/users/me");
    redirect("/dashboard");
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      return;
    }
    throw error;
  }
}
