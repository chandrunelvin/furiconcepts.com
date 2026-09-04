import { useEffect } from 'react';
import { NAV_LINKS } from '../data/content.js';
import { Logo } from './Common.jsx';
import { Close } from './Icons.jsx';

export default function Drawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <>
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <Logo tagline={false} />
          <button className="circle-btn" aria-label="Close menu" onClick={onClose}><Close /></button>
        </div>
        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={onClose}>{link.label}</a>
          ))}
        </nav>
        <a href="#contact" className="pill pill-dark" style={{ width: 'fit-content' }} onClick={onClose}>
          Get in touch
        </a>
      </div>
    </>
  );
}
