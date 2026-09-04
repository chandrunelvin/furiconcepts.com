import { SOCIALS } from './Icons.jsx';

const LOGO = {
  wordmark: '/images/furni-logo-wordmark.png',
  full: '/images/furni-logo.png',
  mark: '/images/furni-mark.png',
};

/**
 * Brand lockup. `variant` picks the artwork: the full lockup (default, tagline
 * baked into the artwork), the wordmark on its own (tagline can be set in type
 * beneath it), or the "F" mark.
 */
export function Logo({ variant = 'full', tagline = false, className = '' }) {
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
