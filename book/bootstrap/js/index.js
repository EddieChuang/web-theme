$(function() {
  $('#year').text(new Date().getFullYear())

  $('body').scrollspy({ target: '#main-nav' })

  $('#main-nav a').on('click', function(e) {
    e.preventDefault()

    const hash = this.hash
    if (hash !== '') {
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        () => {
          window.location.hash = hash
        }
      )
    }
  })
})
