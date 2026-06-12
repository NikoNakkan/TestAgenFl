import { useEffect, useState } from 'react'
import { fetchInfo, type InfoResponse } from './api/info'
import { BaseButton } from './components/BaseButton/BaseButton'
import { FlowDialog } from './components/FlowDialog/FlowDialog'
import { useToggleState } from './hooks/useToggleState'
import './App.css'

function App() {
  const [info, setInfo] = useState<InfoResponse | null>(null)
  const [infoError, setInfoError] = useState<string | null>(null)
  const { value, persist, loading, error: toggleError } = useToggleState()

  useEffect(() => {
    fetchInfo()
      .then(setInfo)
      .catch((err: Error) => setInfoError(err.message))
  }, [])

  return (
    <main
      className={`app-shell ${value ? 'app-shell--flow-active' : 'app-shell--flow-idle'}`}
      data-testid="app-shell"
    >
      <FlowDialog flowActive={value} />

      <header className="app-header">
        <h1>Preferences</h1>
        {info && (
          <p className="app-version" data-testid="api-info">
            v{info.version}
          </p>
        )}
      </header>

      {infoError && <p className="app-error" role="alert">Could not reach the server.</p>}

      <section className="demo-panel">
        <h2>Status</h2>
        <div className="toggle-row">
          <span className="toggle-emoji" data-testid="toggle-emoji" aria-hidden="true">
            {value ? '😊' : '🙂'}
          </span>
          <BaseButton
            value={value}
            trueLabel="On"
            falseLabel="Off"
            onChange={(next) => {
              void persist(next)
            }}
            disabled={loading}
          />
        </div>
        {toggleError && <p className="app-error" role="alert">Could not save. Try again.</p>}
      </section>
    </main>
  )
}

export default App
