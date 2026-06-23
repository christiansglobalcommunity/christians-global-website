import { Mail, MessageSquare, Lock, FileText, AlertCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container">
          <div className="max-w-2xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact and Support
            </h1>
            <p
              className="text-lg text-foreground/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We're here to help. Whether you have a question, feedback, or need assistance, please get in touch with us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl">
          {/* General Support */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h2
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  General Enquiries and Support
                </h2>
                <p
                  className="text-foreground/70 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  For general questions, feedback, or support requests, please email us at:
                </p>
                <a
                  href="mailto:christiansglobalcommunity@gmail.com"
                  className="text-gold hover:text-gold/80 font-semibold text-lg break-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  christiansglobalcommunity@gmail.com
                </a>
                <p
                  className="text-foreground/60 text-sm mt-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  This email is actively monitored. We aim to respond to all enquiries within 5 working days.
                </p>
              </div>
            </div>
          </div>

          {/* Data Rights and Privacy */}
          <div className="mb-16 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Data Rights and Privacy Requests
                </h2>
                <p
                  className="text-foreground/70 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  You have the right to request access to, correction of, or deletion of your personal data. You can also withdraw permission for any connected social media account.
                </p>
                <p
                  className="text-foreground/70 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  To make a data rights request, please email:
                </p>
                <a
                  href="mailto:christiansglobalcommunity@gmail.com?subject=Data%20Rights%20Request"
                  className="text-gold hover:text-gold/80 font-semibold break-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  christiansglobalcommunity@gmail.com
                </a>
                <p
                  className="text-foreground/60 text-sm mt-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Please include "Data Rights Request" in the subject line and specify whether you are requesting access, correction, deletion, or withdrawal of permission.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright and Content Rights */}
          <div className="mb-16 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Copyright and Content Rights Concerns
                </h2>
                <p
                  className="text-foreground/70 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  If you believe that any content on our website infringes your intellectual property rights, or if you have concerns about content rights, please contact us at:
                </p>
                <a
                  href="mailto:christiansglobalcommunity@gmail.com?subject=Copyright%20Concern"
                  className="text-gold hover:text-gold/80 font-semibold break-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  christiansglobalcommunity@gmail.com
                </a>
                <p
                  className="text-foreground/60 text-sm mt-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Please include "Copyright Concern" in the subject line and provide details of the content in question.
                </p>
              </div>
            </div>
          </div>

          {/* Safeguarding and Formal Complaints */}
          <div className="mb-16 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Safeguarding and Formal Complaints
                </h2>
                <p
                  className="text-foreground/70 mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  If you have safeguarding concerns or wish to make a formal complaint, please contact us at:
                </p>
                <a
                  href="mailto:christiansglobalcommunity@gmail.com?subject=Safeguarding%20Concern"
                  className="text-gold hover:text-gold/80 font-semibold break-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  christiansglobalcommunity@gmail.com
                </a>
                <p
                  className="text-foreground/60 text-sm mt-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Please include "Safeguarding Concern" or "Formal Complaint" in the subject line.
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Important: Do Not Share Sensitive Information
                </h3>
                <p
                  className="text-foreground/70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Please do not include passwords, API tokens, access credentials, OAuth codes, or other sensitive security details in your messages. If you need to share sensitive information, we will provide a secure method after initial contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
