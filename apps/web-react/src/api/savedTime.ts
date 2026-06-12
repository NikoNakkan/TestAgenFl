export type SavedTimeResponse = {
  value: string | null
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export async function fetchSavedTime(): Promise<SavedTimeResponse> {
  const response = await fetch(`${API_URL}/api/saved-time`)
  if (!response.ok) {
    throw new Error(`Failed to fetch saved time: ${response.status}`)
  }
  return response.json() as Promise<SavedTimeResponse>
}

export async function saveSavedTime(value: string): Promise<SavedTimeResponse> {
  const response = await fetch(`${API_URL}/api/saved-time`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value }),
  })
  if (!response.ok) {
    throw new Error(`Failed to save time: ${response.status}`)
  }
  return response.json() as Promise<SavedTimeResponse>
}
