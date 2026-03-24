import { apiFetch } from "@/lib/api/client"
import type { PaginatedResponse } from "@/types/api"
import type {
  PostSummary,
  PostDetail,
  CreatePostRequest,
  UpdatePostRequest,
} from "@/types/post"

export function listPosts(params?: {
  q?: string
  status?: string
  page?: number
  limit?: number
}) {
  const search = new URLSearchParams()

  if (params?.q) search.set("q", params.q)
  if (params?.status) search.set("status", params.status)
  if (params?.page) search.set("page", String(params.page))
  if (params?.limit) search.set("limit", String(params.limit))

  const query = search.toString()

  return apiFetch<PaginatedResponse<PostSummary>>(
    `/admin/posts${query ? `?${query}` : ""}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "X-Tenant": "stormyops",
      },
    }
  )
}

export function getPost(id: string) {
  return apiFetch<PostDetail>(`/admin/posts/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function createPost(data: CreatePostRequest) {
  return apiFetch<PostDetail>("/admin/posts", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function updatePost(id: string, data: UpdatePostRequest) {
  return apiFetch<PostDetail>(`/admin/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}