$(document).ready(function(){
    $(".maintitle").hide()
    $(".aparecer").hide()
    $(".maintitle").delay(1000).fadeIn(2000)
    $(".paraiso").hide()
    $(".paraiso").delay(1000).fadeIn(2500)
/* para movil */
    $(".maintitleMovil").hide()
    $(".maintitleMovil").delay(1000).fadeIn(2000)
    $(".paraisoMovil").hide()
    $(".paraisoMovil").delay(1000).fadeIn(2500)
/*
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var imagenCovidOffset = $('.imagenCovid').offset().top;
        
        if (scroll + $(window).height() > imagenCovidOffset) {
            $('.imagenBienestar').removeClass('hidden').addClass('visible');
        }
    });
    */
})

/**al hacer click en la imagen imagenCovid gira i80 grados */
document.addEventListener("DOMContentLoaded", function() {
    const imagenCovid = document.querySelector('.imagenCovid');

    imagenCovid.addEventListener('click', function() {
        this.classList.toggle('rotateY');
    });
});


/*codigo efecto entrada con scroll para las cards de pagina2.html*/
document.addEventListener('DOMContentLoaded', function () {
    function handleScroll() {
      const elements = document.querySelectorAll('.cardEspecial1');
      /*repetimos codigo para efecto por la derecha*/
      const elements2=document.querySelectorAll('.cardEspecial2');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });
/*repetimos codigo para efecto por la derecha*/
      elements2.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para verificar la posición al cargar la página
  });

  /**aparecer al pinchar en el index */

  $(document).ready(function(){
    $(".pinchar").click(function(){
        $(this).hide();
        $(".aparecer").show();
    });
});