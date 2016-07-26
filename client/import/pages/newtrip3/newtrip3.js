import angular from 'angular';
import angularMeteor from 'angular-meteor';
import LeafletRouting from 'leaflet-routing-machine';
import template from './newtrip3.html';
import {name as BreadCrumbs} from '../../headerbars/breadcrumbs/breadcrumbs';

const name = 'pageNewtrip3';

class PageNewtrip3{
    constructor($scope, $timeout) {
        'ngInject';
        //Map / attraction list load here

        //Assuming that call to webapi will generate a route in format similar to the one below
        var resultsList = [[{"id": 21, "lat": 1.302503, "lng": 103.857983}, {"id": 16, "lat": 1.307792, "lng": 103.852583}, {"id": 3, "lat": 1.339988, "lng": 103.833401}, {"id": 1, "lat": 1.361516, "lng": 103.835812}, {"id": 39, "lat": 1.311125, "lng": 103.814733}, {"id": 34, "lat": 1.30351, "lng": 103.833056}, {"id": 17, "lat": 1.313351, "lng": 103.855794}, {"id": 35, "lat": 1.307745, "lng": 103.851086}], [{"id": 33, "lat": 1.28633, "lng": 103.852932}, {"id": 31, "lat": 1.279464, "lng": 103.849946}, {"id": 5, "lat": 1.2816209, "lng": 103.844377}, {"id": 41, "lat": 1.277307, "lng": 103.837311}, {"id": 15, "lat": 1.271026, "lng": 103.819773}, {"id": 8, "lat": 1.304586, "lng": 103.839427}, {"id": 22, "lat": 1.292935, "lng": 103.849662}, {"id": 12, "lat": 1.290154, "lng": 103.844846}, {"id": 26, "lat": 1.301016, "lng": 103.845411}], [{"id": 10, "lat": 1.289857, "lng": 103.8552799}, {"id": 24, "lat": 1.280635, "lng": 103.87159}, {"id": 2, "lat": 1.281744, "lng": 103.867383}, {"id": 30, "lat": 1.303091, "lng": 103.859858}, {"id": 23, "lat": 1.303746, "lng": 103.901182}, {"id": 38, "lat": 1.31451, "lng": 103.901022}, {"id": 14, "lat": 1.300191, "lng": 103.857614}]];

        /*$http({
            method: 'POST',
            url: "http://188.166.230.3:8080/TripEngine/TripEngine",
            data: {
                "cashFlow": 500,
                "travelDays": 3,
                "startTime": 800,
                "endTime": 2230,
                "startAddress": 45,
                "endAddress": 45,
                "mustGo": []
            }
        }).then(function(result){
            console.log(result);
        }, function(){
            console.log("error occured");
        });*/
        L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
        var map = L.map('google-map', {zoomControl: true}).setView([1.290270, 103.851959], 14);
        L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWlzaDkxIiwiYSI6ImNpb3Y0OGR5ODAwdmd0aG00eHlreW14eHMifQ.LV7N1cFaD4ll27UrYUllyQ', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoieWlzaDkxIiwiYSI6ImNpb3Y0OGR5ODAwdmd0aG00eHlreW14eHMifQ.LV7N1cFaD4ll27UrYUllyQ',
            detectRetina: true
        }).addTo(map);
        map.zoomControl.setPosition('bottomleft');
        
        var resultArr = resultsList[0];
        var latlngArray = [];

        for (var i = 0; i < resultArr.length; i++){
            if(resultArr[i]) {
                var ltln = L.latLng(resultArr[i].lat, resultArr[i].lng);
                latlngArray.push(ltln);
            }
        }
        var control = LeafletRouting.control({
            draggableWaypoints: false,
            addWaypoints: false,
            routeWhileDragging: false,
            show: false,
            plan: LeafletRouting.plan(latlngArray, {
                createMarker: function (i, wp) {
                    var markerIcon = L.icon({
                        iconUrl: '/img/map-marker-red.png',
                        iconSize:     [50, 50],
                        iconAnchor:   [25, 25],
                        popupAnchor:  [0, -10]
                    });
                    var marker = L.marker(wp.latLng, {icon: markerIcon});
                    marker.bindPopup("temporary text");
                    marker.on('click', function (e) {
                        this.openPopup();
                    });
                    marker.on('mouseover', function (e) {
                        this.openPopup();
                    });
                    marker.on('mouseout', function (e) {
                        this.closePopup();
                    });
                    return marker;
                }
            }),
            lineOptions: {
                styles: [{color: '#ff629f', opacity: 0, weight: 9}, {
                    color: '#ff629f',
                    opacity: 1,
                    weight: 6
                }, {color: '#ff629f', opacity: 1, weight: 2}]
            }
        }).addTo(map);
        $('#google-map').data('leafletControlInstance', control);
        //$scope.route = "[{link: '#', text: 'Travify'}, {link: '#', text: 'My trips'}, {link: '#', text: 'Travify Itinerary planner'}]";

        $scope.toggleEstimates = function(event){
            $(event.currentTarget).toggleClass('off');
            $('.timeline .card-estimate').parent().parent().slideToggle();
        }

        $scope.slideMenuOpen = true;
        $scope.openOverlay = false;

        $timeout(function(){
			var tmph = window.innerHeight - (document.getElementsByTagName('header')[0].clientHeight + document.getElementsByClassName('headerbars')[0].clientHeight);
			document.getElementsByClassName('page-content')[0].style.height = tmph + 'px';
			tmph -= (document.querySelector('.slidemenu-header').clientHeight);
			var elems = document.querySelectorAll('.slidemenu .body');
			for (var i=0; i<elems.length; i++){
				var siblings = elems[i].parentNode.childNodes;
				var offset = 0;
				for (var j=0;j<siblings.length; j++){
					if (siblings[j].nodeType == 1){
						if (siblings[j].classList.contains("header") || siblings[j].classList.contains("footer")){
							offset += siblings[j].clientHeight;
						}
					}
				}
				elems[i].style.height = (tmph - offset) + 'px';
			}
		}, 0);
    }
}

export default angular.module(name, [
    angularMeteor,
    BreadCrumbs
]).component(name, {
    templateUrl: template,
    controllerAs: name,
    controller: PageNewtrip3
});