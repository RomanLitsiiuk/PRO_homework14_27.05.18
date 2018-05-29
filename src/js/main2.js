window.onload = function () {
  var Slider = function(rootElement) {
    this.rootElement = rootElement;
    this.list = this.rootElement.querySelector('.Gallery-line');
    this.slides = this.list.getElementsByTagName('li');
    this.leftArrow = this.rootElement.querySelector('.Slider-arrow--back');
    this.rightArrow = this.rootElement.querySelector('.Slider-arrow--next');
    this.SlideNumber = this.slides.length;
    this.slide = this.slides[0];
    this.slideWidth = this.slide.offsetWidth;
    this.sliderCount = 1;
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.position = 0;
  };
  
  Slider.prototype.back = function() {
    this.position = Math.min(this.position + this.slideWidth, 0);
    console.log(this.position);
    this.list.style.marginLeft = this.position + 'px';
    console.log('back');
  };
  
  Slider.prototype.next = function() {
    this.position = Math.max(this.position - this.slideWidth, -this.slideWidth * (this.SlideNumber - this.sliderCount));
    console.log(this.slideWidth);
    console.log(this.position);
    this.list.style.marginLeft = this.position + 'px';
    console.log('next');
  };
  
  Slider.prototype.render = function(){
    this.rightArrow.addEventListener("click", this.next);
    this.leftArrow.addEventListener("click", this.back);
  };
  
  var slider = new Slider(document.getElementById('slider'));
  slider.render();
  console.log(slider.slides);
  var slider2 = new Slider(document.getElementById('slider2'));
  slider2.render();
};

