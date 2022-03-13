

// -------------------VALIDAR POR EVENT--------------------
const form = document.getElementById('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validation();
})

const validation = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const arrEmail = [...email];
  const message = document.getElementById("message").value;

  if (name === '' || email.length === 0 || arrEmail.includes("@") === false || message.length === 0 ) {
    alert("Ingrese datos validos");
  } else {
    form.reset();
  }
}

// --------------------VALIDAR POR ONCLICK-------------------
// Se coloca onclick en el html y antes de poner el nombre de
// la función se antepone return  ademas se coloca  un return false
// en en final de la  funcion de js para que el formulario no se
// autoenvie y la página no se recargue

/*
 function validation() {
     const email = document.getElementById("email").value;
     const name = document.getElementById("name").value;
     const message = document.getElementById("message").value;
  
     if (name === '') {
       alert("Ingrese un nombre valido");
     }
 
     if (email.length === 0) {
       alert("Ingrese un email valido");
     }
  
     if (message.length === 0) {
       alert("Ingrese un texto valido");
     }

     return false
   }

   */





