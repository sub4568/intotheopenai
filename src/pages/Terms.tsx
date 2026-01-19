import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using IntoTheOpen, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              IntoTheOpen provides AI-powered content intelligence, including performance forecasting, validation, and optimisation. We grant you a limited, non-exclusive, non-transferable license to use our services for your internal business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. AI Disclaimer</h2>
            <div className="p-4 bg-secondary/30 border-l-4 border-accent rounded-r-lg">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> Our services utilize artificial intelligence to predict content performance. These predictions are probabilistic estimates based on historical data and simulation. IntoTheOpen does not guarantee specific results, ROI, or audience engagement levels. You are responsible for the final publication decisions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain all rights to the drafts and briefs you upload.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Our Technology:</strong> IntoTheOpen retains all rights to the platform, software, AI models, and algorithms used to process your content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              IntoTheOpen shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your access to the platform at our sole discretion, without notice, for conduct that we believe violates these Terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;