favicons - logo sorta thing associated with website
remix icons - open source free system symbols 



/*=============== BREAKPOINTS ===============*/

/* For small devices */
@media screen and (max-width: 340px){
  .container{
    margin-inline:1rem ;
  }
  .nav__menu{
    padding-bottom: 4rem;
  }
  .nav__list{
    gap: 1rem 1.25rem;
  }
  .skills__info{
    grid-template-columns: repeat(2, 1fr);
  }
  .projects__img{
    width: 200px;
    justify-self: center;
  }

} 

/* For medium devices */
@media screen and (min-width: 576px){
  .nav,
  .nav__menu{
    width: 380px;
  }
  .nav{
    margin: 0 auto;
  }
  .skills__container{
    justify-content: center;
  }
  .projects__container{
    width: 400px;
  }
  .projects__container{
    overflow: hidden;
  }
  .projects__container .swiper-button-prev{
    left: 1rem;
  }
  .projects__container .swiper-button-next{
    right: 1rem;
  }
}

@media screen and (min-width: 767px){
  .home__container{
    grid-template-columns: 1fr 2fr 1fr;
  }
  .home__data{
    order: 2;
  }
  .home__info:nth-child(3){
    order: 3;
    text-align: right;
  }
  .home__info{
    margin-top: 10rem;
  }
  .home__info-description{
    padding-right: 0;
  }

  .skills__container, .qualification__container, .contact__container{
    grid-template-columns: repeat(2, max-content);
  }
  
  .skills__container{
    column-gap: 5rem;
  }
  .qualification__container{
    justify-content: center;
    column-gap: 10rem;
  }

  .projects__container{
    width: 500px; 
  }

  .contact__form{
    width: 360px;
  }
  .contact__container{
    justify-content: center;
    column-gap: 8rem;
  }



}


/* For large devices */
@media screen and (min-width: 1023px){
  .header{
    top: 0;
    bottom: initial;
    background-color: var(--body-color);
    transition: .4s;
  }

  .nav{
    width: initial;
    height: calc(var(--header-height)+1.5rem);
    box-shadow: none;
    border-radius: 0;
    column-gap: 3rem;
    margin-inline: 1.5rem;
    padding: 0;
  }
  .nav__link i, .nav__toggle, .nav__close{
    display: none;
  }

  .nav__menu{
    width: initial;
    margin-left: auto;
    background-color: var(--body-color);
    transition: background .4s;
  }

  .nav__list{
    display: flex;
    column-gap: 3rem;
  }

  .nav__link{
    font-size: var(--normal-font-size);
  }

  .section{
    padding-block: 8rem 0;
  }

  .home__title{
    font-size: 2.25rem;
  }
}

@media screen and (min-width: 1048px){
  .container{
    margin-inline: auto;
  }
}

@media screen and (min-width: 1200px){
  .section__border{
    padding-bottom: 6rem;
  }
  .section__subtitle{
    margin-bottom: 5rem;
  }

  .home__title{
    font-size: var(--biggest-font-size);
  }
  .home__blob{
    width: 400px;
    height: 580px;
    border-radius: 12.5rem;

  }
  .home__perfil{
    width: 340px;
    height: 340px;
    border-radius: 10.6rem;
  }
  .home__perfil img{
    width: 320px;
  }
  .home__shape-waves{
    width: 100px;
    left: -4rem;
    top: 10rem;
  }
  .home__shape-circle{
    width: 250px;
    bottom: -1rem;
    right: -5rem;
  }
  .home__data{
    row-gap: 2.5rem;
  }
  .home_social{
    column-gap: 2rem;
  }
  .home__social-link{
    font-size: 1.5rem;
  }
  .home__info{
    grid-template-rows: repeat(3, 130px);
    row-gap: 4rem;
    margin-top: 16rem;

  }

  .skills__container{
    column-gap: 10rem;
  }
  .skills__title{
    margin-bottom: 3rem;
  }
  .skills__title i{
    font-size: 1.25rem;
  }
  .skills__name{
    font-size: var(--normal-font-size);
  }
  .skills__info{
    gap:3rem;
  }


  .qualification__container{
    column-gap: 14rem;
  }
  .qualification__title{
    margin-bottom: 3rem;
  }
  .qualification__title i{
    font-size: 1.25rem;
  }
  .qualification__name{
    font-size: var(--h3-font-size);
  }
  .qualification__img{
    width: 300px;
    left: -6rem;
    bottom: 5rem;
  }

  .projects__container{
    width: 900px;
  }
  .projects__container .swiper-button-prev,
  .projects__container .swiper-button-next{
    font-size: 3rem;
  }
  .projects__container .swiper-button-prev{
    left: -1rem;
  }
  .projects__container .swiper-button-next{
    right: -1rem;
  }
  .projects__container .swiper-slide{
    margin-bottom: 6.5rem;
  }
  .project__img{
    width: 320px;
    margin-bottom: 2rem;

  }
  


  .contact__title{
    margin-bottom: 3rem;
  }
  .contact__title i{
    font-size: 1.25rem;
  }
  .contact__info{
    row-gap: 3rem;
  }
  .contact__data-info{
    font-size: var(--normal-font-size);
  }
  .contact__form{
    row-gap: 2.5rem;
  }
  .footer__container{
    padding: 4rem 0 3rem;
  }
  .footer__list{
    column-gap: 3rem;
    margin: 3rem 0;
  }
  .footer__copy{
    margin-top: 5rem;
  }










}