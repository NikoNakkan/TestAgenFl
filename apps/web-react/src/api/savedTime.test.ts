import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchSavedTime, saveSavedTime } from './savedTime'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('savedTime API', () => {
  it('fetchSavedTime returns JSON', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ value: null }),
      }),
    )

    await expect(fetchSavedTime()).resolves.toEqual({ value: null })
  })

  it('saveSavedTime PUTs ISO string', async () => {
    const iso = '2026-06-11T14:30:00.000Z'
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ value: iso }),
    })
    vi.stubGlobal('fetch', fetchMock)

    await expect(saveSavedTime(iso)).resolves.toEqual({ value: iso })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/saved-time'),
      expect.objectContaining({ method: 'PUT' }),
    )
  })
})
