export type InfoResponse = {
  name: string
  version: string
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export async function fetchInfo(): Promise<InfoResponse> {
  const response = await fetch(`${API_URL}/api/info`)
  if (!response.ok) {
    throw new Error(`Failed to fetch info: ${response.status}`)
  }
  return response.json() as Promise<InfoResponse>
}
