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
  href?: string;
  mega?: boolean;
  items?: any[];
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
    href: "/amidstnature",
    paths: ["/amidstnature"],
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

      {/* ================= MOBILE NAV ================= */}

      <nav
        className={`navbar-animated position-fixed top-0 w-100 navbar navbar-expand-lg d-md-none shadow-sm ${isVisible ? "navbar-visible navbar-dark bg-primary" : "navbar-dark bg-primary"
          }`}
        style={{ zIndex: 999 }}
      >
        <div className="container-fluid">

          {/* LOGO */}
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

          {/* TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav text-center w-100">

              {/* HOME */}
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              {/* DYNAMIC MENUS */}
              {Object.entries(subMenus).map(([key, menu]) => (
                <li key={key} className="nav-item dropdown">

                  {/* MAIN LINK */}
                  <Link
                    href={menu.href || "#"}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle={menu.items ? "dropdown" : ""}
                  >
                    {menu.label}
                  </Link>

                  {/* SUBMENU */}
                  {menu.items && (
                    <ul className="dropdown-menu text-center">
                      {menu.items.map((item: NormalMenuItem) => (
                        <li key={item.href}>
                          <Link href={item.href} className="dropdown-item">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}

              {/* STATIC LINKS */}
              <li className="nav-item">
                <Link href="/blog" className="nav-link">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/channel-partner" className="nav-link">
                  Channel Partner
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/career" className="nav-link">
                  Careers
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ================= DESKTOP NAV ================= */}

      <div
        className={`navbar-animated position-fixed top-0 w-100 d-none d-md-block ${isVisible ? "navbar-visible" : ""
          } ${isTop ? "bg-black" : "bg-light"}`}
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
                className={`px-3 text-decoration-none ${isTop ? "text-white" : "text-dark"
                  }`}
              >
                Home
              </Link>
            </li>

            {Object.entries(subMenus).map(([key, menu]) => (
              <li key={key} className="has-sub position-relative">
                <Link
                  href={menu.href || "#"}
                  className={`menu-link px-3 text-decoration-none ${isTop ? "text-white" : "text-dark"
                    }`}
                >
                  {menu.label}
                  <span className="menu-arrow"></span>
                </Link>

                {/* NORMAL DROPDOWN */}

                {menu.items && !menu.mega && (
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
                className={`px-3 text-decoration-none ${isTop ? "text-white" : "text-dark"
                  }`}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/channel-partner"
                className={`px-3 text-decoration-none ${isTop ? "text-white" : "text-dark"
                  }`}
              >
                Channel Partners
              </Link>
            </li>

            <li>
              <Link
                href="/career"
                className={`px-3 text-decoration-none ${isTop ? "text-white" : "text-dark"
                  }`}
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`px-3 text-decoration-none ${isTop ? "text-white" : "text-dark"
                  }`}
              >
                Contact Us
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

        {activeMenu && activeMenu.items && !activeMenu.mega && (
          <div className="sub-navbar bg-secondary py-2 d-none">
            <div className="container">
              <ul className="sub-menu d-flex align-items-center mb-0 gap-4">
                {activeMenu.items.map((item: NormalMenuItem) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`sub-link ${pathname === item.href ? "active-sub" : ""
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