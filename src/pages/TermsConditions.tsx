import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-primary/5 pt-24 pb-12 px-4 md:pt-32 md:pb-16 border-b">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground mt-2">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-foreground">
          <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
            <div className="text-center mb-8">
              <p className="text-muted-foreground">Effective Date: May, 2024</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm leading-relaxed">
                Please read these Terms and Conditions carefully before using
                the website, mobile application, or services provided by
                Labtraca. These Terms contain important information regarding
                your legal rights, obligations, and limitations when using our
                platform.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">INTRODUCTION</h2>
              <p className="text-muted-foreground leading-relaxed">
                Labtraca is a health-tech service that enables users to request
                laboratory tests and doctor consultations from the comfort of
                their homes. We operate a digital platform accessible via web
                and mobile applications, which connects users with certified
                phlebotomists, laboratory scientists, and licensed medical
                professionals. Labtraca is operated by Labtraca Diagnostics
                Limited, a duly registered entity under the applicable laws of
                the Federal Republic of Nigeria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                MODIFICATIONS TO AGREEMENT
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Labtraca reserves the right to modify or amend these Terms and
                Conditions at any time. Any such changes will be effective
                immediately upon posting on our platform. Users are encouraged
                to review the terms regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">SCOPE OF SERVICE</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Labtraca offers the following services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Home-based sample collection for laboratory tests.</li>
                <li>
                  Access to a network of licensed laboratories and healthcare
                  professionals.
                </li>
                <li>Direct doctor consultation and result review services.</li>
                <li>Test result delivery via secure email communication.</li>
                <li>
                  Inter-laboratory comparison and external quality assurance
                  services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                THIRD-PARTY TEST REQUESTS AND PRIVACY OBLIGATIONS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Registered users may request laboratory tests on behalf of third
                parties (e.g., family members, friends, co-workers, or
                employees). However, Labtraca requires that you obtain proper
                and informed consent from these individuals before initiating
                any test request on their behalf. Test results will be delivered
                via the email address associated with the account used to make
                the request. By submitting a test request for another
                individual, you confirm that you have obtained their consent for
                both the test and the result-sharing mechanism. Labtraca will
                not be held liable for any breach of privacy, unauthorized
                disclosure, or legal action arising from your failure to obtain
                the required consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                USE OF PLATFORM - DISCLAIMER
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Labtraca is not a substitute for emergency medical attention.
                Our services are complementary and designed to aid preventive
                and routine care. For urgent medical conditions, please contact
                emergency services. Labtraca does not guarantee specific health
                outcomes based on any analysis, and the use of our services is
                at your sole risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                REGISTRATION AND ACCOUNT SECURITY
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain services, you will be required to create an
                account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information.</li>
                <li>Maintain the confidentiality of your login credentials.</li>
                <li>
                  Notify Labtraca immediately of any unauthorized use of your
                  account.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Labtraca reserves the right to suspend or terminate accounts
                that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">ACCESS TO PLATFORM</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we aim to maintain uninterrupted access to our platform,
                Labtraca does not guarantee continuous availability due to
                system maintenance, updates, or unforeseen technical issues.
                Users must not attempt to hack, modify, or interfere with the
                functionality or security of our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                TEST RESULT HANDLING AND RESPONSIBILITY
              </h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    All test results are sent digitally to the account owner's
                    email address.
                  </li>
                  <li>
                    Labtraca does not interpret test results beyond what is
                    provided by the laboratories.
                  </li>
                  <li>
                    If you require further clarification or treatment
                    recommendations, you may request a doctor consultation or
                    result review via the platform.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                DATA PROTECTION & PRIVACY
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Labtraca adheres to best practices in handling personal health
                data in compliance with Nigeria Data Protection Act (NDPA). Your
                data is protected using secure technologies and is only shared
                with authorized medical and lab professionals involved in
                service delivery. For third-party test requests, account owners
                bear full responsibility for obtaining necessary consent and
                ensuring the ethical use of private health data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the Labtraca platform, including but not limited
                to logos, service marks, videos, graphics, and software, is the
                intellectual property of Labtraca and protected by applicable
                copyright and trademark laws. Unauthorized use or reproduction
                is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                LIMITATION OF LIABILITY
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, Labtraca and its
                affiliates will not be liable for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Indirect, incidental, or consequential damages.</li>
                <li>Delays, interruptions, or service errors.</li>
                <li>
                  Any damages arising from unauthorized access to or use of your
                  account or data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                WARRANTIES AND DISCLAIMERS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Labtraca does not warrant that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The platform will be error-free or uninterrupted.</li>
                <li>
                  All results will be delivered within a specific timeframe.
                </li>
                <li>The services are suitable for every medical condition.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Users are encouraged to seek professional medical advice for
                diagnosis or treatment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">TERMINATION OF USE</h2>
              <p className="text-muted-foreground leading-relaxed">
                Labtraca reserves the right to suspend or terminate your account
                without notice if we believe that you have violated any
                provision of these Terms or acted in a way that could harm other
                users or our reputation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                USER REPRESENTATIONS AND WARRANTIES
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using Labtraca, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  You are of legal age and competent to use this platform.
                </li>
                <li>All information you provide is accurate and up-to-date.</li>
                <li>
                  You will use the platform in compliance with all applicable
                  laws and ethical guidelines.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">INDEMNIFICATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to indemnify and hold harmless Labtraca, its
                directors, employees, partners, and affiliates from any claims,
                liabilities, damages, or expenses arising out of:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your misuse of the platform.</li>
                <li>
                  Any test request made on behalf of a third party without their
                  consent.
                </li>
                <li>Any breach of these Terms and Conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                GOVERNING LAW AND DISPUTE RESOLUTION
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by the laws of the Federal
                Republic of Nigeria. All disputes arising in connection with the
                use of Labtraca's services shall be resolved through mediation,
                conducted in English, before any legal action is initiated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">USE OF CUSTOMER DATA</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Labtraca, you grant us permission to use
                non-identifiable customer data for service improvement,
                analytics, marketing, and reporting. Identifiable data will only
                be used for service delivery and not shared with third parties
                without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                LINKS TO THIRD PARTIES
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Labtraca may provide links to third-party services or content.
                We are not responsible for the accuracy, legality, or safety of
                any third-party services or websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">CONTACT INFORMATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions, feedback, or complaints, contact us at:
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm">
                  <strong>Email:</strong> info@labtraca.com
                  <br />
                  <strong>Phone:</strong> +234(0)8133896015
                  <br />
                  <strong>Website:</strong> www.labtraca.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">ACCEPTANCE OF TERMS</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 leading-relaxed font-semibold">
                  BY ACCESSING, SIGNING UP OR USING LABTRACA'S SERVICES, YOU
                  AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, PLEASE
                  DO NOT USE OUR PLATFORM.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;
