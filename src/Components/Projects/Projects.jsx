import "./Projects.css"

import print1 from "../../assets/prints/print1.jpg"
import print2 from "../../assets/prints/print2.png"
import print3 from "../../assets/prints/print3.png"
import print4 from "../../assets/prints/print4.jpg"
import print5 from "../../assets/prints/print5.jpg"
import print6 from "../../assets/prints/print6.jpg"

function Projects() {
  const projetos = [
    {
      titulo: "Rick & Morty Explorer",
      descricao: "Aplicação que consome a API pública de Rick and Morty para explorar personagens, episódios e localizações com filtros dinâmicos e tratamento de erros.",
      tecnologias: ["JavaScript", "HTML", "CSS", "API REST"],
      github: "https://github.com/gabrieldev25789/Api-Rick-Morty",
      demo: "https://api-rick-morty.vercel.app/",
      preview: print1,
      destaque: true,
    },
    {
      titulo: "GrizzyFlyes",
      descricao: "App de viagens em React para explorar destinos, filtrar por localização, selecionar datas, gerenciar carrinho e finalizar pedidos com cálculo dinâmico.",
      tecnologias: ["React", "JavaScript", "CSS"],
      github: "https://github.com/gabrieldev25789/projeto-viagem",
      demo: "https://projeto-viagem-weld.vercel.app/",
      preview: print2,
      destaque: true,
    },
    {
      titulo: "GameVault",
      descricao: "Gerenciador de biblioteca de jogos com autenticação, favoritos, busca, ordenação e upload de imagens com persistência via localStorage.",
      tecnologias: ["React", "JavaScript", "CSS", "React Router"],
      github: "https://github.com/gabrieldev25789/CRUD-jogos",
      demo: "https://crud-jogos-phi.vercel.app/",
      preview: print3,
      destaque: true,
    },
    {
      titulo: "Loja de Produtos",
      descricao: "Loja com filtros de promoção e categoria, carrinho de compras e descontos por forma de pagamento.",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/gabrieldev25789/Loja-produtos",
      demo: "https://loja-produtos-alpha.vercel.app/",
      preview: print4,
      destaque: false,
    },
    {
      titulo: "Calculadora IMC",
      descricao: "Calculadora de IMC avançada com metas de perda/ganho de peso e plano de treino semanal personalizado para cada objetivo.",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/gabrieldev25789/calculadora-imc-avancada",
      demo: "https://calculadora-imc-avancada.vercel.app/",
      preview: print5,
      destaque: false,
    },
    {
      titulo: "Sistema Hospital",
      descricao: "CRUD de pacientes com controle de acesso via token, validações de formulário e gerenciamento completo de dados.",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/gabrieldev25789/sistema-hospital",
      demo: "https://sistema-hospital-nu.vercel.app/",
      preview: print6,
      destaque: false,
    },
  ]

  return (
    <section className="projetos" id="projects">
      <div className="projetos__inner">

        {/* Cabeçalho */}
        <div className="projetos__cabecalho">
          <span className="projetos__tag">// projetos</span>
          <h2 className="projetos__titulo">O que eu construí</h2>
          <p className="projetos__subtitulo">
            Uma seleção dos projetos que desenvolvi durante minha jornada de aprendizado.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="projetos__grid">
          {projetos.map((projeto) => (
            <div
              key={projeto.titulo}
              className={`projetos__card ${projeto.destaque ? "projetos__card--destaque" : ""}`}
            >
              {projeto.destaque && (
                <span className="projetos__badge">⭐ Destaque</span>
              )}

              {/* Preview */}
              <div className="projetos__card-preview">
                <img
                  src={projeto.preview}
                  alt={`Preview ${projeto.titulo}`}
                  className="projetos__card-img"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="projetos__card-overlay">
                  <div className="projetos__card-overlay-links">
                    <a href={projeto.github} target="_blank" rel="noreferrer" className="projetos__overlay-btn">
                      GitHub
                    </a>
                    {projeto.demo && (
                      <a href={projeto.demo} target="_blank" rel="noreferrer" className="projetos__overlay-btn projetos__overlay-btn--demo">
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="projetos__card-corpo">
                <div className="projetos__card-topo">
                  <h3 className="projetos__card-titulo">{projeto.titulo}</h3>
                  <div className="projetos__card-links">
                    <a href={projeto.github} target="_blank" rel="noreferrer" className="projetos__card-link" title="Ver código">
                      ↗
                    </a>
                    {projeto.demo && (
                      <a href={projeto.demo} target="_blank" rel="noreferrer" className="projetos__card-link projetos__card-link--demo" title="Ver demo">
                        
                      </a>
                    )}
                  </div>
                </div>

                <p className="projetos__card-descricao">{projeto.descricao}</p>

                <div className="projetos__card-techs">
                  {projeto.tecnologias.map((tech) => (
                    <span key={tech} className="projetos__tech">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link pro GitHub */}
        <div className="projetos__rodape">
          <a
            href="https://github.com/gabrieldev25789"
            target="_blank"
            rel="noreferrer"
            className="projetos__github-link"
          >
            Ver todos os repositórios no GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects