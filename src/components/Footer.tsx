import { Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
  legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-200 bg-[#f9f8f6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
         {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="mb-4 inline-flex items-center group">
              <div className="relative bg-white">
                <img 
                  src="/into.png" 
                  alt="intotheopen" 
                  className="h-8 w-auto group-hover:opacity-90 transition-opacity duration-300"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </a>
            <p className="text-sm mb-6 leading-relaxed text-gray-600 font-medium">
              Content intelligence for predictable performance
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/intotheopen_ai?t=fJp56PsVEQuk2zOZE9FWnA" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-125 hover:-translate-y-1 text-secondary-navy">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/intotheopen/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-125 hover:-translate-y-1 text-secondary-navy">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/intotheopen.ai?utm_source=qr" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-125 hover:-translate-y-1 text-secondary-navy">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-black">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-all duration-300 hover:text-accent hover:translate-x-1 text-muted-gray">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-black">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-all duration-300 hover:text-accent hover:translate-x-1 text-muted-gray">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-gray opacity-60">
            © 2026 intotheopen. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-soft-blue animate-pulse" />
            <span className="text-xs text-muted-gray opacity-60">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
