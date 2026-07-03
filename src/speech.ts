let ptVoice: SpeechSynthesisVoice | null = null

function pickVoice() {
  const voices = window.speechSynthesis.getVoices()
  ptVoice =
    voices.find((v) => v.lang === 'pt-BR') ??
    voices.find((v) => v.lang.startsWith('pt')) ??
    null
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  pickVoice()
  window.speechSynthesis.onvoiceschanged = pickVoice
}

export function speak(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) {
    onEnd?.()
    return
  }
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'pt-BR'
  if (ptVoice) u.voice = ptVoice
  u.rate = 0.9
  u.pitch = 1.05
  if (onEnd) {
    let called = false
    const finish = () => {
      if (called) return
      called = true
      onEnd()
    }
    u.onend = finish
    u.onerror = finish
    const estimatedMs = Math.min(1500 + text.length * 90, 12000)
    setTimeout(finish, estimatedMs)
  }
  window.speechSynthesis.speak(u)
}
