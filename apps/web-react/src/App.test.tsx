import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import i18n from './i18n'
import App from './App'
import * as infoApi from './api/info'
import * as savedTimeApi from './api/savedTime'
import * as toggleApi from './api/toggleState'

describe('App', () => {
  it('renders API info when fetch succeeds', async () => {
    vi.spyOn(infoApi, 'fetchInfo').mockResolvedValue({
      name: 'test-project-agentic-flow',
      version: '0.1.0',
    })
    vi.spyOn(toggleApi, 'fetchToggleState').mockResolvedValue({ value: false })
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({ value: null })

    render(<App />)

    expect(await screen.findByTestId('api-info')).toHaveTextContent('v0.1.0')
    expect(screen.getByTestId('toggle-emoji')).toHaveTextContent('🙂')
    expect(screen.getByTestId('app-shell')).toHaveClass('app-shell--flow-idle')
    expect(screen.getByTestId('flow-dialog')).toHaveTextContent(i18n.t('app:flow.off'))
  })
})
