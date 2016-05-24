$(function() {

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}



 mobileNav();
  });




  /*!
   * Scroll Sneak
   * http://mrcoles.com/scroll-sneak/
   *
   * Copyright 2010, Peter Coles
   * Licensed under the MIT licenses.
   * http://mrcoles.com/media/mit-license.txt
   *
   * Date: Mon Mar 8 10:00:00 2010 -0500
   */
  var ScrollSneak = function(prefix, wait) {
      // clean up arguments (allows prefix to be optional - a bit of overkill)
      if (typeof(wait) == 'undefined' && prefix === true) prefix = null, wait = true;
      prefix = (typeof(prefix) == 'string' ? prefix : window.location.host).split('_').join('');
      var pre_name;

      // scroll function, if window.name matches, then scroll to that position and clean up window.name
      this.scroll = function() {
          if (window.name.search('^'+prefix+'_(\\d+)_(\\d+)_') == 0) {
              var name = window.name.split('_');
              window.scrollTo(name[1], name[2]);
              window.name = name.slice(3).join('_');
          }
      }
      // if not wait, scroll immediately
      if (!wait) this.scroll();

      this.sneak = function() {
  	// prevent multiple clicks from getting stored on window.name
  	if (typeof(pre_name) == 'undefined') pre_name = window.name;

  	// get the scroll positions
          var top = 0, left = 0;
          if (typeof(window.pageYOffset) == 'number') { // netscape
              top = window.pageYOffset, left = window.pageXOffset;
          } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { // dom
              top = document.body.scrollTop, left = document.body.scrollLeft;
          } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { // ie6
              top = document.documentElement.scrollTop, left = document.documentElement.scrollLeft;
          }
  	// store the scroll
          if (top || left) window.name = prefix + '_' + left + '_' + top + '_' + pre_name;
          return true;
      }
  }

 var sneaky = new ScrollSneak(location.hostname)

$('#sneakytest').click(sneaky.sneak);


$(".contactlogo").hover(over, out);

      function over(){
      TweenMax.to("#ro2", 20, {
        rotation:360,
        transformOrigin:"50% 50%",
        repeat:-1,


      });
      }

      function out(){
      TweenMax.to("#ro2", 2, {
        rotation:0,
        transformOrigin:"50% 50%",

      });
      }




$(".socialicon").hover(over2, out2);

    function over2(){
    TweenMax.to(this, 20, {
      rotation:360,
      transformOrigin:"50% 50%",
      repeat:-1
    });
    }

    function out2(){
    TweenMax.to(this, 0.5, {
      rotation:0,
      transformOrigin:"50% 50%"
    });
    }
