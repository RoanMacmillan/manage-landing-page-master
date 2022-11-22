


const modal = document.getElementById('mod');
const menu = document.getElementById('menu');

document.querySelectorAll('.mobile-btn').forEach((btn) => {


    btn.addEventListener('click', () => {

        modal.classList.toggle('active');
        menu.classList.toggle('active');
        document.getElementById('open').classList.toggle('close-menu');
        document.getElementById('close').classList.toggle('active');

    })

})


modal.addEventListener('click', (e) => {

    if (e.target !== e.currentTarget) {
  
      return;
  
  } else {
  
  modal.classList.remove('active');
  menu.classList.remove('active');
  document.getElementById('open').classList.remove('close-menu');
  document.getElementById('close').classList.remove('active');

  
  }
  })
  



  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let thumbnails = document.getElementsByClassName("thumbnail");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" test", "");
  }
    
    thumbnails[slideIndex-1].className += " test";

    slides[slideIndex-1].style.display = "block";
  }


//   document.addEventListener('keydown', function(event) {
//     if(event.keyCode == 37) {
//         plusSlides(-1)
//     }
//     else if(event.keyCode == 39) {
//         plusSlides(1)
//     }
// });





