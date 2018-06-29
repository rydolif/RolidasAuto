$(function() {


//--------------------------------таблиця-сторінка-inner----------------------------
$(".star").each(function() {
  $color = $(this).find('i').length;

  if($color == 1){
    $(this).children().css({"color": "#d9e2ee"});
  } else if ($color == 2) {
    $(this).children().css({"color": "#b4c3d9"});
  } else if ($color == 3) {
    $(this).children().css({"color": "#849ec2"});
  } else if ($color == 4) {
    $(this).children().css({"color": "#497199"});
  } else {
    $(this).children().css({"color": "#ff3f49"});
  };

});


//--------------------------------таблиця-сторінка-inner----------------------------
$(".rating__title").on('click', function(e) {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next().slideUp(500);
  }
  else {
    $(this).addClass('active');
    $(".rating__row ul").not($(this).next()).slideUp(500);
    $(".rating__title").not($(this)).removeClass('active');
    $(this).next().slideDown(500);
  }
});

//--------------------------------акардіон-сторінка-inner----------------------------

$(".question__list h3").on('click', function(e) {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next().slideUp(500);
    $(this).parent().css( "padding-bottom", "20px" );
  }
  else {
    $(this).addClass('active');
    $(".question__list p").not($(this).next()).slideUp(500);
    $(".question__list h3").not($(this)).removeClass('active');
    $(this).next().slideDown(500);
  }
});

//--------------------------------акардіон-----------------------------
if ( $(window).width() < 767 ) {

  $(window).scroll(function(){
      if($(this).scrollTop()>100){
          $('.header__nav .order').css('display', 'block');
          $('.header__nav .logo img').css('display', 'none');
          $('.header__nav').css({"padding-bottom":"10px","padding-top":"10px"});
      }
      else if ($(this).scrollTop()<100){
           $('.header__nav .order').css('display', 'none');
           $('.header__nav .logo img').css('display', 'block');
          $('.header__nav').css({"padding-bottom":"20px","padding-top":"20px"});
      }
  });

  $(".list h3").on('click', function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp(500);
    }
    else {
      $(this).addClass('active');
      $(".list p").not($(this).next()).slideUp(500);
      $(".list h3").not($(this)).removeClass('active');
      $(this).next().slideDown(500);
    }
  });
};


//--------------------------------slider---------------------------------------------
var team = new Swiper('.team__container', {
  slidesPerView: 3,
  spaceBetween: 140,
  navigation: {
    nextEl: '.team__next',
    prevEl: '.team__prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    },
  },
});

var customers = new Swiper('.customers__container', {
  slidesPerView: 3,
  spaceBetween: 140,
  navigation: {
    nextEl: '.customers__next',
    prevEl: '.customers__prev',
  },
  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    },
  }
});

var portfolio = new Swiper('.portfolio__container', {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//---------------------------------img-youtube--------------------------------------------
var youtube = $('.youtube');
  $.each(youtube, function(index, el) {
    var source = "https://img.youtube.com/vi/"+ $(el).data('embed') +"/sddefault.jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener( "load", function() {
      youtube[ index ].append( image );
    }( index ) );

  $(el).on('click', function() {
    var iframe = document.createElement( "iframe" );

    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ $(this).data('embed') +"?rel=0&showinfo=0&autoplay=1" );
    $(this).innerHTML = "";
    $(this).append( iframe );
    $(this).find('.play-button').hide();
  });
});

//------------------------------гамбургер-----------------------------
$('.burger').click(function() {
  $(this).toggleClass('hamburger-active');
  $('nav').toggleClass('nav-active');
  $('header').toggleClass('header-menu');
});

//------------------------------гамбургер-----------------------------
$('.ham').click(function() {
  $(this).toggleClass('hamburger-active');
  $('.header__nav_menu').toggleClass('header__nav_menu-active');
  $('.header__nav').toggleClass('header__nav-active');
  $('header').toggleClass('header-active');
});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

  $(".calculator-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".calculator-form").find("input[name=name]").val(),
        phone: jQuery(".calculator-form").find("input[name=phone]").val(),
        link: jQuery(".calculator-form").find("input[name=link]").val(),
        type: jQuery(".calculator-form").find("select[name=type]").val(),
        make: jQuery(".calculator-form").find("select[name=make]").val(),
        year: jQuery(".calculator-form").find("select[name=year]").val(),
        bodywork: jQuery(".calculator-form").find("select[name=bodywork]").val(),
        engine: jQuery(".calculator-form").find("select[name=engine]").val(),
        kw: jQuery(".calculator-form").find("select[name=kw]").val(),
        transmission: jQuery(".calculator-form").find("select[name=transmission]").val(),
        amount: jQuery(".calculator-form").find("select[name=amount]").val(),
        mileage: jQuery(".calculator-form").find("select[name=mileage]").val(),
        country: jQuery(".calculator-form").find("select[name=country]").val(),
        vin: jQuery(".calculator-form").find("select[name=vin]").val(),
        subject: jQuery(".calculator-form").find("input[name=subject]").val()
      };
      ajaxSend('.calculator-form', t);
    }
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header-active');
      }
  });

});

//----------------------------------------preloader----------------------------------

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
});
