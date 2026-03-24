import { apiFetch } from "@/lib/api/client"
import type { PaginatedResponse } from "@/types/api"
import type {
  MediaItem,
  ListMediaParams,
  UpdateMediaRequest,
  CreateMediaUploadRequest,
  CreateMediaUploadResponse,
  CreateMediaRequest,
  DeleteMediaResponse,
  PurgeMediaResponse,
} from "@/types/media"

export function listMedia(params?: ListMediaParams) {
  const search = new URLSearchParams()

  if (params?.kind) search.set("kind", params.kind)
  if (params?.status) search.set("status", params.status)
  if (params?.q) search.set("q", params.q)
  if (params?.page) search.set("page", String(params.page))
  if (params?.limit) search.set("limit", String(params.limit))

  const query = search.toString()

  return apiFetch<PaginatedResponse<MediaItem>>(
    `/admin/media${query ? `?${query}` : ""}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "X-Tenant": "stormyops",
      },
    }
  )
}

export function createMediaUpload(data: CreateMediaUploadRequest) {
  return apiFetch<CreateMediaUploadResponse>("/admin/media/presign", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function createMediaRecord(data: CreateMediaRequest) {
  return apiFetch<MediaItem>("/admin/media", {
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function updateMedia(id: string, data: UpdateMediaRequest) {
  return apiFetch<MediaItem>(`/admin/media/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function deleteMedia(id: string) {
  return apiFetch<DeleteMediaResponse>(`/admin/media/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}

export function purgeMedia(id: string) {
  return apiFetch<PurgeMediaResponse>(`/admin/media/${id}/purge`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "X-Tenant": "stormyops",
    },
  })
}