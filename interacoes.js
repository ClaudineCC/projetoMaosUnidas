
//PAGINA INDEX apresentação de slides automatica    Claudine//

// let slideIndex = 0;
// showSlides();

//  function showSlides() {
//    let i;
//    let slides = document.getElementsById("slides");
//    for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) {slideIndex = 1}
//    slides[slideIndex-1].style.display = "block";
//    setTimeout(showSlides, 3000);  //muda imagem a cada 3s
//  }   




// CARROSEL PAG INDEX  claudine

let slidesIndex = 1;
showSlides(slidesIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slidesIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slidesIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slidesIndex = 1 }
  if (n < 1) { slidesIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slidesIndex - 1].style.display = "block";
  dots[slidesIndex - 1].className += " active";
}






//ACCORDION PAGINA INDEX   claudine

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var painel = this.nextElementSibling;
    if (painel.style.display === "block") {
      painel.style.display = "none";
    } else {
      painel.style.display = "block";
    }
  });
}






// MENU HAMBURGUER header mobile

function clickMenu() {
  var x = document.getElementById("iconMenu");
  if (x.className === "material-symbols-outlined") {
    x.className += "responsive";
  } else {
    x.className = "material-symbols-outlined";
  }
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}






// function myFunction() {           //claudine      
//   var x = document.getElementById("menu");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }









// Modal  LOGIN Camila  e Claudine



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







// //  Modal  CADASTRE-SE linkado ao botao do modal login  claudine




//  var modal = document.getElementById("myModal1");
//  var btn = document.getElementById("modalLinka");
//  var span = document.getElementsByClassName("close")[0];

//  btn.onclick = function() {
//  modal.style.display = "block";
//  }

//  span.onclick = function() {
//  modal.style.display = "none";
//  }

//  window.onclick = function(event) {
//  if (event.target == modal) {
//  modal.style.display = "none";
//  }
//   }



//   //  Modal  CADASTRE-SE linkado a frase "se cadastre e envie sua receita", na pag index  claudine




//  var modal = document.getElementById("cadastre");
//  var btn = document.getElementById("modalLinka");
//  var span = document.getElementsByClassName("close")[0];

//  btn.onclick = function() {
//  modal.style.display = "block";
//  }

//  span.onclick = function() {
//  modal.style.display = "none";
//  }

//  window.onclick = function(event) {
//  if (event.target == modal) {
//  modal.style.display = "none";
//  }
//   }

















// //MODAL + DICAS  COR "BRANCO"   - DANIELLE

 var modal = document.getElementById("myModal");
 var btn = document.getElementById("openModalBtn");
 var span = document.getElementsByClassName("close")[0];

 btn.onclick = function() {
   modal.style.display = "block";
 }

 span.onclick = function() {
   modal.style.display = "none";
 }

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }


//MODAL INCENTIVO COR "VERMELHO"   - DANIELLE

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("openModalBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
