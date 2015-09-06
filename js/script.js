$(document).ready(function(){

  // Focus
  $('#input-search').focus(function(){
    $(this).animate({
      width: '72%'
    },500);
  });

  // Blur
  $('#input-search').blur(function(){
    if ($(this).val() == '') {
      $(this).animate({
        width: '30%'
      },500);
    }
  });

});