import { useCallback, useEffect, useState } from 'react';

/**
 * Minimal history router — the project has no router dependency and npm has no
 * network here, so this covers the two routes we need.
 */
export function usePath() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/+$/, '') || '/');
    window.addEventListener('popstate', onPop);
    window.addEventListener('app:navigate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('app:navigate', onPop);
    };
  }, []);

  return path;
}

export function navigate(to) {
  if (window.location.pathname === to) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new Event('app:navigate'));
  window.scrollTo({ top: 0 });
}

export function Link({ to, children, ...rest }) {
  const onClick = useCallback(
    (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(to);
    },
    [to]
  );
  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
