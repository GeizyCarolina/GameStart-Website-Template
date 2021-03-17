
// json

const noticia = [
  {
    nome: "Lorem ipsum dolor",
    data: "01/01/2021",
    resumo: "Lorem ipsum dolor sit amet. Duis posuere est purus, mattis placerat lorem semper id. In mattis neque sem, vel feugiat mi cursus at. Duis vulputate ex sed urna aliquet, in ullamcorper diam condimentum. Maecenas ultricies, dolor non tempus luctus, libero elit feugiat diam, vel ultrices mauris eros eu est. Proin sed ligula",
  },
  {
    nome: "Lorem ipsum dolor",
    data: "01/01/2021",
    resumo: "Lorem ipsum dolor sit amet. Duis posuere est purus, mattis placerat lorem semper id. In mattis neque sem, vel feugiat mi cursus at. Duis vulputate ex sed urna aliquet, in ullamcorper diam condimentum. Maecenas ultricies, dolor non tempus luctus, libero elit feugiat diam, vel ultrices mauris eros eu est. Proin sed ligula",

  },
  {
    nome: "Lorem ipsum dolor",
    data: "01/01/2021",
    resumo: "Lorem ipsum dolor sit amet. Duis posuere est purus, mattis placerat lorem semper id. In mattis neque sem, vel feugiat mi cursus at. Duis vulputate ex sed urna aliquet, in ullamcorper diam condimentum. Maecenas ultricies, dolor non tempus luctus, libero elit feugiat diam, vel ultrices mauris eros eu est. Proin sed ligula",

  }
];

function InserirNoticia(noticia){
  return `
  
    <div class="caixa-noticia">
        <h3>${noticia.nome}</h3>
        <p class="data-noticia">
            ${noticia.data}
        </p><br><br>
        <p class="text-noticia">
            ${noticia.resumo}
        </p>
        <button class="btn"><i class="fas fa-plus-circle"></i></button>
    </div>`;
}

var rec_noticia = document.getElementById("areanoticia");
rec_noticia.innerHTML += `${noticia.map(InserirNoticia).join("")}`;

// navegação sidebar

let btn_navbar = document.getElementById('btn-hamburger');
btn_navbar.addEventListener('click',function(event){

    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('show');    
})

let btn_fechar_sidebar = document.querySelector('.btn-fechar-sidebar');
btn_fechar_sidebar.addEventListener('click',function(){
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('show');
})



// Slick carrosel 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};


// Modal Login

function Modal(){
  
  let container_modal = document.querySelector('.container-modal');
  container_modal.classList.add('show-modal');
}

function FecharModal(){
  let fechar_modal = document.querySelector('.container-modal');
  fechar_modal.classList.remove('show-modal');
}

