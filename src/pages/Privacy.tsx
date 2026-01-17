import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p>Legal content goes here...</p>
      </main>
      <Footer />
    </div>
  );
};
export default Privacy;