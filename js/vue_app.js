var app = new Vue({
    el: '#app',
    data: {
        visible: true
    },
    methods: {

    },
    created() {
        if (window.innerWidth > 799) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    }

})

new Vue({
	el: '#slides',
  data: {
      images: [
        'img/zapchasty.jpg',
        'img/speztekhnika.jpg',
        'img/new/podshipnik.jpg',
        'img/new/metal.jpg',
        'img/new/truck.jpg'
      ],
      images_for_mobile_version: [
        'img/m_slider/zapchasty.jpg',
        'img/m_slider/speztekhnika.jpg',
        'img/m_slider/podshipnik.jpg',
        'img/m_slider/metal.jpg',
        'img/m_slider/truck.jpg'
      ],
      text: [
        'СПЕЦТЕХНИКА И ЗАПЧАСТИ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
        'СПЕЦОБОРУДОВАНИЕ И КОМПЛЕКТУЮЩИЕ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
        'ПОДШИПНИКИ ИМПОРТНЫЕ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ',
        'ИЗДЕЛИЯ ИЗ ЧЕРНЫХ МЕТАЛЛОВ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ, ИНДОНЕЗИИ',
        'ГРУЗОВЫЕ АВТО И ЗАПЧАСТИ ИЗ КИТАЯ, ТАИЛАНДА, МАЛАЙЗИИ'
      ],
      subtext: [
        'XCMG, HOWO, SEM, CHANGLIN, SHANTUI, LIUGONG, И ДР, В НАЛИЧИИ',
        'ДРОБИЛЬНЫЕ МАШИНЫ, ЛИНИИ ПО ПРОИЗВОДСТВУ, БЕТОННЫЕ ЗАВОДЫ',
        'ШАРИКОВЫЕ, РОЛИКОВЫЕ, СФЕРИЧЕСКИЕ, УПОРНЫЕ',
        'ТРУБЫ, ПРОКАТ ЛИСТОВОЙ, ПРОКАТ В РУЛОНАХ, ТОЛСТОЛИСТОВАЯ СТАЛЬ',
        'FOTON, JAC, DONGFENG, CAMC, BAW'
      ],

      currentNumber: 0,
      timer: null
  },

  ready: function () {
      this.startRotation();
  },

  methods: {
      startRotation: function() {
          this.timer = setInterval(this.next, 3000);
      },

      stopRotation: function() {
          clearTimeout(this.timer);
          this.timer = null;
      },

      next: function() {
          this.currentNumber += 1
      },
      prev: function() {
          this.currentNumber -= 1
      }
  }
});


/*
    if ($(window).width() > 799) {
      slide.setAttribute('style','background:url('+slide_data[i].src+') ');
    }
    else {
      slide.setAttribute('style','background:url('+slide_data[i].src_m+') ');
    }
*/
