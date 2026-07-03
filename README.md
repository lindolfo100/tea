# 🌟 Fala Thales

Webapp de apoio à comunicação com foco em **diálogo**, criado para o Thales (7 anos, autista nível 2, verbal).

## O que o app faz

- **Conversas guiadas por turnos**: cenários temáticos (planetas 🪐, dinossauros 🦕, música 🎵, animais 🦁, lanche 🍎, escola 🧒) em que um personagem fala e o Thales escolhe a resposta entre cartões grandes com emoji + texto. Cada fala é lida em voz alta (text-to-speech em pt-BR).
- **Prancha "Como eu me sinto"**: botões grandes de sentimentos e necessidades que falam a frase completa ao toque.
- **Recompensas**: cada conversa completada ganha uma estrela ⭐ (salva no dispositivo).
- **Design sensorialmente calmo**: cores suaves, sem sons bruscos, interface previsível.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no navegador (funciona melhor no Chrome/Edge, que têm voz em português).

## Deploy

### Vercel (recomendado)
1. Acesse [vercel.com](https://vercel.com) e entre com sua conta do GitHub.
2. Clique em **Add New → Project** e importe o repositório `lindolfo100/tea`.
3. Não precisa mudar nada — o Vercel detecta o Vite automaticamente. Clique em **Deploy**.
4. O app ficará em `https://<nome-do-projeto>.vercel.app`, pronto para instalar como app no tablet (menu do navegador → "Adicionar à tela inicial").

### GitHub Pages (alternativa)
Ative em Settings → Pages → Source: **GitHub Actions**. Cada push na `main` publica em `https://lindolfo100.github.io/tea/`.

## Personalização

- Novos cenários de conversa: edite `src/data/scenarios.ts`.
- Sentimentos/necessidades: edite `src/data/feelings.ts`.
