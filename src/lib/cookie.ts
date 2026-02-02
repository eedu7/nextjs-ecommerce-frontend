import Cookies from "js-cookie";

type CookieKey = "accessToken" | "refreshToken";

export function setCookie(key: CookieKey, value: string, expires: number = 7) {
  Cookies.set(key, value, { expires });
}

export function getCookie(key: CookieKey): string | undefined {
  return Cookies.get(key);
}

export function deleteCookie(key: CookieKey) {
  Cookies.remove(key);
}
