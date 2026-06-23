import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-10 h-10 text-gold flex-shrink-0" />
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Christians Global website at christians-global.com, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                2. Who We Are
              </h2>
              <p>
                Christians Global is operated by Ian Ridpath, trading as Christians Global. Our mission is to provide original educational, discipleship, and encouragement content for a global audience across social media platforms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                3. Acceptable Use of the Site
              </h2>
              <p>
                You agree to use the Christians Global website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                4. Intellectual Property and Copyright
              </h2>
              <p>
                All original content published on the Christians Global website, including text, graphics, logos, images, and audio-visual material, is the intellectual property of © 2026 Ian Ridpath trading as Christians Global. All rights reserved. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                5. Prohibited Misuse
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Scrape, copy, or reproduce any part of the website or its content without permission.</li>
                <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li>Attempt to gain unauthorized access to any part of the website, server, or any connected systems or networks.</li>
                <li>Use the website for any commercial purposes without our prior written consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                6. Content Disclaimer
              </h2>
              <p>
                The content provided on the Christians Global website is for educational, discipleship, and encouragement purposes only. It is not intended to be personal pastoral counseling, medical advice, legal advice, or crisis support. We strive for accuracy, but we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                7. External Links and Third-Party Platforms
              </h2>
              <p>
                Our website may contain links to external websites or third-party platforms that are not provided or maintained by or in any way affiliated with Christians Global. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
              <p className="mt-4">
                <strong>Statement on Social Media Platforms:</strong> Christians Global is independent and not affiliated with, endorsed by, or approved by social media platforms such as TikTok, YouTube, X, Meta, or Bluesky, unless formally confirmed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                8. No Guarantee of Uninterrupted Availability
              </h2>
              <p>
                We do not guarantee that our website will be available at all times or that access will be uninterrupted or error-free. We reserve the right to suspend, withdraw, discontinue, or change all or any part of our website without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                9. Contact for Rights Concerns and Complaints
              </h2>
              <p>
                If you have any concerns regarding intellectual property rights, content rights, or wish to make a formal complaint, please contact us at{" "}
                <a href="mailto:christiansglobalcommunity@gmail.com" className="text-gold hover:text-gold/80">
                  christiansglobalcommunity@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                10. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms of Service are governed by the laws of England and Wales. Any disputes arising in connection with these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
