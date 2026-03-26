// mudar para noite e para dia
let btnDarkMode = document.getElementById('btnDarkMode'); 

// botao trocar imagem
let img = "https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png"
let imagemAtual = document.getElementById('imagemTrocar')
let btnTrocarImagem = document.getElementById('btnTrocarImagem')



//mudar para noite e para dia
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


//meter o botao à escuta btnTrocar imagem
btnTrocarImagem.addEventListener('click', function() {
    if (
        imagemAtual.getAttribute("src") ==
      "/images/jumping.jpg"
    ) {
        imagemAtual.setAttribute(
        "src", img);
    } else {
        imagemAtual.setAttribute(
        "src",
        "./images/jumping.jpg",
      );
    }
}
)   


//Adicionar hobbies

