import type { FetchOptions } from "./types";

export function buildUrl(endpoint: string, params?: FetchOptions["params"]) {
  const url = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL_SUFFIX + endpoint,
    process.env.NEXT_PUBLIC_BASE_API_URL,
  );
  if (params) {
    Object.entries(params).forEach(([Key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(Key, String(value));
      }
    });
  }
  return url.toString();
}
