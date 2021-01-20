$(function () {
  'use strict'
  // Change Header Hight
  $('.header').height($(window).height());
  // Scroll To After Section
  $('.header .arrow i').on('click', function () {
    $('html , body').animate({
      scrollTop: $('.features').offset().top
    }, 1000);
  });
  // Show More Work Project
  $('.btn-more').on('click', function () {
    $('.our-work .work-item').parent().removeClass('d-none');
    $(this).fadeOut();
  });
  // Check Testimonials
  let chevronRight = $('.testimonials .container .fa-chevron-right');
  let chevronLeft = $('.testimonials .container .fa-chevron-left');
  function checkClient() {
    $('.client:first').hasClass('active') ? chevronLeft.fadeOut() : chevronLeft.fadeIn();
    $('.client:last').hasClass('active') ? chevronRight.fadeOut() : chevronRight.fadeIn();
  }
  // Trigger Function Check Client
  checkClient();
  // Click T Curosul Item To Next Slider
  $('.testimonials i').on('click', function () {
    if ($(this).hasClass('fa-chevron-right')) {
      $('.testimonials .active').fadeOut(100, function () {
        $(this).removeClass('active').next('.client').addClass('active').removeClass('d-none').fadeIn(100);
        checkClient();
      });
    } else {
      $('.testimonials .active').fadeOut(100, function () {
        $(this).removeClass('active').prev('.client').addClass('active').removeClass('d-none').fadeIn(100);
        checkClient();
      });
    }
  });
  // Add Smooth Scroll
  $('html , body').animate({scrollTop :0},800);
  var scrollButton = $('#scroll-top');
  $(window).scroll(function(){
      if($(this).scrollTop()>300){
          scrollButton.show();
      }else{
          scrollButton.hide();
      }
  });
  scrollButton.on('click',function(){
      $('html ,body').animate({
          scrollTop: 0
      },1000)
  });
  // Start Loading 
  $('.loading-overlay .spinner').fadeOut(3000,function(){
    $('body').css('overflow','auto');
    $(this).parent().fadeOut(3000,function(){
        $(this).remove();
    });
  });

























  // Tranfer Amount To Douller
  // $("#amount").keyup(function(){
  //   let amount =$(this).val();
  //   let priceDoller =$('#pricedouler').val();
  //   let finalAmount=amount/priceDoller;
  //   $('.doller').html('The Transfer Doller is ' +finalAmount.toFixed(2) + '$')
  // });
  // // Hash And Shoe Popup AFter 16 Degit
  // $('#from-card').keyup(function(){
  //   if($(this).val().length==16){
  //     let convert = $(this).val().replace(/\d{12}(\d{4})/, "************$1");
  //     $('.number-card').text(convert)
  //     $('.model-detils').css({
  //       display: 'block'
  //     });
  //   }
  // });
  // $('.btn-close').on('click',function(){
  //   $('.model-detils').css({
  //     display: 'none'
  //   });
  // });
});