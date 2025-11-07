export default function PrivacyPolicy() {
  return (
    <section style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy for Barber App</h1>
      <p><em>(Last updated: July 29, 2025)</em></p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Barber App ("we", "our", or "us"). We are committed to protecting your
        privacy and complying with the General Data Protection Regulation (GDPR). This Privacy Policy
        explains how we collect, use, and protect your personal data when you use our mobile app to
        connect with barbers for appointment bookings, reviews, and payments.
      </p>

      <h2>2. Who We Are</h2>
      <p>
        Barber App
        <br />
        For questions, reach us via in-app chat or at <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>.
      </p>

      <h2>3. What Personal Data We Collect</h2>
      <ul>
        <li>Name and email address</li>
        <li>Payment info (via Stripe)</li>
        <li>Geolocation for finding nearby barbers</li>
        <li>Profile photo (optional)</li>
        <li>Appointment history</li>
        <li>Government ID (encrypted, for internal use only for provider license verification)</li>
      </ul>

      <h2>4. Why We Collect Your Data</h2>
      <p>We collect and process data for:</p>
      <ul>
        <li>Account creation and login</li>
        <li>Appointment bookings</li>
        <li>Payment processing</li>
        <li>Displaying local barbers</li>
        <li>Support and app improvement</li>
        <li>Fraud prevention and ID verification</li>
        <li>Analytics (with your consent)</li>
      </ul>

      <h2>5. Consent &amp; User Rights</h2>
      <p>
        We ask for your consent when needed. You can withdraw it at any time through your device or by contacting us.
        You have the right to:
      </p>
      <ul>
        <li>Access your data</li>
        <li>Correct or delete it</li>
        <li>Object to processing</li>
        <li>Request portability</li>
      </ul>
      <p><strong>Note:</strong> Full account deletion is not yet supported.</p>

      <h2>6. Third-Party Services</h2>
      <p>We share data only with trusted third parties:</p>
      <ul>
        <li>Stripe (Payments)</li>
        <li>Google Analytics (App insights)</li>
        <li>Heroku (Server infrastructure)</li>
      </ul>
      <p>These services follow strict data protection rules.</p>

      <h2>7. Data Security</h2>
      <p>
        We use encryption for sensitive government ID images. Our infrastructure uses secure cloud servers and limits
        data access to authorized personnel only.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your data for up to 365 days after your last activity. It may be anonymized or deleted afterward unless legally required.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        We do not transfer your data outside the European Economic Area (EEA).
      </p>

      <h2>10. Policy Updates</h2>
      <p>
        We may update this policy from time to time. We'll notify you through in-app messages or email if we make significant changes.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        For questions or data requests, contact us via in-app chat or email us at <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>.
      </p>
    </section>
  )
}


