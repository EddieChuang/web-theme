$(function() {
  year_init()
  slider_init()
})

function year_init() {
  $('#year').text(new Date().getFullYear())
}

function slider_init() {
  console.log($('.slider'))
  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
  })
}
