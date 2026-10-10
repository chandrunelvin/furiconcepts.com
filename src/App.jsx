import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Brand from './pages/Brand.jsx';
import Catalog from './pages/Catalog.jsx';
import Category from './pages/Category.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Home2 from './pages/Home2.jsx';
import ProfileLibrary from './pages/ProfileLibrary.jsx';
import Projects from './pages/Projects.jsx';
import { getArticleByPath } from './data/blog.js';
import { getCategoryByPath } from './data/categories.js';
import { usePath } from './router.jsx';

export default function App() {
  const path = usePath();
  if (path === '/home-old') return <Home />;
  if (path === '/about') return <About />;
  if (path === '/contact') return <Contact />;
  if (path === '/download-profiles' || path.startsWith('/download-profiles/')) {
    const [brand, collection] = path.slice('/download-profiles/'.length).split('/');
    return <ProfileLibrary key={path} brand={brand || undefined} collection={collection} />;
  }
  if (path === '/projects') return <Projects key={path} />;
  if (path.startsWith('/projects/')) return <Projects key={path} slug={path.slice('/projects/'.length)} />;
  // the blog keeps the old site's URLs: /blogs.php and /<article>.php
  if (path === '/blogs.php' || path === '/blog') return <Blog key={window.location.search} />;
  if (path.endsWith('.php')) {
    const category = getCategoryByPath(path);
    if (category) return <Category key={path} category={category} />;
    const article = getArticleByPath(decodeURI(path));
    if (article) return <BlogPost key={path} article={article} />;
  }
  if (path.startsWith('/brands/')) return <Brand key={path} slug={path.slice('/brands/'.length)} />;
  if (path.startsWith('/catalogs/')) return <Catalog key={path} slug={path.slice('/catalogs/'.length)} />;
  return <Home2 />;
}
