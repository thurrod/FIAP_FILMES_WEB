function Card(filme) {
    let card = document.createElement("div")
    card.classList.add("card")

    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "Poster do filme " + filme.titulo

    let titulo = document.createElement("p")
    titulo.innerText = filme.titulo

    let divNota = document.createElement("div")
    divNota.classList.add("nota")

    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"

    let nota = document.createElement("span")
    nota.innerText = filme.nota

    divNota.appendChild(estrela)
    divNota.appendChild(nota)

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "Detalhes"
    botao.href = filme.botao


    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

const dados =
    [{
        poster: "https://www.themoviedb.org/t/p/original/orOyVAUxVN1ncz2EcrMDcTd25e8.jpg",
        titulo: "Maze Runner",
        nota: "7",
        botao: "detalhes/detalhes.html"
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg",
        titulo: "Transformers",
        nota: "7,5",
        botao: "#"
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/pt/f/f3/Pacific_Rim_FilmPoster.jpeg",
        titulo: "Pacific Rim",
        nota: "8",
        botao: "#"
    },
    {
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
        titulo: "Interstellar",
        nota: "9",
        botao: "#"
    }
    ]


let filmes = document.querySelector("#filmes")
dados.forEach((filme) => { filmes.appendChild(Card(filme)) })
