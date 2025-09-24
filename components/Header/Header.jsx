import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={48}
              priority
            />
          </Link>

          {/* Menu button (hamburger) */}
          <button
            className={`${styles.menuBtn} ${open ? styles.open : ""}`}
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.headerList}>
              <li className={styles.headerItem}>
                <Link className={styles.headerLink} href="/about">About Us</Link>
              </li>
              <li className={styles.headerItem}>
                <Link className={styles.headerLink} href="/careers">Careers</Link>
              </li>
              <li className={styles.headerItem}>
                <Link className={styles.headerLink} href="/blog">Blog</Link>
              </li>
              <li className={styles.headerItem}>
                <Link className={styles.headerLink} href="/contact">Contact Us</Link>
              </li>
              <li className={styles.headerItem}>
                <Link className={styles.headerLink} href="/services">Services</Link>
              </li>
              <li className={styles.headerItem}>
                <Link className={styles.headerLinkBtn} href="/project">Clone Project</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile slide nav */}
          <nav
            className={`${styles.mobileNav} ${open ? styles.open : ""}`}
            aria-hidden={!open}
          >
            <ul>
              <li>
                <Link  className={styles.headerLink}  href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.headerLink} href="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className={styles.headerLink}  href="/careers" onClick={() => setOpen(false)}>
                  Careers
                </Link>
              </li>
              <li>
                <Link className={styles.headerLink} href="/blog" onClick={() => setOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className={styles.headerLink}  href="/contact" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className={styles.headerLink} href="/services" onClick={() => setOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link className={styles.headerLink}  href="/project" onClick={() => setOpen(false)}>
                  Clone Project
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
