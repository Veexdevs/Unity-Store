/* ============================================================
   Unity Store — Catálogo de IAs + créditos (R$)
   Edite este arquivo para adicionar, remover ou editar IAs.
   ============================================================ */

// Sessões (icon = id do ícone SVG em js/app.js > ICONS)
const SECTIONS = [
  { id: "claude",  name: "Claude",       icon: "feather", tagline: "por Anthropic" },
  { id: "gpt",     name: "GPT",          icon: "spiral",  tagline: "por OpenAI" },
  { id: "lovable", name: "Lovable",      icon: "heart",   tagline: "crie apps conversando" },
  { id: "manus",   name: "Manus",        icon: "hand",    tagline: "o agente que faz por você" },
  { id: "outras",  name: "Diversas IAs", icon: "planet",  tagline: "o universo inteiro da IA" }
];

// Categorias
const CATEGORIES = [
  { id: "chat",     name: "Chat & Assistentes",  icon: "chat" },
  { id: "code",     name: "Código & Dev",        icon: "code" },
  { id: "image",    name: "Imagem & Design",     icon: "image" },
  { id: "video",    name: "Vídeo & Animação",    icon: "video" },
  { id: "audio",    name: "Áudio & Música",      icon: "audio" },
  { id: "agent",    name: "Agentes & Automação", icon: "agent" },
  { id: "platform", name: "Plataformas & APIs",  icon: "platform" }
];

// Pacotes de créditos em reais — base = preço do pacote de 300 créditos
function pack(base) {
  const br = (n) => "R$ " + Math.round(n);
  return [
    { n: "300 créditos",    c: "para conhecer a IA",  p: br(base) },
    { n: "1.000 créditos",  c: "uso frequente",       p: br(base * 2.9) },
    { n: "3.000 créditos",  c: "projetos maiores",    p: br(base * 8) },
    { n: "10.000 créditos", c: "uso intenso",         p: br(base * 24) }
  ];
}
function free() {
  return [{ n: "Ilimitado", c: "100% grátis, sem créditos", p: "R$ 0" }];
}

