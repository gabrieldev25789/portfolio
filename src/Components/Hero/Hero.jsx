import "./Hero.css"
import { useEffect, useState } from "react"
import foto from"../../assets/foto/foto.jpg"

const cargos = ["Desenvolvedor Front End", "Buscando evoluir", "Solucionador de Problemas"]

function Hero() {
  const [indiceCargo, setIndiceCargo] = useState(0)
  const [exibido, setExibido] = useState("")
  const [deletando, setDeletando] = useState(false)

useEffect(() => {
  const cargoAtual = cargos[indiceCargo]
  let temporizador

  if (!deletando && exibido.length < cargoAtual.length) {
    temporizador = setTimeout(() => setExibido(cargoAtual.slice(0, exibido.length + 1)), 80)
  } else if (!deletando && exibido.length === cargoAtual.length) {
    temporizador = setTimeout(() => setDeletando(true), 2000)
  } else if (deletando && exibido.length > 0) {
    temporizador = setTimeout(() => setExibido(exibido.slice(0, -1)), 45)
  } else if (deletando && exibido.length === 0) {
    temporizador = setTimeout(() => {
      setDeletando(false)
      setIndiceCargo((i) => (i + 1) % cargos.length)
    }, 0)
  }

  return () => clearTimeout(temporizador)
}, [exibido, deletando, indiceCargo]) 

  return (
    <section className="hero" id="inicio">
      {/* Fundo decorativo */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__inner">
        {/* Conteúdo esquerdo */}
        <div className="hero__content">
          <p className="hero__saudacao">Olá, eu sou</p>
          <h1 className="hero__nome">Gabriel Santos</h1>

          {/* Texto animado */}
          <div className="hero__cargo">
            <span className="hero__cargo-texto">{exibido}</span>
            <span className="hero__cursor" />
          </div>

          <p className="hero__bio">
            Crio experiências digitais modernas com código limpo e design cuidadoso.
            Transformando ideias em realidade, um projeto de cada vez.
          </p>

          {/* Botões */}
          <div className="hero__acoes">
            <a href="#projetos" className="hero__btn hero__btn--primario">
              Ver Projetos
              <span className="hero__btn-seta">→</span>
            </a>
            <a href="/curriculo.pdf" download className="hero__btn hero__btn--secundario">
              Baixar Currículo
            </a>
          </div>

          {/* Redes sociais */}
          <div className="hero__redes">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hero__rede-link">GitHub</a>
            <span className="hero__rede-ponto" />
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero__rede-link">LinkedIn</a>
            <span className="hero__rede-ponto" />
            <a href="mailto:voce@email.com" className="hero__rede-link">Email</a>
          </div>
        </div>

        {/* Foto direita */}
        <div className="hero__foto-wrap">
          <div className="hero__foto-anel" />
          <div className="hero__foto-container">
            <img
              src={foto}
              alt="João Silva"
              className="hero__foto"
            />
          </div>
          <div className="hero__foto-badge">
            <span className="hero__badge-ponto" />
            Disponível para trabalho
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="hero__scroll">
        <span>Role</span>
        <div className="hero__scroll-linha" />
      </div>
    </section>
  )
}

export default Hero