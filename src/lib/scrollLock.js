/**
 * Holds the page still behind a popup. iPad and iPhone Safari ignore
 * overflow:hidden on <body>, so a swipe would scroll the page instead of the
 * popup and the popup would seem frozen. Pinning the body in place works in
 * every browser; the scroll position is put back on unlock.
 * Returns the unlock function, so it can be an effect's cleanup.
 */
let depth = 0;
let saved = null;

export function lockScroll() {
  if (depth++ === 0) {
    const y = window.scrollY;
    const { style } = document.body;
    saved = { y, css: { position: style.position, top: style.top, left: style.left, right: style.right, width: style.width, overflow: style.overflow } };
    Object.assign(style, { position: 'fixed', top: `-${y}px`, left: '0', right: '0', width: '100%', overflow: 'hidden' });
  }
  let done = false;
  return () => {
    if (done) return;
    done = true;
    if (--depth === 0 && saved) {
      Object.assign(document.body.style, saved.css);
      // 'instant': the stylesheet's smooth scrolling would visibly glide back
      window.scrollTo({ top: saved.y, behavior: 'instant' });
      saved = null;
    }
  };
}
