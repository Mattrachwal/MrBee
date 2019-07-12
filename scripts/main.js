window.onload = function() {

    var user_scrolled = false;

    // Getting window size
    // var w = window,
    //     d = document,
    //     e = d.documentElement,
    //     g = d.getElementsByTagName('body')[0],
    //     x = w.innerWidth || e.clientWidth || g.clientWidth,
    //     y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    //
    //     console.log('what the fuck');
    // const sections = document.querySelectorAll('section');
    // //sections[0].style.height = y + "px";
    // sections[0].style.height = y + "px";
    // // sections.forEach( function(element) {
    // //     element.style.height = y + "px";
    // // });
    //

    // Highlight nav selection
    //
    // function refreshNav(){
    //     var nav = document.getElementsByTagName('nav'); //returns a HTMLCollection
    //     var ayyys = nav[0].getElementsByTagName('a');
    //     for (var i = 0; i < ayyys.length; i++) { // iterate over it
    //         user_scrolled = false;
    //         ayyys[i].classList.remove("selected");// a
    //     }
    // }

    // var nav = document.getElementsByTagName('nav'); //returns a HTMLCollection
    // var ayyys = nav[0].getElementsByTagName('a');
    // for (var i = 0; i < ayyys.length; i++) { // iterate over it
    //     ayyys[i].onclick = function () {
    //         user_scrolled = false;
    //         refreshNav();
    //         this.classList.add("selected");
    //     }
    // }

    // ON SCROLL CHANGE CSS FOR HEADER

    // var last_known_scroll_position = 0;
    // var ticking = false;
    //
    // function doSomething(scroll_pos, callback) {
    //     if(user_scrolled) {
    //         refreshNav();
    //     }
    //     var header = document.getElementsByTagName('header');
    //     if (scroll_pos < 50) {
    //         header[0].classList.remove("header-else");// a
    //         header[0].classList.add("header-top");// a
    //
    //     } else {
    //         header[0].classList.remove("header-top");// a
    //         header[0].classList.add("header-else");// a
    //     }
    //     callback();
    // }

    // window.addEventListener('scroll', function(e) {
        // last_known_scroll_position = window.scrollY;
        //
        // if (!ticking) {
        //     window.requestAnimationFrame(function() {
        //         doSomething(last_known_scroll_position, function () {
        //             console.log('wtf');
        //             ticking = false;
        //         });
        //     });
        //     ticking = true;
        // }
    // });




    // FOR TRANSITION CHECKING


    // This is for the services selector ---------------------------------------------

    // function getEventTarget(e) {
    //     e = e || window.event;
    //     return e.target || e.srcElement;
    // }
    //
    // var service_one = document.getElementById('service-one');
    // service_one.setAttribute("style", "display: block;");
    //
    // document.getElementById('services-nav').onclick = function(event) {
    //     var target = getEventTarget(event);
    //
    //     var selector = target.id.substring(0, target.id.length - 4);
    //
    //     var service_one = document.getElementById('service-one');
    //     service_one.setAttribute("style", "display: none;");
    //
    //     var service_two = document.getElementById('service-two');
    //     service_two.setAttribute("style", "display: none;");
    //
    //     var service_three = document.getElementById('service-three');
    //     service_three.setAttribute("style", "display: none;");
    //
    //
    //     var service = document.getElementById(selector);
    //     service.setAttribute("style", "display: block;");
    // };

};