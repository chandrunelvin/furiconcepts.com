import { useEffect } from 'react';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Brand from './pages/Brand.jsx';
import Career from './pages/Career.jsx';
import Catalog from './pages/Catalog.jsx';
import Category from './pages/Category.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Home2 from './pages/Home2.jsx';
import Newsletter from './pages/Newsletter.jsx';
import ProfileLibrary from './pages/ProfileLibrary.jsx';
import Projects from './pages/Projects.jsx';
import { getArticleByPath } from './data/blog.js';
import { getCategoryByPath } from './data/categories.js';
import { applySeo, loadBlogContent } from './lib/head.js';
import { usePath } from './router.jsx';

/**
 * index.html's Tag Manager and Meta Pixel snippets count the page the visitor
 * lands on; pages reached through in-site links never reload, so each of
 * those is reported here, once its title is in place.
 */
let lastTracked = window.location.pathname.replace(/\/+$/, '') || '/';
function trackPageView(path) {
  if (path === lastTracked) return;
  lastTracked = path;
  window.dataLayer?.push({ event: 'page_view', page_path: path, page_title: document.title });
  window.fbq?.('track', 'PageView');
}

/** Each page's title, description, canonical and social tags (lib/seo.js, loaded on demand). */
function useRouteSeo(path) {
  useEffect(() => {
    let live = true;
    import('./lib/seo.js')
      .then((m) => m.seoFor(path, loadBlogContent))
      .then((seo) => { if (live) applySeo(seo); })
      .catch(() => { if (live) applySeo(null); })
      .finally(() => { if (live) trackPageView(path); });
    return () => { live = false; };
  }, [path]);
}

export default function App() {
  const path = usePath();
  useRouteSeo(path);
  if (path === '/home-old') return <Home />;
  if (path === '/about') return <About />;
  // the old certificates page is now a section of About
  if (path === '/certificates.php') return <About section="certificates" />;
  if (path === '/contact') return <Contact />;
  if (path === '/download-profiles' || path.startsWith('/download-profiles/')) {
    const [brand, collection] = path.slice('/download-profiles/'.length).split('/');
    return <ProfileLibrary key={path} brand={brand || undefined} collection={collection} />;
  }
  if (path === '/career.php' || path === '/careers') return <Career />;
  if (path === '/newsletter.php' || path === '/newsletter') return <Newsletter />;
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
