const email = document.getElementById('email');
const clave = document.querySelector('#clave');
let ok = true;

function validar(){
    if (email.value === null || email.value === ""){
        alert ('debe completar el email');
        ok = false;
        }   
    if (clave.value === ""|| clave.value === ""){
        alert('Debe ingresar la clave');
        ok= false
        }
    if (!(email.value).includes('@')){
        ok=false;
        alert('El correo electronico debe llevar "@"')
    }
    
    return ok;    
}

// const form = document.querySelector('form');
// form.addEventListener('submit',function(event){
//      validar();
// })