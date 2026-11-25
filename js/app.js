/* ============================================================
   Unity Store — lógica do catálogo
   ============================================================ */
(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const STORE_FAVS = "unity-store:favs";

  /* ---------- ícones SVG (stroke, currentColor) ---------- */

  const I = (d, extra = "") =>
    `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;

  const ICONS = {
    spark:    I('<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/>'),
    feather:  I('<path d="M20.2 3.8a5.5 5.5 0 0 0-7.8 0L4 12.2V20h7.8l8.4-8.4a5.5 5.5 0 0 0 0-7.8Z"/><path d="M16 8 4 20"/>'),
    spiral:   I('<path d="M12 12a2.6 2.6 0 1 1 2.6 2.6A5 5 0 1 1 9.4 9.4a7.4 7.4 0 1 1 10.2 10.2"/>'),
    heart:    I('<path d="M19 5.5a4.6 4.6 0 0 0-7 0 4.6 4.6 0 0 0-7 3.2c0 4.6 7 10.3 7 10.3s7-5.7 7-10.3a4.6 4.6 0 0 0 0-3.2Z"/>'),
    hand:     I('<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0V12"/><path d="M14 12v-1.5a1.5 1.5 0 0 1 3 0V13"/><path d="M17 12.6a1.5 1.5 0 0 1 3 1v2.4a6.5 6.5 0 0 1-6.5 6.5h-1.6a6 6 0 0 1-4.6-2.2L4.5 16a1.6 1.6 0 0 1 2.4-2.1L8 15"/>'),
    planet:   I('<circle cx="12" cy="12" r="5.5"/><path d="M8.5 4.9c-3 .8-5.5 2-5.5 2S2.6 8.6 5.9 9.7M15.5 19.1c3-.8 5.5-2 5.5-2s.4-1.7-2.9-2.8M4 16.5C1.9 14.9 1.2 13.4 2 12.2c.8-1.4 3.5-1.9 7-1.4M20 7.5c2.1 1.6 2.8 3.1 2 4.3-.8 1.4-3.5 1.9-7 1.4"/>'),
    chat:     I('<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.2-.4-4.5-1.2L3 20l1.2-5A8.5 8.5 0 1 1 21 11.5Z"/>'),
    code:     I('<path d="m8 8-5 4 5 4M16 8l5 4-5 4M13.5 5l-3 14"/>'),
    image:    I('<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="m21 15-3.8-3.8a1.6 1.6 0 0 0-2.3 0L7 19"/>'),
    video:    I('<rect x="2.5" y="5" width="14" height="14" rx="3"/><path d="m16.5 10.5 5-3v9l-5-3"/>'),
    audio:    I('<path d="M9 18V6l10-2v11.5"/><circle cx="6.5" cy="18.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>'),
    agent:    I('<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V5M9.5 5h5"/><circle cx="9.5" cy="13" r=".9" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r=".9" fill="currentColor" stroke="none"/><path d="M9.5 16.5h5"/>'),
    platform: I('<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>'),
    arrow:    I('<path d="M7 17 17 7M9 7h8v8"/>'),
    up:       I('<path d="m6 14 6-6 6 6"/>'),
    search:   I('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    star:     I('<path d="m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6-5.5-2.9-5.5 2.9 1-6L3 9.6l6.3-.9L12 3Z"/>'),
    coin:     I('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.3 9.6c0-1 1.2-1.8 2.7-1.8s2.7.8 2.7 1.8c0 2.6-5.4 1.5-5.4 4.3 0 1.1 1.2 1.9 2.7 1.9s2.7-.8 2.7-1.9"/>')
  };

  const state = {
    query: "",
    section: "todos",
    cat: "todas",
    favs: new Set(JSON.parse(localStorage.getItem(STORE_FAVS) || "[]")),
    open: new Set()
  };

  /* ---------- utils ---------- */

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const norm = (s) =>
    String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const catById  = (id) => CATEGORIES.find((c) => c.id === id);
  const sectById = (id) => SECTIONS.find((s) => s.id === id);

  function highlight(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    const idx = norm(text).indexOf(norm(query));
    if (idx === -1) return safe;
    const end = idx + query.length;
    return esc(text.slice(0, idx)) + "<mark>" + esc(text.slice(idx, end)) + "</mark>" + esc(text.slice(end));
  }

  /* ---------- render dos filtros ---------- */

  function chipSectionHTML(s, count) {
    const active = state.section === s.id ? " active" : "";
    return `<button class="chip${active}" data-section="${s.id}" type="button">
      <span class="chip-ico">${ICONS[s.icon]}</span> ${esc(s.name)}
      <span class="chip-count">${count}</span>
    </button>`;
  }

  function chipCatHTML(c, count) {
    const active = state.cat === c.id ? " active" : "";
    return `<button class="chip chip-sm${active}" data-cat="${c.id}" type="button">
      <span class="chip-ico">${ICONS[c.icon]}</span> ${esc(c.name)}
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
         <span class="chip-ico">${ICONS.spark}</span> Todos <span class="chip-count">${data.length}</span>
       </button>` +
      SECTIONS.map((s) => chipSectionHTML(s, countBySection[s.id])).join("");

    const countByCat = { todas: data.length };
    CATEGORIES.forEach((c) => {
      countByCat[c.id] = data.filter((a) => a.cat === c.id).length;
    });

    $("#chips-categories").innerHTML =
      `<button class="chip chip-sm${state.cat === "todas" ? " active" : ""}" data-cat="todas" type="button">
         <span class="chip-ico">${ICONS.platform}</span> Todas as categorias <span class="chip-count">${data.length}</span>
       </button>` +
      CATEGORIES.map((c) => chipCatHTML(c, countByCat[c.id])).join("");
  }

  /* ---------- render do catálogo ---------- */

  function cardHTML(a) {
    const sect   = sectById(a.section);
    const cat    = catById(a.cat);
    const fav    = state.favs.has(a.name);
    const open   = state.open.has(a.name);
    const letter = esc(a.name.trim().charAt(0).toUpperCase());
    const logo   = a.logo
      ? `<img class="card-logo" src="assets/logos-png/${esc(a.logo)}.png" alt="Logo ${esc(a.name)}" loading="lazy"
              onerror="this.outerHTML='${letter}'" />`
      : letter;

    return `
    <article class="card reveal${open ? " open" : ""}" data-name="${esc(a.name)}" style="--d:${Math.min(50, a._i * 20)}ms">
      <button class="fav-btn${fav ? " is-fav" : ""}" data-fav="${esc(a.name)}" type="button"
              aria-label="${fav ? "Remover dos" : "Adicionar aos"} favoritos" title="Favoritar">
        ${ICONS.star}
      </button>

      <div class="card-head" data-toggle="${esc(a.name)}" role="button" tabindex="0"
           aria-expanded="${open}" title="${open ? "Fechar" : "Ver"} créditos e preços">
        <span class="card-logo-wrap" aria-hidden="true">${logo}</span>
        <span class="card-id">
          <h3 class="card-name">${highlight(a.name, state.query)}<span class="card-suffix">: Comprar Créditos</span></h3>
          <span class="card-meta"><span class="card-section">${esc(sect.name)}</span> · <span class="card-cat">${ICONS[cat.icon]} ${esc(cat.name)}</span></span>
        </span>
        <span class="chev" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </div>

      <p class="card-desc">${highlight(a.desc, state.query)}</p>

      <div class="card-body">
        <div class="card-body-inner">
          <ul class="plans">
            ${(a.plans || []).map((pl) => `
            <li class="plan">
              <span class="plan-ico">${ICONS.coin}</span>
              <span class="plan-n">${esc(pl.n)}</span>
              <span class="plan-c">${esc(pl.c)}</span>
              <span class="plan-p">${esc(pl.p)}</span>
            </li>`).join("")}
          </ul>
          <div class="card-foot">
            <a class="btn-open" href="${esc(a.buy || a.url)}" target="_blank" rel="noopener noreferrer">
              Comprar créditos <span class="btn-ico">${ICONS.arrow}</span>
            </a>
            <a class="btn-site" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">
              Abrir IA <span class="btn-ico">${ICONS.arrow}</span>
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
        <span class="section-icon" aria-hidden="true">${ICONS[s.icon]}</span>
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

    if (state.section !== "todos") {
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
          <span class="empty-ico">${ICONS.search}</span>
          <h2>Nenhuma IA encontrada${state.query ? ` para <em>“${esc(state.query)}”</em>` : ""}</h2>
          <p>Tente outro nome, categoria ou limpe os filtros.</p>
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
    const input = $("#search");
    let deb;
    input.addEventListener("input", () => {
      clearTimeout(deb);
      deb = setTimeout(() => {
        state.query = input.value;
        render();
      }, 120);
    });

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

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
      }
      if (e.key === "Escape" && document.activeElement === input) {
        input.value = "";
        state.query = "";
        render();
        input.blur();
      }
      if ((e.key === "Enter" || e.key === " ") && document.activeElement?.hasAttribute?.("data-toggle")) {
        e.preventDefault();
        document.activeElement.click();
      }
    });

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
        if (was) { state.favs.delete(name); toast("Removido dos favoritos: " + name); }
        else { state.favs.add(name); toast("Favoritado: " + name); }
        localStorage.setItem(STORE_FAVS, JSON.stringify([...state.favs]));
        render();
        return;
      }

      const toggle = e.target.closest("[data-toggle]");
      if (toggle) {
        const name = toggle.dataset.toggle;
        if (state.open.has(name)) state.open.delete(name);
        else state.open.add(name);
        render();
        return;
      }

      if (e.target.closest("#btn-clear-empty")) clearFilters(true);
    });

    $("#btn-clear").addEventListener("click", () => clearFilters(true));

    const toTop = $("#to-top");
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      $("#nav").classList.toggle("scrolled", y > 24);
      toTop.classList.toggle("show", y > 700);
    }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function clearFilters(scroll) {
    state.query = "";
    state.section = "todos";
    state.cat = "todas";
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
      }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });
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
