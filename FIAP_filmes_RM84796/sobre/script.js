function Sobre(integrantes){
    let alunos = document.createElement("div")
    alunos.classList.add("alunos")
    
    let foto = document.createElement("img")
    foto.src = integrantes.foto
    foto.alt = "Foto de " + integrantes.nome
    
    let nome = document.createElement("p")
    nome.innerText = integrantes.nome

    let rm = document.createElement("p")
    rm.innerText = integrantes.rm

    alunos.appendChild(foto)
    alunos.appendChild(nome)
    alunos.appendChild(rm)

    return alunos
}
const dados = 
[
]


let perfil = document.querySelector("#integrantes")
dados.forEach((integrantes)=>{perfil.appendChild(Sobre(integrantes))})
