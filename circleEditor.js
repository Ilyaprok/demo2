ymaps.ready(init);

function createPos(map, x, y, radius, color, text){
    map.geoObjects.add(new ymaps.Placemark([x, y], {
            iconCaption: text
        }, {
            preset: 'islands#circleIcon',
            iconColor: color
        }));
    
    var myCircle = new ymaps.Circle([
    [x, y],
    radius
    ], {}, {
        fillColor: color+"20",
        strokeColor: color,
        strokeOpacity: 0.5,
        strokeWidth: 3
    });
    map.geoObjects.add(myCircle);
}

function init() {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
            center: [53.353805, 58.994415],
            zoom: 11,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

   
   
    createPos(myMap, 53.353805, 58.994415, 1, "#20f750", 'starline');
    createPos(myMap, 53.351222, 58.997667, 1, "#4050fa", 'tec');
    createPos(myMap, 53.354328, 58.979801, 4800, "#40f8fa",'magic');
    
    createPos(myMap, 53.361608, 59.001022, 500, "#f10010",'megafon');
    
    createPos(myMap, 53.346382, 59.006405, 2700, "#ff7ffa",'2g');
    createPos(myMap, 53.344247, 59.000365, 300, "#ff0000",'3g');
    createPos(myMap, 53.345247, 59.000393, 1150, "#ff7f20",'4g');
    createPos(myMap, 53.344252, 58.999855, 15, "#fffc00",'wifi');
    createPos(myMap, 53.344252, 58.999855, 1, "#fffffff",'ref');

}
