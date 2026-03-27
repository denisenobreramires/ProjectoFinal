//_________________DECLARARAR VARIAVEIS__________________

// mudar para noite e para dia
let btnDarkMode = document.getElementById('btnDarkMode'); 

//_______________________//______________________________

// botao trocar imagem
let img = "https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png"
let imagemAtual = document.getElementById('imagemTrocar')
let btnTrocarImagem = document.getElementById('btnTrocarImagem')

//_______________________//______________________________
// Formulario Personalizado
let formPerfil = document.getElementById('formPerfil');

//_______________________//______________________________

// FRASE GATOS
//botao: é o que o utilizador clica
let btnInspiracao = document.getElementById("btnInspiracao");
// parágrafo: é onde o texto da citação vai aparecer
let citacao = document.getElementById("citacao");

//_______________________//______________________________
//COR ALEATORIA
let btnCorAleatoria = document.getElementById('btnCorAleatoria');
let seccaoHobbies = document.getElementById('seccaoHobbies');

//_______________________//______________________________



//1. Tema claro/escuro (modo dark Bootstrap)
//Meter o Botão à escuta
btnDarkMode.addEventListener('click', function() {
    //seleccionar
    let myBody = document.querySelector("body");
  
    if (myBody.classList.contains("day")) {
      myBody.classList.remove("day");
      myBody.classList.add("night");
    } else {
      myBody.classList.remove("night");
      myBody.classList.add("day");
    }
  }
)
//_______________________//______________________________
// 2.Trocar imagem principal dinamicamente
// meter o botao à escuta btnTrocar imagem
btnTrocarImagem.addEventListener('click', function() {
    if (
        imagemAtual.getAttribute("src") ==
      "./images/jumping.jpg"
    ) {
        imagemAtual.setAttribute(
        "src", img);
    } else {
        imagemAtual.setAttribute(
        "src",
        "./images/jumping.jpg",
      );
    }}
)   
//_______________________//______________________________

// 3. Adicionar novo hobby à lista
// Adicionar hobby
let btnAdicionarHobby = document.getElementById('btnAdicionarHobby');

btnAdicionarHobby.addEventListener('click', function() {
    let novoHobby = prompt('Inserir novo Hobby');
    
    if (novoHobby) {
        let novoLi = document.createElement('li');
        novoLi.textContent = novoHobby;
        novoLi.classList.add('list-group-item');
        let lista = document.getElementById('listaHobbies');
        lista.appendChild(novoLi);
    }
});


//_______________________//_____________________________

//4.Formulário de personalização do perfil juntei ao exercicios OPCIONAL 1

/* formPerfil.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let data = new FormData(this);
    let nome = data.get("nome");
    let frase = data.get("frase");
    let cor = data.get("cor");
    let foto = data.get("foto");
    
    document.getElementById("perfilNome").textContent = nome;
    document.getElementById("perfilFrase").textContent = frase;
    document.getElementById("imagemTrocar").src = foto;
    document.querySelector(".card").style.backgroundColor = cor;
}); */

//_______________________//______________________________

// 5. API - Frase de GATOS
btnInspiracao.addEventListener("click", function() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            citacao.innerText = data.fact;
        });
});

//_______________________//______________________________
// 7. Atalho com tecla Enter
document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        alert("Tem a certeza que acabou o exercício?");
    }
});


//_______________________//______________________________
// 8. Gerador de COR ALEATÓRIA

btnCorAleatoria.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let cor = "rgb(" + r + ", " + g + ", " + b + ")";
    
    seccaoHobbies.style.backgroundColor = cor;
});


//_____________________//_______________________________
// 4.Formulário de personalização do perfil
// + 1.CONTADOR DE ATUALIZAÇAO PERFIL
formPerfil.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new FormData(this);
    let nome = data.get("nome");
    let frase = data.get("frase");
    let cor = data.get("cor");
    let foto = data.get("foto");
    
    document.getElementById("perfilNome").textContent = nome;
    document.getElementById("perfilFrase").textContent = frase;
    document.getElementById("imagemTrocar").src = foto;
    document.querySelector(".card").style.backgroundColor = cor;

    // contador
    let contador = Number(localStorage.getItem("contadorPerfil")) || 0;
    contador = contador + 1;
    localStorage.setItem("contadorPerfil", contador);
    document.getElementById("contadorAtualizacoes").textContent = "Perfil atualizado " + contador + " vez(es)";
});    


//_______________________//____________________________
// 2. Botão de reset

let btnReset = document.getElementById('btnReset');

btnReset.addEventListener('click', function() {
    // repor tema
    document.querySelector("body").classList.remove("night");
    document.querySelector("body").classList.add("day");
    
    // repor imagem
    document.getElementById("imagemTrocar").src = "./images/jumping.jpg";
    
    // repor nome e frase
    document.getElementById("perfilNome").textContent = "DENISE RAMIRES";
    document.getElementById("perfilFrase").textContent = "Gosto de viajar, estar com a família e de ter tempo só para mim - porque é aí que recarrego ideias.";

    // limpar formulário
    document.querySelector(".card").style.backgroundColor = "";
    document.getElementById("formPerfil").reset();
    
    // apagar contador
    localStorage.removeItem("contadorPerfil");
    document.getElementById("contadorAtualizacoes").textContent = "- Perfil ainda não foi atualizado -";
});