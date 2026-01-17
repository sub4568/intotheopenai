import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground">
          Legal terms and conditions content goes here...
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;