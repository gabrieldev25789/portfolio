import "./Contact.css"

function Contact() {
  const contatos = [
    {
      titulo: "Email",
      valor: "gabrielsb1090@gmail.com",
      link: "mailto:gabrielsb1090@gmail.com",
      icone: "✉️",
    },
    {
      titulo: "WhatsApp",
      valor: "(71) 98380-9055",
      link: "https://wa.me/5571983809055",
      icone: "💬",
    },
    {
      titulo: "WhatsApp 2",
      valor: "(71) 98211-8210",
      link: "https://wa.me/5571982118210",
      icone: "💬",
    },
    {
      titulo: "LinkedIn",
      valor: "gabriel-santos",
      link: "https://www.linkedin.com/in/gabriel-santos-ab566a305/",
      icone: "💼",
    },
    {
      titulo: "Instagram",
      valor: "@gabriel_w.i.s",
      link: "https://www.instagram.com/gabriel_w.i.s/",
      icone: "📸",
    },
  ]

  return (
    <section className="contato" id="contact">
      <div className="contato__inner">

        {/* Cabeçalho */}
        <div className="contato__cabecalho">
          <span className="contato__tag">// contato</span>
          <h2 className="contato__titulo">Vamos conversar?</h2>
          <p className="contato__subtitulo">
            Estou disponível para novas oportunidades. Se você tem um projeto
            interessante ou uma vaga em aberto, entre em contato — vou adorar conversar!
          </p>
        </div>

        {/* Cards de contato */}
        <div className="contato__grid">
          {contatos.map((item) => (
            <a
              key={item.titulo}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="contato__card"
            >
              <span className="contato__card-icone">{item.icone}</span>
              <div className="contato__card-info">
                <span className="contato__card-titulo">{item.titulo}</span>
                <span className="contato__card-valor">{item.valor}</span>
              </div>
              <span className="contato__card-seta">→</span>
            </a>
          ))}
        </div>

        {/* Disponibilidade */}
        <div className="contato__disponivel">
          <span className="contato__disponivel-ponto" />
          Disponível para trabalho.
        </div>

      </div>
    </section>
  )
}

export default Contact