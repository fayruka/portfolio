const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-800%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }