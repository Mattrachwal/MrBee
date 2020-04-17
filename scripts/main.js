window.onload = function() {

    function sizeSections() {
        var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

        let sections = document.getElementsByClassName("resize-to-screen");
        for (let i = 0; i < sections.length; i++) {
            console.log(y);
            sections[i].style.height = y + 'px';
        }
    }


    sizeSections();

    let last_known_scroll_position = 0;
    let ticking = false;
    let awayFromTop = false;
    let followMorph = false;
    
    function doSomething(scroll_pos) {
        let header = document.getElementsByTagName("header");
        let logo = document.getElementById("header-logo");
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
            if (!awayFromTop && followMorph) {
                followMorph = false;
                header[0].classList.remove("followHeader");
                logo.classList.remove("followLogo");
            }
        }
    }
    
    // trigger the resize
    window.onresize = sizeSections;
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