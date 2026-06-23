import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-10 h-10 text-gold flex-shrink-0" />
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Privacy Policy
              </h1>
              <p
                className="text-lg text-foreground/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Last Updated: 26 June 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl prose prose-invert">
          <div className="space-y-8 text-foreground/80" style={{ fontFamily: "var(--font-body)" }}>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                1. Introduction
              </h2>
              <p>
                Christians Global is operated by Ian Ridpath, trading as Christians Global. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, christians-global.com. We are committed to protecting your privacy and handling your data in an open and transparent manner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                2. Who We Are
              </h2>
              <p>
                Christians Global is operated by Ian Ridpath, trading as Christians Global. You can contact us regarding privacy matters at{" "}
                <a href="mailto:christiansglobalcommunity@gmail.com" className="text-gold hover:text-gold/80">
                  christiansglobalcommunity@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                3. Information We May Collect
              </h2>
              <p>We may collect information from you when you interact with our website, such as:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Contact Form Messages:</strong> If you use a contact form on our website, we collect the information you provide (e.g., name, email address, message content) to respond to your inquiry.</li>
                <li><strong>Standard Server Logs:</strong> Our hosting provider (Manus) automatically collects standard server logs, which may include your IP address, browser type, operating system, referring pages, and access times. This data is used for security, troubleshooting, and service operation.</li>
                <li><strong>Cookies:</strong> We use only strictly necessary technical cookies to ensure the proper functioning of our website. These cookies do not collect personal data for advertising or tracking purposes.</li>
                <li><strong>Analytics:</strong> We do not use website analytics at this stage. If analytics are introduced in the future, this policy will be updated, and your consent will be sought if required.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                4. How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>To respond to your inquiries and provide support.</li>
                <li>To maintain and improve the security and functionality of our website.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                5. Data Sharing and Disclosure
              </h2>
              <p>
                We may use carefully selected service providers to host our website, provide email, operate internal workflow tools, maintain internal content records, and help create original content. We only use providers where necessary for the relevant purpose. Our current key providers include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Manus:</strong> For website creation and hosting.</li>
                <li><strong>GoDaddy:</strong> For domain registration and DNS management.</li>
                <li><strong>Google Workspace/Gmail:</strong> For the monitored support email.</li>
                <li><strong>DigitalOcean:</strong> For hosting the internal n8n automation environment.</li>
                <li><strong>n8n:</strong> For internal workflow automation.</li>
                <li><strong>Google Sheets:</strong> For internal content planning and operational records.</li>
                <li><strong>OpenAI:</strong> For internal content generation and adaptation.</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal data. We do not scrape private social data. We do not operate direct message spam, follower manipulation, mass liking, or mass commenting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                6. Future Platform Connections
              </h2>
              <p>
                Christians Global is developing responsible internal tools to help us prepare and manage original content for Christians Global owned social accounts. Any future platform connection will be used only for authorised publishing, publication records, and limited performance learning to improve our content. If and when such integrations exist, they may process account identifiers, authorised access credentials, content supplied for publication, publication records, and limited post-performance data where permitted.
              </p>
              <p className="mt-4">
                Future platform access credentials will be retained only while an account connection remains authorised and will be removed promptly when authorisation is withdrawn or the connection is no longer required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                7. Data Retention
              </h2>
              <p>We retain your data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Our data retention approach is as follows:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Website contact and support messages:</strong> Retained for up to 12 months after the matter is resolved.</li>
                <li><strong>Privacy, data rights, safeguarding, copyright, or formal complaint correspondence:</strong> Retained for up to 3 years after resolution, unless a longer period is required for a legal claim or legal obligation.</li>
                <li><strong>Future authorised social account connection records and publication logs:</strong> Retained while the connection or content operations record is needed, then deleted or anonymised within 24 months of the connection ending or the record no longer being needed.</li>
                <li><strong>Technical hosting and security logs:</strong> Retained only for the period necessary for security, troubleshooting, and service operation (as determined by our host, Manus).</li>
              </ul>
              <p className="mt-4">
                Retention periods may be reviewed and updated if the actual services or legal requirements change.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                8. Your Data Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete data we hold about you.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal data.</li>
                <li><strong>Withdrawal of Permission:</strong> If a social account connection exists, you can withdraw your authorisation.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:christiansglobalcommunity@gmail.com" className="text-gold hover:text-gold/80">
                  christiansglobalcommunity@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                9. Governing Law and Jurisdiction
              </h2>
              <p>
                This Privacy Policy is governed by the laws of England and Wales. Any disputes arising in connection with this policy will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
