import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>We build elevated experiences</h1>
      <p>
        Product-minded engineering. Fast, dependable, and
        quality-driven delivery.
      </p>

      <section id="work" className="work-section">
        <h2>Our work</h2>
        <div className="work-cards">
          <article className="work-card">
            <img style={{ borderRadius: '10px' }} className="work-logo" width={100} height={100} src="/ba.png" alt="Barber App logo" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:"center", gap: '10px' }}>
            <h3 style={{}}>Next Fade</h3>
           
            </div>
            <p>Connecting local barbers with customers. Available for iOS and Android.</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

              <div style={{ cursor: 'pointer' }}>
              <a href="https://play.google.com/store/apps/details?id=com.anonymous.bmorebarber" target="_blank">
              <img width={120} height={120} className="work-logo" src="/google-play.svg" alt="Google Play logo" />
              </a>
              </div>

              <div style={{ cursor: 'pointer' }}>
              <a href="https://apps.apple.com/us/app/next-fade/id6755074770" target="_blank">
              <img className="work-logo" src="/iOS-appstore.svg" alt="Apple Store logo" />
              </a>
              </div>
            </div>
          </article>
          <article className="work-card">
            <img
              style={{ borderRadius: '10px' }}
              className="work-logo"
              width={100}
              height={100}
              src="/bettersaid_appicon.png"
              alt="Better Said app icon"
            />
            <h3>Better Said</h3>
            <p>Practice and improve public speaking with guided feedback. Coming soon on iOS and Android.</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                opacity: 0.45,
                pointerEvents: 'none',
              }}
              aria-hidden
            >
              <img width={120} height={120} className="work-logo" src="/google-play.svg" alt="" />
              <img className="work-logo" src="/iOS-appstore.svg" alt="" />
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--muted, #888)' }}>
              App Store and Google Play links will appear here when the app is live.
            </p>
            <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              <Link to="/better-said/privacy">Privacy Policy</Link>
              <span aria-hidden>·</span>
              <Link to="/better-said/terms">Terms</Link>
              <span aria-hidden>·</span>
              <Link to="/better-said/account-deletion">Account deletion</Link>
            </div>
          </article>
          {/* <article className="work-card">
            <img className="work-logo" width={250} height={100} src="/mfd1.png" alt="My Fire Direct logo" />
            <h3>My Fire Direct</h3>
            <p>Hearth &amp; BBQ products.</p>
          </article> */}
          <article className="work-card">
            <img className="work-logo" width={200} height={100} src="/aj.svg" alt="Ajarn Jobs logo" />
            <h3>Ajarn jobs</h3>
            <p>Teaching Jobs for expats in Thailand.</p>
            <p>Browse opportunities, share experiences and connect with other teachers.</p>

            <div style={{ marginTop: '15px'}}>
            <a style={{ cursor: 'pointer' }} href="https://ajarnjobs.com" target="_blank">
            <button>Visit Ajarn Jobs</button>
            </a>
            </div>

           
          </article>
        </div>
      </section>
        <section>
          <p>Each of our apps have their own internal support system. However, feel free to contact us directly and we will point you in the right direction.</p>
        </section>
    </>
  )
}


