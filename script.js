


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
  

  // Email form validation //


const input = document.getElementById('updates');

const errorMsg = document.getElementById('error');


document.addEventListener('submit', (e) => {


  if (input.value.length > 0) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {

      errorMsg.textContent = '';
      input.style.outline = 'none';
      input.style.color = 'black';



    } else {

      errorMsg.textContent = 'Please insert a valid email';
      input.style.outline = ' 1px solid hsl(12, 88%, 59%)';
      input.style.color = 'hsl(12, 88%, 59%)';
      e.preventDefault();
    }

  } else {

    errorMsg.textContent = 'Please insert a valid email';
    input.style.outline = ' 1px solid hsl(12, 88%, 59%)';
    e.preventDefault();




  }


})

 






