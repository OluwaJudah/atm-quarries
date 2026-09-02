import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-tagline">
            Exploring resources.
            <br />
            Creating value.
            <br />
            Building the future.
          </p>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <div className="footer-links">
            {[
              ["About Us", "/about"],
              ["Operations", "/operations"],
              ["Resources", "/resources"],
              ["Projects", "/projects"],
              ["Sustainability", "/sustainability"],
              ["Contact", "/contact"],
            ].map(([x, y]) => (
              <Link href={y} key={y}>
                {x}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4>CONTACT</h4>
          <p className="footer-contact">
            <MapPin size={15} />
            3/4 Temidire Street, Araromi Ugbeshi, Omuo Ekiti, Ekiti State,
            Nigeria
          </p>
          <p className="footer-contact">
            <Mail size={15} />
            <div className="footer-emails">
              <a href="mailto:info@atmquarries.com">info@atmquarries.com</a>
              <a href="mailto:atmquarries@gmail.com">atmquarries@gmail.com</a>
            </div>
          </p>
          <p className="footer-contact">
            <Phone size={15} />
            <a href="tel:+2347035098273">+234 703 509 8273</a>
          </p>
        </div>
        <div>
          <h4>LEGAL</h4>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ATM Quarries Limited. All Rights Reserved.</span>
        <span>www.atmquarries.com</span>
      </div>
    </footer>
  );
}
