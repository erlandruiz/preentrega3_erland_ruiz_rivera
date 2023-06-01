//************CAPTURANDO VARIABLES DEL FORMULARIO* ACCEDIENDO AL DOOM********//


const trabajosAmostrar = document.getElementById('trabajosAmostrar')

const form__ingresar__trabajoid = document.getElementById('form__ingresar__trabajoid')


const home__ubicacion = document.getElementById('home__ubicacion')
const home__tonelaje = document.getElementById('home__tonelaje')
const home__dias = document.getElementById('home__dias')
const ingreso__datosId = document.getElementById('ingreso__datosId')
const ingresoId = document.getElementById('ingresoId')

const home__input__ingresar = document.querySelectorAll('.home__input__ingresar')

const btnAgregarTrabajoId = document.getElementById('btnAgregarTrabajoId')

const btnAceptar = document.getElementById('btnAceptar')
const btnCancelar = document.getElementById('btnCancelar')

// const home__value_trabajosAbuscar = document.getElementById('home__value_trabajosAbuscar')

// const home__searchInput__trabajosAbuscar = document.getElementById('home__searchInput__trabajosAbuscar')

// const trabajosAbsucar = document.getElementById('trabajosAbsucar')

// const btnBuscar = document.querySelector('btnBuscar')




//************CREANDO DATOS DE LOS TRABAJOS********//
const dbTrabajos = [
  {
    id: 1,
    ubicacion: "Talara",
    tonelaje: 280020,
    diasDeTrabajo: 200,
  },
  {
    id: 2,
    ubicacion: "Lobitos",
    tonelaje: 431600,
    diasDeTrabajo: 50,
  },
  {
    id: 3,
    ubicacion: "Negra",
    tonelaje: 780340,
    diasDeTrabajo: 60,
  },
  {
    id: 4,
    ubicacion: "Cabo",
    tonelaje: 255506,
    diasDeTrabajo: 80,
  },
  {
    id: 5,
    ubicacion: "Zorritos",
    tonelaje: 890563,
    diasDeTrabajo: 90,
  },
  {
    id: 6,
    ubicacion: "Sal",
    tonelaje: 963456,
    diasDeTrabajo: 45,
  },
  {
    id: 7,
    ubicacion: "Mancora",
    tonelaje: 280900,
    diasDeTrabajo: 50,
  },
];

let trabajosArr=[]
let validarBusqueda = false // Variable para validar el ingreso de datos



 /***************CREANDO CLASE CONSTRUCTORA TRABAJOS*********/
 class Trabajos {
  constructor(id, ubicacion, tonelaje, diasDeTrabajo) {
    this.id = id;
    this.ubicacion = ubicacion;
    this.tonelaje = tonelaje;
    this.diasDeTrabajo = diasDeTrabajo;
  }
}

 /*****FUNCION PUSHTRABAJOS PARA AGREGAR EL ARRAYS DE OBEJTOS A trabajos[]*****/

 function pushTrabajos() {
  for (const trabajos of dbTrabajos) {
    trabajosArr.push(
      new Trabajos(
        trabajos.id,
        trabajos.ubicacion,
        trabajos.tonelaje,
        trabajos.diasDeTrabajo
      )
    )
  }
  // console.log(trabajosArr)
  
 }

 pushTrabajos()

//************AGREGANDO LOS DATOS AL DOM********//

function agreganDatosAlDom() {
  trabajosArr.forEach((element)=>{
    let template = `<div class="home__value_trabajosAmostrar">
    <div >
      <h1 class="home__value-number_trabajosAmostrar">
          ${element.ubicacion} <span></span></h1>
      <span class="home__value-description_trabajosAmostrar">
        Ciudad <br />
      </span>
    </div>

    <div>
      <h1 class="home__value-number_trabajosAmostrar">
          ${element.tonelaje} <span></span></h1>
      <span class="home__value-description_trabajosAmostrar">
        Tonelaje <br />
        kg.
      </span>
    </div>

    <div>
      <h1 class="home__value-number_trabajosAmostrar">
          ${element.diasDeTrabajo} <span></span></h1>
      <span class="home__value-description_trabajosAmostrar">
        Dias de <br />
        trabajo.
      </span>
    </div>
  </div> `

  trabajosAmostrar.innerHTML += template

  })
  
}

