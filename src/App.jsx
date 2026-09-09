import About from './pages/About.jsx';
import Catalog from './pages/Catalog.jsx';
import Home from './pages/Home.jsx';
import Home2 from './pages/Home2.jsx';
import { usePath } from './router.jsx';

export default function App() {
  const path = usePath();
  if (path === '/home-old') return <Home />;
  if (path === '/about') return <About />;
  if (path.startsWith('/catalogs/')) return <Catalog slug={path.slice('/catalogs/'.length)} />;
  return <Home2 />;
}
