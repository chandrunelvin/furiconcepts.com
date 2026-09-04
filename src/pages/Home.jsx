import { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import Drawer from '../components/Drawer.jsx';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import Brands from '../components/Brands.jsx';
import Story from '../components/Story.jsx';
import Spaces from '../components/Spaces.jsx';
import Journal from '../components/Journal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  return (
    <div className="site">
      <div className="app">
        <Sidebar active={active} onNavigate={setActive} />
        <main className="content">
          <div className="content-inner">
            <Topbar onOpenMenu={() => setMenuOpen(true)} />
            <Hero />
            <Categories />
            <Story />
            <Brands />
            <Spaces />
            <Journal />
            <CtaBand />
            <Footer />
          </div>
        </main>
        <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </div>
  );
}