agreganDatosAlDom()




//************DETENIENDO EL COMPORTAMIENTO POR DEFECTO DEL FORMULARIO********//

form__ingresar__trabajoid.addEventListener('submit', (event)=>{
  event.preventDefault();
  
  if (validarBusqueda) {
    ingresarDatos()
  } else {
    alert('No hay datos Completados')
    form__ingresar__trabajoid.reset() //Restea el formulario
    ingreso__datosId.classList.add('ingreso__disable')
    btnAgregarTrabajoId.classList.add('buttonDisable')
   
  }//detiene el compórtamiento por defecto del fromulario
 
})

/***************TOMANDO LOS VALORES DE LOS IMPUTS********/

function ingresarDatos() {
  const ubicacion = home__ubicacion.value
  const tonelaje = home__tonelaje.value
  const dias =home__dias.value

  ingreso__datosId.classList.remove('ingreso__disable')
  ingresoId.innerHTML = ` <div >
  <h1 class="home__value-number_trabajosAmostrar">
      ${ubicacion} <span></span></h1>
  <span class="home__value-description_trabajosAmostrar">
    Ciudad <br />
  </span>
</div>

<div>
  <h1 class="home__value-number_trabajosAmostrar">
      ${tonelaje} <span></span></h1>
  <span class="home__value-description_trabajosAmostrar">
    Tonelaje <br />
    kg.
  </span>
</div>

<div>
  <h1 class="home__value-number_trabajosAmostrar">
      ${dias} <span></span></h1>
  <span class="home__value-description_trabajosAmostrar">
    Dias de <br />
    trabajo.
  </span>
</div>
</div> `

}

/***************DA INICIO A LA VALIDACION TOMANDO LOS IMPUTS CON EL QUERYSELECTOALL********/

console.log(home__input__ingresar)


home__input__ingresar.forEach((input)=>{
  
  input.addEventListener('input', ()=>{
    if (home__input__ingresar[0].value && home__input__ingresar[1].value && home__input__ingresar[2].value) {
      btnAgregarTrabajoId.classList.remove('buttonDisable')
      validarBusqueda = true
    } else {
      btnAgregarTrabajoId.classList.add('buttonDisable')
      validarBusqueda = false
    }
  })
});

/***************ACEPTANDO LOS NUEVOS INGRESOS********/

btnAceptar.addEventListener('click',()=>{
  form__ingresar__trabajoid.reset()
  ingreso__datosId.classList.add('ingreso__disable')
  btnAgregarTrabajoId.classList.add('buttonDisable')
})







//************CHANGE BACKGROUND HEADER********//
function scrollHeader(){
    const header = document.getElementById('header')
  
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/***************SWIPER POPULAR *******/
let swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32, //Distance between slides in px.
    
    grabCursor:true, //This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper
    
    centeredSlides: true, //If true, then active slide will be centered, not always on the left side.
    
    slidesPerView: 'auto', //Number of slides per view (slides visible at the same time on slider's container).

    loop: true, //Set to true to enable continuous loop mode
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  });



//************SCROLL SECTIONS ACTIVE LINK********//
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//*********** SHOW SCROLL UP*******//
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



//*********** DARK LIGHT THEME*******//

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//***********SCROLL REVEAL ANIMATION *******//
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__title,  
.popular__container,
.subscribe__container,
.footer__container`)

sr.reveal(`.home__description, .footer__info`,
 {delay: 500}
 )

 sr.reveal(`.home__search`, 
 {delay: 600}
 )



sr.reveal(`.home__images`, 
{
  delay: 800, 
  origin: 'bottom'
}
)

sr.reveal(`.logos__img`, 
{
  interval:100
}
)

