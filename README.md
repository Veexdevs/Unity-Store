# Unity Store 🎮✨

> Todas as suas **IAs favoritas** em um só lugar — Claude, GPT, Lovable, Manus e dezenas mais, com busca e filtros em tempo real.

Site estático em HTML + CSS + JS puro (sem build), no estilo neon azul com animações de *motion*.

## ✦ Estrutura

```
Unity-Store/
├── index.html          → página principal
├── css/style.css       → todo o estilo (neon, motion, responsivo)
├── js/data.js          → catálogo de IAs (edite aqui p/ adicionar novas)
├── js/app.js           → busca, filtros, favoritos e animações
├── assets/             → logo animada (webp), banner e ícones
└── vercel.json         → config de deploy/cache
```

## ✦ Funcionalidades

- **Sessões**: Claude · GPT · Lovable · Manus · Diversas IAs
- **Busca instantânea** (ignora acentos, destaca resultados, atalho `/`)
- **Filtros** por sessão e por categoria (Chat, Código, Imagem, Vídeo, Áudio, Agentes, Plataformas)
- **Favoritos** salvos no navegador (localStorage)
- **Motion**: cards com tilt 3D + brilho seguindo o cursor, ripple nos botões, reveal on scroll, fundo animado estilo PlayStation

## ✦ Como adicionar uma IA nova

Edite `js/data.js` e adicione um objeto ao array `AI_DATA`:

```js
{ name: "Nome da IA", url: "https://site-da-ia.com", section: "outras", cat: "chat",
  desc: "Descrição curta do que ela faz.", tags: ["palavras", "para busca"] }
```

## ✦ Rodar localmente

```bash
python3 -m http.server 8000
# ou qualquer servidor estático — não há build
```

## ✦ Deploy

Hospedado na **Vercel** — deploy automático via Git (configuração em `vercel.json`).
