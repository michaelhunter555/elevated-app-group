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
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '10px',

          }}>
          <article className="work-card">
            <img style={{ borderRadius: '10px' }} className="work-logo" width={100} height={100} src="/ba.png" alt="Barber App logo" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:"center", gap: '10px' }}>
            <h3 style={{}}>Barber App</h3>
            <p style={{ fontSize: '11px', backgroundColor: 'rgba(0,0,0,1)', color: 'white', borderRadius: '5px', padding: '2px 5px' }}>Coming Soon</p>
            </div>
            <p>Connecting local barbers with customers. Available for iOS and Android.</p>
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
          </article>
        </div>
      </section>
        <section>
          <p>Each of our apps have their own internal support system. However, feel free to contact us directly and we will point you in the right direction.</p>
        </section>
    </>
  )
}


