export interface Feeling {
  emoji: string
  label: string
  phrase: string
  color: string
}

export const feelings: Feeling[] = [
  { emoji: '😊', label: 'Feliz', phrase: 'Eu estou feliz!', color: '#f7e8c7' },
  { emoji: '😢', label: 'Triste', phrase: 'Eu estou triste.', color: '#c7d9f7' },
  { emoji: '😠', label: 'Bravo', phrase: 'Eu estou bravo.', color: '#f7d0d0' },
  { emoji: '😨', label: 'Com medo', phrase: 'Eu estou com medo.', color: '#e3d0f7' },
  { emoji: '😴', label: 'Com sono', phrase: 'Eu estou com sono.', color: '#d0d8f0' },
  { emoji: '🍎', label: 'Com fome', phrase: 'Eu estou com fome.', color: '#f7ddd0' },
  { emoji: '💧', label: 'Com sede', phrase: 'Eu estou com sede.', color: '#d0eef7' },
  { emoji: '🆘', label: 'Preciso de ajuda', phrase: 'Eu preciso de ajuda, por favor.', color: '#f7d9e3' },
  { emoji: '🎮', label: 'Quero brincar', phrase: 'Eu quero brincar!', color: '#d4ecd0' },
  { emoji: '🤗', label: 'Quero um abraço', phrase: 'Eu quero um abraço.', color: '#f7e0f0' },
  { emoji: '🚽', label: 'Banheiro', phrase: 'Eu preciso ir ao banheiro.', color: '#e0e8e0' },
  { emoji: '🤫', label: 'Quero silêncio', phrase: 'Eu quero um pouco de silêncio, por favor.', color: '#e8e8f0' },
]
