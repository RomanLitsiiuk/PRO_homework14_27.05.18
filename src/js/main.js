window.onload = function () {
  var Slider = function(rootElement, slideCount, slideScroll) {
    this.rootElement = rootElement;
    this.list = this.rootElement.querySelector('.Gallery-line');
    this.slides = this.list.getElementsByTagName('li');
    this.leftArrow = this.rootElement.querySelector('.Slider-arrow--back');
    this.rightArrow = this.rootElement.querySelector('.Slider-arrow--next');
    this.SlideNumber = this.slides.length;
    this.slide = this.slides[0];
    this.slideWidth = this.slide.offsetWidth;
    this.slideHeight = this.slide.offsetHeight;
    this.sliderCount = slideCount;
    this.slideScroll = slideScroll;
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.position = 0;
  };
  
  Slider.prototype.size = function () {
    for (var i = 0; i < this.SlideNumber; i++) {
      this.slides[i].style.width = this.slideWidth / this.sliderCount + 'px';
      this.slides[i].style.height = this.slideHeight / this.sliderCount + 'px';
    }
    this.leftArrow.style.top = ((this.slideHeight / this.sliderCount) / 2) - 30 + 'px';
    this.rightArrow.style.top = ((this.slideHeight / this.sliderCount) / 2) - 30 + 'px';
  };
  
  Slider.prototype.back = function() {
    this.slideCalcWidth = this.slideWidth / this.sliderCount;
    this.position = Math.min(this.position + this.slideCalcWidth * this.slideScroll, 0);
    this.list.style.marginLeft = this.position + 'px';
  };
  
  Slider.prototype.next = function() {
    this.slideCalcWidth = this.slideWidth / this.sliderCount;
    this.position = Math.max(this.position - this.slideCalcWidth * this.slideScroll, -this.slideCalcWidth * (this.SlideNumber - this.sliderCount));
    this.list.style.marginLeft = this.position + 'px';
  };
  
  Slider.prototype.render = function(){
    this.size();
    this.rightArrow.addEventListener("click", this.next);
    this.leftArrow.addEventListener("click", this.back);
  };
  
  var slider = new Slider(document.getElementById('slider'), 1, 1).render();
  var slider2 = new Slider(document.getElementById('slider2'), 2, 2).render();
  var slider3 = new Slider(document.getElementById('slider3'), 3, 1).render();
};

