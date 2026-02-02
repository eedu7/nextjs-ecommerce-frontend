"use client";

import { getCookie } from "../cookie";
import { baseFetch } from "./core";
import type { FetchOptions } from "./types";

export async function clientApiFetch<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const accessToken = getCookie("accessToken");

  return baseFetch<T>(endpoint, {
    ...options,
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      ...(options.headers || {}),
    },
  });
}
