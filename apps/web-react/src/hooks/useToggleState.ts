import { useCallback, useEffect, useState } from 'react'
import { fetchToggleState, saveToggleState } from '../api/toggleState'

export function useToggleState() {
  const [value, setValue] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchToggleState()
      .then((data) => setValue(data.value))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const persist = useCallback(async (next: boolean) => {
    const previous = value
    setValue(next)
    setError(null)
    try {
      const saved = await saveToggleState(next)
      setValue(saved.value)
    } catch (err) {
      setValue(previous)
      setError(err instanceof Error ? err.message : 'Failed to save')
    }
  }, [value])

  const toggle = useCallback(async () => {
    await persist(!value)
  }, [persist, value])

  return { value, toggle, persist, loading, error }
}
