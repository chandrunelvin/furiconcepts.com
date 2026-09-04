import Home from './pages/Home.jsx';
import Home2 from './pages/Home2.jsx';
import { usePath } from './router.jsx';

export default function App() {
  const path = usePath();
  return path === '/home2' ? <Home2 /> : <Home />;
}