// Catálogo — logo = arquivo em assets/logos-png/
const AI_DATA = [
  /* ================= CLAUDE ================= */
  { name: "Claude",           url: "https://claude.ai",                 section: "claude",  cat: "chat",    logo: "claude",
    desc: "O assistente de IA da Anthropic para conversar, escrever, programar e analisar tudo com você.",
    tags: ["anthropic", "chatbot", "conversa", "escrita"],
    buy: "https://claude.com/pricing", plans: pack(50) },

  { name: "Claude Code",      url: "https://claude.com/claude-code",    section: "claude",  cat: "code",    logo: "claude",
    desc: "O agente de programação do Claude direto no seu terminal: escreve, testa e refatora código.",
    tags: ["anthropic", "programacao", "terminal", "dev"],
    buy: "https://claude.com/pricing", plans: pack(55) },

  { name: "Claude Desktop",   url: "https://claude.ai/download",        section: "claude",  cat: "chat",    logo: "claude",
    desc: "O app oficial do Claude para Windows e macOS, com atalhos de teclado e integrações.",
    tags: ["anthropic", "app", "windows", "mac"],
    buy: "https://claude.com/pricing", plans: pack(50) },

  { name: "Anthropic API",    url: "https://console.anthropic.com",     section: "claude",  cat: "platform", logo: "anthropic",
    desc: "Plataforma para desenvolvedores integrarem os modelos Claude em seus próprios produtos.",
    tags: ["anthropic", "api", "developers", "sdk"],
    buy: "https://console.anthropic.com/settings/billing", plans: pack(25) },

  /* ================= GPT / OPENAI ================= */
  { name: "ChatGPT",          url: "https://chatgpt.com",               section: "gpt",     cat: "chat",    logo: "openai",
    desc: "O chat de IA mais famoso do mundo: pergunte, crie, programe e converse com o GPT.",
    tags: ["openai", "gpt-4", "gpt-5", "chatbot", "conversa"],
    buy: "https://chatgpt.com/pricing", plans: pack(50) },

  { name: "ChatGPT Atlas",    url: "https://openai.com/atlas",          section: "gpt",     cat: "chat",    logo: "openai",
    desc: "O navegador com IA da OpenAI: navegue na web com o ChatGPT ao seu lado o tempo todo.",
    tags: ["openai", "navegador", "browser", "web"],
    buy: "https://chatgpt.com/pricing", plans: pack(50) },

  { name: "Sora",             url: "https://sora.com",                  section: "gpt",     cat: "video",   logo: "openai",
    desc: "O gerador de vídeos por IA da OpenAI: transforme texto em cenas impressionantes.",
    tags: ["openai", "video", "geracao", "texto-para-video"],
    buy: "https://chatgpt.com/pricing", plans: pack(60) },

  { name: "DALL·E 3",         url: "https://openai.com/dall-e-3",       section: "gpt",     cat: "image",   logo: "openai",
    desc: "A criação de imagens por IA da OpenAI, integrada ao ChatGPT.",
    tags: ["openai", "imagem", "arte", "geracao"],
    buy: "https://platform.openai.com", plans: pack(30) },

  { name: "Codex",            url: "https://openai.com/codex",          section: "gpt",     cat: "code",    logo: "openai",
    desc: "O agente de programação da OpenAI que trabalha junto com você no código.",
    tags: ["openai", "programacao", "agente", "dev"],
    buy: "https://chatgpt.com/pricing", plans: pack(50) },

  { name: "OpenAI Platform",  url: "https://platform.openai.com",       section: "gpt",     cat: "platform", logo: "openai",
    desc: "API e ferramentas oficiais para construir seus produtos com os modelos GPT.",
    tags: ["openai", "api", "developers", "sdk"],
    buy: "https://platform.openai.com/settings/organization/billing", plans: pack(25) },

  /* ================= LOVABLE ================= */
  { name: "Lovable",          url: "https://lovable.dev",               section: "lovable", cat: "code",    logo: "lovable",
    desc: "Crie sites e apps completos apenas conversando com a IA. Do prompt ao produto no ar.",
    tags: ["gpt engineer", "app builder", "no-code", "fullstack"],
    buy: "https://lovable.dev/pricing", plans: pack(55) },

  { name: "Lovable Docs",     url: "https://docs.lovable.dev",          section: "lovable", cat: "platform", logo: "lovable",
    desc: "Documentação e guias para dominar o Lovable e criar projetos incríveis.",
    tags: ["documentacao", "guias", "tutoriais"],
    buy: "https://lovable.dev/pricing", plans: free() },

  /* ================= MANUS ================= */
  { name: "Manus",            url: "https://manus.im",                  section: "manus",   cat: "agent",   logo: "manus",
    desc: "O agente de IA geral que executa tarefas completas do início ao fim, sozinho.",
    tags: ["agente", "autonomo", "tarefas", "butler"],
    buy: "https://manus.im/pricing", plans: pack(60) },

  { name: "Manus Docs",       url: "https://docs.manus.im",             section: "manus",   cat: "platform", logo: "manus",
    desc: "Documentação oficial do Manus: aprenda a delegar tarefas ao agente.",
    tags: ["documentacao", "guias", "tutoriais"],
    buy: "https://manus.im/pricing", plans: free() },

  /* ================= DIVERSAS IAs — CHAT ================= */
  { name: "Gemini",           url: "https://gemini.google.com",         section: "outras",  cat: "chat",    logo: "googlegemini",
    desc: "A IA do Google: converse, pesquise, crie e integre com todo o ecossistema Google.",
    tags: ["google", "bard", "assistente"],
    buy: "https://one.google.com/about/ai-plans", plans: pack(45) },

  { name: "Google AI Studio", url: "https://aistudio.google.com",       section: "outras",  cat: "platform", logo: "googlegemini",
    desc: "O estúdio do Google para experimentar e desenvolver com os modelos Gemini.",
    tags: ["google", "gemini", "api", "developers"],
    buy: "https://aistudio.google.com", plans: pack(20) },

  { name: "Grok",             url: "https://grok.com",                  section: "outras",  cat: "chat",    logo: "grok",
    desc: "A IA do xAI, do Elon Musk: direta, engraçada e conectada com o X.",
    tags: ["xai", "elon musk", "twitter", "x"],
    buy: "https://grok.com", plans: pack(45) },

  { name: "DeepSeek",         url: "https://chat.deepseek.com",         section: "outras",  cat: "chat",    logo: "deepseek",
    desc: "A IA chinesa que impressionou o mundo: raciocínio avançado e código de qualidade.",
    tags: ["raciocinio", "reasoning", "china", "open source"],
    buy: "https://platform.deepseek.com", plans: pack(15) },

  { name: "Qwen Chat",        url: "https://chat.qwen.ai",              section: "outras",  cat: "chat",    logo: "qwen",
    desc: "O chat da Alibaba com os modelos Qwen: texto, imagem, vídeo e mais.",
    tags: ["alibaba", "qwen", "open source"],
    buy: "https://chat.qwen.ai", plans: pack(15) },

  { name: "Kimi",             url: "https://www.kimi.com",              section: "outras",  cat: "chat",    logo: "kimi",
    desc: "A IA da Moonshot AI com contexto gigante: perfeita para ler documentos enormes.",
    tags: ["moonshot", "k2", "contexto longo"],
    buy: "https://www.kimi.com", plans: pack(15) },

  { name: "Perplexity",       url: "https://www.perplexity.ai",         section: "outras",  cat: "chat",    logo: "perplexity",
    desc: "O buscador com IA: respostas com fontes, citações e pesquisa em tempo real.",
    tags: ["busca", "search", "pesquisa", "fontes"],
    buy: "https://www.perplexity.ai/pro", plans: pack(40) },

  { name: "Microsoft Copilot",url: "https://copilot.microsoft.com",     section: "outras",  cat: "chat",    logo: "copilot",
    desc: "A IA da Microsoft integrada ao Windows, Bing e Office.",
    tags: ["microsoft", "windows", "bing", "office"],
    buy: "https://copilot.microsoft.com", plans: pack(35) },

  { name: "Meta AI",          url: "https://www.meta.ai",               section: "outras",  cat: "chat",    logo: "meta",
    desc: "A IA da Meta, presente no WhatsApp, Instagram e no site oficial.",
    tags: ["meta", "facebook", "whatsapp", "instagram", "llama"],
    buy: "https://www.meta.ai", plans: free() },

  { name: "Poe",              url: "https://poe.com",                   section: "outras",  cat: "chat",    logo: "poe",
    desc: "Várias IAs em um só app: converse com GPT, Claude, Gemini e mais de 100 modelos.",
    tags: ["quora", "multi-modelos", "bots"],
    buy: "https://poe.com/subscribe", plans: pack(40) },

  { name: "Le Chat",          url: "https://chat.mistral.ai",           section: "outras",  cat: "chat",    logo: "mistralai",
    desc: "O chat da Mistral AI, a alternativa francesa e open source das grandes IAs.",
    tags: ["mistral", "franca", "open source", "europa"],
    buy: "https://chat.mistral.ai", plans: pack(20) },

  /* ================= DIVERSAS IAs — CÓDIGO ================= */
  { name: "GitHub Copilot",   url: "https://github.com/features/copilot", section: "outras", cat: "code",  logo: "githubcopilot",
    desc: "O copiloto de código dentro do VS Code e GitHub: autocomplete com IA e agente de PRs.",
    tags: ["github", "microsoft", "vscode", "autocomplete"],
    buy: "https://github.com/features/copilot/plans", plans: pack(35) },

  { name: "Cursor",           url: "https://cursor.com",                section: "outras",  cat: "code",    logo: "cursor",
    desc: "O editor de código com IA que conquistou os devs: construa software na velocidade da fala.",
    tags: ["editor", "ide", "programacao", "dev"],
    buy: "https://cursor.com/pricing", plans: pack(50) },

  { name: "Windsurf",         url: "https://windsurf.com",              section: "outras",  cat: "code",    logo: "windsurf",
    desc: "IDE agêntico da Codeium: a IA que navega e edita seu projeto inteiro.",
    tags: ["codeium", "editor", "ide", "agente"],
    buy: "https://windsurf.com/pricing", plans: pack(40) },

  { name: "Bolt.new",         url: "https://bolt.new",                  section: "outras",  cat: "code",    logo: "stackblitz",
    desc: "Prompt, execute, implemente: apps fullstack direto do navegador com IA.",
    tags: ["stackblitz", "fullstack", "no-code", "deploy"],
    buy: "https://bolt.new", plans: pack(40) },

  { name: "v0",               url: "https://v0.dev",                    section: "outras",  cat: "code",    logo: "v0",
    desc: "Gere interfaces React e UIs lindas com IA — feito pela Vercel, onde este site está no ar.",
    tags: ["vercel", "react", "ui", "nextjs"],
    buy: "https://v0.dev", plans: pack(40) },

  { name: "Replit",           url: "https://replit.com",                section: "outras",  cat: "code",    logo: "replit",
    desc: "IDE na nuvem com agente de IA para criar, rodar e publicar projetos de qualquer lugar.",
    tags: ["ide", "nuvem", "cloud", "agente"],
    buy: "https://replit.com/pricing", plans: pack(45) },

  { name: "Devin",            url: "https://devin.ai",                  section: "outras",  cat: "agent",   logo: "devin",
    desc: "O primeiro engenheiro de software com IA autônomo do mundo, da Cognition.",
    tags: ["cognition", "engenheiro", "autonomo", "swarm"],
    buy: "https://devin.ai", plans: pack(70) },

  { name: "Firebase Studio",  url: "https://studio.firebase.google.com", section: "outras", cat: "code",   logo: "firebase",
    desc: "O ambiente do Google para criar apps com Gemini integrado do design ao deploy.",
    tags: ["google", "firebase", "gemini", "app"],
    buy: "https://studio.firebase.google.com", plans: pack(35) },

  /* ================= DIVERSAS IAs — IMAGEM ================= */
  { name: "Midjourney",       url: "https://www.midjourney.com",        section: "outras",  cat: "image",   logo: "midjourney",
    desc: "A lenda da arte por IA: imagens cinematográficas e estilos incomparáveis.",
    tags: ["arte", "arte digital", "cinematico"],
    buy: "https://www.midjourney.com/plans", plans: pack(45) },

  { name: "Ideogram",         url: "https://ideogram.ai",               section: "outras",  cat: "image",   logo: "ideogram",
    desc: "O rei das imagens com texto legível: logos, posters e tipografia perfeita.",
    tags: ["texto", "tipografia", "logo", "poster"],
    buy: "https://ideogram.ai", plans: pack(30) },

  { name: "FLUX",             url: "https://bfl.ai",                    section: "outras",  cat: "image",   logo: "flux",
    desc: "Os modelos de imagem da Black Forest Labs, criadores do FLUX.1.",
    tags: ["black forest labs", "flux 1", "open source"],
    buy: "https://bfl.ai", plans: pack(25) },

  { name: "Leonardo AI",      url: "https://leonardo.ai",               section: "outras",  cat: "image",   logo: "leonardo",
    desc: "Plataforma completa de arte e assets por IA, com modelos treináveis.",
    tags: ["arte", "game assets", "canvas"],
    buy: "https://leonardo.ai", plans: pack(30) },

  { name: "Krea",             url: "https://www.krea.ai",               section: "outras",  cat: "image",   logo: "krea",
    desc: "Geração e edição de imagens e vídeos em tempo real, com ferramentas criativas.",
    tags: ["tempo real", "realtime", "edicao"],
    buy: "https://www.krea.ai", plans: pack(35) },

  { name: "Recraft",          url: "https://www.recraft.ai",            section: "outras",  cat: "image",   logo: "recraft",
    desc: "A melhor IA para design vetorial: ícones, SVGs e mockups em segundos.",
    tags: ["vetor", "svg", "icones", "design"],
    buy: "https://www.recraft.ai", plans: pack(30) },

  { name: "Adobe Firefly",    url: "https://firefly.adobe.com",         section: "outras",  cat: "image",   logo: "firefly",
    desc: "A IA da Adobe integrada ao Photoshop: imagens, vídeo e design comercialmente seguros.",
    tags: ["adobe", "photoshop", "illustrator"],
    buy: "https://firefly.adobe.com", plans: pack(35) },

  { name: "Stability AI",     url: "https://stability.ai",              section: "outras",  cat: "image",   logo: "stability",
    desc: "Os criadores do Stable Diffusion: modelos abertos de imagem, áudio e 3D.",
    tags: ["stable diffusion", "open source", "sd"],
    buy: "https://stability.ai", plans: pack(25) },

  /* ================= DIVERSAS IAs — VÍDEO ================= */
  { name: "Runway",           url: "https://runwayml.com",              section: "outras",  cat: "video",   logo: "runway",
    desc: "Suíte de IA para cinema: Gen-4, edição, efeitos e vídeos de nível hollywoodiano.",
    tags: ["gen-4", "cinema", "edicao", "efeitos"],
    buy: "https://runwayml.com/pricing", plans: pack(50) },

  { name: "Pika",             url: "https://pika.art",                  section: "outras",  cat: "video",   logo: "pika",
    desc: "Vídeos divertidos e virais com IA: efeitos Pikaffects e animações de foto.",
    tags: ["efeitos", "viral", "animacao"],
    buy: "https://pika.art", plans: pack(35) },

  { name: "Kling AI",         url: "https://klingai.com",               section: "outras",  cat: "video",   logo: "kling",
    desc: "O gerador de vídeos da Kuaishou: realismo impressionante e movimentos fluidos.",
    tags: ["kuaishou", "realista", "video"],
    buy: "https://klingai.com", plans: pack(40) },

  { name: "Hailuo AI",        url: "https://hailuoai.video",            section: "outras",  cat: "video",   logo: "hailuo",
    desc: "Vídeos por IA da MiniMax com o modelo Hailuo: qualidade cinematográfica.",
    tags: ["minimax", "cinema", "video"],
    buy: "https://hailuoai.video", plans: pack(35) },

  { name: "Google Veo",       url: "https://deepmind.google/models/veo/", section: "outras", cat: "video", logo: "googlegemini",
    desc: "O modelo de vídeo do Google DeepMind: cenas em 4K com som nativo.",
    tags: ["google", "deepmind", "flow", "4k"],
    buy: "https://one.google.com/about/ai-plans", plans: pack(60) },

  { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", section: "outras", cat: "video", logo: "luma",
    desc: "Transforme texto e fotos em vídeos com movimento cinematográfico.",
    tags: ["luma", "ray 2", "sonho", "animacao"],
    buy: "https://lumalabs.ai/dream-machine", plans: pack(40) },

  { name: "LTX Studio",       url: "https://ltx.studio",                section: "outras",  cat: "video",   logo: "ltx",
    desc: "Estúdio de filmmaking com IA: do roteiro ao storyboard e ao vídeo final.",
    tags: ["filme", "storyboard", "roteiro", "lightricks"],
    buy: "https://ltx.studio", plans: pack(45) },

  /* ================= DIVERSAS IAs — ÁUDIO ================= */
  { name: "ElevenLabs",       url: "https://elevenlabs.io",             section: "outras",  cat: "audio",   logo: "elevenlabs",
    desc: "As vozes de IA mais realistas do mundo: narração, dublagem e clonagem de voz.",
    tags: ["voz", "narracao", "dublagem", "tts"],
    buy: "https://elevenlabs.io/pricing", plans: pack(30) },

  { name: "Suno",             url: "https://suno.com",                  section: "outras",  cat: "audio",   logo: "suno",
    desc: "Crie músicas completas com voz e letra a partir de um prompt. Você é o produtor.",
    tags: ["musica", "cancao", "composição"],
    buy: "https://suno.com/pricing", plans: pack(35) },

  { name: "Udio",             url: "https://www.udio.com",              section: "outras",  cat: "audio",   logo: "udio",
    desc: "Música por IA com qualidade de estúdio: crie faixas em qualquer gênero.",
    tags: ["musica", "audio", "generos"],
    buy: "https://www.udio.com", plans: pack(30) },

  /* ================= DIVERSAS IAs — AGENTES ================= */
  { name: "n8n",              url: "https://n8n.io",                    section: "outras",  cat: "agent",   logo: "n8n",
    desc: "Automação de workflows com IA: conecte centenas de apps e crie agentes visuais.",
    tags: ["automacao", "workflow", "integracoes", "low-code"],
    buy: "https://n8n.io/pricing", plans: pack(40) },

  /* ================= DIVERSAS IAs — PLATAFORMAS ================= */
  { name: "Hugging Face",     url: "https://huggingface.co",            section: "outras",  cat: "platform", logo: "huggingface",
    desc: "O GitHub das IAs: milhares de modelos abertos, datasets e demos.",
    tags: ["modelos", "open source", "datasets", "spaces"],
    buy: "https://huggingface.co/pro", plans: pack(25) },

  { name: "OpenRouter",       url: "https://openrouter.ai",             section: "outras",  cat: "platform", logo: "openrouter",
    desc: "Uma única API para acessar centenas de modelos de IA com o melhor preço.",
    tags: ["api", "multi-modelos", "gateway"],
    buy: "https://openrouter.ai/credits", plans: pack(30) },

  { name: "Groq",             url: "https://groq.com",                  section: "outras",  cat: "platform", logo: "groq",
    desc: "Inferência ultrarrápida de modelos open source a velocidades absurdas.",
    tags: ["inferencia", "rapido", "lpu", "api"],
    buy: "https://console.groq.com/settings/billing", plans: pack(20) },

  { name: "Ollama",           url: "https://ollama.com",                section: "outras",  cat: "platform", logo: "ollama",
    desc: "Rode os melhores modelos de IA abertos no seu próprio computador.",
    tags: ["local", "offline", "llama", "open source"],
    buy: "https://ollama.com", plans: free() },

  { name: "LM Arena",         url: "https://lmarena.ai",                section: "outras",  cat: "platform", logo: "lmarena",
    desc: "O ringue das IAs: compare modelos lado a lado e veja o ranking da comunidade.",
    tags: ["comparar", "ranking", "battle", "leaderboard"],
    buy: "https://lmarena.ai", plans: free() }
];
