import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to IntoTheOpen ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-driven content intelligence platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Account Information:</strong> Name, email address, and billing details provided during registration.</li>
              <li><strong>Content Data:</strong> Drafts, articles, and campaign briefs you upload for analysis.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our validation and optimisation engines.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the collected data primarily to provide and improve our AI services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To generate performance forecasts and quality scores.</li>
              <li>To create synthetic audience simulations for content validation.</li>
              <li>To improve the accuracy of our AI optimisation models.</li>
              <li>To process transactions and send related alerts or invoices.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures, including encryption at rest and in transit, to protect your personal information and proprietary content. However, please note that no method of electronic transmission is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third-Party Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your data. We may share data with trusted third-party vendors (e.g., cloud hosting providers, payment processors) strictly for the purpose of operational functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this policy, please contact us at privacy@intotheopen.ai.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;