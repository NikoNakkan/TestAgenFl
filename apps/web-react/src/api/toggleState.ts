export type ToggleStateResponse = {
  value: boolean
}

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export async function fetchToggleState(): Promise<ToggleStateResponse> {
  const response = await fetch(`${API_URL}/api/toggle-state`)
  if (!response.ok) {
    throw new Error(`Failed to fetch toggle state: ${response.status}`)
  }
  return response.json() as Promise<ToggleStateResponse>
}

export async function saveToggleState(value: boolean): Promise<ToggleStateResponse> {
  const response = await fetch(`${API_URL}/api/toggle-state`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value }),
  })
  if (!response.ok) {
    throw new Error(`Failed to save toggle state: ${response.status}`)
  }
  return response.json() as Promise<ToggleStateResponse>
}
