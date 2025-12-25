import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [envData, setEnvData] = useState({})

  useEffect(() => {
    // Collect environment information
    const data = {
      'Node Environment': process.env.NODE_ENV || 'Not set',
      'Vite Mode': import.meta.env.MODE || 'Not set',
      'Base URL': import.meta.env.BASE_URL || '/',
      'Browser User Agent': navigator.userAgent,
      'Current URL': window.location.href,
      'Hostname': window.location.hostname,
      'Protocol': window.location.protocol,
      'Timestamp': new Date().toISOString(),
      'Platform': navigator.platform,
      'Language': navigator.language,
      'Online Status': navigator.onLine ? 'Online' : 'Offline',
      'Memory (if available)': navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Not available',
      'Cores (if available)': navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency}` : 'Not available',
    }
    setEnvData(data)
  }, [])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 GitHub Actions Learning Environment</h1>
        <p className="subtitle">Environment Information Display</p>
      </header>

      <main className="app-main">
        <section className="info-section">
          <h2>📊 Environment Variables</h2>
          <div className="env-grid">
            {Object.entries(envData).map(([key, value]) => (
              <div key={key} className="env-item">
                <div className="env-key">{key}</div>
                <div className="env-value">{String(value)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <h2>📚 GitHub Actions Learning Topics</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <h3>1. Core Concepts</h3>
              <p>Workflows, jobs, steps, actions, runners</p>
            </div>
            <div className="topic-card">
              <h3>2. Workflow Syntax</h3>
              <p>YAML basics, on, jobs, steps, uses, run</p>
            </div>
            <div className="topic-card">
              <h3>3. Events & Triggers</h3>
              <p>push, pull_request, workflow_dispatch, schedules</p>
            </div>
            <div className="topic-card">
              <h3>4. Runners</h3>
              <p>GitHub-hosted vs self-hosted, machine images</p>
            </div>
            <div className="topic-card">
              <h3>5. Actions</h3>
              <p>Marketplace, composite actions, custom actions</p>
            </div>
            <div className="topic-card">
              <h3>6. Matrix Builds</h3>
              <p>strategy.matrix for testing multiple configs</p>
            </div>
            <div className="topic-card">
              <h3>7. Secrets & Variables</h3>
              <p>Repo/org/environment secrets, best practices</p>
            </div>
            <div className="topic-card">
              <h3>8. Caching & Artifacts</h3>
              <p>Speed up builds, pass data between jobs</p>
            </div>
            <div className="topic-card">
              <h3>9. Reusable Workflows</h3>
              <p>DRY patterns, call workflows from workflows</p>
            </div>
            <div className="topic-card">
              <h3>10. Security</h3>
              <p>Least privilege, GITHUB_TOKEN, permissions</p>
            </div>
            <div className="topic-card">
              <h3>11. Testing & Debugging</h3>
              <p>workflow_run, act alternatives, logging</p>
            </div>
            <div className="topic-card">
              <h3>12. Advanced CI/CD</h3>
              <p>Deployment, environments, approvals, monorepo</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>📁 Workflow Files Location</h2>
          <p className="code-block">.github/workflows/</p>
          <p className="description">All GitHub Actions workflow files are stored in this directory</p>
        </section>
      </main>

      <footer className="app-footer">
        <p>Learn GitHub Actions through practical YAML examples</p>
      </footer>
    </div>
  )
}

export default App
