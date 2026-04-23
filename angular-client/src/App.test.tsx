import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import App from './App'

vi.mock('./api', () => ({
  getResources: vi.fn(async () => []),
  getTeams: vi.fn(async () => [])
}))

test('renders page title', async () => {
  render(<App />)
  expect(await screen.findByText('Resource Management (React)')).toBeInTheDocument()
})
