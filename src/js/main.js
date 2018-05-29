window.onload = function () {
  var SliderLine = document.getElementsByTagName('li');
  for (var i = 0; i < SliderLine.length; i++) {
    SliderLine[i].style.position = 'relative';
    var span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    SliderLine[i].appendChild(span);
  }

  var slideWidth = 858;
  var slideCount = 1;
  var Slider = document.getElementById('slider');
  var list = Slider.querySelector('ul');
  var listElems = Slider.querySelectorAll('li');
  var position = 0;
  
  Slider.querySelector('.Slider-arrow--back').onclick = function() {
    position = Math.min(position + slideWidth * slideCount, 0);
    list.style.marginLeft = position + 'px';
  };
  
  Slider.querySelector('.Slider-arrow--next').onclick = function() {
    position = Math.max(position - slideWidth * slideCount, -slideWidth * (listElems.length - slideCount));
    list.style.marginLeft = position + 'px';
  };
};
