import { useState } from "react"
import "./About.css"

function About() {
  const [modalAberto, setModalAberto] = useState(false)

  const estatisticas = [
    { numero: "1,4", rotulo: "Anos de Estudo" },
    { numero: "8",   rotulo: "Projetos Feitos" },
    { numero: "4",   rotulo: "Tecnologias" },
  ]

  const tecnologias = [
    { nome: "HTML",       icone: "🌐" },
    { nome: "CSS",        icone: "🎨" },
    { nome: "JavaScript", icone: "⚡" },
    { nome: "React",      icone: "⚛️" },
  ]

  return (
    <section className="sobre" id="about">
      <div className="sobre__inner">

        <div className="sobre__cabecalho">
          <span className="sobre__tag">// sobre mim</span>
          <h2 className="sobre__titulo">Quem sou eu</h2>
        </div>

        <div className="sobre__conteudo">

          <div className="sobre__texto">
            <p className="sobre__paragrafo">
              Olá! Sou um desenvolvedor front-end em início de carreira,
              buscando sempre criar interfaces modernas e funcionais.
              Nos últimos <strong>16 meses</strong> venho estudando e
              construindo projetos pra solidificar meu conhecimento na prática.
            </p>
            <p className="sobre__paragrafo">
              Estou em busca da minha <strong>primeira oportunidade como
              desenvolvedor Front End</strong>, disposto a aprender em equipe,
              contribuir com projetos reais e crescer rápido.
            </p>

            <div className="sobre__acoes">
              <button
                className="sobre__historia-btn"
                onClick={() => setModalAberto(true)}
              >
                Como cheguei até aqui ↗
              </button>
              <a href="#contact" className="sobre__btn">
                Entre em contato →
              </a>
            </div>
          </div>

          <div className="sobre__direita">
            <div className="sobre__stats">
              {estatisticas.map((stat) => (
                <div key={stat.rotulo} className="sobre__stat-card">
                  <span className="sobre__stat-numero">{stat.numero}</span>
                  <span className="sobre__stat-rotulo">{stat.rotulo}</span>
                </div>
              ))}
            </div>

            <div className="sobre__techs">
              <span className="sobre__techs-titulo">Stack atual</span>
              <div className="sobre__techs-lista">
                {tecnologias.map((tech) => (
                  <div key={tech.nome} className="sobre__tech-item">
                    <span className="sobre__tech-icone">{tech.icone}</span>
                    <span className="sobre__tech-nome">{tech.nome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="modal__overlay" onClick={() => setModalAberto(false)}>
          <div className="modal__caixa" onClick={(e) => e.stopPropagation()}>
            <button className="modal__fechar" onClick={() => setModalAberto(false)}>✕</button>
            <span className="modal__tag">// minha história</span>
            <h3 className="modal__titulo">Como cheguei até aqui</h3>
        <p className="modal__texto">
          Tudo que aprendi veio com a mão na massa. Em 2024 vivi a ilusão de que seria fácil
          e não evoluí como queria. Em 2025 decidi que precisava <strong>sofrer pra crescer</strong> —
          passei o ano escrevendo código, errando, quebrando a cabeça em exercícios e projetos,
          até dominar JavaScript de verdade.
        </p>
        <p className="modal__texto">
          Em 2026 comecei devagar, mas finalizei projetos e mergulhei no React. Sempre busquei
          criar <strong>projetos que agregam algo na vida de alguém</strong>, não só os genéricos
          de todo portfólio.
        </p>
        <p className="modal__texto">
          Sobre IA: uso pra estruturar componentes e escrever CSS, mas na lógica prefiro
          resolver sozinho primeiro. Quando peço ajuda, exijo entender cada linha.
          Acho que é assim que se cresce de verdade.
        </p>
          </div>
        </div>
      )}

    </section>
  )
}

export default About