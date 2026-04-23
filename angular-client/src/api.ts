import type { Resource, Team } from './types'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4444/api/v1'

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return (await response.json()) as T
}

export function getResources() {
  return getJson<Resource[]>('/resources')
}

export function getTeams() {
  return getJson<Team[]>('/teams')
}
