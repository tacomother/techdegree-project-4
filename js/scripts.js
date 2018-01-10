// Lightbox Option Change

lightbox.option({
  showImageNumberLabel: false,
  wrapAround: true
});

// Search

$('#filter-search').keyup(function() {
  var searchVal = $(this).val().toLowerCase();
  var cache = [];

  $('.gallery a').each(function() {

    if($(this).attr('data-title').search(new RegExp(searchVal, 'i')) < 0) {
      $(this).fadeOut();
    } else {
      $(this).fadeIn();
    }
  });
});
