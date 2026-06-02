import "./Skills.css"

function Skills() {
  const categorias = [
    {
      titulo: "Front-end",
      icone: "🖥️",
      skills: [
        { nome: "HTML",       nivel: "Intermediário" },
        { nome: "CSS",        nivel: "Intermediário" },
        { nome: "JavaScript", nivel: "Intermediário" },
        { nome: "React",      nivel: "Intermediário" },
      ],
    },
    {
      titulo: "Ferramentas",
      icone: "🛠️",
      skills: [
        { nome: "Git",     nivel: "Intermediário" },
        { nome: "GitHub",  nivel: "Intermediário" },
        { nome: "Vite",    nivel: "Básico" },
        { nome: "VS Code", nivel: "Intermediário" },
      ],
    },
    {
      titulo: "Soft Skills",
      icone: "🤝",
      skills: [
        { nome: "Trabalho em equipe",    nivel: "⭐⭐⭐" },
        { nome: "Comunicação",           nivel: "⭐⭐⭐" },
        { nome: "Aprendizado rápido",    nivel: "⭐⭐⭐" },
        { nome: "Resolução de problemas", nivel: "⭐⭐⭐" },
        { nome: "Inglês Intermediário", nivel: "⭐⭐⭐" },
      ],
      soft: true,
    },
    {
      titulo: "Próximo Passo",
      icone: "🚀",
      proximo: true,
      skills: [
        { nome: "TypeScript",           nivel: "Em breve" },
      ],
    },
  ]

  const nivelCor = {
    "Básico":         "nivel--basico",
    "Intermediário":  "nivel--intermediario",
    "Em breve":       "nivel--proximo",
    "Em progresso":   "nivel--progresso",
  }

  return (
    <section className="skills" id="skills">
      <div className="skills__inner">

        {/* Cabeçalho */}
        <div className="skills__cabecalho">
          <span className="skills__tag">// skills</span>
          <h2 className="skills__titulo">Minhas habilidades</h2>
          <p className="skills__subtitulo">
            Tecnologias, ferramentas e habilidades que desenvolvi ao longo da minha jornada.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="skills__grid">
          {categorias.map((categoria) => (
            <div
              key={categoria.titulo}
              className={`skills__card ${categoria.proximo ? "skills__card--proximo" : ""} ${categoria.soft ? "skills__card--soft" : ""}`}
            >
              <div className="skills__card-cabecalho">
                <span className="skills__card-icone">{categoria.icone}</span>
                <h3 className="skills__card-titulo">{categoria.titulo}</h3>
              </div>

              <ul className="skills__lista">
                {categoria.skills.map((skill) => (
                  <li key={skill.nome} className="skills__item">
                    <span className="skills__nome">{skill.nome}</span>
                    {categoria.soft ? (
                      <span className="skills__estrelas">{skill.nivel}</span>
                    ) : (
                      <span className={`skills__nivel ${nivelCor[skill.nivel]}`}>
                        {skill.nivel}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {categoria.proximo && (
                <p className="skills__proximo-texto">
                  Focado em evoluir constantemente e expandir meu repertório técnico.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills