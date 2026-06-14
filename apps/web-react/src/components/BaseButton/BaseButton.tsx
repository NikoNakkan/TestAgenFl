import { useTranslation } from 'react-i18next'
import './BaseButton.css'

export type BaseButtonProps = {
  value: boolean
  onChange: (next: boolean) => void
  disabled?: boolean
  trueLabel?: string
  falseLabel?: string
  'data-testid'?: string
}

export function BaseButton({
  value,
  onChange,
  disabled = false,
  trueLabel,
  falseLabel,
  'data-testid': testId = 'base-button',
}: BaseButtonProps) {
  const { t } = useTranslation('common')
  const label = value
    ? (trueLabel ?? t('toggle.true'))
    : (falseLabel ?? t('toggle.false'))

  return (
    <button
      type="button"
      className={`base-button ${value ? 'base-button--true' : 'base-button--false'}`}
      aria-pressed={value}
      disabled={disabled}
      data-testid={testId}
      onClick={() => onChange(!value)}
    >
      <span className="base-button__indicator" aria-hidden="true" />
      <span className="base-button__label">{label}</span>
    </button>
  )
}
