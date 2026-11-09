
(() => {
window.MLready = true;
const d = document, root = d.documentElement, $ = (s, c = d) => c.querySelector(s), $$ = (s, c = d) => [...c.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(pointer:fine)").matches;
if (location.protocol === "file:") $$("a[href]").forEach(a => {
const h = a.getAttribute("href");
if (/^(?!https?:|mailto:|tel:|#)[^#?]*\/(#.*)?$/.test(h) || h === "./" || h === "../") a.setAttribute("href", h.replace(/\/(#.*)?$/, "/index.html$1"));
});
const header = $(".header"), progress = $(".progress"), top = $(".hero, .phero");
let lastY = 0, ticking = false;
const onScroll = () => {
const y = scrollY, max = root.scrollHeight - innerHeight;
progress.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
header.classList.toggle("is-solid", y > (top ? top.offsetHeight - 90 : 40));
header.classList.toggle("is-hidden", y > 700 && y > lastY + 4 && !root.classList.contains("menu-open"));
if (y < lastY - 4) header.classList.remove("is-hidden");
lastY = y; pin(); ticking = false;
};
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
const burger = $(".burger"), mmenu = $(".mmenu");
const setMenu = open => {
root.classList.toggle("menu-open", open);
burger.setAttribute("aria-expanded", open);
mmenu.inert = !open;
d.body.style.overflow = open ? "hidden" : "";
if (open) setTimeout(() => $("a, summary", mmenu).focus(), 300);
};
mmenu.inert = true;
burger.addEventListener("click", () => setMenu(!root.classList.contains("menu-open")));
mmenu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
addEventListener("keydown", e => {
if (e.key !== "Escape") return;
if (root.classList.contains("menu-open")) { setMenu(false); burger.focus(); }
const m = d.activeElement && d.activeElement.closest(".nav__item"); if (m) d.activeElement.blur();
});
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
$$(".rv, .rv-img").forEach(el => io.observe(el));
const cio = new IntersectionObserver(es => es.forEach(e => {
if (!e.isIntersecting) return; cio.unobserve(e.target);
const el = e.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "", t0 = performance.now();
if (reduce) return;
const step = t => { const k = Math.min(1, (t - t0) / 1600), v = end * (1 - Math.pow(1 - k, 3)); el.textContent = pre + v.toFixed(dec).replace(".", ",") + suf; if (k < 1) requestAnimationFrame(step); };
requestAnimationFrame(step);
}), { threshold: .6 });
$$("[data-count]").forEach(el => cio.observe(el));
const rw = $("[data-rot]");
if (rw && !reduce) {
const list = [rw.textContent, ...rw.dataset.rot.split("|")];
const box = d.createElement("span"); box.className = "rot"; box.setAttribute("aria-hidden", "true");
box.innerHTML = list.map((w, i) => `<span${i ? "" : ' class="on"'}>${w}</span>`).join("");
const sr = d.createElement("span"); sr.className = "sr"; sr.textContent = list[0];
rw.textContent = ""; rw.append(sr, box);
const items = [...box.children]; let i = 0;
setInterval(() => {
if (d.hidden) return;
const cur = items[i]; i = (i + 1) % items.length; const nx = items[i];
cur.classList.add("out"); cur.classList.remove("on"); nx.classList.remove("out"); nx.classList.add("on");
setTimeout(() => cur.classList.remove("out"), 900);
}, 2800);
}
const tabs = $$(".tab"), cards = $$(".pcard[data-cat], .pc[data-cat]");
const select = (cat, push) => {
if (!tabs.length) return;
if (!tabs.some(t => t.dataset.cat === cat)) cat = "all";
tabs.forEach(t => { const on = t.dataset.cat === cat; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; });
cards.forEach(c => { c.hidden = cat !== "all" && c.dataset.cat !== cat; });
if (push) history.replaceState(null, "", cat === "all" ? location.pathname : "#" + cat);
};
tabs.forEach((t, i) => {
t.addEventListener("click", () => select(t.dataset.cat, true));
t.addEventListener("keydown", e => {
const k = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!k) return;
const n = tabs[(i + k + tabs.length) % tabs.length]; n.focus(); select(n.dataset.cat, true);
});
});
if (tabs.length && location.hash) select(decodeURIComponent(location.hash.slice(1)));
if (fine) d.addEventListener("pointermove", e => {
const c = e.target.closest && e.target.closest(".pcard"); if (!c) return;
const r = c.getBoundingClientRect();
c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px");
}, { passive: true });
const hs = $(".hs"), track = hs && $(".hs__track", hs), bar = hs && $(".hs__bar", hs);
const mq = matchMedia("(min-width: 900px)");
let dist = 0;
const measure = () => {
if (!hs) return;
const on = mq.matches && !reduce;
hs.classList.toggle("is-pinned", on);
dist = on ? Math.max(0, track.scrollWidth - innerWidth + 80) : 0;
hs.style.setProperty("--dist", dist + "px");
pin();
};
function pin() {
if (!hs) return;
if (!dist) { bar.style.setProperty("--hp", track.scrollLeft / Math.max(1, track.scrollWidth - track.clientWidth)); return; }
const k = Math.min(1, Math.max(0, -hs.getBoundingClientRect().top / dist));
track.style.setProperty("--x", (k * dist).toFixed(1)); bar.style.setProperty("--hp", k.toFixed(4));
}
if (track) track.addEventListener("scroll", pin, { passive: true });
addEventListener("resize", measure);
addEventListener("load", measure);
const pl = $(".planner");
if (pl) {
const out = $(".planner__out", pl), boxes = $$("input[type=checkbox]", pl), T = pl.dataset;
const range = s => { const n = (s.match(/\d+/g) || []).map(Number); return [n[0] || 0, n[n.length - 1] || 0]; };
const upd = () => {
const sel = boxes.filter(b => b.checked);
const stay = sel.reduce((a, b) => { const r = range(b.dataset.stay); return [Math.max(a[0], r[0]), Math.max(a[1], r[1])]; }, [0, 0]);
const rec = sel.reduce((a, b) => { const r = range(b.dataset.rec); return [Math.max(a[0], r[0]), Math.max(a[1], r[1])]; }, [0, 0]);
const fmt = (r, u) => r[1] ? (r[0] === r[1] ? r[0] : r[0] + "–" + r[1]) + " " + u : "—";
$("[data-o=stay]", out).textContent = fmt(stay, T.days);
$("[data-o=rec]", out).textContent = fmt(rec, T.weeks);
$("[data-o=n]", out).textContent = sel.length || "—";
$(".planner__sel", out).textContent = sel.length ? sel.map(b => b.value).join(" · ") : T.empty;
const msg = sel.length ? T.msg.replace("{p}", sel.map(b => b.value).join(", ")).replace("{s}", fmt(stay, T.days)) : T.base;
$(".btn", out).href = `https://wa.me/${T.wa}?text=${encodeURIComponent(msg)}`;
$(".btn", out).classList.toggle("btn--gold", sel.length > 0);
};
boxes.forEach(b => b.addEventListener("change", upd)); upd();
}
const lb = $(".lightbox");
if (lb && lb.showModal) {
const items = $$(".gallery button"), img = $("img", lb), cap = $("[data-cap]", lb), lnk = $("[data-link]", lb); let cur = 0;
const show = i => { cur = (i + items.length) % items.length; const b = items[cur]; img.src = b.dataset.full; img.alt = $("img", b).alt; cap.textContent = `${cur + 1} / ${items.length} · ${b.dataset.label}`; lnk.href = b.dataset.post; };
items.forEach((b, i) => b.addEventListener("click", () => { show(i); lb.showModal(); }));
$("[data-prev]", lb).addEventListener("click", () => show(cur - 1));
$("[data-next]", lb).addEventListener("click", () => show(cur + 1));
$("[data-close]", lb).addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", e => { if (e.key === "ArrowRight") show(cur + 1); if (e.key === "ArrowLeft") show(cur - 1); });
}
const form = $("#contactForm");
if (form) {
const pre = new URLSearchParams(location.search).get("p");
if (pre) { const o = [...form.procedure.options].find(o => o.value === pre); if (o) o.selected = true; }
form.addEventListener("submit", e => {
e.preventDefault();
const f = form.elements, err = $(".form__err", form); let bad = null;
["name", "country", "procedure"].forEach(n => { const el = f[n], ok = el.value.trim() !== ""; el.setAttribute("aria-invalid", !ok); if (!ok && !bad) bad = el; });
if (bad) { err.textContent = form.dataset.err; bad.focus(); return; }
err.textContent = "";
const msg = form.dataset.tpl.replace("{name}", f.name.value.trim()).replace("{country}", f.country.value).replace("{procedure}", f.procedure.value).replace("{date}", f.date.value || "—").replace("{message}", f.message.value.trim());
open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});
}
const mapBtn = $("[data-map]");
if (mapBtn) mapBtn.addEventListener("click", () => {
const f = d.createElement("iframe");
f.src = mapBtn.dataset.map; f.title = mapBtn.dataset.title; f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade"; f.allowFullscreen = true;
mapBtn.replaceWith(f);
});
const pt = $(".portrait");
if (pt && fine && !reduce) {
pt.addEventListener("pointermove", e => { const r = pt.getBoundingClientRect(); pt.style.transform = `perspective(1200px) rotateY(${((e.clientX - r.left) / r.width - .5) * 6}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 6}deg)`; });
pt.addEventListener("pointerleave", () => pt.style.transform = "");
pt.style.transition = "transform .8s cubic-bezier(.22,.7,.2,1)";
}
measure(); onScroll();
})();
