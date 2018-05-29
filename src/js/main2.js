window.onload = function () {
  var Slider = function(rootElement) {
    this.rootElement = rootElement;
    this.list = this.rootElement.querySelector('.Gallery-line');
    this.slides = this.list.getElementsByTagName('li');
    this.leftArrow = this.rootElement.querySelector('.Slider-arrow--back');
    this.rightArrow = this.rootElement.querySelector('.Slider-arrow--next');
    this.SlideCounter = this.slides.length;
    this.slide = this.slides[0];
    this.slideWidth = this.slide.offsetWidth;
    this.sliderCount = 1;
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  };
  
  Slider.prototype.back = function(event) {
    alert('Back');
    position = Math.min(position + this.slideWidth, 0);
    list.style.marginLeft = position + 'px';
  };
  
  Slider.prototype.next = function(event) {
    alert('Next');
    position = Math.max(position - this.slideWidth, 0);
    list.style.marginLeft = position + 'px';
  };
  
  Slider.prototype.render = function(){
    this.rightArrow.addEventListener("click", this.next);
    this.leftArrow.addEventListener("click", this.back);
  };
  
  var slider = new Slider(document.getElementById('slider'));
  slider.render();
  console.log(slider.slide);
  console.log(slider.slides);
};

