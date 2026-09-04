import { SOCIALS } from './Icons.jsx';

const LOGO = {
  wordmark: '/images/furni-logo-wordmark.png',
  full: '/images/furni-logo.png',
  mark: '/images/furni-mark.png',
};

/**
 * Brand lockup. `variant` picks the artwork: the wordmark (default, with the
 * tagline set in type beneath it), the full lockup (tagline baked into the
 * artwork), or the "F" mark on its own.
 */
export function Logo({ variant = 'wordmark', tagline = true, className = '' }) {
  const showTagline = tagline && variant === 'wordmark';
  return (
    <a className={`logo ${className}`.trim()} href="#top" aria-label="Furniconcepts — home">
      <img className={`logo-img logo-${variant}`} src={LOGO[variant]} alt="Furniconcepts" />
      {showTagline && <span className="logo-tag">Furniture Designed With Style</span>}
    </a>
  );
}

export function CircleButton({ as: Tag = 'span', children, ...rest }) {
  return (
    <Tag className="circle-btn" {...rest}>
      {children}
    </Tag>
  );
}

export function SocialRow({ networks = ['instagram', 'pinterest', 'linkedin'] }) {
  return (
    <div className="social-row">
      {networks.map((key) => {
        const { label, Icon } = SOCIALS[key];
        return (
          <a key={key} href="#" aria-label={label}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
