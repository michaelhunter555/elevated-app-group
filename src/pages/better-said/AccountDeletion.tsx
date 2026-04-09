import { Link } from 'react-router-dom';

export default function BetterSaidAccountDeletion() {
  return (
    <section style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Account &amp; data deletion — Better Said</h1>
      <p>
        You can request deletion of your Better Said account and associated personal data by emailing{" "}
        <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>.
      </p>
      <p>Please include:</p>
      <ul>
        <li>The email address associated with your account (including the one from Sign in with Apple or Google, if applicable)</li>
        <li>Your app username or display name, if different from your email</li>
        <li>A brief note that the request applies to <strong>Better Said</strong> (bundle/package: <code>com.wellsaid.publicspeakingpro</code>)</li>
      </ul>
      <p>
        We will verify your request and respond within a reasonable timeframe. Some information may be retained where
        required by law or for legitimate business purposes (for example, fraud prevention or financial records), as
        described in our <Link to="/better-said/privacy">Privacy Policy</Link>.
      </p>
      <p>
        You may also be able to revoke Sign in with Apple or disconnect Google Sign-In from your device or account
        settings; contacting us ensures we process deletion on our systems as well.
      </p>
    </section>
  );
}
