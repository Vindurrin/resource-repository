import { useEffect, useState } from 'react'
import { getResources, getTeams } from './api'
import type { Resource, Team } from './types'

export default function App() {
  const [resources, setResources] = useState<Resource[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const [resourceData, teamData] = await Promise.all([getResources(), getTeams()])
        setResources(resourceData)
        setTeams(teamData)
      } catch {
        setError('Failed to load data from the backend API.')
      } finally {
        setLoading(false)
      }
    }

    void loadData()
  }, [])

  if (loading) return <main className="page"><p>Loading…</p></main>

  if (error) return <main className="page"><p className="error">{error}</p></main>

  return (
    <main className="page">
      <h1>Resource Management (React)</h1>
      <section>
        <h2>Resources</h2>
        <ul>
          {resources.map((resource) => (
            <li key={resource.id}>
              <strong>{resource.role}</strong> — {resource.project} ({resource.status})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Teams</h2>
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
              <strong>{team.name}</strong> — {team.project} ({team.status})
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
