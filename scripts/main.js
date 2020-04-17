window.onload = function() {

    let last_known_scroll_position = 0;
    let ticking = false;
    let awayFromTop = false;
    let followMorph = false;
    
    function doSomething(scroll_pos) {
        let header = document.getElementsByTagName("header");
        let logo = document.getElementById("header-logo");
        console.log(scroll_pos);
        if(scroll_pos <= 25) {
            awayFromTop = false;
        } else {
            awayFromTop = true;
        }
        if(awayFromTop && !followMorph) {
            header[0].classList.add("followHeader");
            logo.classList.add("followLogo");
            followMorph = true;
        } else {
            console.log("else");
            if (!awayFromTop && followMorph) {
                followMorph = false;
                header[0].classList.remove("followHeader");
                logo.classList.remove("followLogo");
            }
        }
    }
    
    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
    
        ticking = true;
      }
    });
};