/*let slide_data = [
    {
      'src':'img/zapchasty.jpg',
      'src_m':'img/m_slider/zapchasty.jpg',
      'title':'СПЕЦТЕХНИКА И ЗАПЧАСТИ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
      'copy':'XCMG, HOWO, SEM, CHANGLIN, SHANTUI, LIUGONG, И ДР, В НАЛИЧИИ'
    },
    {
      'src':'img/speztekhnika.jpg',
      'src_m':'img/m_slider/speztekhnika.jpg',
      'title':'СПЕЦОБОРУДОВАНИЕ И КОМПЛЕКТУЮЩИЕ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
      'copy':'ДРОБИЛЬНЫЕ МАШИНЫ, ЛИНИИ ПО ПРОИЗВОДСТВУ, БЕТОННЫЕ ЗАВОДЫ'
    },
    {
      'src':'img/new/podshipnik.jpg',
      'src_m':'img/m_slider/podshipnik.jpg',
      'title':'ПОДШИПНИКИ ИМПОРТНЫЕ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
      'copy':'ШАРИКОВЫЕ, РОЛИКОВЫЕ, СФЕРИЧЕСКИЕ, УПОРНЫЕ'
    },
    {
      'src':'img/new/metal.jpg',
      'src_m':'img/m_slider/metal.jpg',
      'title':'ИЗДЕЛИЯ ИЗ ЧЕРНЫХ МЕТАЛЛОВ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ, ИНДОНЕЗИИ',
      'copy':'ТРУБЫ, ПРОКАТ ЛИСТОВОЙ, ПРОКАТ В РУЛОНАХ, ТОЛСТОЛИСТОВАЯ СТАЛЬ'
    },
    {
      'src':'img/new/truck.jpg',
      'src_m':'img/m_slider/truck.jpg',
      'title':'ГРУЗОВЫЕ АВТО И ЗАПЧАСТИ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
      'copy':'FOTON, JAC, DONGFENG, CAMC, BAW'
    },

];

  let slides = [],
    captions = [];

  let autoplay = setInterval(function(){
    nextSlide();
  },5000);

  let container = document.getElementById('container');
  let leftSlider = document.getElementById('left-col');
  // console.log(leftSlider);
  let down_button = document.getElementById('down_button');
  // let caption = document.getElementById('slider-caption');
  // let caption_heading = caption.querySelector('caption-heading');

  down_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });

  let up_button = document.getElementById('up_button');

  up_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    previousSlide();
    autoplay;
  });

  for (let i = 0; i < slide_data.length; i++){
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');

    slide.classList.add('slide');
    if ($(window).width() > 799) {
      slide.setAttribute('style','background:url('+slide_data[i].src+') ');
    }
    else {
      slide.setAttribute('style','background:url('+slide_data[i].src_m+') ');
    }
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';

    switch(i){
      case 0:
          slide.classList.add('current');
          caption.classList.add('current-caption');
          break;
      case 1:
          slide.classList.add('next');
          caption.classList.add('next-caption');
          break;
      case slide_data.length -1:
        slide.classList.add('previous');
        caption.classList.add('previous-caption');
        break;
      default:
         break;
    }
    caption.appendChild(slide_title);
    //caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>');
    caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>' +slide_data[i].copy+ '</span></div>');
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
  }
  // console.log(slides);

  function nextSlide(){
    // caption.classList.add('offscreen');

    slides[0].classList.remove('current');
    slides[0].classList.add('previous','change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length -1;
    slides[last].classList.remove('previous');

    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption','change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');
    let last_caption = captions.length -1;

    // console.log(last);
    captions[last].classList.remove('previous-caption');

    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder);
    captions.push(captions_placeholder);
  }

  //previous slide func
  function previousSlide(){
    // caption.classList.add('offscreen');
    slides[0].classList.remove('current');
    slides[0].classList.add('next','change');
    slides[1].classList.remove('next');

    let last = slides.length -1;
    slides[2].classList.add('previous');

    slides[last].classList.remove('previous');
    slides[last].classList.add('current');

    captions[0].classList.remove('current-caption');
    captions[0].classList.add('next-caption','change');
    captions[1].classList.remove('next-caption');

    captions[2].classList.add('previous-caption');
    let last_caption = captions.length -1;

    // console.log(last);
    captions[last].classList.remove('previous-caption');
    captions[last].classList.add('current-caption');

    let placeholder = slides.pop();
    let captions_placeholder = captions.pop();
    slides.unshift(placeholder);
    captions.unshift(captions_placeholder);
  }
  //stop
  let heading = document.querySelector('.caption-heading');


  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  } */

  function window_close() {
    //$('.header_menu_mobile').removeClass("active_mobile");
    document.querySelector("body").classList.toggle("no_overflow");

    document.querySelector(".header_logo").classList.toggle("active_mobile");
    document.querySelector(".header_menu_mobile").classList.toggle("hide");
    //$('.header_logo').toggleClass('active_mobile');
    //$('.header_menu_mobile').toggle();
  }
  /* var transitionEvent = whichTransitionEvent()
  caption.addEventListener(transitionEvent, customFunction);

  function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
    console.log('animation ended');

    // Do something when the transition ends
  }*/

  /* accordions */
