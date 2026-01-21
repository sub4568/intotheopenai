import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/intotheopen-logo.png";

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
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="mb-4 inline-block group">
              <img 
                src={logo} 
                alt="intotheopen" 
                className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Marketing analytics that drive real results.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
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
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 intotheopen. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
