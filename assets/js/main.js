//////////////////////
// MOBILE NAV
//////////////////////


function mobileNav(top1, duration1, easing1){

    var mobileNav2 = Sizzle('.mobile-nav');

    Velocity(mobileNav2,{
      top: top1,
    },{
      duration: duration1,
      easing: easing1
    });
}


var mobilenav = Sizzle('.mobile-nav-toggle');

   for (var i=0;i<mobilenav.length;i++){

         mobilenav[i].addEventListener('click', function() {


               function hasClass(element, cls) {
                   return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
               }



                  var thetoggle = document.getElementById("thetoglee");

                   if( hasClass( thetoggle , "is-open" ) ) {
                      thetoggle.classList.remove('is-open');
                      mobileNav("-100%", 1100, "spring");
                   } else {
                     thetoggle.classList.add('is-open');
                      mobileNav("0%", 1400, "spring");

                  }
         });

   }



//////////////////////
// scroll sneak
//////////////////////

  var ScrollSneak = function(prefix, wait) {
      if (typeof(wait) == 'undefined' && prefix === true) prefix = null, wait = true;
      prefix = (typeof(prefix) == 'string' ? prefix : window.location.host).split('_').join('');
      var pre_name;

      this.scroll = function() {
          if (window.name.search('^'+prefix+'_(\\d+)_(\\d+)_') == 0) {
              var name = window.name.split('_');
              window.scrollTo(name[1], name[2]);
              window.name = name.slice(3).join('_');
          }
      }
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

//$('#sneakytest').click(sneaky.sneak);


 if (document.getElementById('sneakytest')) {
   document.getElementById('sneakytest').onclick = sneaky.sneak;
 }



//////////////////////
// CONTACT
//////////////////////

function rotating($obj, $dur, $rot, $repeat){
  TweenMax.to($obj, $dur, {
    rotation: $rot,
    transformOrigin:"50% 50%",
    repeat: $repeat,
  });
}


var contactlogo = document.getElementById('logologo');

contactlogo.addEventListener('mouseover', function() {
    rotating("#ro2", 20, 360, -1);
});

contactlogo.addEventListener('mouseout', function() {
    rotating("#ro2", 2, 0, 0);
});


var socialicon = document.querySelectorAll('.socialicon');

for (var i=0;i<socialicon.length;i++){
  socialicon[i].addEventListener('mouseover', function() {
      rotating(this, 20, 360, -1);
  });
  socialicon[i].addEventListener('mouseout', function() {
      rotating(this, 0.5, 0, 0);
  });
}

//////////////////////
// scroll
//////////////////////


   var jump = function(event){

       event.preventDefault();
       TweenLite.to(window, 1, {scrollTo:{y: 0 }, ease:Power2.easeOut});
   }

var sun = document.getElementById("sun");
sun.addEventListener('click', jump);
