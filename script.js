

//switch images
    function one(my_image)
    { my_image.src = 'gallery/hover/1.gif'; }
    function haute(my_image)
    { my_image.src = "gallery/haute_sml.jpg"; }
    
    function two(my_image)
    { my_image.src = 'gallery/hover/2.gif'; }
    function dog(my_image)
    { my_image.src = "gallery/dog_sml.jpg"; }
    
    function three(my_image)
    { my_image.src = 'gallery/hover/3.gif'; }
    function bloss(my_image)
    { my_image.src = "gallery/bloss_sml.jpg"; }
    
    function four(my_image)
    { my_image.src = 'gallery/hover/4.gif'; }
    function th(my_image)
    { my_image.src = "gallery/th_sml.jpg"; }
    
    function five(my_image)
    { my_image.src = 'gallery/hover/5.gif'; }
    function cup(my_image)
    { my_image.src = "gallery/cup_sml.jpg"; }
    
    function six(my_image)
    { my_image.src = 'gallery/hover/6.gif'; }
    function bb(my_image)
    { my_image.src = "gallery/bb_sml.jpg"; }
    
    function seven(my_image)
    { my_image.src = 'gallery/hover/7.gif'; }
    function current(my_image)
    { my_image.src = "gallery/current_sml.jpg"; }
    
    function eight(my_image)
    { my_image.src = 'gallery/hover/8.gif'; }
    function russia(my_image)
    { my_image.src = "gallery/russia_sml.jpg"; }
    
    function nine(my_image)
    { my_image.src = 'gallery/hover/9.gif'; }
    function tubes(my_image)
    { my_image.src = "gallery/blur_sml.jpg"; }
    
    function ten(my_image)
    { my_image.src = 'gallery/hover/10.gif'; }
    function plant(my_image)
    { my_image.src = "gallery/plant_sml.gif"; }
    
    function eleven(my_image)
    { my_image.src = 'gallery/hover/11.gif'; }
    function savg(my_image)
    { my_image.src = "gallery/savg_sml.jpg"; }
    
    function twelve(my_image)
    { my_image.src = 'gallery/hover/12.gif'; }
    function mood(my_image)
    { my_image.src = "gallery/mood_sml.gif"; }
    
    
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


    
    
    