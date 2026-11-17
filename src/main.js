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
  if (lenis) lenis.scrollTo(target, { duration: 1.4, offset: target === 0 ? 0 : -$('[data-nav]').offsetHeight });
  else if (target === 0) window.scrollTo(0, 0); else target.scrollIntoView();
}));

/* fixed banner: show its bottom line once the page has scrolled */
const nav = $('[data-nav]');
const markNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
addEventListener('scroll', markNav, { passive: true });
markNav();

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
    .from(nav, { opacity: 0, duration: 0.8 }, 1.0);

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
  gsap.from('[data-slot="egg-peek"] svg', { y: 40, opacity: 0, rotate: -8, duration: 1, ease: 'back.out(2)', scrollTrigger: { trigger: '.peek', start: 'top 95%', once: true } });
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

/* lightbox: the clicked video grows out of its tile, the page blurs behind it */
const lb = $('[data-lightbox]');
const lbVideo = $('.lightbox-video', lb);
const lbStage = $('.lightbox-stage', lb);
let openTile = null;

// animate from the tile's box to the video's final box (FLIP)
const flipFrom = tile => {
  const from = tile.getBoundingClientRect();
  const to = lbVideo.getBoundingClientRect();
  return {
    x: from.left + from.width / 2 - (to.left + to.width / 2),
    y: from.top + from.height / 2 - (to.top + to.height / 2),
    scale: Math.min(from.width / to.width, from.height / to.height),
  };
};

const openLightbox = tile => {
  const src = $('video', tile);
  openTile = tile;
  $('[data-lb-name]', lb).textContent = tile.dataset.name;
  $('[data-lb-kind]', lb).textContent = tile.dataset.kind;
  lbVideo.src = src.currentSrc || src.src;
  lbVideo.poster = src.poster;
  lbVideo.setAttribute('aria-label', tile.dataset.name);
  lbVideo.muted = false;
  lb.hidden = false;
  document.body.classList.add('lb-open');
  lenis?.stop();
  document.documentElement.style.overflow = 'hidden';
  lbVideo.currentTime = 0;
  lbVideo.play().catch(() => { lbVideo.muted = true; lbVideo.play().catch(() => {}); });
  $('.lightbox-close', lb).focus({ preventScroll: true });

  const go = () => {
    // fill the screen: as big as fits in 92% of the width and 80% of the height
    const ar = lbVideo.videoWidth / lbVideo.videoHeight || 16 / 9;
    lbVideo.style.width = `${Math.min(innerWidth * 0.92, 1400, innerHeight * 0.8 * ar)}px`;
    if (reduce) return;
    gsap.fromTo('.lightbox-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
    gsap.fromTo('.lightbox-close, .lightbox-caption', { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.25 });
    gsap.fromTo(lbVideo, flipFrom(tile), { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'expo.out' });
  };
  // the final size depends on the video's dimensions, so wait until they are known
  if (lbVideo.readyState >= 1) go(); else lbVideo.addEventListener('loadedmetadata', go, { once: true });
};

const closeLightbox = () => {
  if (lb.hidden) return;
  const tile = openTile;
  const done = () => {
    lb.hidden = true;
    document.body.classList.remove('lb-open');
    lbVideo.pause();
    lbVideo.removeAttribute('src'); lbVideo.load();
    gsap.set([lbVideo, '.lightbox-backdrop', '.lightbox-close', '.lightbox-caption'], { clearProps: 'all' });
    document.documentElement.style.overflow = '';
    lenis?.start();
    tile?.focus({ preventScroll: true });
  };
  if (reduce || !tile) return done();
  document.body.classList.remove('lb-open');
  gsap.to('.lightbox-close, .lightbox-caption', { opacity: 0, duration: 0.2 });
  gsap.to('.lightbox-backdrop', { opacity: 0, duration: 0.45, delay: 0.1 });
  gsap.to(lbVideo, { ...flipFrom(tile), duration: 0.5, ease: 'expo.inOut', onComplete: done });
};

/* click hint: play badges, a ripple when the mosaic appears, and a "Play" cursor on desktop */
const playIcon = '<svg viewBox="0 0 12 14" aria-hidden="true"><path d="M0 0v14l12-7z" /></svg>';
$$('[data-tile]').forEach((tile, i) => {
  tile.style.setProperty('--i', i);
  tile.insertAdjacentHTML('beforeend', `<span class="play-badge" aria-hidden="true">${playIcon}</span>`);
});
const mosaic = $('.mosaic');
new IntersectionObserver((entries, obs) => {
  if (!entries[0].isIntersecting) return;
  mosaic.classList.add('is-hinting');
  obs.disconnect();
}, { threshold: 0.4 }).observe(mosaic);

if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.documentElement.classList.add('has-cursor');
  const bubble = document.createElement('div');
  bubble.className = 'cursor-play';
  bubble.setAttribute('aria-hidden', 'true');
  bubble.innerHTML = `<div class="cursor-play-dot">${playIcon}<span>Play</span></div>`;
  document.body.appendChild(bubble);
  const bx = gsap.quickTo(bubble, 'x', { duration: reduce ? 0 : 0.35, ease: 'power3.out' });
  const by = gsap.quickTo(bubble, 'y', { duration: reduce ? 0 : 0.35, ease: 'power3.out' });
  addEventListener('pointermove', e => { bx(e.clientX); by(e.clientY); });
  $$('[data-tile]').forEach(tile => {
    tile.addEventListener('pointerenter', e => { gsap.set(bubble, { x: e.clientX, y: e.clientY }); bubble.classList.add('is-on'); });
    tile.addEventListener('pointerleave', () => bubble.classList.remove('is-on'));
    tile.addEventListener('click', () => bubble.classList.remove('is-on'));
  });
}

$$('[data-tile]').forEach(tile => {
  tile.addEventListener('click', () => openLightbox(tile));
  tile.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(tile); } });
});
$$('[data-close]', lb).forEach(el => el.addEventListener('click', closeLightbox));
lbVideo.addEventListener('click', () => { if (lbVideo.paused) lbVideo.play(); else lbVideo.pause(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'Tab') { e.preventDefault(); $('.lightbox-close', lb).focus(); }
});

/* copy email */
const copyBtn = $('[data-copy]');
copyBtn.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($('[data-email]').textContent.trim()); copyBtn.textContent = 'Copied'; }
  catch { copyBtn.textContent = 'Select it above'; }
  setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
});

addEventListener('load', () => ScrollTrigger.refresh());
