import "./Projects.css"
import { useState } from "react"

import print1 from "../../assets/prints/print1.jpg"
import print2 from "../../assets/prints/print2.png"
import print3 from "../../assets/prints/print3.png"
import print4 from "../../assets/prints/print4.jpg"
import print5 from "../../assets/prints/print5.jpg"
import print6 from "../../assets/prints/print6.jpg"
import print7 from "../../assets/prints/print7.jpg"
import print8 from "../../assets/prints/print8.jpg"


function Projects() {
  const [modalProjeto, setModalProjeto] = useState(null)

const projetos = [
  {
    titulo: "Rick & Morty Explorer",
    descricao: "Aplicação que consome a API pública de Rick and Morty para explorar personagens, episódios e localizações com filtros dinâmicos e tratamento de erros.",
    tecnologias: ["JavaScript", "HTML", "CSS", "API REST"],
    github: "https://github.com/gabrieldev25789/Api-Rick-Morty",
    demo: "https://api-rick-morty.vercel.app/",
    preview: print1,
    destaque: true,
    aprendizado: "Aprendi a trabalhar com paginação, consumir uma API com grande volume de dados e aplicar filtros dinâmicos diretamente nos resultados da requisição.",
    ideia: "Rick and Morty é minha animação favorita e há tempos eu queria explorar essa API. Além de ser excelente para aprendizado, foi uma forma de unir estudo com algo que realmente gosto.",
    dificuldade: "O maior desafio foi lidar com múltiplas requisições simultâneas que acontecem em certas partes do sistema, sem travar a interface.",
  },
  {
    titulo: "Projeto de viagem",
    descricao: "App de viagens em React para explorar destinos, filtrar por localização, selecionar datas, gerenciar carrinho e finalizar pedidos com cálculo dinâmico.",
    tecnologias: ["React", "JavaScript", "CSS"],
    github: "https://github.com/gabrieldev25789/projeto-viagem",
    demo: "https://projeto-viagem-weld.vercel.app/",
    preview: print2,
    destaque: true,
    aprendizado: "Foi o projeto em que mais evoluí em React. Pratiquei componentização, gerenciamento de estado com useState, passagem de props e filtros reativos.",
    ideia: "Sempre achei esse tipo de projeto interessante porque agrega algo real — é um mini simulador de site de viagens, não só um exercício genérico.",
    dificuldade: "O começo foi difícil porque ainda estava engatinhando em React. O useState me deu bastante trabalho até eu entender como o fluxo de estado funciona de verdade.",
  },
  {
    titulo: "Biblioteca de jogos",
    descricao: "Gerenciador de biblioteca de jogos com autenticação, favoritos, busca, ordenação e upload de imagens com persistência via localStorage.",
    tecnologias: ["React", "JavaScript", "CSS", "React Router"],
    github: "https://github.com/gabrieldev25789/CRUD-jogos",
    demo: "https://crud-jogos-phi.vercel.app/",
    preview: print3,
    destaque: true,
    aprendizado: "Aprendi a trabalhar com React Router, persistência via localStorage, filtros e busca em tempo real.",
    ideia: "Um projeto pra quem curte videogame. No futuro pretendo evoluí-lo com back-end e banco de dados para usar no dia a dia.",
    dificuldade: "O maior problema foi no deploy — me deparei com erros que nunca havia enfrentado antes e precisei debugar do zero.",
  },
  {
    titulo: "Loja",
    descricao: "Loja com filtros de promoção e categoria, carrinho de compras e descontos por forma de pagamento.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gabrieldev25789/Loja-produtos",
    demo: "https://loja-produtos-alpha.vercel.app/",
    preview: print4,
    destaque: false,
    aprendizado: "Pratiquei filtragem de produtos por categoria e promoção, e aprendi a acumular e calcular valores dinamicamente no carrinho.",
    ideia: "Um mini simulador de loja — um projeto comum, mas que treina bem lógica de carrinho e interação com o usuário.",
    dificuldade: "A parte mais complicada foi garantir que o carrinho acumulasse os produtos e recalculasse os valores corretamente a cada atualização.",
  },
  {
    titulo: "Calculadora IMC avançada",
    descricao: "Calculadora de IMC avançada com metas de perda/ganho de peso e plano de treino semanal personalizado para cada objetivo.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gabrieldev25789/calculadora-imc-avancada",
    demo: "https://calculadora-imc-avancada.vercel.app/",
    preview: print5,
    destaque: false,
    aprendizado: "Aprendi bastante sobre manipulação do DOM e refatoração de código — foi um projeto onde reescrevi partes inteiras para deixar mais limpo.",
    ideia: "Peguei um projeto simples e adicionei complexidade: além do IMC, o usuário recebe metas e um plano de treino personalizado.",
    dificuldade: "O responsivo ainda tem alguns problemas. Também senti bastante a dificuldade natural de quem ainda está no começo com JavaScript.",
  },
  {
    titulo: "Sistema de Hospital",
    descricao: "CRUD de pacientes com controle de acesso via token, validações de formulário e gerenciamento completo de dados.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gabrieldev25789/sistema-hospital",
    demo: "https://sistema-hospital-nu.vercel.app/",
    preview: print6,
    destaque: false,
    aprendizado: "Aprendi a gerar tabelas dinamicamente, persistir dados com localStorage e implementar edição e exclusão de registros.",
    ideia: "Queria construir um CRUD completo e a ideia de um sistema hospitalar surgiu naturalmente — simples, mas com bastante lógica envolvida.",
    dificuldade: "Editar e excluir pacientes corretamente, mantendo a tabela atualizada e o localStorage sincronizado, foi o ponto mais trabalhoso.",
  },
  {
    titulo: "Api TMDB",
    descricao: "Projeto que consome a API do TMDB (The Movie Database) para exibir informações sobre filmes e séries. (Projeto em inglês)",
    tecnologias: ["JavaScript", "HTML", "CSS", "API REST"],
    github: "https://github.com/gabrieldev25789/projeto-api-tmdb",
    demo: "https://projeto-api-tmdb.vercel.app/",
    preview: print8,
    destaque: false,
    aprendizado: "Pratiquei consumo de API, filtragem de dados e separação de responsabilidades na lógica do projeto.",
    ideia: "A TMDB é uma das APIs mais famosas para projetos front-end — foi uma escolha natural pra consolidar o que eu sabia sobre requisições.",
    dificuldade: "Esse foi um projeto mais tranquilo. Não enfrentei grandes bloqueios, o que foi um sinal de que estava evoluindo.",
  },
  {
    titulo: "Api receitas",
    descricao: "Projeto front-end que consome uma API de receitas e exibe informações detalhadas sobre cada prato. (Projeto em inglês)",
    tecnologias: ["JavaScript", "HTML", "CSS", "API REST"],
    github: "https://github.com/gabrieldev25789/Pratos-Receitas-API",
    demo: "https://pratos-receitas-api.vercel.app/",
    preview: print7,
    destaque: false,
    aprendizado: "Foi meu primeiro projeto consumindo uma API. Aprendi o básico de fetch, como acessar os dados da resposta e exibi-los na tela.",
    ideia: "Escolhi uma API simples justamente porque estava começando — queria entender o fluxo de requisição antes de partir para algo mais complexo.",
    dificuldade: "A dificuldade foi a natural de quem está fazendo isso pela primeira vez: entender a estrutura da resposta e acessar os dados certos.",
  },
]

  const infoCards = [
    { chave: "aprendizado", label: "O que aprendi",       icone: "📚" },
    { chave: "ideia",       label: "Como tive essa ideia", icone: "💡" },
    { chave: "dificuldade", label: "O que foi mais difícil", icone: "🔥" },
  ]

  return (
    <section className="projetos" id="projects">
      <div className="projetos__inner">

        <div className="projetos__cabecalho">
          <span className="projetos__tag">// projetos</span>
          <h2 className="projetos__titulo">O que eu construí</h2>
          <p className="projetos__subtitulo">
            Uma seleção dos projetos que desenvolvi durante minha jornada de aprendizado.
          </p>
        </div>

        <div className="projetos__grid">
          {projetos.map((projeto) => (
            <div
              key={projeto.titulo}
              className={`projetos__card ${projeto.destaque ? "projetos__card--destaque" : ""}`}
            >
              {projeto.destaque && (
                <span className="projetos__badge">⭐ Destaque</span>
              )}

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

              <div className="projetos__card-corpo">
                <div className="projetos__card-topo">
                  <h3 className="projetos__card-titulo">{projeto.titulo}</h3>
                  <div className="projetos__card-links">
                    <a href={projeto.github} target="_blank" rel="noreferrer" className="projetos__card-link" title="Ver código">↗</a>
                    {projeto.demo && (
                      <a href={projeto.demo} target="_blank" rel="noreferrer" className="projetos__card-link projetos__card-link--demo" title="Ver demo"> </a>
                    )}
                  </div>
                </div>

                <p className="projetos__card-descricao">{projeto.descricao}</p>

                <div className="projetos__card-techs">
                  {projeto.tecnologias.map((tech) => (
                    <span key={tech} className="projetos__tech">{tech}</span>
                  ))}
                </div>

                {/* Botões de insight */}
                <div className="projetos__insights-btns">
                  {infoCards.map(({ chave, label, icone }) => (
                    <button
                      key={chave}
                      className="projetos__insight-btn"
                      onClick={() => setModalProjeto({ projeto, aba: chave })}
                    >
                      {icone} {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

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

      {/* Modal */}
      {modalProjeto && (
        <div className="modal__overlay" onClick={() => setModalProjeto(null)}>
          <div className="modal__caixa" onClick={(e) => e.stopPropagation()}>
            <button className="modal__fechar" onClick={() => setModalProjeto(null)}>✕</button>
            <span className="modal__tag">// {modalProjeto.projeto.titulo}</span>
            
            {/* Abas */}
            <div className="modal__abas">
              {infoCards.map(({ chave, label, icone }) => (
                <button
                  key={chave}
                  className={`modal__aba ${modalProjeto.aba === chave ? "modal__aba--ativa" : ""}`}
                  onClick={() => setModalProjeto((prev) => ({ ...prev, aba: chave }))}
                >
                  {icone} {label}
                </button>
              ))}
            </div>

            <p className="modal__texto">
              {modalProjeto.projeto[modalProjeto.aba]}
            </p>
          </div>
        </div>
      )}

    </section>
  )
}

export default Projects