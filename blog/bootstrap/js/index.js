$(function() {
  year_init()
  carousel_init()
  video_init()
  lightbox_init()
})

function year_init() {
  $('#year').text(new Date().getFullYear())
}

function carousel_init() {
  $('.carousel').carousel({
    interval: 5000,
    pause: 'hover'
  })
}

function video_init() {
  $('.video').click(function() {
    const theModal = $(this).data('target')
    const videoSRC = $(this).attr('data-video')
    const videoSRCauto =
      videoSRC +
      '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1'
    $(theModal + ' iframe').attr('src', videoSRCauto)
    $(theModal + ' button.close').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC)
    })
  })
}
function lightbox_init() {
  $(document).on('click', '[data-toggle="lightbox"]', function(e) {
    e.preventDefault()
    $(this).ekkoLightbox()
  })
}
