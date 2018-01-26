$('.dev-img').hover(
  (event) => {
    $(event.currentTarget).removeClass('hm-black-light');
    $(event.currentTarget).addClass('hm-black-strong');
  },
  (event) => {
    $(event.currentTarget).removeClass('hm-black-strong');
    $(event.currentTarget).addClass('hm-black-light');
  });

$('#proj1').on('click', (event) => {
  $('.clicked-dev-img').removeClass('clicked-dev-img');
  $(event.currentTarget).addClass('clicked-dev-img');
  $('.clickedText').hide();
  $('.clickedText').removeClass('clickedText');
  $('.showText').find('#p1-txt').addClass('clickedText');
  $('.clickedText').show();
});

$('#proj2').on('click', (event) => {
  $('.clicked-dev-img').removeClass('clicked-dev-img');
  $(event.currentTarget).addClass('clicked-dev-img');
  $('.clickedText').hide();
  $('.clickedText').removeClass('clickedText');
  $('.showText').find('#p2-txt').addClass('clickedText');
  $('.clickedText').show();
});

$('#proj3').on('click', (event) => {
  $('.clicked-dev-img').removeClass('clicked-dev-img');
  $(event.currentTarget).addClass('clicked-dev-img');
  $('.clickedText').hide();
  $('.clickedText').removeClass('clickedText');
  $('.showText').find('#p3-txt').addClass('clickedText');
  $('.clickedText').show();
});

$('#proj4').on('click', (event) => {
  $('.clicked-dev-img').removeClass('clicked-dev-img');
  $(event.currentTarget).addClass('clicked-dev-img');
  $('.clickedText').hide();
  $('.clickedText').removeClass('clickedText');
  $('.showText').find('#p4-txt').addClass('clickedText');
  $('.clickedText').show();
});

$('#proj5').on('click', (event) => {
  $('.clicked-dev-img').removeClass('clicked-dev-img');
  $(event.currentTarget).addClass('clicked-dev-img');
  $('.clickedText').hide();
  $('.clickedText').removeClass('clickedText');
  $('.showText').find('#p5-txt').addClass('clickedText');
  $('.clickedText').show();
});
