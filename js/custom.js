
$(function(){


$(window).scroll(function() {

  if ($(this).scrollTop() > 1) {
    $('header').addClass("sticky");
    $('.logo').css('font-size', '0.5em');
    $('.menu').css('padding', '10px 0px');
    $('.menu a').css('font-size', '0.75em');
    $('.logo').css('background-color', '#191970');
    $('.logo').css('color', '#FFFFFF');

  } else {
    $('header').removeClass("sticky");
    $('.logo').css('font-size', '1em');
    $('.menu').css('padding', '10px 0px');
    $('.menu a').css('font-size', '1em');
    $('.logo').css('color', '#191970');
    $('.logo').css('background-color', '#FFFFFF');
  }


});


$('#topnewsbutton').click(function(){
    $('.allnews').show();
});

$('#musicbutton').click(function(){
    $('.allnews').hide();
    $('.musicNews').show();
});

$('#dramabutton').click(function(){
    $('.allnews').hide();
    $('.dramaNews').show();
});

$('#rumourbutton').click(function(){
    $('.allnews').hide();
    $('.rumourNews').show();
});

$('#netizensbutton').click(function(){
    $('.allnews').hide();
    $('.netizensNews').show();
});


});