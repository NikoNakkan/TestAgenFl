import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import i18n from '../../i18n'
import * as savedTimeApi from '../../api/savedTime'
import { FlowDialog } from './FlowDialog'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('FlowDialog', () => {
  it('shows off when flow is false', async () => {
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({ value: null })
    render(<FlowDialog flowActive={false} />)
    expect(screen.getByTestId('flow-dialog')).toHaveClass('flow-dialog--idle')
    expect(screen.getByText(i18n.t('app:flow.off'))).toBeInTheDocument()
    await waitFor(() => expect(screen.getByTestId('time-dialog')).toBeInTheDocument())
  })

  it('shows on when flow is true', async () => {
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({ value: null })
    render(<FlowDialog flowActive={true} />)
    expect(screen.getByTestId('flow-dialog')).toHaveClass('flow-dialog--active')
    expect(screen.getByText(i18n.t('app:flow.on'))).toBeInTheDocument()
    await waitFor(() => expect(screen.getByTestId('time-dialog')).toBeInTheDocument())
  })
})