$(document).ready(function() {

  $('.hl_m').on('click', function() {
    window_close();
  });

  $('.buy_auto_button').on('click', function(e) {
      e.preventDefault();
      $('.flex_c').toggleClass('active_button');

      if ($(this).closest('.accordion-item').hasClass('active')) {
          $('.accordion-item').removeClass('active');
      }
      else {
          $('.accordion-item').removeClass('active');
          $(this).closest('.accordion-item').addClass('active');
      }
      // Show the content
      var $content = $(this).next();
      $content.slideToggle(100);
      $('.accordion-item .content').not($content).slideUp('normal');
  });

  $('.header_accordion_a').on('click', function(e) {
      e.preventDefault();
      $('.header_accordion_a').toggleClass('active_button');
      // Add the correct active class
      if($(this).closest('.header_accordion').hasClass('active')) {
          // Remove active classes
          $('.header_accordion').removeClass('active');
      }
      else {
          // Remove active classes
          $('.header_accordion').removeClass('active');
          // Add the active class
          $(this).closest('.header_accordion').addClass('active');
      }

      // Show the content
      var $content = $(this).next();
      $content.slideToggle(100);
      $('.header_accordion .container').not($content).slideUp('normal');
  });

  $('.burger_menu').click(function(event) {
      $('.burger_menu, .header_menu_mobile, .header_logo').toggleClass('active_mobile');
      $('.header_menu_mobile').toggle();
      document.querySelector("body").classList.toggle("no_overflow");
  });

});
/* /accordions */
var checking = false;
//в каталоге щас будем кнопки жмякать
$(document).ready(function() {
  $('.catalog_flex_button').click(function(event) {
    if ($(this).hasClass('catalog_active'))
      checking = true;
      //В общем, вот этот флаг нужен для того, чтобы когда мы второй раз кликаем по уже активному
      //элементу то он будет не только скрываться, но и убирать класс каталог актив, чтобы все стрелочки
      //и подсветочки уходили вместе с кликом по нему

    $('.catalog_flex_button').removeClass('catalog_active');
      $(this).toggleClass('catalog_active');

    if (checking == true) {
      $(this).toggleClass('catalog_active');
      checking = false;
    }

    if ($(this).hasClass('catalog_item1')) {
      $('#catalog_item1').slideToggle(500);
      }
    else {
      $('#catalog_item1').slideUp(500);
    }

    if ($(this).hasClass('catalog_item2')) {
      $('#catalog_item2').slideToggle(500);
    }
    else {
      $('#catalog_item2').slideUp(500);
    }

    if ($(this).hasClass('catalog_item3')) {
      $('#catalog_item3').slideToggle(500);
    }
    else {
      $('#catalog_item3').slideUp(500);
    }

    if ($(this).hasClass('catalog_item4')) {
      $('#catalog_item4').slideToggle(500);
    }
    else {
      $('#catalog_item4').slideUp(500);
    }

    if ($(this).hasClass('catalog_item5')) {
      $('#catalog_item5').slideToggle(500);
    }
    else {
      $('#catalog_item5').slideUp(500);
    }
  });

  $('.header_accordion_container a').click(function(event) {

    $('.catalog_flex_button').removeClass('catalog_active');


    if ($(this).hasClass('catalog_item1_h')) {
      $('#catalog_item1').show();
      $('.catalog_item1').addClass('catalog_active');
    }
    else {
      $('#catalog_item1').hide();
    }

    if ($(this).hasClass('catalog_item2_h')) {
      $('#catalog_item2').show();
      $('.catalog_item2').addClass('catalog_active');
    }
    else {
      $('#catalog_item2').hide();
    }

    if ($(this).hasClass('catalog_item3_h')) {
      $('#catalog_item3').show();
      $('.catalog_item3').addClass('catalog_active');
    }
    else {
      $('#catalog_item3').hide();
    }

    if ($(this).hasClass('catalog_item4_h')) {
      $('#catalog_item4').show();
      $('.catalog_item4').addClass('catalog_active');
    }
    else {
      $('#catalog_item4').hide();
    }

    if ($(this).hasClass('catalog_item5_h')) {
      $('#catalog_item5').show();
      $('.catalog_item5').addClass('catalog_active');
    }
    else {
      $('#catalog_item5').hide();
    }
  });
});


/*var captcha = grecaptcha.getResponse();
// 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
// Такую форму не будем отправлять на сервер.
if (!captcha.length) {
  // Выводим сообщение об ошибке
  $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
} else {
  // получаем элемент, содержащий капчу
  $('#recaptchaError').text('');
}

// 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
if ((formValid) && (captcha.length)) {
  ...
  // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
  formData.append('g-recaptcha-response', captcha);
  ...
}

// 4. Если сервер вернул ответ error, то делаем следующее...
// Сбрасываем виджет reCaptcha
grecaptcha.reset();
// Если существует свойство msg у объекта $data, то...
if ($data.msg) {
  // вывести её в элемент у которого id=recaptchaError
  $('#recaptchaError').text($data.msg);
}
*/
/*
spare parts for special equipment - spfse

SPARE PARTS FOR ENGINES - spfe

SPECIAL EQUIPMENT AND EQUIPMENT - seae

CABINS FOR SPECIAL EQUIPMENT - cfse
*/
