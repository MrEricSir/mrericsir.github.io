$(function() {
  var $btn = $("nav.greedy-nav .greedy-nav__toggle");
  var $vlinks = $("nav.greedy-nav .visible-links");
  var $hlinks = $("nav.greedy-nav .hidden-links");
  var BREAKPOINT = 768;

  // Store original links in order
  var originals = [];
  $vlinks.children().each(function() {
    originals.push($(this).clone(true));
  });

  function update() {
    var narrow = $(window).width() < BREAKPOINT;

    $vlinks.empty();
    $hlinks.empty();

    if (narrow) {
      $.each(originals, function(i, el) {
        $hlinks.append(el.clone(true));
      });
      $btn.removeClass('hidden');
      $hlinks.addClass('hidden');
      $btn.removeClass('close');
    } else {
      $.each(originals, function(i, el) {
        $vlinks.append(el.clone(true));
      });
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  $btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
  });

  $hlinks.on('click', 'a', function() {
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
  });

  update();
  $(window).resize(update);
});
