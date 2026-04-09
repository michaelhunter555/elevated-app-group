import { Link } from 'react-router-dom';

export default function BetterSaidTerms() {
  return (
    <section style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Terms of Service — Better Said</h1>
      <p>
        <em>Last updated: April 8, 2026</em>
      </p>

      <h2>1. Agreement</h2>
      <p>
        These Terms of Service (“Terms”) govern your use of the Better Said mobile application (the “App”) provided
        by Elevated Apps L.L.C. (“we,” “us,” or “our”). By downloading or using the App, you agree to these Terms. If
        you do not agree, do not use the App.
      </p>

      <h2>2. The service</h2>
      <p>
        Better Said offers tools and content to help you practice and improve public speaking. Features may change over
        time. We may suspend or discontinue parts of the service with reasonable notice where practicable.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be old enough to enter a binding contract in your jurisdiction and not barred from using the App
        under applicable law. The App is not intended for children under 13 (or the minimum age in your region).
      </p>

      <h2>4. Accounts</h2>
      <p>
        You may sign in using methods we support (such as Sign in with Apple or Google). You are responsible for
        maintaining the confidentiality of your account and for activity under your account. Notify us promptly at{" "}
        <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a> if you suspect unauthorized access.
      </p>

      <h2>5. Permissions and your content</h2>
      <p>
        Some features require device permissions (for example, microphone access for recording speech, notifications for
        reminders, or camera access where offered). You can revoke permissions in your device settings; certain features
        may not work without them.
      </p>
      <p>
        You retain rights in content you create. To operate the App, you grant us a limited license to host, process,
        transmit, and display your content as needed to provide and improve the service, consistent with our{" "}
        <Link to="/better-said/privacy">Privacy Policy</Link>.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App unlawfully or to harm others</li>
        <li>Attempt to reverse engineer, scrape, or overload our systems</li>
        <li>Circumvent security or access restrictions</li>
        <li>Use the App to distribute malware or infringing material</li>
      </ul>

      <h2>7. Subscriptions and purchases</h2>
      <p>
        If we offer paid features, purchases may be processed by Apple or Google according to their terms. Pricing,
        renewal, and cancellation are governed by the applicable store and any in-app disclosures.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The App, including its design, text, graphics, and software, is owned by us or our licensors and is protected
        by intellectual property laws. Except for the limited rights granted in these Terms, no rights are transferred to
        you.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The App is provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim warranties
        of merchantability, fitness for a particular purpose, and non-infringement. Better Said is a practice and
        learning tool; it does not guarantee any particular outcome in speaking, education, or employment.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or
        punitive damages, or for loss of profits, data, or goodwill. Our aggregate liability for claims relating to the
        App is limited to the greater of (a) the amount you paid us for the App in the twelve months before the claim
        or (b) fifty U.S. dollars, except where liability cannot be limited by law.
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You will defend and indemnify us against claims arising from your misuse of the App or violation of these Terms,
        to the extent permitted by law.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the App at any time. We may suspend or terminate access if you violate these Terms or if we
        must do so for legal or operational reasons. Provisions that by their nature should survive will survive
        termination.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, United States, excluding conflict-of-law rules,
        unless mandatory consumer protection laws in your country require otherwise.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may update these Terms. We will post the updated Terms and revise the “Last updated” date. Continued use after
        changes become effective constitutes acceptance, except where additional consent is required by law.
      </p>

      <h2>15. Contact</h2>
      <p>
        Elevated Apps L.L.C.
        <br />
        <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>
      </p>
      <p>
        <Link to="/better-said/privacy">Privacy Policy</Link>
        {" · "}
        <Link to="/better-said/account-deletion">Account deletion</Link>
      </p>
    </section>
  );
}
