// var features = turf.featureCollection([
//     turf.point([-75.343, 39.984], {"name": "Location A"}),
//     turf.point([-75.833, 39.284], {"name": "Location B"}),
//     turf.point([-75.534, 39.123], {"name": "Location C"})
//   ]);
  
//   var enveloped = turf.envelope(features);
//GET TOWN from an to COORDINATES FROM THE LOCAL STORAGE


var two1 = [5484544]


var from = turf.point(two1);
var to = turf.point([-75.534, 39.123]);
var options = {units: 'miles'};

var distance = turf.distance(from, to, options);
