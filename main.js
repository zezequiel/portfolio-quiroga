// levanto el a del link de whatssap 

var a_msj_wsp = document.getElementById('WSP');
console.log(a_msj_wsp);

//  <a id="WSP" href="">Enviar Mensaje por Whatsapp</a>



function mensaje_wsp(){
  var nombre = document.getElementById("nombre")
  var email = document.getElementById("email")
  var numero = document.getElementById("numero")
  var mensaje = document.getElementById("mensaje")


  console.log(nombre);

  //console.log(nombre.value)

  var mensaje_final
  mensaje_final ="Hola! %20Mi%20nombre%20es:%20" + nombre.value +",%20" 
  mensaje_final =  mensaje_final + "%20Mi%20email%20es:%20" + email.value
  mensaje_final = mensaje_final + ",%20Mi%20numero%20de%20telefono%20es%20" + numero.value + ",%20"
  mensaje_final = mensaje_final + "%20mensaje%20:%20" + mensaje.value

  var mensaje
  mensaje = "https://api.whatsapp.com/send?phone=+5491155124846&text=" + mensaje_final 
  //Esto%20es%20una%20prueba
  a_msj_wsp.href = mensaje  
}

a_msj_wsp.addEventListener('click', mensaje_wsp)