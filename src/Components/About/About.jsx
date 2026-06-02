import "./About.css"

function About() {
  const estatisticas = [
    { numero: "1,5+", rotulo: "Anos de Estudo" },
    { numero: "8",    rotulo: "Projetos Feitos" },
    { numero: "4",    rotulo: "Tecnologias" },
  ]

  const tecnologias = [
    { nome: "HTML",  icone: "🌐" },
    { nome: "CSS",   icone: "🎨" },
    { nome: "JavaScript", icone: "⚡" },
    { nome: "React", icone: "⚛️" },
  ]

  return (
    <section className="sobre" id="about">
      <div className="sobre__inner">

        {/* Título da seção */}
        <div className="sobre__cabecalho">
          <span className="sobre__tag">// sobre mim</span>
          <h2 className="sobre__titulo">Quem sou eu</h2>
        </div>

        <div className="sobre__conteudo">

          {/* Texto esquerdo */}
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
            <a href="#contact" className="sobre__btn">
              Entre em contato →
            </a>
          </div>

          {/* Cards direita */}
          <div className="sobre__direita">
            <div className="sobre__stats">
              {estatisticas.map((stat) => (
                <div key={stat.rotulo} className="sobre__stat-card">
                  <span className="sobre__stat-numero">{stat.numero}</span>
                  <span className="sobre__stat-rotulo">{stat.rotulo}</span>
                </div>
              ))}
            </div>

            {/* Tecnologias */}
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
    </section>
  )
}

export default About