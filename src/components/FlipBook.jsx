import { useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { PageFlip } from 'page-flip/dist/js/page-flip.module.js';
// StPageFlip's own layout rules for HTML pages (not shipped in its dist build)
import '../styles/stPageFlip.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

/**
 * A PDF shown as a book: pdf.js draws each page to an image and StPageFlip
 * turns them with a page-curl, two pages side by side on wide screens and one
 * on phones. Pages are real <img> elements (StPageFlip's HTML mode), drawn at
 * the size they appear times the screen's pixel density, so text stays crisp
 * on retina laptops and phones. Pages are drawn as the reader nears them (the
 * spread in view and a few either side first, then the rest in the
 * background), so a long catalogue opens quickly. If the PDF can't be read
 * this way, `onFail` hands back to the plain PDF frame.
 */
const MAX_SIDE = 3000; // longest side of a drawn page, in pixels

/** A soft grey page shown until the real one is drawn. */
function blankPage(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.round(w / 4);
  c.height = Math.round(h / 4);
  const g = c.getContext('2d');
  g.fillStyle = '#f1eee8';
  g.fillRect(0, 0, c.width, c.height);
  return c.toDataURL('image/jpeg', 0.6);
}

export default function FlipBook({ src, title, onFail }) {
  const stage = useRef(null);
  const holder = useRef(null);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [onePage, setOnePage] = useState(false);
  const [narrow, setNarrow] = useState(() => window.innerWidth < 700);
  const bookRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let book = null;
    let doc = null;
    const urls = [];
    const made = [];
    let mount = null;
    let pagePx = 1400; // drawn page width, set once the book's size is known
    let ratio = 1.414;
    // wide (landscape) catalogue pages read better one at a time
    let single = false;
    let pending = false;
    let queue = [];

    /** Sizes the book's box so a spread (or one page on phones) fits the stage. */
    const fit = () => {
      const box = stage.current;
      const el = holder.current;
      if (!box || !el) return;
      // the stage's own padding: 12px around, 64px at the foot for the page counter
      const availW = box.clientWidth - 24;
      const availH = box.clientHeight - 76;
      const portrait = single || availW < 640;
      const pages = portrait ? 1 : 2;
      const w = Math.min(availW, (availH / ratio) * pages);
      el.style.width = `${Math.floor(w)}px`;
    };

    /** Puts a finished page into the book, including the copy StPageFlip
     *  makes of a page while it is mid-turn. */
    const show = (i) => {
      mount?.querySelectorAll(`img[data-page="${i}"]`).forEach((img) => { img.src = urls[i]; });
    };

    const draw = async (i) => {
      if (made[i] || cancelled) return;
      made[i] = true;
      const p = await doc.getPage(i + 1);
      const base = p.getViewport({ scale: 1 });
      const scale = Math.min(pagePx / base.width, MAX_SIDE / Math.max(base.width, base.height));
      const viewport = p.getViewport({ scale });
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(viewport.width);
      canvas.height = Math.round(viewport.height);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      await p.render({ canvasContext: ctx, viewport }).promise;
      p.cleanup();
      const blob = await new Promise((r) => canvas.toBlob(r, 'image/jpeg', 0.92));
      if (cancelled) return;
      urls[i] = URL.createObjectURL(blob);
      show(i);
    };

    /** Draws pages one at a time, nearest to the open spread first. */
    const pump = async () => {
      while (!cancelled && queue.length) {
        const i = queue.shift();
        try { await draw(i); } catch { /* a page that fails stays blank */ }
      }
    };
    const prioritise = (at) => {
      const n = urls.length;
      const near = [];
      for (let d = -2; d <= 5; d += 1) if (at + d >= 0 && at + d < n) near.push(at + d);
      const rest = Array.from({ length: n }, (_, i) => i).filter((i) => !near.includes(i));
      const wasIdle = queue.length === 0;
      queue = [...near, ...rest].filter((i) => !made[i]);
      if (wasIdle) pump();
    };

    (async () => {
      try {
        doc = await pdfjs.getDocument({ url: src }).promise;
        if (cancelled) return;
        const first = (await doc.getPage(1)).getViewport({ scale: 1 });
        ratio = first.height / first.width;
        single = ratio < 1;
        setOnePage(single);
        const placeholder = blankPage(400, 400 * ratio);
        for (let i = 0; i < doc.numPages; i += 1) urls.push(placeholder);
        setCount(doc.numPages);

        fit();
        // pages are drawn at their on-screen width × the screen's pixel density
        const shown = holder.current.clientWidth / (single || holder.current.clientWidth < 640 ? 1 : 2);
        pagePx = Math.min(MAX_SIDE, Math.ceil(shown * Math.min(window.devicePixelRatio || 1, 2.5)));
        // StPageFlip takes over (and on destroy removes) the element it gets,
        // so it gets its own child rather than the one React renders
        mount = document.createElement('div');
        holder.current.appendChild(mount);
        const pages = urls.map((u, i) => {
          const el = document.createElement('div');
          el.className = 'flipbook-page';
          const img = document.createElement('img');
          img.dataset.page = String(i);
          img.alt = `${title}, page ${i + 1}`;
          img.draggable = false;
          img.src = u;
          el.appendChild(img);
          mount.appendChild(el);
          return el;
        });
        book = new PageFlip(mount, {
          width: 550,
          height: Math.round(550 * ratio),
          size: 'stretch',
          // StPageFlip shows one page when the box is narrower than 2 × minWidth,
          // so for landscape catalogues minWidth is set just over half the box
          // (also on phones, where two pages side by side would be tiny)
          minWidth: single || holder.current.clientWidth < 640 ? Math.floor(holder.current.clientWidth / 2) + 1 : 160,
          maxWidth: 2400,
          minHeight: 220,
          maxHeight: 2000,
          showCover: true,
          maxShadowOpacity: 0.45,
          flippingTime: 800,
          mobileScrollSupport: false,
        });
        bookRef.current = book;
        // it also writes minWidth onto the element as a CSS minimum; drop that
        // so the book can still shrink if the window does
        mount.style.minWidth = '0px';
        book.on('flip', (e) => { setPage(e.data); prioritise(e.data); });
        book.loadFromHTML(pages);
        setLoading(false);
        prioritise(0);
      } catch {
        if (!cancelled) onFail?.();
      }
    })();

    const onResize = () => { fit(); setNarrow(window.innerWidth < 700); };
    window.addEventListener('resize', onResize);
    const onKey = (e) => {
      if (e.key === 'ArrowRight') bookRef.current?.flipNext();
      if (e.key === 'ArrowLeft') bookRef.current?.flipPrev();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      cancelled = true;
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKey);
      try { book?.destroy(); } catch { /* already gone */ }
      bookRef.current = null;
      doc?.destroy();
      urls.forEach((u) => u.startsWith('blob:') && URL.revokeObjectURL(u));
    };
  }, [src, onFail]);

  const last = Math.max(0, count - 1);
  // a two-page spread reads "2–3 / 34"; the cover, last page and phones show one number
  const spread = !onePage && !narrow && page > 0 && page < last;
  const label = spread ? `${page + 1}–${Math.min(page + 2, count)}` : `${page + 1}`;
  return (
    <div className="flipbook" ref={stage}>
      {/* StPageFlip replaces this element's content, so React leaves it empty */}
      <div className="flipbook-book" ref={holder} aria-label={`${title}, page ${page + 1} of ${count || '…'}`} />
      {loading && <div className="flipbook-loading" role="status">Opening catalogue…</div>}
      {!loading && (
        <div className="flipbook-nav">
          <button type="button" aria-label="Previous page" disabled={page === 0} onClick={() => bookRef.current?.flipPrev()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <span className="flipbook-count">{label} / {count}</span>
          <button type="button" aria-label="Next page" disabled={page >= last} onClick={() => bookRef.current?.flipNext()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
