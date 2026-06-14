import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSavedTime } from '../../hooks/useSavedTime'
import './TimeDialog.css'

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString()
}

export function TimeDialog() {
  const { t } = useTranslation('time')
  const [now, setNow] = useState(() => new Date())
  const { value, saveCurrentTime, loading, saving, error } = useSavedTime()

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="time-dialog" data-testid="time-dialog" role="group" aria-label={t('ariaLabel')}>
      <p className="time-dialog__label">{t('now')}</p>
      <p className="time-dialog__clock" data-testid="time-dialog-now">
        {now.toLocaleTimeString()}
      </p>

      <p className="time-dialog__label">{t('saved')}</p>
      <p className="time-dialog__saved" data-testid="time-dialog-saved">
        {loading ? t('loading') : value ? formatTime(value) : t('empty')}
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
        {t('saveButton')}
      </button>

      {error && (
        <p className="time-dialog__error" role="alert">
          {t('saveError')}
        </p>
      )}
    </div>
  )
}
