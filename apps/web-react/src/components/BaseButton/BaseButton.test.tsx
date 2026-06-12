import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { BaseButton } from './BaseButton'

describe('BaseButton', () => {
  it('renders false label and calls onChange with true when clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<BaseButton value={false} onChange={onChange} />)

    await user.click(screen.getByTestId('base-button'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('renders true styling class when value is true', () => {
    render(<BaseButton value={true} onChange={vi.fn()} />)

    expect(screen.getByTestId('base-button')).toHaveClass('base-button--true')
    expect(screen.getByText('True')).toBeInTheDocument()
  })
})
