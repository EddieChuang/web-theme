$(function() {
  console.log('document init')
  $('#year').text(new Date().getFullYear())

  $('.navbar__toggler').click(() => {
    $('.navbar__collapse').slideToggle(1000, () => {
      $('.navbar__collapse').css('display', '')
      $('.navbar__collapse').toggleClass('navbar__collpase--show')
    })
  })
})
