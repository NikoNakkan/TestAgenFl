import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchInfo } from './info'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('fetchInfo', () => {
  it('returns parsed info JSON', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ name: 'test-app', version: '1.0.0' }),
      }),
    )

    await expect(fetchInfo()).resolves.toEqual({
      name: 'test-app',
      version: '1.0.0',
    })
  })
})
