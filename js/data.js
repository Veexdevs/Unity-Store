/* ============================================================
   Unity Store — Catálogo de IAs
   Edite este arquivo para adicionar, remover ou editar IAs.
   ============================================================ */

// Sessões do catálogo
const SECTIONS = [
  { id: "claude",  name: "Claude",       emoji: "🪶", tagline: "por Anthropic" },
  { id: "gpt",     name: "GPT",          emoji: "🌀", tagline: "por OpenAI" },
  { id: "lovable", name: "Lovable",      emoji: "💗", tagline: "crie apps conversando" },
  { id: "manus",   name: "Manus",        emoji: "🖐️", tagline: "o agente que faz por você" },
  { id: "outras",  name: "Diversas IAs", emoji: "🌌", tagline: "o universo inteiro da IA" }
];

// Categorias
const CATEGORIES = [
  { id: "chat",     name: "Chat & Assistentes",  emoji: "💬" },
  { id: "code",     name: "Código & Dev",        emoji: "🧑‍💻" },
  { id: "image",    name: "Imagem & Design",     emoji: "🎨" },
  { id: "video",    name: "Vídeo & Animação",    emoji: "🎬" },
  { id: "audio",    name: "Áudio & Música",      emoji: "🎧" },
  { id: "agent",    name: "Agentes & Automação", emoji: "🤖" },
  { id: "platform", name: "Plataformas & APIs",  emoji: "🧰" }
];

