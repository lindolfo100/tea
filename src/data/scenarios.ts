export interface DialogueOption {
  emoji: string
  text: string
}

export interface DialogueTurn {
  speaker: string
  speakerEmoji: string
  prompt: string
  options: DialogueOption[]
}

export interface Scenario {
  id: string
  title: string
  emoji: string
  color: string
  turns: DialogueTurn[]
}

export const scenarios: Scenario[] = [
  {
    id: 'planetas',
    title: 'Conversando sobre Planetas',
    emoji: '🪐',
    color: '#c7d9f7',
    turns: [
      {
        speaker: 'Luna, a astronauta',
        speakerEmoji: '👩‍🚀',
        prompt: 'Oi! Eu adoro o espaço. Qual planeta você mais gosta?',
        options: [
          { emoji: '🪐', text: 'Eu gosto de Saturno, ele tem anéis!' },
          { emoji: '🔴', text: 'Eu gosto de Marte, o planeta vermelho!' },
          { emoji: '🌍', text: 'Eu gosto da Terra, é onde eu moro!' },
        ],
      },
      {
        speaker: 'Luna, a astronauta',
        speakerEmoji: '👩‍🚀',
        prompt: 'Que legal! Você sabia que Júpiter é o maior planeta?',
        options: [
          { emoji: '😮', text: 'Uau, eu não sabia!' },
          { emoji: '😊', text: 'Sim, eu sabia! Júpiter é gigante!' },
          { emoji: '❓', text: 'Qual é o menor planeta?' },
        ],
      },
      {
        speaker: 'Luna, a astronauta',
        speakerEmoji: '👩‍🚀',
        prompt: 'Mercúrio é o menor! Foi muito bom conversar com você. Tchau!',
        options: [
          { emoji: '👋', text: 'Tchau, Luna! Até a próxima!' },
          { emoji: '😄', text: 'Adorei conversar sobre planetas!' },
        ],
      },
    ],
  },
  {
    id: 'dinossauros',
    title: 'Amigo dos Dinossauros',
    emoji: '🦕',
    color: '#d4ecd0',
    turns: [
      {
        speaker: 'Dino, o dinossauro',
        speakerEmoji: '🦖',
        prompt: 'Roar! Olá! Você gosta de dinossauros?',
        options: [
          { emoji: '🦕', text: 'Sim! Eu amo dinossauros!' },
          { emoji: '🦖', text: 'Gosto! O T-Rex é o meu favorito!' },
        ],
      },
      {
        speaker: 'Dino, o dinossauro',
        speakerEmoji: '🦖',
        prompt: 'Eu também! O que você acha que os dinossauros comiam?',
        options: [
          { emoji: '🌿', text: 'Alguns comiam plantas!' },
          { emoji: '🍖', text: 'Alguns comiam carne!' },
          { emoji: '🤔', text: 'Não sei, me conta!' },
        ],
      },
      {
        speaker: 'Dino, o dinossauro',
        speakerEmoji: '🦖',
        prompt: 'Isso mesmo! Uns comiam plantas e outros carne. Quer brincar comigo de novo um dia?',
        options: [
          { emoji: '😄', text: 'Sim! Vamos brincar de novo!' },
          { emoji: '👋', text: 'Quero sim! Tchau, Dino!' },
        ],
      },
    ],
  },
  {
    id: 'musica',
    title: 'Hora da Música',
    emoji: '🎵',
    color: '#f7e8c7',
    turns: [
      {
        speaker: 'Melodia, a musicista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'Olá! Eu toco muitos instrumentos. Qual instrumento você gosta?',
        options: [
          { emoji: '🎹', text: 'Eu gosto do piano!' },
          { emoji: '🎸', text: 'Eu gosto do violão!' },
          { emoji: '🥁', text: 'Eu gosto da bateria!' },
        ],
      },
      {
        speaker: 'Melodia, a musicista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'Ótima escolha! Você conhece as notas musicais?',
        options: [
          { emoji: '🎵', text: 'Sim! Dó, ré, mi, fá, sol, lá, si!' },
          { emoji: '🎶', text: 'Conheço algumas!' },
          { emoji: '❓', text: 'Pode me ensinar?' },
        ],
      },
      {
        speaker: 'Melodia, a musicista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'Você é demais! Vamos cantar juntos na próxima vez. Tchau!',
        options: [
          { emoji: '👋', text: 'Tchau, Melodia!' },
          { emoji: '🎤', text: 'Vou adorar cantar com você!' },
        ],
      },
    ],
  },
  {
    id: 'lanche',
    title: 'Pedindo um Lanche',
    emoji: '🍎',
    color: '#f7d9d0',
    turns: [
      {
        speaker: 'Mamãe',
        speakerEmoji: '👩',
        prompt: 'Oi, meu amor! Você está com fome?',
        options: [
          { emoji: '😋', text: 'Sim, estou com fome!' },
          { emoji: '🙂', text: 'Um pouquinho.' },
        ],
      },
      {
        speaker: 'Mamãe',
        speakerEmoji: '👩',
        prompt: 'O que você quer comer?',
        options: [
          { emoji: '🍎', text: 'Eu quero uma fruta, por favor.' },
          { emoji: '🥪', text: 'Eu quero um sanduíche, por favor.' },
          { emoji: '🥤', text: 'Eu quero um suco, por favor.' },
        ],
      },
      {
        speaker: 'Mamãe',
        speakerEmoji: '👩',
        prompt: 'Aqui está! O que a gente fala quando recebe algo?',
        options: [
          { emoji: '💛', text: 'Obrigado, mamãe!' },
          { emoji: '😊', text: 'Muito obrigado!' },
        ],
      },
    ],
  },
  {
    id: 'animais',
    title: 'Visita ao Zoológico',
    emoji: '🦁',
    color: '#e3d0f7',
    turns: [
      {
        speaker: 'Zé, o cuidador',
        speakerEmoji: '🧑‍🌾',
        prompt: 'Bem-vindo ao zoológico! Qual animal você quer ver primeiro?',
        options: [
          { emoji: '🦁', text: 'Eu quero ver o leão!' },
          { emoji: '🐘', text: 'Eu quero ver o elefante!' },
          { emoji: '🐧', text: 'Eu quero ver os pinguins!' },
        ],
      },
      {
        speaker: 'Zé, o cuidador',
        speakerEmoji: '🧑‍🌾',
        prompt: 'Boa escolha! Que som esse animal faz?',
        options: [
          { emoji: '🔊', text: 'O leão faz roar!' },
          { emoji: '🎺', text: 'O elefante faz fom fom!' },
          { emoji: '🤷', text: 'Não sei, qual é o som?' },
        ],
      },
      {
        speaker: 'Zé, o cuidador',
        speakerEmoji: '🧑‍🌾',
        prompt: 'Muito bem! Obrigado pela visita. Volte sempre!',
        options: [
          { emoji: '👋', text: 'Tchau! Adorei o zoológico!' },
          { emoji: '😄', text: 'Obrigado, Zé! Até logo!' },
        ],
      },
    ],
  },
  {
    id: 'escola',
    title: 'Fazendo um Amigo',
    emoji: '🧒',
    color: '#d0eef7',
    turns: [
      {
        speaker: 'Pedro, o colega',
        speakerEmoji: '🧒',
        prompt: 'Oi! Eu sou o Pedro. Qual é o seu nome?',
        options: [
          { emoji: '😊', text: 'Oi! Eu sou o Thales!' },
          { emoji: '👋', text: 'Olá, Pedro! Meu nome é Thales.' },
        ],
      },
      {
        speaker: 'Pedro, o colega',
        speakerEmoji: '🧒',
        prompt: 'Legal, Thales! Do que você gosta de brincar?',
        options: [
          { emoji: '🦕', text: 'Eu gosto de brincar de dinossauros!' },
          { emoji: '🔢', text: 'Eu gosto de números e letras!' },
          { emoji: '🎨', text: 'Eu gosto de cores e formas!' },
        ],
      },
      {
        speaker: 'Pedro, o colega',
        speakerEmoji: '🧒',
        prompt: 'Eu também gosto! Quer brincar comigo no recreio?',
        options: [
          { emoji: '😄', text: 'Sim! Vamos brincar juntos!' },
          { emoji: '🤝', text: 'Quero sim, Pedro!' },
        ],
      },
    ],
  },
]
