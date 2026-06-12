import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import * as toggleApi from '../api/toggleState'
import { useToggleState } from './useToggleState'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useToggleState', () => {
  it('loads initial value from API', async () => {
    vi.spyOn(toggleApi, 'fetchToggleState').mockResolvedValue({ value: true })

    const { result } = renderHook(() => useToggleState())

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.value).toBe(true)
  })

  it('persists toggled value', async () => {
    vi.spyOn(toggleApi, 'fetchToggleState').mockResolvedValue({ value: false })
    vi.spyOn(toggleApi, 'saveToggleState').mockResolvedValue({ value: true })

    const { result } = renderHook(() => useToggleState())
    await waitFor(() => expect(result.current.loading).toBe(false))

    await act(async () => {
      await result.current.toggle()
    })

    expect(toggleApi.saveToggleState).toHaveBeenCalledWith(true)
    expect(result.current.value).toBe(true)
  })
})
