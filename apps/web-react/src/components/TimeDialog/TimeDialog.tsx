import { useEffect, useState } from 'react'
import { useSavedTime } from '../../hooks/useSavedTime'
import './TimeDialog.css'

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString()
}

export function TimeDialog() {
  const [now, setNow] = useState(() => new Date())
  const { value, saveCurrentTime, loading, saving, error } = useSavedTime()

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="time-dialog" data-testid="time-dialog" role="group" aria-label="Time">
      <p className="time-dialog__label">Now</p>
      <p className="time-dialog__clock" data-testid="time-dialog-now">
        {now.toLocaleTimeString()}
      </p>

      <p className="time-dialog__label">Saved</p>
      <p className="time-dialog__saved" data-testid="time-dialog-saved">
        {loading ? '…' : value ? formatTime(value) : '—'}
      </p>

      <button
        type="button"
        className="time-dialog__button"
        data-testid="time-dialog-button"
        disabled={loading || saving}
        onClick={() => {
          void saveCurrentTime()
        }}
      >
        Time
      </button>

      {error && (
        <p className="time-dialog__error" role="alert">
          Could not save. Try again.
        </p>
      )}
    </div>
  )
}
