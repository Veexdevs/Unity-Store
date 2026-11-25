/* ============================================================
   Unity Store — Catálogo de IAs + planos de créditos
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

// Cores oficiais das marcas (dos logos em assets/logos/)
const LOGO_COLORS = {
  claude: "#D97757", anthropic: "#3B3632", openai: "#412991",
  googlegemini: "#8E75B2", deepseek: "#5786FE", qwen: "#6950EF",
  kimi: "#3A3A3A", perplexity: "#1FB8CD", meta: "#0467DF", poe: "#5D5CDE",
  mistralai: "#FA520F", githubcopilot: "#4A4A4A", cursor: "#3B3B3B",
  windsurf: "#1E4A2E", replit: "#F26207", firebase: "#DD2C00",
  elevenlabs: "#2B2B2B", suno: "#3A3A3A", n8n: "#EA4B71",
  huggingface: "#FFD21E", openrouter: "#64748B", ollama: "#2B2B2B",
  v0: "#3B3B3B", stackblitz: "#1269D3"
};

// Catálogo — plans = pacotes de créditos/planos mostrados ao expandir o card
const AI_DATA = [
  /* ================= CLAUDE ================= */
  { name: "Claude",           url: "https://claude.ai",                 section: "claude",  cat: "chat",    logo: "claude",
    desc: "O assistente de IA da Anthropic para conversar, escrever, programar e analisar tudo com você.",
    tags: ["anthropic", "chatbot", "conversa", "escrita"],
    buy: "https://claude.com/pricing",
    plans: [
      { n: "Free",            c: "uso básico no claude.ai",        p: "US$ 0" },
      { n: "Pro",             c: "uso pesado + Claude Code",       p: "US$ 20/mês" },
      { n: "Max 5×",          c: "5× mais uso que o Pro",          p: "US$ 100/mês" },
      { n: "Max 20×",         c: "uso ilimitado + prioridade",     p: "US$ 200/mês" }
    ] },

  { name: "Claude Code",      url: "https://claude.com/claude-code",    section: "claude",  cat: "code",    logo: "claude",
    desc: "O agente de programação do Claude direto no seu terminal: escreve, testa e refatora código.",
    tags: ["anthropic", "programacao", "terminal", "dev"],
    buy: "https://claude.com/pricing",
    plans: [
      { n: "Via Pro",         c: "incluído no plano Pro",          p: "US$ 20/mês" },
      { n: "Via Max 5×",      c: "mais horas de agente",           p: "US$ 100/mês" },
      { n: "Via Max 20×",     c: "uso intensivo sem preocupação",  p: "US$ 200/mês" },
      { n: "API",             c: "paga por tokens usados",         p: "por uso" }
    ] },

  { name: "Claude Desktop",   url: "https://claude.ai/download",        section: "claude",  cat: "chat",    logo: "claude",
    desc: "O app oficial do Claude para Windows e macOS, com atalhos de teclado e integrações.",
    tags: ["anthropic", "app", "windows", "mac"],
    buy: "https://claude.com/pricing",
    plans: [
      { n: "Free",            c: "app gratuito + plano Free",      p: "US$ 0" },
      { n: "Pro",             c: "mensagens 5× maiores",           p: "US$ 20/mês" },
      { n: "Max 5×",          c: "uso avançado",                   p: "US$ 100/mês" }
    ] },

  { name: "Anthropic API",    url: "https://console.anthropic.com",     section: "claude",  cat: "platform", logo: "anthropic",
    desc: "Plataforma para desenvolvedores integrarem os modelos Claude em seus próprios produtos.",
    tags: ["anthropic", "api", "developers", "sdk"],
    buy: "https://console.anthropic.com/settings/billing",
    plans: [
      { n: "Créditos",        c: "pacote inicial",                 p: "US$ 5" },
      { n: "Créditos",        c: "para projetos pequenos",         p: "US$ 20" },
      { n: "Créditos",        c: "uso contínuo",                   p: "US$ 40" },
      { n: "Créditos",        c: "produção",                       p: "US$ 200" }
    ] },

  /* ================= GPT / OPENAI ================= */
  { name: "ChatGPT",          url: "https://chatgpt.com",               section: "gpt",     cat: "chat",    logo: "openai",
    desc: "O chat de IA mais famoso do mundo: pergunte, crie, programe e converse com o GPT.",
    tags: ["openai", "gpt-4", "gpt-5", "chatbot", "conversa"],
    buy: "https://chatgpt.com/pricing",
    plans: [
      { n: "Free",            c: "GPT ilimitado com limites",      p: "US$ 0" },
      { n: "Plus",            c: "GPT-5 + imagens + voz",          p: "US$ 20/mês" },
      { n: "Pro",             c: "modo pesquisa profunda",         p: "US$ 200/mês" },
      { n: "Team",            c: "espaço para sua equipe",         p: "US$ 30/usuário" }
    ] },

  { name: "ChatGPT Atlas",    url: "https://openai.com/atlas",          section: "gpt",     cat: "chat",    logo: "openai",
    desc: "O navegador com IA da OpenAI: navegue na web com o ChatGPT ao seu lado o tempo todo.",
    tags: ["openai", "navegador", "browser", "web"],
    buy: "https://chatgpt.com/pricing",
    plans: [
      { n: "Free",            c: "navegador gratuito",             p: "US$ 0" },
      { n: "Plus",            c: "agent mode + limites maiores",   p: "US$ 20/mês" },
      { n: "Pro",             c: "agente em capacidade máxima",    p: "US$ 200/mês" }
    ] },

  { name: "Sora",             url: "https://sora.com",                  section: "gpt",     cat: "video",   logo: "openai",
    desc: "O gerador de vídeos por IA da OpenAI: transforme texto em cenas impressionantes.",
    tags: ["openai", "video", "geracao", "texto-para-video"],
    buy: "https://chatgpt.com/pricing",
    plans: [
      { n: "Via Plus",        c: "vídeos 720p inclusos",           p: "US$ 20/mês" },
      { n: "Via Pro",         c: "1080p + durações maiores",       p: "US$ 200/mês" },
      { n: "Vídeo extra",     c: "pacotes avulsos no app",         p: "por uso" }
    ] },

  { name: "DALL·E 3",         url: "https://openai.com/dall-e-3",       section: "gpt",     cat: "image",   logo: "openai",
    desc: "A criação de imagens por IA da OpenAI, integrada ao ChatGPT.",
    tags: ["openai", "imagem", "arte", "geracao"],
    buy: "https://platform.openai.com",
    plans: [
      { n: "Via Plus",        c: "imagens no ChatGPT",             p: "US$ 20/mês" },
      { n: "API",             c: "≈ 1 imagem 1024px HD",           p: "US$ 0,04/un." }
    ] },

  { name: "Codex",            url: "https://openai.com/codex",          section: "gpt",     cat: "code",    logo: "openai",
    desc: "O agente de programação da OpenAI que trabalha junto com você no código.",
    tags: ["openai", "programacao", "agente", "dev"],
    buy: "https://chatgpt.com/pricing",
    plans: [
      { n: "Via Plus",        c: "tarefas de código inclusas",     p: "US$ 20/mês" },
      { n: "Via Pro",         c: "limites muito maiores",          p: "US$ 200/mês" },
      { n: "API",             c: "paga por tokens usados",         p: "por uso" }
    ] },

  { name: "OpenAI Platform",  url: "https://platform.openai.com",       section: "gpt",     cat: "platform", logo: "openai",
    desc: "API e ferramentas oficiais para construir seus produtos com os modelos GPT.",
    tags: ["openai", "api", "developers", "sdk"],
    buy: "https://platform.openai.com/settings/organization/billing",
    plans: [
      { n: "Créditos",        c: "para testar a API",              p: "US$ 5" },
      { n: "Créditos",        c: "projetos pequenos",              p: "US$ 20" },
      { n: "Créditos",        c: "apps em produção",               p: "US$ 50" },
      { n: "Créditos",        c: "escala",                         p: "US$ 100" }
    ] },

  /* ================= LOVABLE ================= */
  { name: "Lovable",          url: "https://lovable.dev",               section: "lovable", cat: "code",
    desc: "Crie sites e apps completos apenas conversando com a IA. Do prompt ao produto no ar.",
    tags: ["gpt engineer", "app builder", "no-code", "fullstack"],
    buy: "https://lovable.dev/pricing",
    plans: [
      { n: "Free",            c: "5 créditos por dia",             p: "US$ 0" },
      { n: "Pro",             c: "100 créditos/mês + domínio",     p: "US$ 25/mês" },
      { n: "Créditos extra",  c: "100 mensagens avulsas",          p: "US$ 20" },
      { n: "Business",        c: "SSO + projetos privados",        p: "sob consulta" }
    ] },

  { name: "Lovable Docs",     url: "https://docs.lovable.dev",          section: "lovable", cat: "platform",
    desc: "Documentação e guias para dominar o Lovable e criar projetos incríveis.",
    tags: ["documentacao", "guias", "tutoriais"],
    buy: "https://lovable.dev/pricing",
    plans: [
      { n: "Grátis",          c: "toda a documentação",            p: "US$ 0" }
    ] },

  /* ================= MANUS ================= */
  { name: "Manus",            url: "https://manus.im",                  section: "manus",   cat: "agent",
    desc: "O agente de IA geral que executa tarefas completas do início ao fim, sozinho.",
    tags: ["agente", "autonomo", "tarefas", "butler"],
    buy: "https://manus.im/pricing",
    plans: [
      { n: "Free",            c: "300 créditos por dia",           p: "US$ 0" },
      { n: "Starter",         c: "1.900 créditos/mês",             p: "US$ 39/mês" },
      { n: "Pro",             c: "19.900 créditos/mês",            p: "US$ 199/mês" }
    ] },

  { name: "Manus Docs",       url: "https://docs.manus.im",             section: "manus",   cat: "platform",
    desc: "Documentação oficial do Manus: aprenda a delegar tarefas ao agente.",
    tags: ["documentacao", "guias", "tutoriais"],
    buy: "https://manus.im/pricing",
    plans: [
      { n: "Grátis",          c: "toda a documentação",            p: "US$ 0" }
    ] },

  /* ================= DIVERSAS IAs — CHAT ================= */
  { name: "Gemini",           url: "https://gemini.google.com",         section: "outras",  cat: "chat",    logo: "googlegemini",
    desc: "A IA do Google: converse, pesquise, crie e integre com todo o ecossistema Google.",
    tags: ["google", "bard", "assistente"],
    buy: "https://one.google.com/about/ai-plans",
    plans: [
      { n: "Free",            c: "Gemini com limites diários",     p: "US$ 0" },
      { n: "Google AI Pro",   c: "2TB + Veo + Deep Research",      p: "US$ 19,99/mês" },
      { n: "Google AI Ultra", c: "tudo ilimitado + Veo 4K",        p: "US$ 249,99/mês" }
    ] },

  { name: "Google AI Studio", url: "https://aistudio.google.com",       section: "outras",  cat: "platform", logo: "googlegemini",
    desc: "O estúdio do Google para experimentar e desenvolver com os modelos Gemini.",
    tags: ["google", "gemini", "api", "developers"],
    buy: "https://aistudio.google.com",
    plans: [
      { n: "Free",            c: "testes com limites generosos",   p: "US$ 0" },
      { n: "API",             c: "pay-as-you-go por modelo",       p: "a partir de US$ 5" }
    ] },

  { name: "Grok",             url: "https://grok.com",                  section: "outras",  cat: "chat",
    desc: "A IA do xAI, do Elon Musk: direta, engraçada e conectada com o X.",
    tags: ["xai", "elon musk", "twitter", "x"],
    buy: "https://grok.com",
    plans: [
      { n: "Free",            c: "consultas limitadas",            p: "US$ 0" },
      { n: "SuperGrok",       c: "limites altos + Grok 4",         p: "US$ 30/mês" },
      { n: "Heavy",           c: "Grok 4 Heavy + early access",    p: "US$ 300/mês" }
    ] },

  { name: "DeepSeek",         url: "https://chat.deepseek.com",         section: "outras",  cat: "chat",    logo: "deepseek",
    desc: "A IA chinesa que impressionou o mundo: raciocínio avançado e código de qualidade.",
    tags: ["raciocinio", "reasoning", "china", "open source"],
    buy: "https://platform.deepseek.com",
    plans: [
      { n: "Chat",            c: "100% grátis no site/app",        p: "US$ 0" },
      { n: "API",             c: "créditos pay-as-you-go",         p: "a partir de US$ 2" }
    ] },

  { name: "Qwen Chat",        url: "https://chat.qwen.ai",              section: "outras",  cat: "chat",    logo: "qwen",
    desc: "O chat da Alibaba com os modelos Qwen: texto, imagem, vídeo e mais.",
    tags: ["alibaba", "qwen", "open source"],
    buy: "https://chat.qwen.ai",
    plans: [
      { n: "Free",            c: "uso gratuito com limites",       p: "US$ 0" },
      { n: "API",             c: "pay-as-you-go por modelo",       p: "por uso" }
    ] },

  { name: "Kimi",             url: "https://www.kimi.com",              section: "outras",  cat: "chat",    logo: "kimi",
    desc: "A IA da Moonshot AI com contexto gigante: perfeita para ler documentos enormes.",
    tags: ["moonshot", "k2", "contexto longo"],
    buy: "https://www.kimi.com",
    plans: [
      { n: "Free",            c: "uso gratuito com limites",       p: "US$ 0" },
      { n: "API",             c: "pay-as-you-go (K2)",             p: "por uso" }
    ] },

  { name: "Perplexity",       url: "https://www.perplexity.ai",         section: "outras",  cat: "chat",    logo: "perplexity",
    desc: "O buscador com IA: respostas com fontes, citações e pesquisa em tempo real.",
    tags: ["busca", "search", "pesquisa", "fontes"],
    buy: "https://www.perplexity.ai/pro",
    plans: [
      { n: "Free",            c: "buscas ilimitadas básicas",      p: "US$ 0" },
      { n: "Pro",             c: "300+ Pro searches/dia",          p: "US$ 20/mês" },
      { n: "Max",             c: "Comet + modelos top",            p: "US$ 200/mês" }
    ] },

  { name: "Microsoft Copilot",url: "https://copilot.microsoft.com",     section: "outras",  cat: "chat",
    desc: "A IA da Microsoft integrada ao Windows, Bing e Office.",
    tags: ["microsoft", "windows", "bing", "office"],
    buy: "https://copilot.microsoft.com",
    plans: [
      { n: "Free",            c: "GPT-4 class com limites",        p: "US$ 0" },
      { n: "Copilot Pro",     c: "Office + prioridade",            p: "US$ 20/mês" },
      { n: "M365 Copilot",    c: "para empresas",                  p: "US$ 30/usuário" }
    ] },

  { name: "Meta AI",          url: "https://www.meta.ai",               section: "outras",  cat: "chat",    logo: "meta",
    desc: "A IA da Meta, presente no WhatsApp, Instagram e no site oficial.",
    tags: ["meta", "facebook", "whatsapp", "instagram", "llama"],
    buy: "https://www.meta.ai",
    plans: [
      { n: "Grátis",          c: "100% grátis no site e apps",     p: "US$ 0" }
    ] },

  { name: "Poe",              url: "https://poe.com",                   section: "outras",  cat: "chat",    logo: "poe",
    desc: "Várias IAs em um só app: converse com GPT, Claude, Gemini e mais de 100 modelos.",
    tags: ["quora", "multi-modelos", "bots"],
    buy: "https://poe.com/subscribe",
    plans: [
      { n: "Free",            c: "pontos diários grátis",          p: "US$ 0" },
      { n: "Assinatura",      c: "1 milhão de pontos/mês",         p: "US$ 19,99/mês" },
      { n: "Assinatura",      c: "5 milhões de pontos/mês",        p: "US$ 49,99/mês" }
    ] },

  { name: "Le Chat",          url: "https://chat.mistral.ai",           section: "outras",  cat: "chat",    logo: "mistralai",
    desc: "O chat da Mistral AI, a alternativa francesa e open source das grandes IAs.",
    tags: ["mistral", "franca", "open source", "europa"],
    buy: "https://chat.mistral.ai",
    plans: [
      { n: "Free",            c: "uso gratuito generoso",          p: "US$ 0" },
      { n: "Pro",             c: "limites altos + web search",     p: "US$ 14,99/mês" },
      { n: "API",             c: "pay-as-you-go",                  p: "por uso" }
    ] },

  /* ================= DIVERSAS IAs — CÓDIGO ================= */
  { name: "GitHub Copilot",   url: "https://github.com/features/copilot", section: "outras", cat: "code",   logo: "githubcopilot",
    desc: "O copiloto de código dentro do VS Code e GitHub: autocomplete com IA e agente de PRs.",
    tags: ["github", "microsoft", "vscode", "autocomplete"],
    buy: "https://github.com/features/copilot/plans",
    plans: [
      { n: "Free",            c: "2.000 compleções/mês",           p: "US$ 0" },
      { n: "Copilot Pro",     c: "compleções ilimitadas",          p: "US$ 10/mês" },
      { n: "Business",        c: "para equipes + políticas",       p: "US$ 19/usuário" }
    ] },

  { name: "Cursor",           url: "https://cursor.com",                section: "outras",  cat: "code",    logo: "cursor",
    desc: "O editor de código com IA que conquistou os devs: construa software na velocidade da fala.",
    tags: ["editor", "ide", "programacao", "dev"],
    buy: "https://cursor.com/pricing",
    plans: [
      { n: "Hobby",           c: "teste gratuito",                 p: "US$ 0" },
      { n: "Pro",             c: "uso estendido + $20 de API",     p: "US$ 20/mês" },
      { n: "Ultra",           c: "20× mais uso do Pro",            p: "US$ 200/mês" },
      { n: "Teams",           c: "privacidade + admin",            p: "US$ 40/usuário" }
    ] },

  { name: "Windsurf",         url: "https://windsurf.com",              section: "outras",  cat: "code",    logo: "windsurf",
    desc: "IDE agêntico da Codeium: a IA que navega e edita seu projeto inteiro.",
    tags: ["codeium", "editor", "ide", "agente"],
    buy: "https://windsurf.com/pricing",
    plans: [
      { n: "Free",            c: "créditos mensais limitados",     p: "US$ 0" },
      { n: "Pro",             c: "500 créditos de agente/mês",     p: "US$ 15/mês" },
      { n: "Teams",           c: "colaboração + admin",            p: "US$ 30/usuário" }
    ] },

  { name: "Bolt.new",         url: "https://bolt.new",                  section: "outras",  cat: "code",    logo: "stackblitz",
    desc: "Prompt, execute, implemente: apps fullstack direto do navegador com IA.",
    tags: ["stackblitz", "fullstack", "no-code", "deploy"],
    buy: "https://bolt.new",
    plans: [
      { n: "Free",            c: "tokens diários limitados",       p: "US$ 0" },
      { n: "Pro",             c: "10M tokens/mês",                 p: "US$ 20/mês" },
      { n: "Pro 26",          c: "26M tokens/mês",                 p: "US$ 26/mês" }
    ] },

  { name: "v0",               url: "https://v0.dev",                    section: "outras",  cat: "code",    logo: "v0",
    desc: "Gere interfaces React e UIs lindas com IA — feito pela Vercel, onde este site está no ar.",
    tags: ["vercel", "react", "ui", "nextjs"],
    buy: "https://v0.dev",
    plans: [
      { n: "Free",            c: "US$ 5 de créditos/mês",          p: "US$ 0" },
      { n: "Premium",         c: "US$ 20 de créditos/mês",         p: "US$ 20/mês" },
      { n: "Team",            c: "US$ 30 de créditos/usuário",     p: "US$ 30/usuário" }
    ] },

  { name: "Replit",           url: "https://replit.com",                section: "outras",  cat: "code",    logo: "replit",
    desc: "IDE na nuvem com agente de IA para criar, rodar e publicar projetos de qualquer lugar.",
    tags: ["ide", "nuvem", "cloud", "agente"],
    buy: "https://replit.com/pricing",
    plans: [
      { n: "Free",            c: "projetos públicos limitados",    p: "US$ 0" },
      { n: "Core",            c: "checkpoints de Agent + apps",    p: "US$ 25/mês" },
      { n: "Teams",           c: "para equipes + privacidade",     p: "US$ 40/usuário" }
    ] },

  { name: "Devin",            url: "https://devin.ai",                  section: "outras",  cat: "agent",
    desc: "O primeiro engenheiro de software com IA autônomo do mundo, da Cognition.",
    tags: ["cognition", "engenheiro", "autonomo", "swarm"],
    buy: "https://devin.ai",
    plans: [
      { n: "Core",            c: "ACUs pay-as-you-go",             p: "US$ 20/mês + uso" },
      { n: "Team",            c: "ACUs compartilhados + wiki",     p: "US$ 500/mês" }
    ] },

  { name: "Firebase Studio",  url: "https://studio.firebase.google.com", section: "outras", cat: "code",   logo: "firebase",
    desc: "O ambiente do Google para criar apps com Gemini integrado do design ao deploy.",
    tags: ["google", "firebase", "gemini", "app"],
    buy: "https://studio.firebase.google.com",
    plans: [
      { n: "Free",            c: "3 workspaces no preview",        p: "US$ 0" },
      { n: "Google AI Pro",   c: "mais workspaces + Gemini",       p: "US$ 19,99/mês" }
    ] },

  /* ================= DIVERSAS IAs — IMAGEM ================= */
  { name: "Midjourney",       url: "https://www.midjourney.com",        section: "outras",  cat: "image",
    desc: "A lenda da arte por IA: imagens cinematográficas e estilos incomparáveis.",
    tags: ["arte", "arte digital", "cinematico"],
    buy: "https://www.midjourney.com/plans",
    plans: [
      { n: "Basic",           c: "~200 imagens/mês",               p: "US$ 10/mês" },
      { n: "Standard",        c: "15h de GPU + relax",             p: "US$ 30/mês" },
      { n: "Pro",             c: "30h de GPU + stealth",           p: "US$ 60/mês" },
      { n: "Mega",            c: "60h de GPU",                     p: "US$ 120/mês" }
    ] },

  { name: "Ideogram",         url: "https://ideogram.ai",               section: "outras",  cat: "image",
    desc: "O rei das imagens com texto legível: logos, posters e tipografia perfeita.",
    tags: ["texto", "tipografia", "logo", "poster"],
    buy: "https://ideogram.ai",
    plans: [
      { n: "Free",            c: "gerações diárias lentas",        p: "US$ 0" },
      { n: "Basic",           c: "100 gerações rápidas/mês",       p: "US$ 8/mês" },
      { n: "Plus",            c: "500 gerações rápidas/mês",       p: "US$ 20/mês" },
      { n: "Pro",             c: "2.000 gerações rápidas/mês",     p: "US$ 60/mês" }
    ] },

  { name: "FLUX",             url: "https://bfl.ai",                    section: "outras",  cat: "image",
    desc: "Os modelos de imagem da Black Forest Labs, criadores do FLUX.1.",
    tags: ["black forest labs", "flux 1", "open source"],
    buy: "https://bfl.ai",
    plans: [
      { n: "Playground",      c: "créditos para testar",           p: "US$ 5" },
      { n: "Playground",      c: "pacote médio",                   p: "US$ 20" },
      { n: "API",             c: "pay-as-you-go por imagem",       p: "por uso" }
    ] },

  { name: "Leonardo AI",      url: "https://leonardo.ai",               section: "outras",  cat: "image",
    desc: "Plataforma completa de arte e assets por IA, com modelos treináveis.",
    tags: ["arte", "game assets", "canvas"],
    buy: "https://leonardo.ai",
    plans: [
      { n: "Free",            c: "150 créditos por dia",           p: "US$ 0" },
      { n: "Apprentice",      c: "8.500 créditos/mês",             p: "US$ 12/mês" },
      { n: "Artisan",         c: "25.000 créditos/mês",            p: "US$ 30/mês" },
      { n: "Maestro",         c: "50.000 créditos/mês",            p: "US$ 60/mês" }
    ] },

  { name: "Krea",             url: "https://www.krea.ai",               section: "outras",  cat: "image",
    desc: "Geração e edição de imagens e vídeos em tempo real, com ferramentas criativas.",
    tags: ["tempo real", "realtime", "edicao"],
    buy: "https://www.krea.ai",
    plans: [
      { n: "Free",            c: "gerações diárias limitadas",     p: "US$ 0" },
      { n: "Basic",           c: "créditos gerais + realtime",     p: "US$ 10/mês" },
      { n: "Pro",             c: "limites altos + FLUX Pro",       p: "US$ 35/mês" }
    ] },

  { name: "Recraft",          url: "https://www.recraft.ai",            section: "outras",  cat: "image",
    desc: "A melhor IA para design vetorial: ícones, SVGs e mockups em segundos.",
    tags: ["vetor", "svg", "icones", "design"],
    buy: "https://www.recraft.ai",
    plans: [
      { n: "Free",            c: "50 créditos por dia",            p: "US$ 0" },
      { n: "Starter",         c: "1.000 créditos/mês",             p: "US$ 12/mês" },
      { n: "Pro",             c: "4.000 créditos/mês",             p: "US$ 24/mês" }
    ] },

  { name: "Adobe Firefly",    url: "https://firefly.adobe.com",         section: "outras",  cat: "image",
    desc: "A IA da Adobe integrada ao Photoshop: imagens, vídeo e design comercialmente seguros.",
    tags: ["adobe", "photoshop", "illustrator"],
    buy: "https://firefly.adobe.com",
    plans: [
      { n: "Free",            c: "créditos mensais limitados",     p: "US$ 0" },
      { n: "Standard",        c: "mais créditos + vídeo",          p: "US$ 9,99/mês" },
      { n: "Pro",             c: "vídeo + limites altos",          p: "US$ 29,99/mês" }
    ] },

  { name: "Stability AI",     url: "https://stability.ai",              section: "outras",  cat: "image",
    desc: "Os criadores do Stable Diffusion: modelos abertos de imagem, áudio e 3D.",
    tags: ["stable diffusion", "open source", "sd"],
    buy: "https://stability.ai",
    plans: [
      { n: "API",             c: "créditos iniciais",              p: "US$ 10" },
      { n: "API",             c: "pacote médio",                   p: "US$ 50" },
      { n: "API",             c: "produção",                       p: "US$ 100" }
    ] },

  /* ================= DIVERSAS IAs — VÍDEO ================= */
  { name: "Runway",           url: "https://runwayml.com",              section: "outras",  cat: "video",
    desc: "Suíte de IA para cinema: Gen-4, edição, efeitos e vídeos de nível hollywoodiano.",
    tags: ["gen-4", "cinema", "edicao", "efeitos"],
    buy: "https://runwayml.com/pricing",
    plans: [
      { n: "Free",            c: "125 créditos únicos",            p: "US$ 0" },
      { n: "Standard",        c: "6.250 créditos/mês",             p: "US$ 15/mês" },
      { n: "Pro",             c: "22.500 créditos/mês",            p: "US$ 35/mês" },
      { n: "Unlimited",       c: "gerações relax ilimitadas",      p: "US$ 95/mês" }
    ] },

  { name: "Pika",             url: "https://pika.art",                  section: "outras",  cat: "video",
    desc: "Vídeos divertidos e virais com IA: efeitos Pikaffects e animações de foto.",
    tags: ["efeitos", "viral", "animacao"],
    buy: "https://pika.art",
    plans: [
      { n: "Free",            c: "créditos mensais limitados",     p: "US$ 0" },
      { n: "Standard",        c: "700 créditos/mês",               p: "US$ 10/mês" },
      { n: "Pro",             c: "2.500 créditos/mês",             p: "US$ 35/mês" }
    ] },

  { name: "Kling AI",         url: "https://klingai.com",               section: "outras",  cat: "video",
    desc: "O gerador de vídeos da Kuaishou: realismo impressionante e movimentos fluidos.",
    tags: ["kuaishou", "realista", "video"],
    buy: "https://klingai.com",
    plans: [
      { n: "Free",            c: "66 créditos por dia",            p: "US$ 0" },
      { n: "Standard",        c: "1.000 créditos/mês",             p: "US$ 10/mês" },
      { n: "Pro",             c: "6.000 créditos/mês",             p: "US$ 37/mês" },
      { n: "Premier",         c: "30.000 créditos/mês",            p: "US$ 92/mês" }
    ] },

  { name: "Hailuo AI",        url: "https://hailuoai.video",            section: "outras",  cat: "video",
    desc: "Vídeos por IA da MiniMax com o modelo Hailuo: qualidade cinematográfica.",
    tags: ["minimax", "cinema", "video"],
    buy: "https://hailuoai.video",
    plans: [
      { n: "Free",            c: "créditos diários grátis",        p: "US$ 0" },
      { n: "Assinatura",      c: "mais créditos + fila rápida",    p: "a partir de US$ 9,90/mês" }
    ] },

  { name: "Google Veo",       url: "https://deepmind.google/models/veo/", section: "outras", cat: "video",  logo: "googlegemini",
    desc: "O modelo de vídeo do Google DeepMind: cenas em 4K com som nativo.",
    tags: ["google", "deepmind", "flow", "4k"],
    buy: "https://one.google.com/about/ai-plans",
    plans: [
      { n: "AI Pro",          c: "Veo no Gemini/Flow",             p: "US$ 19,99/mês" },
      { n: "AI Ultra",        c: "Veo 4K + limites máximos",       p: "US$ 249,99/mês" },
      { n: "Vertex API",      c: "pay-as-you-go",                  p: "por uso" }
    ] },

  { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", section: "outras", cat: "video",
    desc: "Transforme texto e fotos em vídeos com movimento cinematográfico.",
    tags: ["luma", "ray 2", "sonho", "animacao"],
    buy: "https://lumalabs.ai/dream-machine",
    plans: [
      { n: "Free",            c: "gerações mensais limitadas",     p: "US$ 0" },
      { n: "Lite",            c: "3.200 créditos/mês",             p: "US$ 9,99/mês" },
      { n: "Plus",            c: "8.500 créditos/mês",             p: "US$ 29,99/mês" },
      { n: "Unlimited",       c: "gerações relax ilimitadas",      p: "US$ 119,99/mês" }
    ] },

  { name: "LTX Studio",       url: "https://ltx.studio",                section: "outras",  cat: "video",
    desc: "Estúdio de filmmaking com IA: do roteiro ao storyboard e ao vídeo final.",
    tags: ["filme", "storyboard", "roteiro", "lightricks"],
    buy: "https://ltx.studio",
    plans: [
      { n: "Free",            c: "créditos mensais limitados",     p: "US$ 0" },
      { n: "Standard",        c: "8.640 créditos/mês (≈ 5 min)",   p: "US$ 15/mês" },
      { n: "Pro",             c: "27.000 créditos/mês (≈ 16 min)", p: "US$ 35/mês" }
    ] },

  /* ================= DIVERSAS IAs — ÁUDIO ================= */
  { name: "ElevenLabs",       url: "https://elevenlabs.io",             section: "outras",  cat: "audio",   logo: "elevenlabs",
    desc: "As vozes de IA mais realistas do mundo: narração, dublagem e clonagem de voz.",
    tags: ["voz", "narracao", "dublagem", "tts"],
    buy: "https://elevenlabs.io/pricing",
    plans: [
      { n: "Free",            c: "10.000 créditos/mês",            p: "US$ 0" },
      { n: "Starter",         c: "30.000 créditos/mês",            p: "US$ 5/mês" },
      { n: "Creator",         c: "100.000 créditos/mês",           p: "US$ 22/mês" },
      { n: "Pro",             c: "500.000 créditos/mês",           p: "US$ 99/mês" }
    ] },

  { name: "Suno",             url: "https://suno.com",                  section: "outras",  cat: "audio",   logo: "suno",
    desc: "Crie músicas completas com voz e letra a partir de um prompt. Você é o produtor.",
    tags: ["musica", "cancao", "composição"],
    buy: "https://suno.com/pricing",
    plans: [
      { n: "Free",            c: "50 créditos/dia (10 músicas)",   p: "US$ 0" },
      { n: "Pro",             c: "2.500 créditos/mês",             p: "US$ 10/mês" },
      { n: "Premier",         c: "10.000 créditos/mês",            p: "US$ 30/mês" }
    ] },

  { name: "Udio",             url: "https://www.udio.com",              section: "outras",  cat: "audio",
    desc: "Música por IA com qualidade de estúdio: crie faixas em qualquer gênero.",
    tags: ["musica", "audio", "generos"],
    buy: "https://www.udio.com",
    plans: [
      { n: "Free",            c: "10 créditos por dia",            p: "US$ 0" },
      { n: "Standard",        c: "1.200 créditos/mês",             p: "US$ 10/mês" },
      { n: "Pro",             c: "5.400 créditos/mês",             p: "US$ 30/mês" }
    ] },

  /* ================= DIVERSAS IAs — AGENTES ================= */
  { name: "n8n",              url: "https://n8n.io",                    section: "outras",  cat: "agent",   logo: "n8n",
    desc: "Automação de workflows com IA: conecte centenas de apps e crie agentes visuais.",
    tags: ["automacao", "workflow", "integracoes", "low-code"],
    buy: "https://n8n.io/pricing",
    plans: [
      { n: "Self-hosted",     c: "instalação ilimitada",           p: "US$ 0" },
      { n: "Starter",         c: "~2.500 execuções/mês",           p: "US$ 24/mês" },
      { n: "Pro",             c: "~10.000 execuções/mês",          p: "US$ 50/mês" }
    ] },

  /* ================= DIVERSAS IAs — PLATAFORMAS ================= */
  { name: "Hugging Face",     url: "https://huggingface.co",            section: "outras",  cat: "platform", logo: "huggingface",
    desc: "O GitHub das IAs: milhares de modelos abertos, datasets e demos.",
    tags: ["modelos", "open source", "datasets", "spaces"],
    buy: "https://huggingface.co/pro",
    plans: [
      { n: "Free",            c: "modelos + Spaces públicos",      p: "US$ 0" },
      { n: "PRO",             c: "Spaces dev + créditos Inference", p: "US$ 9/mês" },
      { n: "Team",            c: "Spaces privados + SSO",          p: "US$ 20/usuário" }
    ] },

  { name: "OpenRouter",       url: "https://openrouter.ai",             section: "outras",  cat: "platform", logo: "openrouter",
    desc: "Uma única API para acessar centenas de modelos de IA com o melhor preço.",
    tags: ["api", "multi-modelos", "gateway"],
    buy: "https://openrouter.ai/credits",
    plans: [
      { n: "Créditos",        c: "para começar",                   p: "US$ 5" },
      { n: "Créditos",        c: "uso regular",                    p: "US$ 20" },
      { n: "Créditos",        c: "projetos",                       p: "US$ 50" },
      { n: "Créditos",        c: "escala",                         p: "US$ 100" }
    ] },

  { name: "Groq",             url: "https://groq.com",                  section: "outras",  cat: "platform",
    desc: "Inferência ultrarrápida de modelos open source a velocidades absurdas.",
    tags: ["inferencia", "rapido", "lpu", "api"],
    buy: "https://console.groq.com/settings/billing",
    plans: [
      { n: "Free",            c: "testes com rate limits",         p: "US$ 0" },
      { n: "API",             c: "pay-as-you-go ultra-rápido",     p: "por uso" }
    ] },

  { name: "Ollama",           url: "https://ollama.com",                section: "outras",  cat: "platform", logo: "ollama",
    desc: "Rode os melhores modelos de IA abertos no seu próprio computador.",
    tags: ["local", "offline", "llama", "open source"],
    buy: "https://ollama.com",
    plans: [
      { n: "Grátis",          c: "100% local e ilimitado",         p: "US$ 0" }
    ] },

  { name: "LM Arena",         url: "https://lmarena.ai",                section: "outras",  cat: "platform",
    desc: "O ringue das IAs: compare modelos lado a lado e veja o ranking da comunidade.",
    tags: ["comparar", "ranking", "battle", "leaderboard"],
    buy: "https://lmarena.ai",
    plans: [
      { n: "Grátis",          c: "todos os modelos para testar",   p: "US$ 0" }
    ] }
];
