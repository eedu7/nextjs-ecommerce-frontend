import { ApiError } from "./errors";
import type { FetchOptions } from "./types";
import { buildUrl } from "./utils";

export async function baseFetch<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { params, headers, ...fetchOptions } = options;
  const isFormData = fetchOptions.body instanceof FormData;
  const defaultHeaders: Record<string, string> = {};
  if (!isFormData) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  const res = await fetch(buildUrl(endpoint, params), {
    ...fetchOptions,
    headers: {
      ...defaultHeaders,
      ...(headers || {}),
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new ApiError(res.status, errorBody);
  }
  return res.json();
}
