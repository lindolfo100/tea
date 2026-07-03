import { useEffect, useState } from 'react'
import { scenarios, type Scenario } from './data/scenarios'
import { feelings } from './data/feelings'
import { speak } from './speech'
import './App.css'

type Screen = 'home' | 'dialogue' | 'feelings'

const STARS_KEY = 'fala-thales-stars'

function loadStars(): number {
  return Number(localStorage.getItem(STARS_KEY) ?? 0)
}

function Home({
  stars,
  onPickScenario,
  onFeelings,
}: {
  stars: number
  onPickScenario: (s: Scenario) => void
  onFeelings: () => void
}) {
  return (
    <div className="home">
      <header className="header">
        <h1>🌟 Fala Thales</h1>
        <p className="subtitle">Vamos conversar juntos!</p>
        <div className="stars-badge" aria-label={`${stars} estrelas`}>
          ⭐ {stars}
        </div>
      </header>
      <button className="feelings-btn" onClick={onFeelings}>
        💛 Como eu me sinto
      </button>
      <h2 className="section-title">Escolha uma conversa:</h2>
      <div className="scenario-grid">
        {scenarios.map((s) => (
          <button
            key={s.id}
            className="scenario-card"
            style={{ backgroundColor: s.color }}
            onClick={() => onPickScenario(s)}
          >
            <span className="scenario-emoji">{s.emoji}</span>
            <span className="scenario-title">{s.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Dialogue({
  scenario,
  onFinish,
  onBack,
}: {
  scenario: Scenario
  onFinish: () => void
  onBack: () => void
}) {
  const [turnIndex, setTurnIndex] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const turn = scenario.turns[turnIndex]

  useEffect(() => {
    speak(turn.prompt)
  }, [turn])

  function choose(text: string) {
    if (chosen) return
    setChosen(text)
    speak(text, () => {
      if (turnIndex + 1 < scenario.turns.length) {
        setTurnIndex(turnIndex + 1)
        setChosen(null)
      } else {
        setDone(true)
        speak('Parabéns! Você ganhou uma estrela!')
        onFinish()
      }
    })
  }

  if (done) {
    return (
      <div className="dialogue" style={{ backgroundColor: scenario.color }}>
        <div className="celebration">
          <div className="celebration-star">⭐</div>
          <h2>Parabéns, Thales!</h2>
          <p>Você completou a conversa e ganhou uma estrela!</p>
          <button className="big-btn" onClick={onBack}>
            🏠 Voltar ao início
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="dialogue" style={{ backgroundColor: scenario.color }}>
      <button className="back-btn" onClick={onBack}>
        ← Voltar
      </button>
      <div className="progress">
        {scenario.turns.map((_, i) => (
          <span key={i} className={i <= turnIndex ? 'dot active' : 'dot'} />
        ))}
      </div>
      <div className="speaker-bubble">
        <span className="speaker-emoji">{turn.speakerEmoji}</span>
        <div>
          <div className="speaker-name">{turn.speaker}</div>
          <button className="prompt" onClick={() => speak(turn.prompt)}>
            {turn.prompt} 🔊
          </button>
        </div>
      </div>
      <p className="hint">O que você quer responder?</p>
      <div className="options">
        {turn.options.map((o) => (
          <button
            key={o.text}
            className={`option-card ${chosen === o.text ? 'chosen' : ''}`}
            onClick={() => choose(o.text)}
          >
            <span className="option-emoji">{o.emoji}</span>
            <span>{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Feelings({ onBack }: { onBack: () => void }) {
  return (
    <div className="feelings">
      <button className="back-btn" onClick={onBack}>
        ← Voltar
      </button>
      <h2>💛 Como eu me sinto</h2>
      <p className="hint">Toque para falar:</p>
      <div className="feelings-grid">
        {feelings.map((f) => (
          <button
            key={f.label}
            className="feeling-card"
            style={{ backgroundColor: f.color }}
            onClick={() => speak(f.phrase)}
          >
            <span className="feeling-emoji">{f.emoji}</span>
            <span className="feeling-label">{f.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [scenario, setScenario] = useState<Scenario | null>(null)
  const [stars, setStars] = useState(loadStars)

  function addStar() {
    setStars((s) => {
      localStorage.setItem(STARS_KEY, String(s + 1))
      return s + 1
    })
  }

  return (
    <main className="app">
      {screen === 'home' && (
        <Home
          stars={stars}
          onPickScenario={(s) => {
            setScenario(s)
            setScreen('dialogue')
          }}
          onFeelings={() => setScreen('feelings')}
        />
      )}
      {screen === 'dialogue' && scenario && (
        <Dialogue
          scenario={scenario}
          onFinish={addStar}
          onBack={() => setScreen('home')}
        />
      )}
      {screen === 'feelings' && <Feelings onBack={() => setScreen('home')} />}
    </main>
  )
}
