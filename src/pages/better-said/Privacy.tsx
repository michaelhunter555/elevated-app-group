import { Link } from 'react-router-dom';

export default function BetterSaidPrivacy() {
  return (
    <section style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy — Better Said</h1>
      <p>
        <em>Last updated: April 8, 2026</em>
      </p>

      <h2>1. Introduction</h2>
      <p>
        Better Said (“we,” “us,” or “our”) helps you practice and improve public speaking. This Privacy Policy
        describes how we collect, use, disclose, and protect information when you use our mobile application
        (the “App”) on iOS and Android. We designed this policy to meet common expectations for app store
        listings and applicable privacy laws, including requirements relevant to the Apple App Store and Google Play.
      </p>

      <h2>2. Who we are</h2>
      <p>
        The App is offered by Elevated Apps L.L.C. (“Elevated Apps”). For privacy questions or requests, contact us at{" "}
        <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>.
      </p>
      <p>
        App identifiers: iOS and Android package/bundle{" "}
        <code>com.wellsaid.publicspeakingpro</code>.
      </p>

      <h2>3. Information we collect</h2>
      <p>Depending on how you use the App, we may collect or process:</p>
      <ul>
        <li>
          <strong>Account and profile information.</strong> If you create or sign in to an account, we may collect
          identifiers and profile details provided by you or your sign-in provider (for example, email address or
          name associated with Sign in with Apple or Google Sign-In).
        </li>
        <li>
          <strong>Audio and speech content.</strong> With your permission, the App accesses the microphone to record
          your speech so we can provide feedback, practice features, and related functionality described in the App.
          Recordings may be processed on your device and/or on our servers to deliver the service.
        </li>
        <li>
          <strong>Camera and video.</strong> If you enable features that use the camera or video playback, we may
          process image or video data only as needed for those features and as disclosed in the App’s permission prompts.
        </li>
        <li>
          <strong>Notifications.</strong> If you opt in, we may use push notifications to remind you about practice,
          product updates, or similar messages. You can turn off notifications in your device settings.
        </li>
        <li>
          <strong>Usage and device data.</strong> We may collect diagnostic, performance, and usage information (such
          as app version, device type, and crash reports) to operate, secure, and improve the App.
        </li>
        <li>
          <strong>Localization.</strong> We may process language or region preferences to tailor the experience.
        </li>
      </ul>

      <h2>4. How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide, maintain, and improve the App and its public-speaking features</li>
        <li>Authenticate accounts and prevent fraud or abuse</li>
        <li>Deliver notifications you have agreed to receive</li>
        <li>Analyze reliability and performance, and fix bugs</li>
        <li>Comply with law and enforce our terms</li>
        <li>Communicate with you about support or important service changes</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>5. Legal bases (where applicable)</h2>
      <p>
        If you are in the European Economic Area, the United Kingdom, or Switzerland, we rely on appropriate legal
        bases such as: performance of a contract (providing the App), legitimate interests (security and improvement,
        balanced against your rights), and consent where required (for example, microphone access or certain notifications).
      </p>

      <h2>6. Sharing and service providers</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          <strong>Authentication providers.</strong> Apple and Google, when you choose Sign in with Apple or Google
          Sign-In, according to their respective policies.
        </li>
        <li>
          <strong>Infrastructure and operations.</strong> Cloud hosting, analytics, crash reporting, customer support
          tools, and similar vendors that process data on our behalf under contractual obligations.
        </li>
        <li>
          <strong>App updates.</strong> We use Expo Application Services (EAS) and related update infrastructure so
          the App can receive over-the-air updates; limited technical data may be processed in connection with delivering
          those updates.
        </li>
        <li>
          <strong>Legal and safety.</strong> Authorities or others when required by law or to protect rights, safety,
          and security.
        </li>
      </ul>
      <p>We require processors to use your information only as instructed and to implement appropriate safeguards.</p>

      <h2>7. Retention</h2>
      <p>
        We retain personal information only as long as needed for the purposes above, unless a longer period is
        required by law. Account-related data is generally kept while your account is active and for a reasonable
        period afterward. Audio or content you create may be deleted according to in-app controls (where available)
        or when you request account deletion, subject to backup and legal retention needs.
      </p>

      <h2>8. Your choices and rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete certain personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent where processing is consent-based</li>
        <li>Request a copy of your data (portability), where applicable</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p>
        California residents may have additional rights under the CCPA/CPRA (for example, to know categories of data
        collected and to request deletion). We do not sell personal information as defined by those laws.
      </p>
      <p>
        To exercise rights or ask questions, email{" "}
        <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>. We may verify your request before
        responding.
      </p>

      <h2>9. Children</h2>
      <p>
        The App is not directed to children under 13 (or the minimum age required in your jurisdiction). We do not
        knowingly collect personal information from children. If you believe we have collected such information,
        contact us and we will take appropriate steps to delete it.
      </p>

      <h2>10. Security</h2>
      <p>
        We use technical and organizational measures designed to protect your information. No method of transmission
        or storage is completely secure; we encourage you to use device security features and strong authentication.
      </p>

      <h2>11. International transfers</h2>
      <p>
        We may process and store information in the United States and other countries where we or our service providers
        operate. Where required, we use appropriate safeguards for cross-border transfers.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the updated version in the App or on this
        page and update the “Last updated” date. For material changes, we may provide additional notice as required by
        law or by the app stores.
      </p>

      <h2>13. Contact</h2>
      <p>
        Elevated Apps L.L.C. — Better Said
        <br />
        Email: <a href="mailto:info@elevatedappgroup.com">info@elevatedappgroup.com</a>
      </p>
      <p>
        For account and data deletion requests, you may also use our{" "}
        <Link to="/better-said/account-deletion">account deletion</Link> page.
      </p>
    </section>
  );
}
