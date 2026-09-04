"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  ["About Us", "/about"],
  ["Our Operations", "/operations"],
  ["Minerals & Resources", "/resources"],
  ["Sustainability", "/sustainability"],
  ["Projects", "/projects"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="site-header">
      <div className="container nav">
        <Logo onClick={() => setOpen(false)} />
        <nav className={open ? "nav-links open" : "nav-links"}>
          <Link
            href="/"
            className={isActive("/") ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {links.map(([x, y]) => (
            <Link
              href={y}
              key={y}
              className={isActive(y) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {x}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Partner With Us <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
