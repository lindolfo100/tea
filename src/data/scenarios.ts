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
  category: string
  turns: DialogueTurn[]
}

export const categories = [
  'Espaço',
  'Dinossauros',
  'Animais',
  'Música',
  'Aprender',
  'Dia a dia',
]

export const scenarios: Scenario[] = [
  {
    id: 'planetas',
    title: 'Conversando sobre Planetas',
    emoji: '🪐',
    color: '#c7d9f7',
    category: 'Espaço',
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
    id: 'viagem-lua',
    title: 'Viagem à Lua',
    emoji: '🌕',
    color: '#dfe3f0',
    category: 'Espaço',
    turns: [
      {
        speaker: 'Cosmo, o foguete',
        speakerEmoji: '🚀',
        prompt: 'Olá! Eu vou voar até a Lua. Quer vir comigo?',
        options: [
          { emoji: '😄', text: 'Sim! Eu quero ir à Lua!' },
          { emoji: '🚀', text: 'Quero sim! Vamos voar!' },
        ],
      },
      {
        speaker: 'Cosmo, o foguete',
        speakerEmoji: '🚀',
        prompt: 'Segure firme! Cinco, quatro, três, dois, um... O que a gente fala agora?',
        options: [
          { emoji: '🔥', text: 'Decolar!' },
          { emoji: '🌟', text: 'Lá vamos nós!' },
        ],
      },
      {
        speaker: 'Cosmo, o foguete',
        speakerEmoji: '🚀',
        prompt: 'Chegamos na Lua! O que você está vendo?',
        options: [
          { emoji: '🌍', text: 'Eu vejo a Terra lá longe!' },
          { emoji: '⭐', text: 'Eu vejo muitas estrelas!' },
          { emoji: '🕳️', text: 'Eu vejo as crateras da Lua!' },
        ],
      },
      {
        speaker: 'Cosmo, o foguete',
        speakerEmoji: '🚀',
        prompt: 'Que viagem incrível! Hora de voltar para casa. Tchau!',
        options: [
          { emoji: '👋', text: 'Tchau, Cosmo! Adorei a viagem!' },
          { emoji: '😄', text: 'Foi a melhor viagem da minha vida!' },
        ],
      },
    ],
  },
  {
    id: 'dinossauros',
    title: 'Amigo dos Dinossauros',
    emoji: '🦕',
    color: '#d4ecd0',
    category: 'Dinossauros',
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
    id: 'museu-dinos',
    title: 'Museu dos Dinossauros',
    emoji: '🦴',
    color: '#e8e0cd',
    category: 'Dinossauros',
    turns: [
      {
        speaker: 'Clara, a paleontóloga',
        speakerEmoji: '👩‍🔬',
        prompt: 'Bem-vindo ao museu! Eu estudo fósseis de dinossauros. Quer ver um esqueleto gigante?',
        options: [
          { emoji: '😮', text: 'Sim! Quero ver o esqueleto!' },
          { emoji: '🦴', text: 'Quero! Eu adoro fósseis!' },
        ],
      },
      {
        speaker: 'Clara, a paleontóloga',
        speakerEmoji: '👩‍🔬',
        prompt: 'Este é um braquiossauro. Ele tinha o pescoço bem comprido. Por que será?',
        options: [
          { emoji: '🌳', text: 'Para comer as folhas das árvores altas!' },
          { emoji: '🤔', text: 'Não sei, me explica?' },
        ],
      },
      {
        speaker: 'Clara, a paleontóloga',
        speakerEmoji: '👩‍🔬',
        prompt: 'Isso mesmo! Ele alcançava as folhas mais altas. Você quer ser paleontólogo um dia?',
        options: [
          { emoji: '😄', text: 'Quero! Vou descobrir fósseis novos!' },
          { emoji: '🦕', text: 'Sim! Eu amo dinossauros!' },
        ],
      },
      {
        speaker: 'Clara, a paleontóloga',
        speakerEmoji: '👩‍🔬',
        prompt: 'Que ótimo! Volte sempre ao museu. Tchau!',
        options: [
          { emoji: '👋', text: 'Tchau, Clara! Obrigado pela visita!' },
          { emoji: '😊', text: 'Adorei o museu! Até logo!' },
        ],
      },
    ],
  },
  {
    id: 'voo-ptero',
    title: 'Voando com o Pterossauro',
    emoji: '🦅',
    color: '#d0e4ec',
    category: 'Dinossauros',
    turns: [
      {
        speaker: 'Ptero, o pterossauro',
        speakerEmoji: '🦅',
        prompt: 'Oi! Eu sou um pterossauro e adoro voar. Você sabia que eu vivi na época dos dinossauros?',
        options: [
          { emoji: '😮', text: 'Não sabia! Que legal!' },
          { emoji: '😊', text: 'Sabia sim! Você voava lá no alto!' },
        ],
      },
      {
        speaker: 'Ptero, o pterossauro',
        speakerEmoji: '🦅',
        prompt: 'Se você pudesse voar, para onde você iria?',
        options: [
          { emoji: '🌋', text: 'Eu voaria até um vulcão!' },
          { emoji: '🌊', text: 'Eu voaria sobre o mar!' },
          { emoji: '🏠', text: 'Eu voaria até a minha casa!' },
        ],
      },
      {
        speaker: 'Ptero, o pterossauro',
        speakerEmoji: '🦅',
        prompt: 'Que passeio incrível seria! Preciso voar agora. Até mais!',
        options: [
          { emoji: '👋', text: 'Tchau, Ptero! Boa viagem!' },
          { emoji: '😄', text: 'Até mais! Voa bem alto!' },
        ],
      },
    ],
  },
  {
    id: 'animais',
    title: 'Visita ao Zoológico',
    emoji: '🦁',
    color: '#e3d0f7',
    category: 'Animais',
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
    id: 'fazenda',
    title: 'Dia na Fazenda',
    emoji: '🐮',
    color: '#e6ecd0',
    category: 'Animais',
    turns: [
      {
        speaker: 'Dona Rosa, a fazendeira',
        speakerEmoji: '👵',
        prompt: 'Olá! Bem-vindo à minha fazenda! Você quer ajudar a cuidar dos animais?',
        options: [
          { emoji: '😄', text: 'Sim! Eu quero ajudar!' },
          { emoji: '🐮', text: 'Quero! Posso ver a vaca?' },
        ],
      },
      {
        speaker: 'Dona Rosa, a fazendeira',
        speakerEmoji: '👵',
        prompt: 'Claro! A vaca faz muu, e a galinha, que som ela faz?',
        options: [
          { emoji: '🐔', text: 'A galinha faz có có có!' },
          { emoji: '🐷', text: 'Eu sei também que o porco faz oinc!' },
        ],
      },
      {
        speaker: 'Dona Rosa, a fazendeira',
        speakerEmoji: '👵',
        prompt: 'Muito bem! Os animais adoraram você. Quer levar ovos fresquinhos para casa?',
        options: [
          { emoji: '🥚', text: 'Quero sim! Obrigado, Dona Rosa!' },
          { emoji: '😊', text: 'Sim, por favor! Muito obrigado!' },
        ],
      },
      {
        speaker: 'Dona Rosa, a fazendeira',
        speakerEmoji: '👵',
        prompt: 'De nada, meu querido! Volte sempre. Tchau!',
        options: [
          { emoji: '👋', text: 'Tchau, Dona Rosa!' },
          { emoji: '😄', text: 'Até a próxima! Adorei a fazenda!' },
        ],
      },
    ],
  },
  {
    id: 'oceano',
    title: 'Mergulho no Oceano',
    emoji: '🐬',
    color: '#cde6f5',
    category: 'Animais',
    turns: [
      {
        speaker: 'Golfo, o golfinho',
        speakerEmoji: '🐬',
        prompt: 'Oi! Eu sou o Golfo! Quer mergulhar comigo no fundo do mar?',
        options: [
          { emoji: '🤿', text: 'Sim! Vamos mergulhar!' },
          { emoji: '🌊', text: 'Quero! Eu adoro o mar!' },
        ],
      },
      {
        speaker: 'Golfo, o golfinho',
        speakerEmoji: '🐬',
        prompt: 'Olha quantos peixes coloridos! Qual animal do mar você mais gosta?',
        options: [
          { emoji: '🐙', text: 'Eu gosto do polvo, ele tem oito braços!' },
          { emoji: '🐢', text: 'Eu gosto da tartaruga marinha!' },
          { emoji: '🦈', text: 'Eu gosto do tubarão!' },
        ],
      },
      {
        speaker: 'Golfo, o golfinho',
        speakerEmoji: '🐬',
        prompt: 'Ótima escolha! O mar é cheio de amigos. Vamos subir agora?',
        options: [
          { emoji: '😄', text: 'Vamos! Adorei o mergulho!' },
          { emoji: '👋', text: 'Sim! Tchau, Golfo! Até a próxima!' },
        ],
      },
    ],
  },
  {
    id: 'musica',
    title: 'Hora da Música',
    emoji: '🎵',
    color: '#f7e8c7',
    category: 'Música',
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
    id: 'banda',
    title: 'Montando uma Banda',
    emoji: '🥁',
    color: '#f5ddc9',
    category: 'Música',
    turns: [
      {
        speaker: 'Beto, o baterista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'E aí! Estou montando uma banda. Quer tocar comigo?',
        options: [
          { emoji: '😄', text: 'Quero sim! Vai ser demais!' },
          { emoji: '🎵', text: 'Sim! Eu amo música!' },
        ],
      },
      {
        speaker: 'Beto, o baterista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'Legal! Qual instrumento você quer tocar na banda?',
        options: [
          { emoji: '🎹', text: 'Eu quero tocar teclado!' },
          { emoji: '🎸', text: 'Eu quero tocar guitarra!' },
          { emoji: '🎷', text: 'Eu quero tocar saxofone!' },
        ],
      },
      {
        speaker: 'Beto, o baterista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'Perfeito! Agora precisamos de um nome para a banda. Alguma ideia?',
        options: [
          { emoji: '🦕', text: 'Que tal "Os Dinossauros do Rock"?' },
          { emoji: '🪐', text: 'Pode ser "A Banda dos Planetas"!' },
        ],
      },
      {
        speaker: 'Beto, o baterista',
        speakerEmoji: '🧑‍🎤',
        prompt: 'Adorei o nome! Nosso primeiro ensaio é amanhã. Até lá!',
        options: [
          { emoji: '👋', text: 'Até amanhã, Beto!' },
          { emoji: '🎶', text: 'Vou treinar bastante! Tchau!' },
        ],
      },
    ],
  },
  {
    id: 'cores-formas',
    title: 'Cores e Formas',
    emoji: '🔷',
    color: '#d6d9f5',
    category: 'Aprender',
    turns: [
      {
        speaker: 'Íris, a artista',
        speakerEmoji: '👩‍🎨',
        prompt: 'Oi! Eu adoro pintar. Qual é a sua cor favorita?',
        options: [
          { emoji: '🔵', text: 'Eu gosto de azul!' },
          { emoji: '🟢', text: 'Eu gosto de verde!' },
          { emoji: '🔴', text: 'Eu gosto de vermelho!' },
          { emoji: '🟡', text: 'Eu gosto de amarelo!' },
        ],
      },
      {
        speaker: 'Íris, a artista',
        speakerEmoji: '👩‍🎨',
        prompt: 'Linda cor! Agora me diga: quantos lados tem um triângulo?',
        options: [
          { emoji: '🔺', text: 'O triângulo tem três lados!' },
          { emoji: '🤔', text: 'Deixa eu contar... um, dois, três!' },
        ],
      },
      {
        speaker: 'Íris, a artista',
        speakerEmoji: '👩‍🎨',
        prompt: 'Isso mesmo! E o círculo, ele tem cantos?',
        options: [
          { emoji: '⭕', text: 'Não! O círculo é todo redondinho!' },
          { emoji: '😄', text: 'O círculo não tem cantos!' },
        ],
      },
      {
        speaker: 'Íris, a artista',
        speakerEmoji: '👩‍🎨',
        prompt: 'Você sabe tudo! Vamos pintar juntos um dia. Tchau!',
        options: [
          { emoji: '👋', text: 'Tchau, Íris! Adorei as cores!' },
          { emoji: '🎨', text: 'Quero pintar com você! Até logo!' },
        ],
      },
    ],
  },
  {
    id: 'numeros',
    title: 'Brincando com Números',
    emoji: '🔢',
    color: '#d0f0e4',
    category: 'Aprender',
    turns: [
      {
        speaker: 'Max, o matemático',
        speakerEmoji: '🧙',
        prompt: 'Olá! Eu sou o mágico dos números! Você gosta de contar?',
        options: [
          { emoji: '🔢', text: 'Sim! Eu adoro números!' },
          { emoji: '😄', text: 'Gosto! Sei contar até cem!' },
        ],
      },
      {
        speaker: 'Max, o matemático',
        speakerEmoji: '🧙',
        prompt: 'Que máximo! Então me diga: quanto é dois mais dois?',
        options: [
          { emoji: '4️⃣', text: 'Dois mais dois é quatro!' },
          { emoji: '✋', text: 'É quatro! Fácil!' },
        ],
      },
      {
        speaker: 'Max, o matemático',
        speakerEmoji: '🧙',
        prompt: 'Acertou! E se eu tenho cinco dinossauros e ganho mais um, com quantos eu fico?',
        options: [
          { emoji: '6️⃣', text: 'Você fica com seis dinossauros!' },
          { emoji: '🦕', text: 'Seis! Cinco mais um é seis!' },
        ],
      },
      {
        speaker: 'Max, o matemático',
        speakerEmoji: '🧙',
        prompt: 'Você é um gênio dos números! Até a próxima mágica!',
        options: [
          { emoji: '👋', text: 'Tchau, Max! Adorei os números!' },
          { emoji: '🌟', text: 'Até logo! Quero mais desafios!' },
        ],
      },
    ],
  },
  {
    id: 'letras',
    title: 'O Mundo das Letras',
    emoji: '🔤',
    color: '#f5d6e8',
    category: 'Aprender',
    turns: [
      {
        speaker: 'Lia, a professora',
        speakerEmoji: '👩‍🏫',
        prompt: 'Oi! Vamos brincar com as letras? Com que letra começa o seu nome?',
        options: [
          { emoji: '🇹', text: 'Meu nome começa com a letra T, de Thales!' },
          { emoji: '😊', text: 'Com T! T de Thales!' },
        ],
      },
      {
        speaker: 'Lia, a professora',
        speakerEmoji: '👩‍🏫',
        prompt: 'Muito bem, Thales! E dinossauro, começa com qual letra?',
        options: [
          { emoji: '🦕', text: 'Dinossauro começa com D!' },
          { emoji: '🇩', text: 'Com a letra D!' },
        ],
      },
      {
        speaker: 'Lia, a professora',
        speakerEmoji: '👩‍🏫',
        prompt: 'Isso! Agora uma difícil: qual é a primeira letra do alfabeto?',
        options: [
          { emoji: '🅰️', text: 'É a letra A!' },
          { emoji: '😄', text: 'A! De abelha e de avião!' },
        ],
      },
      {
        speaker: 'Lia, a professora',
        speakerEmoji: '👩‍🏫',
        prompt: 'Parabéns! Você conhece as letras muito bem. Até a próxima aula!',
        options: [
          { emoji: '👋', text: 'Tchau, professora Lia!' },
          { emoji: '📚', text: 'Obrigado! Adoro aprender!' },
        ],
      },
    ],
  },
  {
    id: 'lanche',
    title: 'Pedindo um Lanche',
    emoji: '🍎',
    color: '#f7d9d0',
    category: 'Dia a dia',
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
    id: 'escola',
    title: 'Fazendo um Amigo',
    emoji: '🧒',
    color: '#d0eef7',
    category: 'Dia a dia',
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
  {
    id: 'adesivos',
    title: 'Trocando Adesivos',
    emoji: '✨',
    color: '#f0e6f7',
    category: 'Dia a dia',
    turns: [
      {
        speaker: 'Ana, a colecionadora',
        speakerEmoji: '👧',
        prompt: 'Oi! Eu coleciono adesivos. Você também gosta de adesivos?',
        options: [
          { emoji: '✨', text: 'Sim! Eu amo adesivos!' },
          { emoji: '😄', text: 'Gosto muito! Tenho vários!' },
        ],
      },
      {
        speaker: 'Ana, a colecionadora',
        speakerEmoji: '👧',
        prompt: 'Que legal! Eu tenho um adesivo de dinossauro repetido. Quer trocar comigo?',
        options: [
          { emoji: '🦕', text: 'Quero! Posso te dar um de planeta!' },
          { emoji: '🤝', text: 'Sim! Vamos trocar!' },
        ],
      },
      {
        speaker: 'Ana, a colecionadora',
        speakerEmoji: '👧',
        prompt: 'Combinado! Trocar adesivos é muito divertido, né?',
        options: [
          { emoji: '😄', text: 'É sim! Obrigado pela troca, Ana!' },
          { emoji: '✨', text: 'Adorei! Vamos trocar mais um dia!' },
        ],
      },
    ],
  },
  {
    id: 'dormir',
    title: 'Hora de Dormir',
    emoji: '🌙',
    color: '#d8d8ee',
    category: 'Dia a dia',
    turns: [
      {
        speaker: 'Papai',
        speakerEmoji: '👨',
        prompt: 'Filho, está ficando tarde. Hora de se preparar para dormir!',
        options: [
          { emoji: '😴', text: 'Está bem, papai. Estou com sono.' },
          { emoji: '🙂', text: 'Tá bom! Vou escovar os dentes.' },
        ],
      },
      {
        speaker: 'Papai',
        speakerEmoji: '👨',
        prompt: 'Muito bem! Quer que eu leia uma historinha para você?',
        options: [
          { emoji: '🦕', text: 'Sim! Uma história de dinossauros!' },
          { emoji: '🚀', text: 'Quero uma história do espaço!' },
        ],
      },
      {
        speaker: 'Papai',
        speakerEmoji: '👨',
        prompt: 'Fim da história! Agora é hora de fechar os olhinhos. Boa noite!',
        options: [
          { emoji: '🌙', text: 'Boa noite, papai! Te amo!' },
          { emoji: '😴', text: 'Boa noite! Até amanhã!' },
        ],
      },
    ],
  },
]
