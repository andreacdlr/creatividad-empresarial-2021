var btn = $('#btn-menu2')
var contentMenu = $('#menu-desplegable2');
btn.click(function () {
contentMenu.addClass('menu-active2')
})
$('#ocultar').click(function () {
contentMenu.removeClass('menu-active2')
})

$('.btn-menu-item').click(function() {
// Alamcenar la info del data en una variable
var pasosTab = $(this).data("desplegar")
$('#' + pasosTab).toggle('.list-oculto-movil-activo')
})

var id;
$('.to-deploy').on('click', function(){
  id =  $(this).data("id")
  // var id2 = $(this)
  $('#' + id).toggleClass('hidden')

})

$('.deploy-color-revert').on('click', function(){
  id =  $(this).data("id")
  var id2 = $(this)
  id2.toggleClass('active-bg-gold')
})
$('.item-program').on('click', function(){
  id =  $(this).data("redirec")
  var id2 = $(this)
  console.log(id)
  // id2.toggleClass('active-bg-gold')
})


$(document).ready(function () {
  $('html, body').hide();
  if (window.location.hash) {
    setTimeout(function () {
      $('html, body').scrollTop(0).show();
      $('html, body').animate({
        scrollTop: $(window.location.hash).offset().top - 70
      }, 1000)
    }, 0);
  }
  else {
    $('html, body').show();
  }
})


