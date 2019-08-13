window.onload = function() {
    var demo = new CountUp('number', 0, 100000, 0, 2.5, {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix: '',
        suffix: ',000',
    });
    var waypoint1 = new Waypoint({
        element: document.getElementById('waypoint1'),
        handler: function(direction) {

            if (direction == 'up') {
                demo.reset();
            } else {
                demo.start();
            }
        },
       offset: '90%'
    });

}


