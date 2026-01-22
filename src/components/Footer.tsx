import { Linkedin, Twitter, Instagram } from "lucide-react";

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
    <footer className="py-12 border-t border-border" style={{ backgroundColor: '#F2F7FA' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="mb-4 inline-block group">
              <span 
                className="text-xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block"
                style={{ color: '#164B82' }}
              >
                intotheopen
              </span>
            </a>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#343434', opacity: 0.7 }}>
              Marketing analytics that drive real results.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/intotheopen_ai?t=fJp56PsVEQuk2zOZE9FWnA" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: '#2F679F' }}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/intotheopen/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: '#2F679F' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/intotheopen.ai?utm_source=qr" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: '#2F679F' }}>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: '#164B82' }}>Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-all duration-300 hover:opacity-100" style={{ color: '#343434', opacity: 0.7 }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3" style={{ color: '#164B82' }}>Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-all duration-300 hover:opacity-100" style={{ color: '#343434', opacity: 0.7 }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#343434', opacity: 0.6 }}>
            © 2026 intotheopen. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#699ACD' }} />
            <span className="text-xs" style={{ color: '#343434', opacity: 0.6 }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
