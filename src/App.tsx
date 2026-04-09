import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AccountDeletion from './pages/AccountDeletion';
import Explore from './pages/Explore';
import BetterSaidPrivacy from './pages/better-said/Privacy';
import BetterSaidTerms from './pages/better-said/Terms';
import BetterSaidAccountDeletion from './pages/better-said/AccountDeletion';


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <img style={{ borderRadius: '10px' }} width={50} height={50} src="/elevated.png" alt="Elevated App Group" className="logo" />
          Elevated App Group
          </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/account-deletion">Account Deletion</Link>
          <Link to="/explore">Explore</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/better-said/privacy" element={<BetterSaidPrivacy />} />
          <Route path="/better-said/terms" element={<BetterSaidTerms />} />
          <Route path="/better-said/account-deletion" element={<BetterSaidAccountDeletion />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <small>© 2025 Elevated Apps L.L.C</small>
        <small>Contact us with all questions or concerns at info@elevatedappgroup.com</small>
      </footer>
    </div>
  )
}

export default App
