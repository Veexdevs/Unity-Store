/* ============================================================
   Unity Store — lógica do catálogo
   ============================================================ */
(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const STORE_FAVS = "unity-store:favs";

  const state = {
    query: "",
    section: "todos",
    cat: "todas",
    onlyFavs: false,
    favs: new Set(JSON.parse(localStorage.getItem(STORE_FAVS) || "[]")),
    open: new Set()
  };

  /* ---------- utils ---------- */

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  // remove acentos para a busca ignorar diferenças
  const norm = (s) =>
    String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const catById   = (id) => CATEGORIES.find((c) => c.id === id);
  const sectById  = (id) => SECTIONS.find((s) => s.id === id);

  function highlight(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    const idx = norm(text).indexOf(norm(query));
    if (idx === -1) return safe;
    // mapeia índice "normalizado" → real (acentos mudam o comprimento visual)
    let n = 0, real = 0;
    for (let i = 0; i < text.length; i++) {
      if (n === idx) { real = i; break; }
      n += 1; // norm não muda o nº de caracteres (NFD é só render)
      if (i === text.length - 1) real = idx;
    }
    const end = real + query.length;
    return esc(text.slice(0, real)) + "<mark>" + esc(text.slice(real, end)) + "</mark>" + esc(text.slice(end));
  }

  /* ---------- render dos filtros ---------- */

  function chipSectionHTML(s, count) {
    const active = state.section === s.id ? " active" : "";
    return `<button class="chip${active}" data-section="${s.id}" type="button">
      <span class="chip-emoji">${s.emoji}</span> ${esc(s.name)}
      <span class="chip-count">${count}</span>
    </button>`;
  }

  function chipCatHTML(c, count) {
    const active = state.cat === c.id ? " active" : "";
    return `<button class="chip chip-sm${active}" data-cat="${c.id}" type="button">
      <span class="chip-emoji">${c.emoji}</span> ${esc(c.name)}
      <span class="chip-count">${count}</span>
    </button>`;
  }

  function renderChips(data) {
    const countBySection = { todos: data.length };
    SECTIONS.forEach((s) => {
      countBySection[s.id] = data.filter((a) => a.section === s.id).length;
    });

    $("#chips-sections").innerHTML =
      `<button class="chip${state.section === "todos" ? " active" : ""}" data-section="todos" type="button">
         <span class="chip-emoji">✨</span> Todos <span class="chip-count">${data.length}</span>
       </button>` +
      (state.onlyFavs
        ? `<button class="chip active" data-section="favs" type="button">
             <span class="chip-emoji">⭐</span> Favoritos <span class="chip-count">${state.favs.size}</span>
           </button>`
        : "") +
      SECTIONS.map((s) => chipSectionHTML(s, countBySection[s.id])).join("");

    const countByCat = { todas: data.length };
    CATEGORIES.forEach((c) => {
      countByCat[c.id] = data.filter((a) => a.cat === c.id).length;
    });

    $("#chips-categories").innerHTML =
      `<button class="chip chip-sm${state.cat === "todas" ? " active" : ""}" data-cat="todas" type="button">
         <span class="chip-emoji">🗂️</span> Todas as categorias <span class="chip-count">${data.length}</span>
       </button>` +
      CATEGORIES.map((c) => chipCatHTML(c, countByCat[c.id])).join("");
  }

  /* ---------- render do catálogo ---------- */

  function cardHTML(a) {
    const sect  = sectById(a.section);
    const cat   = catById(a.cat);
    const fav   = state.favs.has(a.name);
    const open  = state.open.has(a.name);
    const letter = esc(a.name.trim().charAt(0).toUpperCase());
    const hasLogo = !!(a.logo && LOGO_COLORS[a.logo]);
    const brand   = hasLogo ? LOGO_COLORS[a.logo] : "";
    const plans   = a.plans || [];

    return `
    <article class="card reveal${open ? " open" : ""}" data-name="${esc(a.name)}" style="--d:${Math.min(60, a._i * 25)}ms">
      <span class="card-watermark" aria-hidden="true">${letter}</span>
      <div class="card-glow"></div>
      <button class="fav-btn${fav ? " is-fav" : ""}" data-fav="${esc(a.name)}" type="button"
              aria-label="${fav ? "Remover dos" : "Adicionar aos"} favoritos" title="Favoritar">
        ${fav ? "★" : "☆"}
      </button>

      <!-- cabeçalho clicável: logo + NomeIA: Comprar Créditos + símbolo de expandir -->
      <div class="card-head" data-toggle="${esc(a.name)}" role="button" tabindex="0"
           aria-expanded="${open}" title="${open ? "Fechar" : "Ver"} preços e créditos">
        <span class="avatar avatar-${a.section}${hasLogo ? " has-brand-logo" : ""}"
              ${hasLogo ? `style="--brand:${brand}"` : ""} aria-hidden="true">
          ${hasLogo ? `<img src="assets/logos/${esc(a.logo)}.svg" alt="" loading="lazy" />` : letter}
        </span>
        <span class="card-id">
          <h3 class="card-name">${highlight(a.name, state.query)}<span class="card-suffix">: Comprar Créditos</span></h3>
          <span class="card-section">${sect.emoji} ${esc(sect.name)} · ${cat.emoji} ${esc(cat.name)}</span>
        </span>
        <span class="chev" aria-hidden="true">▾</span>
      </div>

      <p class="card-desc">${highlight(a.desc, state.query)}</p>

      <!-- painel que se estende pra baixo: créditos + preços -->
      <div class="card-body">
        <div class="card-body-inner">
          <ul class="plans">
            ${plans.map((pl) => `
            <li class="plan">
              <span class="plan-n">${esc(pl.n)}</span>
              <span class="plan-c">${esc(pl.c)}</span>
              <span class="plan-p">${esc(pl.p)}</span>
            </li>`).join("")}
          </ul>
          <div class="card-foot">
            <a class="btn-open" href="${esc(a.buy || a.url)}" target="_blank" rel="noopener noreferrer">
              Comprar créditos <span class="arrow">↗</span>
            </a>
            <a class="btn-site" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">
              Abrir IA <span class="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>`;
  }

  function sectionHTML(s, items) {
    return `
    <section class="ai-section" data-section="${s.id}">
      <div class="section-head reveal">
        <span class="section-emoji" aria-hidden="true">${s.emoji}</span>
        <div class="section-title">
          <h2>${esc(s.name)} <span class="section-count">${items.length} ${items.length === 1 ? "IA" : "IAs"}</span></h2>
          <p>${esc(s.tagline)}</p>
        </div>
        <span class="section-line" aria-hidden="true"></span>
      </div>
      <div class="grid">${items.map(cardHTML).join("")}</div>
    </section>`;
  }

  function render() {
    const q = norm(state.query.trim());

    let data = AI_DATA.map((a, i) => ({ ...a, _i: i }));

    if (state.section === "favs") {
      data = data.filter((a) => state.favs.has(a.name));
    } else if (state.section !== "todos") {
      data = data.filter((a) => a.section === state.section);
    }
    if (state.cat !== "todas") data = data.filter((a) => a.cat === state.cat);
    if (q) {
      data = data.filter((a) =>
        norm(a.name + " " + a.desc + " " + a.tags.join(" ") + " " + catById(a.cat).name + " " + sectById(a.section).name)
          .includes(q)
      );
    }

    renderChips(AI_DATA.map((a, i) => ({ ...a, _i: i })));

    const wrap = $("#catalog");
    if (!data.length) {
      wrap.innerHTML = `
        <div class="empty reveal visible">
          <div class="empty-ship">🛸</div>
          <h2>Nenhuma IA encontrada${state.query ? ` para <em>“${esc(state.query)}”</em>` : ""}</h2>
          <p>Tente outro nome, categoria ou limpe os filtros — a nave escaneou todo o universo. 🌌</p>
          <button class="btn btn-primary" id="btn-clear-empty" type="button">Limpar filtros</button>
        </div>`;
      $("#results-count").textContent = "0 resultados";
      return;
    }

    wrap.innerHTML = SECTIONS
      .map((s) => ({ s, items: data.filter((a) => a.section === s.id) }))
      .filter((g) => g.items.length)
      .map((g) => sectionHTML(g.s, g.items))
      .join("");

    $("#results-count").textContent =
      data.length + (data.length === 1 ? " resultado" : " resultados");

    observeReveals();
  }

  /* ---------- toasts ---------- */

  let toastTimer;
  function toast(msg) {
    let el = $("#toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  /* ---------- eventos ---------- */

  function bind() {
    // busca
    const input = $("#search");
    let deb;
    input.addEventListener("input", () => {
      clearTimeout(deb);
      deb = setTimeout(() => {
        state.query = input.value;
        render();
      }, 120);
    });

    // botão › dentro da busca + Enter
    const goSearch = () => {
      state.query = input.value;
      render();
      $("#ias").scrollIntoView({ behavior: "smooth" });
    };
    $("#search-go").addEventListener("click", () => {
      if (!input.value.trim()) { input.focus(); return; }
      goSearch();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value.trim()) goSearch();
    });

    // "/" foca a busca
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
      }
      if (e.key === "Escape" && document.activeElement === input) {
        input.value = "";
        state.query = "";
        render();
        input.blur();
      }
      // Enter/Espaço expande o card quando o cabeçalho está focado
      if ((e.key === "Enter" || e.key === " ") && document.activeElement?.hasAttribute?.("data-toggle")) {
        e.preventDefault();
        document.activeElement.click();
      }
    });

    // chips (delegação)
    document.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) {
        if (chip.dataset.section) state.section = chip.dataset.section;
        if (chip.dataset.cat) state.cat = chip.dataset.cat;
        render();
        return;
      }

      const favBtn = e.target.closest("[data-fav]");
      if (favBtn) {
        const name = favBtn.dataset.fav;
        const was = state.favs.has(name);
        if (was) { state.favs.delete(name); toast("☆ " + name + " removido dos favoritos"); }
        else { state.favs.add(name); toast("★ " + name + " favoritado!"); }
        localStorage.setItem(STORE_FAVS, JSON.stringify([...state.favs]));
        render();
        return;
      }

      // expandir/recolher o painel de créditos
      const toggle = e.target.closest("[data-toggle]");
      if (toggle) {
        const name = toggle.dataset.toggle;
        if (state.open.has(name)) state.open.delete(name);
        else state.open.add(name);
        render();
        return;
      }

      if (e.target.closest("#btn-clear-empty")) {
        clearFilters(true);
        return;
      }

      // quick chips do hero
      const quick = e.target.closest("[data-quick]");
      if (quick) {
        state.query = quick.dataset.quick;
        input.value = state.query;
        $("#ias").scrollIntoView({ behavior: "smooth" });
        setTimeout(() => input.focus({ preventScroll: true }), 450);
        render();
      }
    });

    $("#btn-clear").addEventListener("click", () => clearFilters(true));

    // tilt + glow nos cards (delegação por mousemove)
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".card");
      $$(".card.is-tilting").forEach((c) => { if (c !== card) { c.classList.remove("is-tilting"); c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); } });
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.classList.add("is-tilting");
      card.style.setProperty("--mx", px * 100 + "%");
      card.style.setProperty("--my", py * 100 + "%");
      card.style.setProperty("--ry", (px - 0.5) * 7 + "deg");
      card.style.setProperty("--rx", (0.5 - py) * 7 + "deg");
    });
    document.addEventListener("mouseleave", () => {}, true);

    // header scroll + back to top
    const toTop = $("#to-top");
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      $("#nav").classList.toggle("scrolled", y > 24);
      toTop.classList.toggle("show", y > 700);
    }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // ripple nos botões
    document.addEventListener("pointerdown", (e) => {
      const btn = e.target.closest(".btn, .btn-open, .chip");
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const d = Math.max(r.width, r.height) * 2;
      const rip = document.createElement("span");
      rip.className = "ripple";
      rip.style.width = rip.style.height = d + "px";
      rip.style.left = e.clientX - r.left - d / 2 + "px";
      rip.style.top = e.clientY - r.top - d / 2 + "px";
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 650);
    });
  }

  function clearFilters(scroll) {
    state.query = "";
    state.section = "todos";
    state.cat = "todas";
    state.onlyFavs = false;
    $("#search").value = "";
    render();
    if (scroll) $("#ias").scrollIntoView({ behavior: "smooth" });
  }

  /* ---------- reveals ---------- */

  let io;
  function observeReveals() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    }
    $$(".reveal:not(.visible)").forEach((el) => io.observe(el));
  }

  /* ---------- boot ---------- */

  function init() {
    $("#year").textContent = new Date().getFullYear();

    bind();
    render();
    observeReveals();
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
