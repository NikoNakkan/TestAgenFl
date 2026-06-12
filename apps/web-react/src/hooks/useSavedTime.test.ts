import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import * as savedTimeApi from '../api/savedTime'
import { useSavedTime } from './useSavedTime'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useSavedTime', () => {
  it('loads initial value from API', async () => {
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({
      value: '2026-06-11T10:00:00.000Z',
    })

    const { result } = renderHook(() => useSavedTime())

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.value).toBe('2026-06-11T10:00:00.000Z')
  })

  it('saveCurrentTime persists ISO timestamp', async () => {
    vi.spyOn(savedTimeApi, 'fetchSavedTime').mockResolvedValue({ value: null })
    vi.spyOn(savedTimeApi, 'saveSavedTime').mockResolvedValue({
      value: '2026-06-11T12:00:00.000Z',
    })

    const { result } = renderHook(() => useSavedTime())
    await waitFor(() => expect(result.current.loading).toBe(false))

    await act(async () => {
      await result.current.saveCurrentTime()
    })

    expect(savedTimeApi.saveSavedTime).toHaveBeenCalledWith(expect.any(String))
    expect(result.current.value).toBe('2026-06-11T12:00:00.000Z')
  })
})
