import { useTranslation } from 'react-i18next'
import { TimeDialog } from '../TimeDialog/TimeDialog'
import './FlowDialog.css'

export type FlowDialogProps = {
  flowActive: boolean
}

export function FlowDialog({ flowActive }: FlowDialogProps) {
  const { t } = useTranslation('app')
  const label = flowActive ? t('flow.on') : t('flow.off')

  return (
    <div
      className={`flow-dialog ${flowActive ? 'flow-dialog--active' : 'flow-dialog--idle'}`}
      role="status"
      data-testid="flow-dialog"
      aria-live="polite"
    >
      <div className="flow-dialog__header">
        <span className="flow-dialog__dot" aria-hidden="true" />
        <p className="flow-dialog__title">{label}</p>
      </div>
      <TimeDialog />
    </div>
  )
}
