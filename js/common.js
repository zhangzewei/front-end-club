  var  addAnimate = function (selector, animateName, shouldRmove, strongerRemove){
    $(selector).addClass('animated ' + animateName).removeClass('no-visibility');
    if(shouldRmove){
      setTimeout(function (){
        $(selector).removeClass('animated ' + animateName);
      }, 2000);
    }
    if (strongerRemove){
      setTimeout(function (){
        $(selector).removeClass('animated ' + animateName).addClass('no-visibility');
      }, 500);
    }
  };

  var shouldAnimate = function (){
    return document.documentElement.clientWidth >= 768 ? true : false;
  };

  var getScreenHeight = function (){
    return document.documentElement.clientHeight;
  };

  //得到元素与浏览器顶部的距离
  var getTopPoint = function(element){
    return element.getBoundingClientRect().top;
  };

  $(window).scroll(function(){
    var header = document.getElementById('hearder');
    var headeTop = getTopPoint(header);
    if (headeTop <= -70){
      $('.fixed-nav').css({
        'backgroundColor': '#ee6e73',
        'borderBottom': 'none',
        'top': 0,
        'z-index': 99,
      })
      addAnimate('.fixed-nav', 'fadeInDown');
    }
    if (headeTop >= 0){
      addAnimate('.fixed-nav', 'fadeOutUp', false, true);
    }
  });

  // head动画
  addAnimate('.nav', 'fadeInDown', true);
  addAnimate('.head-title', 'fadeInUp', true);
  $(".button-collapse").sideNav();
