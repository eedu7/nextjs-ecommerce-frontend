import { cookies } from "next/headers";
import { baseFetch } from "./core";
import type { FetchOptions } from "./types";

export async function serverApiFetch<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  return baseFetch<T>(endpoint, {
    ...options,
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      ...(options.headers || {}),
    },
  });
}
