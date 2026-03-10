"use client";

import Image from "next/image";
import Link from "next/link";
import ContactFormPopup from "./ContactFormPopup";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/* =========================================================
   TYPES
========================================================= */

type NormalMenuItem = {
  href: string;
  label: string;
};

type ProjectItem = {
  title: string;
  href?: string;
  label?: string;
  children?: ProjectItem[];
};

type MenuType = {
  label: string;
  paths: string[];
  mega?: boolean;
  items: any[];
};

/* =========================================================
   MENU CONFIG
========================================================= */

const subMenus: Record<string, MenuType> = {
  about: {
    label: "About Us",
    paths: [
      "/about",
      "/founders",
      "/board-of-directors",
      "/leadership-team",
      "/investors",
      "/awards",
      "/corporate-video",
    ],
    items: [
      { href: "/about", label: "About Eara Group" },
      { href: "/founders", label: "Founders" },
      // { href: "/leadership-team", label: "Leadership Team" },
    ],
  },

  projects: {
    label: "Projects",
    paths: ["/project", "/amidstnature"],
    mega: true,
    items: [
      {
        title: "Bengaluru",
        children: [
          {
            title: "Residential",
            href: "/amidstnature",
          },
        ],
      },
    ],
  },

  nri: {
    label: "NRI Lounge",
    paths: ["/nri/invest", "/nri/faq", "/nri/contact"],
    items: [
      { href: "/nri/invest", label: "Why Invest" },
      { href: "/nri/faq", label: "FAQs" },
    ],
  },
};

export default function Header() {
  const pathname = usePathname() || "/";
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* =========================================================
     ACTIVE SUB NAVBAR
  ========================================================= */

  const activeMenuKey = Object.keys(subMenus).find((key) =>
    subMenus[key].paths.some((path) => pathname.startsWith(path))
  );

  const activeMenu = activeMenuKey ? subMenus[activeMenuKey] : null;

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  useEffect(() => {
    const collapseEl = document.getElementById("navbarScroll");
    if (collapseEl?.classList.contains("show")) {
      collapseEl.classList.remove("show");
    }
  }, [pathname]);

  /* =========================================================
     SCROLL HIDE / SHOW
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isTop = lastScrollY < 100;

  const logoClass = isTop
    ? "white-png logo img-fluid"
    : "dark-png logo img-fluid";

  return (
    <>
      {/* ================= MOBILE NAV ================= */}

      <nav
        className={`navbar-animated position-fixed top-0 w-100 navbar navbar-expand-lg bg-primary d-md-none shadow-sm ${
          isVisible ? "navbar-visible navbar-dark" : "navbar-dark"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/logo-dark.webp"
              alt="logo"
              width={120}
              height={66}
              className="white-png logo img-fluid"
              priority
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav text-center me-auto my-2 my-lg-0 navbar-nav-scroll text-white">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/project", label: "Project" },
                { href: "/channel-partner", label: "Channel Partner" },
                { href: "/blog", label: "Blogs" },
                { href: "/career", label: "Career" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href} className="nav-item">
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= DESKTOP NAV ================= */}

      <div
        className={`navbar-animated position-fixed top-0 w-100 d-none d-md-block ${
          isVisible ? "navbar-visible" : ""
        } ${isTop ? "bg-transparent" : "bg-light"}`}
        style={{ zIndex: 999 }}
      >
        <div className="container py-2 d-flex justify-content-between align-items-center">
          {/* LOGO */}

          <Link href="/">
            <Image
              src="/images/logo-dark.webp"
              alt="logo"
              width={150}
              height={66}
              className={logoClass}
              priority
            />
          </Link>

          {/* MAIN MENU */}

          <ul className="menu d-flex align-items-center mb-0">
            <li>
              <Link
                href="/"
                className={`px-3 text-decoration-none ${
                  isTop ? "text-white" : "text-dark"
                }`}
              >
                Home
              </Link>
            </li>

            {Object.entries(subMenus).map(([key, menu]) => (
              <li key={key} className="has-sub position-relative">
                <span
                  className={`menu-link px-3 ${
                    isTop ? "text-white" : "text-dark"
                  }`}
                >
                  {menu.label}
                  <span className="menu-arrow"></span>
                </span>

                {/* NORMAL DROPDOWN */}

                {!menu.mega && (
                  <ul className="submenu">
                    {menu.items.map((item: NormalMenuItem) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* PROJECTS MENU */}

                {menu.mega && (
                  <ul className="submenu">
                    {menu.items.map((city: ProjectItem) => (
                      <li key={city.title} className="has-sub">
                        <span className="menu-link">
                          {city.title}
                          <span className="menu-arrow"></span>
                        </span>

                        <ul className="submenu">
                          {city.children?.map((category) => (
                            <li key={category.title}>
                              <Link href={category.href || "#"}>
                                {category.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <Link
                href="/blog"
                className={`px-3 text-decoration-none ${
                  isTop ? "text-white" : "text-dark"
                }`}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/channel-partner"
                className={`px-3 text-decoration-none ${
                  isTop ? "text-white" : "text-dark"
                }`}
              >
                Channel Partner
              </Link>
            </li>

            <li>
              <Link
                href="/career"
                className={`px-3 text-decoration-none ${
                  isTop ? "text-white" : "text-dark"
                }`}
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`px-3 text-decoration-none ${
                  isTop ? "text-white" : "text-dark"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA */}

          <ContactFormPopup
            buttonText="Get In Touch"
            buttonClassName="btn btn-primary mx-md-4 px-3 py-2 rounded-0"
            redirectUrl="/thankyou"
          />
        </div>

        {/* SUB NAVBAR */}

        {activeMenu && !activeMenu.mega && (
          <div className="sub-navbar bg-secondary py-2">
            <div className="container">
              <ul className="sub-menu d-flex align-items-center mb-0 gap-4">
                {activeMenu.items.map((item: NormalMenuItem) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`sub-link ${
                        pathname === item.href ? "active-sub" : ""
                      }`}
                    >
                      • {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}