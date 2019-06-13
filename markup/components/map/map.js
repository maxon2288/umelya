$(document).ready(function () {

    $(".ymap").each(function(e){
        var ya = this;
        var myMap;
        ymaps.ready(
            function() {
                var x = $(ya).attr("data-x");
                var y = $(ya).attr("data-y");
                var img = $(".map-marker-img").attr("data-marker");
                    myMap = new ymaps.Map($(ya)[0], {
                        center: [+x - 0.01  , +y - 0.05],
                        zoom: 13,
                        controls: []
                    }, {
                        searchControlProvider: 'yandex#search'
                    });

                    if ($(window).width() <=504)  {
                         myMap.setCenter([x, y]);
                         // myPlacemark.geometry.setCoordinates([]);
                        } else if ($(window).width() <=1024) {
                            myMap.setCenter([x - 0.015, +y]);
                    }
                    var myPlacemark = new ymaps.Placemark([x, y], {},
                { iconLayout: 'default#image',
                iconImageHref: img,
                iconImageSize: [37, 37], });    
            
                myMap.geoObjects.add(myPlacemark);
            }
        );
    })

});

