import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import i18n from '../../i18n'
import * as savedTimeApi from '../../api/savedTime'
import { TimeDialog } from './TimeDialog'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('TimeDialog', () => {
  it('shows live clock and empty saved time', async () => {
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({ value: null })

    render(<TimeDialog />)

    expect(screen.getByTestId('time-dialog')).toBeInTheDocument()
    expect(screen.getByTestId('time-dialog-now')).not.toHaveTextContent(i18n.t('time:empty'))
    await waitFor(() =>
      expect(screen.getByTestId('time-dialog-saved')).toHaveTextContent(i18n.t('time:empty')),
    )
    expect(screen.getByTestId('time-dialog-button')).toHaveTextContent(i18n.t('time:saveButton'))
  })

  it('saves current time when Time button is clicked', async () => {
    const user = userEvent.setup()
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({ value: null })
    vi.spyOn(savedTimeApi, 'saveSavedTime').mockResolvedValue({
      value: '2026-06-11T15:30:00.000Z',
    })

    render(<TimeDialog />)
    await waitFor(() => expect(screen.getByTestId('time-dialog-button')).not.toBeDisabled())

    await user.click(screen.getByTestId('time-dialog-button'))

    expect(savedTimeApi.saveSavedTime).toHaveBeenCalled()
    await waitFor(() =>
      expect(screen.getByTestId('time-dialog-saved')).not.toHaveTextContent(i18n.t('time:empty')),
    )
  })
})
