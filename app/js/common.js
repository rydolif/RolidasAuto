$(function() {

$( function() {
    $( ".nav__list" ).menu();
} );

//----------------------------------форма здобавляням полів-----------------------------------

$("#pluse-link").on('click', function(index, el) {

  $('.pluse-link').append('<input type="text" name="" placeholder="Вставьте сюда ссылку на запчасть">').fadeIn('slow');

});

$(".add-detail").on('click', function() {
  $(".spare-parts__wrap").clone().appendTo(".spare-parts__add");
});


//-------------------------скорость якоря---------------------------------------
$(".header__nav_list").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 100}, 'slow', 'swing');
});

$(".spare-parts__container").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 100}, 'slow', 'swing');
});

$(".navigation div").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 100}, 'slow', 'swing');

    $('.header__nav_menu-active').removeClass('header__nav_menu-active');
    $('.ham').removeClass('hamburger-active');
});

//--------------------------------таблиця-сторінка-inner-color---------------------------
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


//--------------------------------таблиця-сторінка-inner-акардеон---------------------------
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
  }
  else {
    $(this).addClass('active');
    $(".question__item div").not($(this).next()).slideUp(500);
    $(".question__list h3").not($(this)).removeClass('active');
    $(this).next().slideDown(500);
  }
});

//--------------------------------вместо-логотіпа-кнопка-----------------------------
if ( $(window).width() < 767 ) {

  $(window).scroll(function(){
      if($(this).scrollTop()>100){
          $('.header__nav .order').css('display', 'block');
          $('.header__nav .logo img').css('display', 'none');
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
  $('input[type="tel"]').mask('000-000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");


  $(".portfolio-form").each(function(index, el) {
    $(el).addClass('portfolio-form-' + index);

    $('.portfolio-form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.portfolio-form-' + index).find("input[name=name]").val(),
          phone: jQuery('.portfolio-form-' + index).find("input[name=phone]").val(),
          subject: jQuery('.portfolio-form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.portfolio-form-' + index, t);
      }
    });

  });

  $(".contact-form").validate({
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
        name: jQuery(".contact-form").find("input[name=name]").val(),
        phone: jQuery(".contact-form").find("input[name=phone]").val(),
        subject: jQuery(".contact-form").find("input[name=subject]").val(),
      };
      ajaxSend('.contact-form', t);
    }
  });

  $(".contact-form--two").validate({
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
        name: jQuery(".contact-form--two").find("input[name=name]").val(),
        phone: jQuery(".contact-form--two").find("input[name=phone]").val(),
        subject: jQuery(".contact-form--two").find("input[name=subject]").val(),
      };
      ajaxSend('.contact-form--two', t);
    }
  });


  $(".leave-form").validate({
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
        name: jQuery(".leave-form").find("input[name=name]").val(),
        phone: jQuery(".leave-form").find("input[name=phone]").val(),
        subject: jQuery(".leave-form").find("input[name=subject]").val(),
      };
      ajaxSend('.leave-form', t);
    }
  });

  $(".call-back").validate({
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
        name: jQuery(".call-back").find("input[name=name]").val(),
        phone: jQuery(".call-back").find("input[name=phone]").val(),
        subject: jQuery(".call-back").find("input[name=subject]").val(),
      };
      ajaxSend('.call-back', t);
    }
  });

  $(".order-form").validate({
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
        name: jQuery(".order-form").find("input[name=name]").val(),
        phone: jQuery(".order-form").find("input[name=phone]").val(),
        subject: jQuery(".order-form").find("input[name=subject]").val(),
      };
      ajaxSend('.order-form', t);
    }
  });

  $(".more-form").validate({
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
        name: jQuery(".more-form").find("input[name=name]").val(),
        phone: jQuery(".more-form").find("input[name=phone]").val(),
        subject: jQuery(".more-form").find("input[name=subject]").val(),
      };
      ajaxSend('.more-form', t);
    }
  });

  $(".modal-form").validate({
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
        name: jQuery(".modal-form").find("input[name=name]").val(),
        phone: jQuery(".modal-form").find("input[name=phone]").val(),
        subject: jQuery(".modal-form").find("input[name=subject]").val(),
      };
      ajaxSend('.modal-form', t);
    }
  });

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
        model: jQuery(".calculator-form").find("select[name=model]").val(),
        type: jQuery(".calculator-form").find("select[name=type]").val(),
        make: jQuery(".calculator-form").find("select[name=make]").val(),
        year: jQuery(".calculator-form").find("select[name=year]").val(),
        bodywork: jQuery(".calculator-form").find("select[name=bodywork]").val(),
        engine: jQuery(".calculator-form").find("select[name=engine]").val(),
        kw: jQuery(".calculator-form").find("input[name=kw]").val(),
        transmission: jQuery(".calculator-form").find("select[name=transmission]").val(),
        amount: jQuery(".calculator-form").find("input[name=amount]").val(),
        mileage: jQuery(".calculator-form").find("input[name=mileage]").val(),
        country: jQuery(".calculator-form").find("select[name=country]").val(),
        vin: jQuery(".calculator-form").find("input[name=vin]").val(),
        subject: jQuery(".calculator-form").find("input[name=subject]").val()
      };
      ajaxSend('.calculator-form', t);
    }
  });

  $(".spare-parts-form").validate({
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
        name: jQuery(".spare-parts-form").find("input[name=name]").val(),
        phone: jQuery(".spare-parts-form").find("input[name=phone]").val(),
        link: jQuery(".spare-parts-form").find("input[name=link]").val(),
        type: jQuery(".spare-parts-form").find("select[name=type]").val(),
        details: jQuery(".spare-parts-form").find("select[name=details]").val(),
        mark: jQuery(".spare-parts-form").find("select[name=mark]").val(),
        model: jQuery(".spare-parts-form").find("select[name=model]").val(),
        year: jQuery(".spare-parts-form").find("select[name=year]").val(),
        body: jQuery(".spare-parts-form").find("select[name=body]").val(),
        fuel: jQuery(".spare-parts-form").find("select[name=fuel]").val(),
        dynamic: jQuery(".spare-parts-form").find("input[name=dynamic[]]").val(),
        subject: jQuery(".spare-parts-form").find("input[name=subject]").val()
      };
      ajaxSend('.spare-parts-form', t);
    }
  });

  $("button").on("click", function(){
    setTimeout(function() {
      $('.form label').hide();
    }, 3000);
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

// $(window).on('load', function(){
//   $('.preloader').delay(1000).fadeOut('slow');
// });
