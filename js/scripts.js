//-----Efecto de label

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, idx) => `
		<span style="transition-delay:${idx * 50}ms"> ${letter}</span>`
    )
    .join("");
});

//-----------------------------------------------------

let boton = document.getElementById("register");

boton.addEventListener("click", inicio)
let mainContenedor = document.getElementById("allContainer")

function inicio()
{
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("password", document.getElementById("password").value);
  nombre = localStorage.getItem("name")
  contrasena = localStorage.getItem("password")
	
	mainContenedor.innerHTML = ""
	myUser();
}

function myUser() {

  nombre = localStorage.getItem("name");
  contrasena = localStorage.getItem("password");
  welcome()
}

function welcome()
{  
	Swal.fire({
    icon: 'success',
    title: `Bienvenida `+ `${nombre}!`,
    })
  options()
}

function options()
{

  mainContenedor.innerHTML= `
  <div class="container">
        <div class="col">
          <div class="col containerContenido">
            <p id="pregPresupuesto"></p>
            <p>
              <select id="dropPrecio">
                <option>Selecciona el rango</option>
                <option value="pre1">200$-500$</option>
                <option value="pre2">501$-600$</option>
                <option value="pre3">601$-700$</option>
                <option value="pre4">701$ a más</option>
              </select>
            </p>
            <p id="pregPais"></p>
            <p id="pPais"></p>

          </div>
        </div>
      </div>`
      pregPresupuesto.innerHTML = `Por favor escoge un rango del presupuesto estimado (en USD): `;

  dropPrecio.onchange = () => {
  if (dropPrecio.options[dropPrecio.selectedIndex].innerText === "200$-500$") {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>        
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else if (
    dropPrecio.options[dropPrecio.selectedIndex].innerText === "501$-600$"
  ) {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>
        <option value="Colombia"> Colombia </option>
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else if (
    dropPrecio.options[dropPrecio.selectedIndex].innerText === "601$-700$"
  ) {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>
        <option value="Colombia"> Colombia </option>
        <option value="Brasil"> Brasil </option>
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else if (
    dropPrecio.options[dropPrecio.selectedIndex].innerText === "701$ a más"
  ) {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>
        <option value="Colombia"> Colombia </option>
        <option value="Brasil"> Brasil </option>
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else {
    pregPais.innerHTML = ``;
    pPais.innerHTML = ``;
  }
};
}

function mostrarResultado() {
  let presupuesto = document.getElementById("dropPrecio").value;
  let pais = document.getElementById("dropPais").value;
  let formu = document.getElementById("allContainer");
  formu.innerHTML = "";
  let cards = document.createElement("div");

  //change background theme for countries 
  if (pais== "Argentina") 
  {
      document.getElementById("cuerpo").style.backgroundImage = "url('img/argentina.jpg')";
  }
   if (pais== "Peru") 
  {
      document.getElementById("cuerpo").style.backgroundImage = "url('img/peru.jpg')";
  }
   if (pais== "Colombia") 
  {
      document.getElementById("cuerpo").style.backgroundImage = "url('img/colombia.jpg')";
  }
   if (pais== "Brasil") 
  {
      document.getElementById("cuerpo").style.backgroundImage = "url('img/brasil.jpg')";
  }

  if ((pais == "Argentina" || pais == "Peru") && presupuesto == "pre1") {
    cards.innerHTML = ` 
    <div id="cont"> 
            <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver más</a>
      </div>
      <div class="wrapper">
          <div class="card">
            <img src="img/paisaje.jpg">
            <div class="info">
              <h1>Paquete 1</h1>
              <p>Hotel + Restaurante + Transporte +<br> Tour turístico</p>
              <a href="#" type="button" id="butPack" class="botn" onClick="toasty()">Select</a>
            </div>
          </div>
                <div class="card">
            <img src="img/paisaje2.jpg">
            <div class="info">
              <h1>Paquete 2</h1>
              <p>Hotel + Restaurante + Transporte +<br> Tour turístico</p>
              <a href="#" type="button" id="butPack" class="botn" onClick="toasty()">Select</a>
            </div>
          </div>
                <div class="card">
            <img src="img/paisaje3.jpg">
            <div class="info">
              <h1>Paquete 3</h1>
              <p>Hotel + Restaurante + Transporte +<br> Tour turístico</p>
              <a href="#" type="button" id="butPack" class="botn" onClick="toasty()">Select</a>
            </div>
          </div>
                <div class="card">
            <img src="img/paisaje4.jpg">
            <div class="info">
              <h1>Paquete 4</h1>
              <p>Hotel + Restaurante + Transporte +<br> Tour turístico</p>
              <a href="#" type="button" id="butPack" class="botn" onClick="toasty()">Select</a>
            </div>
          </div>
                <div class="card">
            <img src="img/paisaje5.jpg">
            <div class="info">
              <h1>Paquete 5</h1>
              <p>Hotel + Restaurante + Transporte +<br> Tour turístico</p>
              <a href="#" type="button" id="butPack" class="botn" onClick="toasty()">Select</a>
            </div>
          </div> 
        </div>
    </div>`;
  } else if ((pais == "Argentina" || pais == "Peru") && presupuesto == "pre2") {
    cards.innerHTML = `   
        <div id="cont"> 
      <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver paquete</a>
      </div>  
  <div class="wrapper">
      <div class="card">
        <img src="img/paisaje.jpg">
        <div class="info">
          <h1>Paquete 1</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
      
      <div class="card">
        <img src="img/paisaje2.jpg">
        <div class="info">
          <h1>Paquete 2</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
    </div>
    </div>`;
  } else if (pais == "Colombia" && presupuesto == "pre2") {
    cards.innerHTML = ` 
            <div id="cont"> 
      <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver paquete</a>
      </div>    
  <div class="wrapper">
      <div class="card">
        <img src="img/paisaje.jpg">
        <div class="info">
          <h1>Paquete 1</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
      </div>
  `;
  } else if (
    (pais == "Argentina" || pais == "Peru" || pais == "Colombia") &&
    presupuesto == "pre3"
  ) {
    cards.innerHTML = `   
                <div id="cont"> 
      <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver paquete</a>
      </div>  
  <div class="wrapper">
      <div class="card">
        <img src="img/paisaje.jpg">
        <div class="info">
          <h1>Paquete 1</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
      
      <div class="card">
        <img src="img/paisaje2.jpg">
        <div class="info">
          <h1>Paquete 2</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
    </div>
    </div>`;
  } else if (
    (pais == "Argentina" || pais == "Peru" || pais == "Colombia") &&
    presupuesto == "pre4"
  ) {
    cards.innerHTML = `  
                    <div id="cont"> 
      <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver paquete</a>
      </div>  
  <div class="wrapper">
      <div class="card">
        <img src="img/paisaje.jpg">
        <div class="info">
          <h1>Paquete 1</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
      
      <div class="card">
        <img src="img/paisaje2.jpg">
        <div class="info">
          <h1>Paquete 2</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
    </div>
    </div>`;
  } else if (pais == "Brasil" && presupuesto == "pre3") {
    cards.innerHTML = ` 
    <div id="cont"> 
      <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver paquete</a>
      </div>     
  <div class="wrapper">
      <div class="card">
        <img src="img/paisaje.jpg">
        <div class="info">
          <h1>Paquete 1</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
      </div>`;
  } else if (pais == "Brasil" && presupuesto == "pre4") {
    cards.innerHTML = `
    <div id="cont"> 
      <div class="buttonTravel">
            <a href="#" type="button" id="butPack" class="botn" onClick="carrito()">Ver paquete</a>
      </div>      
  <div class="wrapper">
      <div class="card">
        <img src="img/paisaje.jpg">
        <div class="info">
          <h1>Paquete 1</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
            <div class="card">
        <img src="img/paisaje2.jpg">
        <div class="info">
          <h1>Paquete 2</h1>
          <p>Hotel + Restaurante + Transporte + Tour turístico</p>
          <a href="#"type="button"  id="butPack" class="botn" onClick="toasty()">Select</a>
        </div>
      </div>
      </div>
      `;
  } else {
    alert("Hola");
  }
  formu.appendChild(cards);
}

function toasty() {

  Toastify({
    text: "Paquete agregado!",
    oldestFirst: true,
    duration: 2000,
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function () { }, // Callback after click
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",

    },
  }).showToast();

}

function carrito()
{
  let cleanCont = document.getElementById("cont");
  cleanCont.innerHTML="";
  let finalCar = document.createElement("div");
  finalCar.innerHTML = 
  `
  <div class="barCar" id="carro">
      <p>Tu paquete ha sido separado satisfactoriamente. Estás a 1 click de disfrutarlo!</p>
      <a href="#"type="button"  class="botnDlt" onClick="confirmacion()">Eliminar</a>
      <a href="#"type="button"  class="botnAcp" onClick="afirmativo()">Confirmar</a>
  </div>
  `
  cleanCont.appendChild(finalCar);
}

function confirmacion()
{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Estás segur@?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, elimínalo',
    cancelButtonText: 'No, cancela!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Eliminado!',
        'Tu paquete ha sido eliminado',
        'success'
      )
      options()
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu paquete reservado está a salvo',
        'error'
      )
    }
  })
}
function afirmativo()
{
  Swal.fire({
 // position: 'top-end',
  icon: 'success',
  title: 'Muchas gracias!',
  text: 'Tu paquete ha sido reservado!',
  showConfirmButton: false,
  timer: 2000
  })
  let cleanCar = document.getElementById("carro");
  cleanCar.innerHTML="";
}