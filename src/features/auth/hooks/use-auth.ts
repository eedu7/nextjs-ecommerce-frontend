"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookie";
import { loginUser, logoutUser, registerUser } from "../services/auth.api";

export function useRegister() {
  const router = useRouter();
  return useMutation({
    mutationKey: ["register-user", "auth"],
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success("Registered");
      setCookie("accessToken", data.token.access_token);
      setCookie("refreshToken", data.token.refresh_token);
      router.replace("/");
    },
    onError: () => {
      toast.error("Registration failed");
    },
  });
}

export function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationKey: ["login-user", "auth"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success("Logged in");
      setCookie("accessToken", data.token.access_token);
      setCookie("refreshToken", data.token.refresh_token);
      router.replace("/");
    },
    onError: () => {
      toast.error("Login failed");
    },
  });
}

export function useLogout() {
  const router = useRouter();
  return useMutation({
    mutationKey: ["logout-user", "auth"],
    mutationFn: async () => {
      const accessToken = getCookie("accessToken");
      const refreshToken = getCookie("refreshToken");

      if (!accessToken || !refreshToken) return null;

      logoutUser({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    },
    onSuccess: () => {
      toast.success("Logged out");
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      router.replace("/");
    },
    onError: () => {
      toast.error("Logging out failed");
    },
  });
}

export function useForgotPassword() {}
