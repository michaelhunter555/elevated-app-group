import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/better-said/privacy', label: 'Privacy' },
  { to: '/better-said/terms', label: 'Terms' },
  { to: '/better-said/account-deletion', label: 'Account deletion' },
] as const;

export default function BetterSaidLegalNav() {
  const { pathname } = useLocation();

  return (
    <nav className="better-said-legal-nav" aria-label="Better Said legal documents">
      <Link to="/" className="better-said-legal-nav__home">
        Home
      </Link>
      <span className="better-said-legal-nav__sep" aria-hidden>
        ·
      </span>
      <ul className="better-said-legal-nav__list">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={pathname === to ? 'is-active' : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
