/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// MENU SHOW (validate if constant exists)
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN(validate if constant exists)
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
  });


/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
  },
});









/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  //check if the field has value
  if(contactName.value === '' || contactEmail.value === '' || contactProject === ''){
    //add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    //show message
    contactMessage.textContent = 'Write all the input fields 📩'
  }else{
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_rinwr1k','template_kty1jkb','#contact-form','kRl6AkZII0V5cuPSi')
        .then(() =>{
          //show message and add color
          contactMessage.classList.add('color-blue')
          contactMessage.textContent = 'Message Sent ✅'

          //remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = ''
          }, 5000)
        
        }, (error) => {
          alert('OOPS, Something went wrong while sending your message!', error)
        })

        //to clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''

  }

}
contactForm.addEventListener('submit', sendEmail)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

