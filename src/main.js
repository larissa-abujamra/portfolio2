import '@fontsource/funnel-display/600.css';
import '@fontsource/funnel-sans/400.css';
import 'lenis/dist/lenis.css';
import './style.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import eggSvg from './assets/egg.svg?raw';
import wordmarkSvg from './assets/wordmark.svg?raw';

gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* brand SVGs */
$$('[data-slot="egg"], [data-slot="egg-peek"]').forEach(el => { el.innerHTML = eggSvg; });
$$('[data-slot="wordmark"]').forEach(el => { el.innerHTML = wordmarkSvg; });
$$('[data-slot="egg-peek"] svg, [data-slot="wordmark"] svg').forEach(svg => { svg.setAttribute('aria-hidden', 'true'); svg.removeAttribute('role'); });

/* split hero title into words */
const title = $('[data-split]');
title.innerHTML = title.textContent.split(' ').map(w => `<span class="w"><span>${w}</span></span>`).join(' ');

/* smooth scroll */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  const target = id === '#top' ? 0 : $(id);
  if (target === null) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo(target, { duration: 1.4 });
  else if (target === 0) window.scrollTo(0, 0); else target.scrollIntoView();
}));

/* nav hides on the way down */
const nav = $('[data-nav]');
let lastY = 0;
addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 200 && y > lastY + 4) nav.classList.add('is-hidden');
  else if (y < lastY - 4 || y < 200) nav.classList.remove('is-hidden');
  lastY = y;
}, { passive: true });

/* the egg */
const stage = $('[data-egg]');
const egg = $('svg', stage);
const body = $('.egg-body', egg), yolk = $('.egg-yolk', egg), smile = $('.egg-smile', egg);

if (!reduce) {
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from(stage, { yPercent: -60, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0.1)
    .to(body, { scaleY: 0.86, scaleX: 1.08, duration: 0.12 }, 0.6)
    .to(body, { scaleY: 1, scaleX: 1, duration: 0.9, ease: 'elastic.out(1.1, 0.35)' }, 0.72)
    .from(yolk, { y: -60, duration: 1, ease: 'elastic.out(1, 0.4)' }, 0.62)
    .from('.hero-title .w > span', { yPercent: 110, duration: 0.8, stagger: 0.06 }, 0.8)
    .from(nav, { opacity: 0, duration: 0.8 }, 1.1);

  gsap.to(body, { scaleY: 1.025, duration: 2.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });

  // the yolk leans toward the cursor
  const yx = gsap.quickTo(yolk, 'x', { duration: 0.8, ease: 'power3.out' });
  const yy = gsap.quickTo(yolk, 'y', { duration: 0.8, ease: 'power3.out' });
  addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    yx(gsap.utils.clamp(-60, 60, (e.clientX - (r.left + r.width / 2)) / innerWidth * 160));
    yy(gsap.utils.clamp(-40, 40, (e.clientY - (r.top + r.height / 2)) / innerHeight * 120));
  });

  stage.addEventListener('click', () => {
    gsap.timeline()
      .to(body, { scaleY: 0.9, scaleX: 1.06, duration: 0.1 })
      .to(body, { scaleY: 1, scaleX: 1, duration: 0.8, ease: 'elastic.out(1.2, 0.3)' })
      .to(smile, { scale: 1.35, duration: 0.15, yoyo: true, repeat: 1 }, 0);
    gsap.to(yolk, { keyframes: [{ rotate: -10 }, { rotate: 8 }, { rotate: -4 }, { rotate: 0 }], duration: 0.7 });
  });

  // reveals
  $$('[data-reveal]').forEach(el => {
    gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });
  // the egg in the footer pops up as you reach it
  gsap.from('[data-slot="egg-peek"] svg', { yPercent: 70, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top 60%', end: 'bottom bottom', scrub: true } });
}

/* browser windows scroll through the page on hover */
const fitScroll = img => {
  const dist = Math.max(0, img.offsetHeight - img.parentElement.offsetHeight);
  img.style.setProperty('--scroll-to', `-${dist}px`);
  img.style.setProperty('--scroll-time', `${Math.max(2.5, dist / 300).toFixed(1)}s`);
};
$$('.view img').forEach(img => { if (img.complete) fitScroll(img); else img.addEventListener('load', () => fitScroll(img)); });
addEventListener('resize', () => $$('.view img').forEach(fitScroll));
if (matchMedia('(hover: none)').matches && !reduce) {
  const auto = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('is-auto', e.isIntersecting)), { threshold: 0.6 });
  $$('.site').forEach(s => auto.observe(s));
}

/* videos play while on screen */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause();
}), { threshold: 0.35 });
if (!reduce) $$('[data-video]').forEach(v => io.observe(v));

const soundBtn = $('[data-sound]'), soundVideo = $('[data-has-sound]');
$('[data-sound-toggle]').addEventListener('click', () => {
  soundVideo.muted = !soundVideo.muted;
  soundBtn.setAttribute('aria-pressed', String(!soundVideo.muted));
  soundVideo.play().catch(() => {});
});

/* copy email */
const copyBtn = $('[data-copy]');
copyBtn.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($('[data-email]').textContent.trim()); copyBtn.textContent = 'Copied'; }
  catch { copyBtn.textContent = 'Select it above'; }
  setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
});

addEventListener('load', () => ScrollTrigger.refresh());
