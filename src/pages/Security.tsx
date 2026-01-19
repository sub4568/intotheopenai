import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Eye, Lock, Server, ShieldCheck } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Security at IntoTheOpen</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your content's safety is our top priority. We are built on enterprise-grade infrastructure designed to protect your data at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary/20 p-8 rounded-2xl border border-border">
                <Lock className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Encryption Everywhere</h3>
                <p className="text-muted-foreground">
                    All data is encrypted in transit using TLS 1.3 and at rest using AES-256 standard encryption. Your drafts are unreadable to anyone but you and the AI.
                </p>
            </div>
            <div className="bg-secondary/20 p-8 rounded-2xl border border-border">
                <Server className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure Infrastructure</h3>
                <p className="text-muted-foreground">
                    We host our services on top-tier cloud providers with SOC 2 Type II and ISO 27001 certifications, ensuring physical and digital security.
                </p>
            </div>
            <div className="bg-secondary/20 p-8 rounded-2xl border border-border">
                <ShieldCheck className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Data Isolation</h3>
                <p className="text-muted-foreground">
                    Customer data is logically segregated. Our AI models are trained on aggregated, anonymized datasets—your specific proprietary content is never used to train public models without consent.
                </p>
            </div>
            <div className="bg-secondary/20 p-8 rounded-2xl border border-border">
                <Eye className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Continuous Monitoring</h3>
                <p className="text-muted-foreground">
                    We employ automated vulnerability scanning and real-time threat detection to identify and neutralize potential threats before they affect our users.
                </p>
            </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Responsible Disclosure</h2>
          <p className="text-muted-foreground leading-relaxed">
            We value the contributions of the security research community. If you believe you have found a security vulnerability in IntoTheOpen, please report it to security@intotheopen.ai. We will investigate all reports and resolve any issues as quickly as possible.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;