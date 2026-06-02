import "./Footer.css"

function Footer() {
  const anoAtual = new Date().getFullYear()

  const links = [
    { nome: "Início",    href: "#home" },
    { nome: "Sobre",     href: "#about" },
    { nome: "Projetos",  href: "#projects" },
    { nome: "Skills",    href: "#skills" },
    { nome: "Contato",   href: "#contact" },
  ]

  const redes = [
    { nome: "GitHub",    href: "https://github.com/gabrieldev25789" },
    { nome: "LinkedIn",  href: "https://www.linkedin.com/in/gabriel-santos-ab566a305/" },
    { nome: "Instagram", href: "https://www.instagram.com/gabriel_w.i.s/" },
  ]

  return (
    <footer className="rodape">
      <div className="rodape__inner">

        {/* Logo */}
        <a href="#home" className="rodape__logo">
          <span className="rodape__logo-bracket">&lt;</span>
          dev
          <span className="rodape__logo-bracket">/&gt;</span>
        </a>

        {/* Links de navegação */}
        <nav className="rodape__nav">
          {links.map((link) => (
            <a key={link.nome} href={link.href} className="rodape__nav-link">
              {link.nome}
            </a>
          ))}
        </nav>

        {/* Redes sociais */}
        <div className="rodape__redes">
          {redes.map((rede) => (
            <a
              key={rede.nome}
              href={rede.href}
              target="_blank"
              rel="noreferrer"
              className="rodape__rede-link"
            >
              {rede.nome}
            </a>
          ))}
        </div>

        {/* Divisor */}
        <div className="rodape__divisor" />

        {/* Copyright */}
        <div className="rodape__bottom">
          <span className="rodape__copyright">
            © {anoAtual} Gabriel Santos. Todos os direitos reservados.
          </span>

        </div>

      </div>
    </footer>
  )
}

export default Footer