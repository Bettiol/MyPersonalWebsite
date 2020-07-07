/*
 * @Author: Bettiol
 * @Email:  luca.bettiol.92@gmail.com
 * @Filename: scripts.js
 * @Copyright: Copyright (c) 2020 by Bettiol Luca. All Rights Reserved.
 */

$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20)
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});
