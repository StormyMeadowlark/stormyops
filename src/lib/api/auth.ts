import { apiFetch } from "@/lib/api/client"
import type {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  MeResponse,
} from "@/types/auth"

export function login(data: LoginRequest) {
  return apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function logout() {
  return apiFetch<LogoutResponse>("/auth/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function getMe() {
  return apiFetch<MeResponse>("/auth/me", {
    method: "GET",
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}