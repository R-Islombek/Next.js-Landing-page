import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";


export default function Header() {
  const [open, setOpen] = useState(false);


  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={140} height={48} priority />
          </Link>


          <button
            className={`menu-btn ${open ? "open" : ""}`}
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>


          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul className="header-list">
              <li className="header-item"><Link href="/about">About Us</Link></li>
              <li className="header-item"><Link href="/careers">Careers</Link></li>
              <li className="header-item"><Link href="/blog">Blog</Link></li>
              <li className="header-item"><Link href="/contact">Contact Us</Link></li>
              <li className="header-item"><Link href="/services">Services</Link></li>
              <li className="header-item"><Link href="/project">Clone Project</Link></li>
            </ul>
          </nav>


          {/* Mobile slide-down nav */}
          <nav className={`mobile-nav ${open ? "open" : ""}`} aria-hidden={!open}>
            <ul>
              <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setOpen(false)}>About Us</Link></li>
              <li><Link href="/careers" onClick={() => setOpen(false)}>Careers</Link></li>
              <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
              <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link href="/project" onClick={() => setOpen(false)}>Clone Project</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}