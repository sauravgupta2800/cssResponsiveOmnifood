$(document).ready(function() {
  // ----- add sticky -----
  $(".js--section-features").waypoint(
    function(direction) {
        $(".js--wp-1").addClass("animated fadeIn")
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  // ---- scrolling elements ------
  $(".js--scroll-to-plans").click(function(e) {
    console.log("clickedddd");
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function(e) {
    console.log("clickedddd");
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //-------- scrolling navigations ---------

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

    // ---- animations ------

    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated fadeInUp")
    },{
        offset:"50%"
    });

    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn")
    },{
        offset:"50%"
    });

    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse")
    },{
        offset:"50%"
    });

    // -------- nav icon --------  /
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');

        nav.slideToggle(200);

        $('.nav-icon').attr('name', function(index,attr){
            return attr=='menu'?"close":"menu";
            
        })
        
        
    })

});
