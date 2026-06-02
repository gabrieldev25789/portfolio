import { useState, useEffect } from "react"
import "./Header.css"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
  { label: "Sobre",    href: "about"    },
  { label: "Projetos", href: "projects" },
  { label: "Skills",   href: "skills"   },
  { label: "Contato",  href: "contact"  },
]

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-bracket">&lt;</span>
          dev
          <span className="header__logo-bracket">/&gt;</span>
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="header__nav-link"
              style={{ "--i": i }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="header__nav-link-num">0{i + 1}.</span>
              {link.label}
            </a>
          ))}

        </nav>

        <button
          className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header