window.onload = function() {
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    var service_one = document.getElementById('service-one');
    service_one.setAttribute("style", "display: block;");

    document.getElementById('services-nav').onclick = function(event) {
        var target = getEventTarget(event);

        var selector = target.id.substring(0, target.id.length - 4);

        var service_one = document.getElementById('service-one');
        service_one.setAttribute("style", "display: none;");

        var service_two = document.getElementById('service-two');
        service_two.setAttribute("style", "display: none;");

        var service_three = document.getElementById('service-three');
        service_three.setAttribute("style", "display: none;");


        var service = document.getElementById(selector);
        service.setAttribute("style", "display: block;");
    };
};