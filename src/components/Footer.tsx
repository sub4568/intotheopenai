import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" }, // Features points to #features section
    { label: "Pricing", href: "#pricing" }, // Pricing points to #pricing section
    // { label: "Integrations", href: "#" }, // Commented out - Integrations
    // { label: "Changelog", href: "#" }, // Commented out - Changelog
  ],
  // company: [ // Commented out - Company section
  //   { label: "About", href: "#" },
  //   { label: "Blog", href: "#" },
  //   { label: "Careers", href: "#" },
  //   { label: "Contact", href: "#" },
  // ],
  // resources: [ // Commented out - Resources section
  //   { label: "Documentation", href: "#" },
  //   { label: "Help Center", href: "#" },
  //   { label: "API Reference", href: "#" },
  //   { label: "Status", href: "#" },
  // ],
  legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
};

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3 group">
              <div className="w-7 h-7 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <span className="text-accent-foreground font-bold text-xs">ITO</span>
              </div>
              <span className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors duration-300">intotheopen</span>
            </a>
            <p className="text-sm text-muted-foreground/75 mb-4 leading-relaxed">
              Marketing analytics that drive real results.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground/70 hover:text-accent transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground/70 hover:text-accent transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground/70 hover:text-accent transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground/75 hover:text-accent transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links - Commented out for documentation */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Resources Links - Commented out for documentation */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground/75 hover:text-accent transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/70">
            © 2026 intotheopen. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-xs text-muted-foreground/70">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
