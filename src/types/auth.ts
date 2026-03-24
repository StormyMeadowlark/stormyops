export type UserRole = "admin" | "editor"

export type AuthUser = {
  email: string
  role: UserRole
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  ok: true
}

export type LogoutResponse = {
  ok: true
}

export type MeResponse = AuthUser

export type LoginFormState = "idle" | "invalid" | "submitting" | "error" | "success"

export interface LoginValidationErrors {
  email?: string
  password?: string
  form?: string
}