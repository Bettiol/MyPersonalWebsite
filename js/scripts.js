/*
 * @Author: Luca Bettiol
 * @Date:   2020-07-02T14:11:00+02:00
 * @Email:  luca.bettiol.92@gmail.com
 * @Filename: scripts.js
 * @Last modified by:   Luca Bettiol
 * @Last modified time: 2020-07-02T14:33:59+02:00
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
});
