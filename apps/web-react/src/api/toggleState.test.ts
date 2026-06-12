import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchToggleState, saveToggleState } from './toggleState'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('toggleState API', () => {
  it('fetchToggleState returns JSON', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ value: false }),
      }),
    )

    await expect(fetchToggleState()).resolves.toEqual({ value: false })
  })

  it('saveToggleState PUTs boolean', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ value: true }),
    })
    vi.stubGlobal('fetch', fetchMock)

    await expect(saveToggleState(true)).resolves.toEqual({ value: true })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/toggle-state'),
      expect.objectContaining({ method: 'PUT' }),
    )
  })
})