// Catálogo — tags ajudam na busca
const AI_DATA = [
  /* ================= CLAUDE ================= */
  { name: "Claude",           url: "https://claude.ai",                 section: "claude",  cat: "chat",
    desc: "O assistente de IA da Anthropic para conversar, escrever, programar e analisar tudo com você.",
    tags: ["anthropic", "chatbot", "conversa", "escrita"] },

  { name: "Claude Code",      url: "https://claude.com/claude-code",    section: "claude",  cat: "code",
    desc: "O agente de programação do Claude direto no seu terminal: escreve, testa e refatora código.",
    tags: ["anthropic", "programacao", "terminal", "dev"] },

  { name: "Claude Desktop",   url: "https://claude.ai/download",        section: "claude",  cat: "chat",
    desc: "O app oficial do Claude para Windows e macOS, com atalhos de teclado e integrações.",
    tags: ["anthropic", "app", "windows", "mac"] },

  { name: "Anthropic API",    url: "https://console.anthropic.com",     section: "claude",  cat: "platform",
    desc: "Plataforma para desenvolvedores integrarem os modelos Claude em seus próprios produtos.",
    tags: ["anthropic", "api", "developers", "sdk"] },

  /* ================= GPT / OPENAI ================= */
  { name: "ChatGPT",          url: "https://chatgpt.com",               section: "gpt",     cat: "chat",
    desc: "O chat de IA mais famoso do mundo: pergunte, crie, programe e converse com o GPT.",
    tags: ["openai", "gpt-4", "gpt-5", "chatbot", "conversa"] },

  { name: "ChatGPT Atlas",    url: "https://openai.com/atlas",          section: "gpt",     cat: "chat",
    desc: "O navegador com IA da OpenAI: navegue na web com o ChatGPT ao seu lado o tempo todo.",
    tags: ["openai", "navegador", "browser", "web"] },

  { name: "Sora",             url: "https://sora.com",                  section: "gpt",     cat: "video",
    desc: "O gerador de vídeos por IA da OpenAI: transforme texto em cenas impressionantes.",
    tags: ["openai", "video", "geracao", "texto-para-video"] },

  { name: "DALL·E 3",         url: "https://openai.com/dall-e-3",       section: "gpt",     cat: "image",
    desc: "A criação de imagens por IA da OpenAI, integrada ao ChatGPT.",
    tags: ["openai", "imagem", "arte", "geracao"] },

  { name: "Codex",            url: "https://openai.com/codex",          section: "gpt",     cat: "code",
    desc: "O agente de programação da OpenAI que trabalha junto com você no código.",
    tags: ["openai", "programacao", "agente", "dev"] },

  { name: "OpenAI Platform",  url: "https://platform.openai.com",       section: "gpt",     cat: "platform",
    desc: "API e ferramentas oficiais para construir seus produtos com os modelos GPT.",
    tags: ["openai", "api", "developers", "sdk"] },

  /* ================= LOVABLE ================= */
  { name: "Lovable",          url: "https://lovable.dev",               section: "lovable", cat: "code",
    desc: "Crie sites e apps completos apenas conversando com a IA. Do prompt ao produto no ar.",
    tags: ["gpt engineer", "app builder", "no-code", "fullstack"] },

  { name: "Lovable Docs",     url: "https://docs.lovable.dev",          section: "lovable", cat: "platform",
    desc: "Documentação e guias para dominar o Lovable e criar projetos incríveis.",
    tags: ["documentacao", "guias", "tutoriais"] },

  /* ================= MANUS ================= */
  { name: "Manus",            url: "https://manus.im",                  section: "manus",   cat: "agent",
    desc: "O agente de IA geral que executa tarefas completas do início ao fim, sozinho.",
    tags: ["agente", "autonomo", "tarefas", "butler"] },

  { name: "Manus Docs",       url: "https://docs.manus.im",             section: "manus",   cat: "platform",
    desc: "Documentação oficial do Manus: aprenda a delegar tarefas ao agente.",
    tags: ["documentacao", "guias", "tutoriais"] },

  /* ================= DIVERSAS IAs — CHAT ================= */
  { name: "Gemini",           url: "https://gemini.google.com",         section: "outras",  cat: "chat",
    desc: "A IA do Google: converse, pesquise, crie e integre com todo o ecossistema Google.",
    tags: ["google", "bard", "assistente"] },

  { name: "Google AI Studio", url: "https://aistudio.google.com",       section: "outras",  cat: "platform",
    desc: "O estúdio do Google para experimentar e desenvolver com os modelos Gemini.",
    tags: ["google", "gemini", "api", "developers"] },

  { name: "Grok",             url: "https://grok.com",                  section: "outras",  cat: "chat",
    desc: "A IA do xAI, do Elon Musk: direta, engraçada e conectada com o X.",
    tags: ["xai", "elon musk", "twitter", "x"] },

  { name: "DeepSeek",         url: "https://chat.deepseek.com",         section: "outras",  cat: "chat",
    desc: "A IA chinesa que impressionou o mundo: raciocínio avançado e código de qualidade.",
    tags: ["raciocinio", "reasoning", "china", "open source"] },

  { name: "Qwen Chat",        url: "https://chat.qwen.ai",              section: "outras",  cat: "chat",
    desc: "O chat da Alibaba com os modelos Qwen: texto, imagem, vídeo e mais.",
    tags: ["alibaba", "qwen", "open source"] },

  { name: "Kimi",             url: "https://www.kimi.com",              section: "outras",  cat: "chat",
    desc: "A IA da Moonshot AI com contexto gigante: perfeita para ler documentos enormes.",
    tags: ["moonshot", "k2", "contexto longo"] },

  { name: "Perplexity",       url: "https://www.perplexity.ai",         section: "outras",  cat: "chat",
    desc: "O buscador com IA: respostas com fontes, citações e pesquisa em tempo real.",
    tags: ["busca", "search", "pesquisa", "fontes"] },

  { name: "Microsoft Copilot",url: "https://copilot.microsoft.com",     section: "outras",  cat: "chat",
    desc: "A IA da Microsoft integrada ao Windows, Bing e Office.",
    tags: ["microsoft", "windows", "bing", "office"] },

  { name: "Meta AI",          url: "https://www.meta.ai",               section: "outras",  cat: "chat",
    desc: "A IA da Meta, presente no WhatsApp, Instagram e no site oficial.",
    tags: ["meta", "facebook", "whatsapp", "instagram", "llama"] },

  { name: "Poe",              url: "https://poe.com",                   section: "outras",  cat: "chat",
    desc: "Várias IAs em um só app: converse com GPT, Claude, Gemini e mais de 100 modelos.",
    tags: ["quora", "multi-modelos", "bots"] },

  { name: "Le Chat",          url: "https://chat.mistral.ai",           section: "outras",  cat: "chat",
    desc: "O chat da Mistral AI, a alternativa francesa e open source das grandes IAs.",
    tags: ["mistral", "franca", "open source", "europa"] },

  /* ================= DIVERSAS IAs — CÓDIGO ================= */
  { name: "GitHub Copilot",   url: "https://github.com/features/copilot", section: "outras", cat: "code",
    desc: "O copiloto de código dentro do VS Code e GitHub: autocomplete com IA e agente de PRs.",
    tags: ["github", "microsoft", "vscode", "autocomplete"] },

  { name: "Cursor",           url: "https://cursor.com",                section: "outras",  cat: "code",
    desc: "O editor de código com IA que conquistou os devs: construa software na velocidade da fala.",
    tags: ["editor", "ide", "programacao", "dev"] },

  { name: "Windsurf",         url: "https://windsurf.com",              section: "outras",  cat: "code",
    desc: "IDE agêntico da Codeium: a IA que navega e edita seu projeto inteiro.",
    tags: ["codeium", "editor", "ide", "agente"] },

  { name: "Bolt.new",         url: "https://bolt.new",                  section: "outras",  cat: "code",
    desc: "Prompt, execute, implemente: apps fullstack direto do navegador com IA.",
    tags: ["stackblitz", "fullstack", "no-code", "deploy"] },

  { name: "v0",               url: "https://v0.dev",                    section: "outras",  cat: "code",
    desc: "Gere interfaces React e UIs lindas com IA — feito pela Vercel, onde este site está no ar.",
    tags: ["vercel", "react", "ui", "nextjs"] },

  { name: "Replit",           url: "https://replit.com",                section: "outras",  cat: "code",
    desc: "IDE na nuvem com agente de IA para criar, rodar e publicar projetos de qualquer lugar.",
    tags: ["ide", "nuvem", "cloud", "agente"] },

  { name: "Devin",            url: "https://devin.ai",                  section: "outras",  cat: "agent",
    desc: "O primeiro engenheiro de software com IA autônomo do mundo, da Cognition.",
    tags: ["cognition", "engenheiro", "autonomo", "swarm"] },

  { name: "Firebase Studio",  url: "https://studio.firebase.google.com", section: "outras", cat: "code",
    desc: "O ambiente do Google para criar apps com Gemini integrado do design ao deploy.",
    tags: ["google", "firebase", "gemini", "app"] },

  /* ================= DIVERSAS IAs — IMAGEM ================= */
  { name: "Midjourney",       url: "https://www.midjourney.com",        section: "outras",  cat: "image",
    desc: "A lenda da arte por IA: imagens cinematográficas e estilos incomparáveis.",
    tags: ["arte", "arte digital", "cinematico"] },

  { name: "Ideogram",         url: "https://ideogram.ai",               section: "outras",  cat: "image",
    desc: "O rei das imagens com texto legível: logos, posters e tipografia perfeita.",
    tags: ["texto", "tipografia", "logo", "poster"] },

  { name: "FLUX",             url: "https://bfl.ai",                    section: "outras",  cat: "image",
    desc: "Os modelos de imagem da Black Forest Labs, criadores do FLUX.1.",
    tags: ["black forest labs", "flux 1", "open source"] },

  { name: "Leonardo AI",      url: "https://leonardo.ai",               section: "outras",  cat: "image",
    desc: "Plataforma completa de arte e assets por IA, com modelos treináveis.",
    tags: ["arte", "game assets", "canvas"] },

  { name: "Krea",             url: "https://www.krea.ai",               section: "outras",  cat: "image",
    desc: "Geração e edição de imagens e vídeos em tempo real, com ferramentas criativas.",
    tags: ["tempo real", "realtime", "edicao"] },

  { name: "Recraft",          url: "https://www.recraft.ai",            section: "outras",  cat: "image",
    desc: "A melhor IA para design vetorial: ícones, SVGs e mockups em segundos.",
    tags: ["vetor", "svg", "icones", "design"] },

  { name: "Adobe Firefly",    url: "https://firefly.adobe.com",         section: "outras",  cat: "image",
    desc: "A IA da Adobe integrada ao Photoshop: imagens, vídeo e design comercialmente seguros.",
    tags: ["adobe", "photoshop", "illustrator"] },

  { name: "Stability AI",     url: "https://stability.ai",              section: "outras",  cat: "image",
    desc: "Os criadores do Stable Diffusion: modelos abertos de imagem, áudio e 3D.",
    tags: ["stable diffusion", "open source", "sd"] },

  /* ================= DIVERSAS IAs — VÍDEO ================= */
  { name: "Runway",           url: "https://runwayml.com",              section: "outras",  cat: "video",
    desc: "Suíte de IA para cinema: Gen-4, edição, efeitos e vídeos de nível hollywoodiano.",
    tags: ["gen-4", "cinema", "edicao", "efeitos"] },

  { name: "Pika",             url: "https://pika.art",                  section: "outras",  cat: "video",
    desc: "Vídeos divertidos e virais com IA: efeitos Pikaffects e animações de foto.",
    tags: ["efeitos", "viral", "animacao"] },

  { name: "Kling AI",         url: "https://klingai.com",               section: "outras",  cat: "video",
    desc: "O gerador de vídeos da Kuaishou: realismo impressionante e movimentos fluidos.",
    tags: ["kuaishou", "realista", "video"] },

  { name: "Hailuo AI",        url: "https://hailuoai.video",            section: "outras",  cat: "video",
    desc: "Vídeos por IA da MiniMax com o modelo Hailuo: qualidade cinematográfica.",
    tags: ["minimax", "cinema", "video"] },

  { name: "Google Veo",       url: "https://deepmind.google/models/veo/", section: "outras", cat: "video",
    desc: "O modelo de vídeo do Google DeepMind: cenas em 4K com som nativo.",
    tags: ["google", "deepmind", "flow", "4k"] },

  { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", section: "outras", cat: "video",
    desc: "Transforme texto e fotos em vídeos com movimento cinematográfico.",
    tags: ["luma", "ray 2", "sonho", "animacao"] },

  { name: "LTX Studio",       url: "https://ltx.studio",                section: "outras",  cat: "video",
    desc: "Estúdio de filmmaking com IA: do roteiro ao storyboard e ao vídeo final.",
    tags: ["filme", "storyboard", "roteiro", "lightricks"] },

  /* ================= DIVERSAS IAs — ÁUDIO ================= */
  { name: "ElevenLabs",       url: "https://elevenlabs.io",             section: "outras",  cat: "audio",
    desc: "As vozes de IA mais realistas do mundo: narração, dublagem e clonagem de voz.",
    tags: ["voz", "narracao", "dublagem", "tts"] },

  { name: "Suno",             url: "https://suno.com",                  section: "outras",  cat: "audio",
    desc: "Crie músicas completas com voz e letra a partir de um prompt. Você é o produtor.",
    tags: ["musica", "cancao", "composição"] },

  { name: "Udio",             url: "https://www.udio.com",              section: "outras",  cat: "audio",
    desc: "Música por IA com qualidade de estúdio: crie faixas em qualquer gênero.",
    tags: ["musica", "audio", "generos"] },

  /* ================= DIVERSAS IAs — AGENTES ================= */
  { name: "n8n",              url: "https://n8n.io",                    section: "outras",  cat: "agent",
    desc: "Automação de workflows com IA: conecte centenas de apps e crie agentes visuais.",
    tags: ["automacao", "workflow", "integracoes", "low-code"] },

  /* ================= DIVERSAS IAs — PLATAFORMAS ================= */
  { name: "Hugging Face",     url: "https://huggingface.co",            section: "outras",  cat: "platform",
    desc: "O GitHub das IAs: milhares de modelos abertos, datasets e demos.",
    tags: ["modelos", "open source", "datasets", "spaces"] },

  { name: "OpenRouter",       url: "https://openrouter.ai",             section: "outras",  cat: "platform",
    desc: "Uma única API para acessar centenas de modelos de IA com o melhor preço.",
    tags: ["api", "multi-modelos", "gateway"] },

  { name: "Groq",             url: "https://groq.com",                  section: "outras",  cat: "platform",
    desc: "Inferência ultrarrápida de modelos open source a velocidades absurdas.",
    tags: ["inferencia", "rapido", "lpu", "api"] },

  { name: "Ollama",           url: "https://ollama.com",                section: "outras",  cat: "platform",
    desc: "Rode os melhores modelos de IA abertos no seu próprio computador.",
    tags: ["local", "offline", "llama", "open source"] },

  { name: "LM Arena",         url: "https://lmarena.ai",                section: "outras",  cat: "platform",
    desc: "O ringue das IAs: compare modelos lado a lado e veja o ranking da comunidade.",
    tags: ["comparar", "ranking", "battle", "leaderboard"] }
];
