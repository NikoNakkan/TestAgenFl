import { useCallback, useEffect, useState } from 'react'
import { fetchSavedTime, saveSavedTime } from '../api/savedTime'

export function useSavedTime() {
  const [value, setValue] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSavedTime()
      .then((data) => setValue(data.value))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const saveCurrentTime = useCallback(async () => {
    const next = new Date().toISOString()
    const previous = value
    setValue(next)
    setSaving(true)
    setError(null)
    try {
      const saved = await saveSavedTime(next)
      setValue(saved.value)
    } catch (err) {
      setValue(previous)
      setError(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }, [value])

  return { value, saveCurrentTime, loading, saving, error }
}
