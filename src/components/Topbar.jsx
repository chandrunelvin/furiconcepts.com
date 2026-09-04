import { Search, Heart, Cart, Menu } from './Icons.jsx';

export default function Topbar({ onOpenMenu }) {
  return (
    <div className="topbar">
      <button className="circle-btn" aria-label="Search"><Search /></button>
      <button className="circle-btn" aria-label="Wishlist"><Heart /></button>
      <button className="circle-btn" aria-label="Cart"><Cart /></button>
      <a href="#contact" className="pill pill-dark">Get in touch</a>
      <button className="menu-btn" aria-label="Menu" onClick={onOpenMenu}><Menu /></button>
    </div>
  );
}
