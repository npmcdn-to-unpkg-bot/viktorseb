class PageNewTrip3{
    constructor($scope: any){
        'ngInject';
        var self = this;
        $scope.date = {
          start: new Date(),
          offset: 0
        };

        var resultsList = self.callWebApi();
        var map = self.generateMap(resultsList[$scope.date.offset][0].lat, resultsList[$scope.date.offset][0].lng);
        var activeControl = self.generateControls(resultsList[$scope.date.offset]);
        map.addControl(activeControl);
        map.panTo([resultsList[$scope.date.offset][0].lat, resultsList[$scope.date.offset][0].lng]);

        $scope.toggleEstimates = function(event: Event){
            angular.element(event.currentTarget).toggleClass('off');
            angular.element('.timeline .card-estimate').parent().parent().slideToggle();
        }
        $scope.nextDay = function(){
          if ($scope.date.offset < resultsList.length - 1){
            map.removeControl(activeControl);
            activeControl = self.generateControls(resultsList[++$scope.date.offset]);
            map.addControl(activeControl);
            map.panTo([resultsList[$scope.date.offset][0].lat, resultsList[$scope.date.offset][0].lng]);
          }
        }
        $scope.prevDay = function(){
          if ($scope.date.offset > 0){
            map.removeControl(activeControl);
            activeControl = self.generateControls(resultsList[--$scope.date.offset]);
            map.addControl(activeControl);
            map.panTo([resultsList[$scope.date.offset][0].lat, resultsList[$scope.date.offset][0].lng]);
          }
        }
        $scope.slideMenuOpen = true;
        $scope.openOverlay = false;
    };

    callWebApi(){
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
              "mustGo": [],
              "preferences": []
          }
      })*/
      var resultsList = [[{"id": 21, "lat": 1.302503, "lng": 103.857983}, {"id": 16, "lat": 1.307792, "lng": 103.852583}, {"id": 3, "lat": 1.339988, "lng": 103.833401}, {"id": 1, "lat": 1.361516, "lng": 103.835812}, {"id": 39, "lat": 1.311125, "lng": 103.814733}, {"id": 34, "lat": 1.30351, "lng": 103.833056}, {"id": 17, "lat": 1.313351, "lng": 103.855794}, {"id": 35, "lat": 1.307745, "lng": 103.851086}], [{"id": 33, "lat": 1.28633, "lng": 103.852932}, {"id": 31, "lat": 1.279464, "lng": 103.849946}, {"id": 5, "lat": 1.2816209, "lng": 103.844377}, {"id": 41, "lat": 1.277307, "lng": 103.837311}, {"id": 15, "lat": 1.271026, "lng": 103.819773}, {"id": 8, "lat": 1.304586, "lng": 103.839427}, {"id": 22, "lat": 1.292935, "lng": 103.849662}, {"id": 12, "lat": 1.290154, "lng": 103.844846}, {"id": 26, "lat": 1.301016, "lng": 103.845411}], [{"id": 10, "lat": 1.289857, "lng": 103.8552799}, {"id": 24, "lat": 1.280635, "lng": 103.87159}, {"id": 2, "lat": 1.281744, "lng": 103.867383}, {"id": 30, "lat": 1.303091, "lng": 103.859858}, {"id": 23, "lat": 1.303746, "lng": 103.901182}, {"id": 38, "lat": 1.31451, "lng": 103.901022}, {"id": 14, "lat": 1.300191, "lng": 103.857614}]];
      return resultsList;
    }

    generateMap(lat: number, lng: number){
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
      var map = L.map('google-map', {zoomControl: true}).setView([lat, lng], 13);
      L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWlzaDkxIiwiYSI6ImNpb3Y0OGR5ODAwdmd0aG00eHlreW14eHMifQ.LV7N1cFaD4ll27UrYUllyQ', {
         maxZoom: 18,
         id: 'mapbox.streets',
         accessToken: 'pk.eyJ1IjoieWlzaDkxIiwiYSI6ImNpb3Y0OGR5ODAwdmd0aG00eHlreW14eHMifQ.LV7N1cFaD4ll27UrYUllyQ',
         detectRetina: true
      }).addTo(map);
      map.zoomControl.setPosition('bottomleft');
      return map;
    }

    generateControls(resultArr: any[]){
      var latlngArray: L.LatLng[] = [];
      for (var i = 0; i < resultArr.length; i++){
          if(resultArr[i]) latlngArray.push(L.latLng(resultArr[i].lat, resultArr[i].lng));
      }

      var iconInactive = L.divIcon({className: '', html: "<div class='pin'></div>", popupAnchor: [-5,-20]});
      var iconActive = L.divIcon({className: '', html: "<div class='pin'></div><div class='pulse'></div>", popupAnchor: [-5,-20]});
      function activateMarker(){
          this.removeEventListener('click');
          this.setIcon(iconActive);
          this.addEventListener('click', deactivateMarker);
      }
      function deactivateMarker(){
          this.removeEventListener('click');
          this.setIcon(iconInactive);
          this.addEventListener('click', activateMarker);
      }
      var routingControl = L.Routing.control({
          draggableWaypoints: false,
          addWaypoints: false,
          routeWhileDragging: false,
          show: false,
          plan: L.Routing.plan(latlngArray, {
              createMarker: function (i: number, wp: any) {
                  var marker = L.marker(wp.latLng, {icon: iconInactive});
                  marker.bindPopup("temporary text");
                  marker.addEventListener('click', activateMarker);
                  marker.on('mouseover', function(e){this.openPopup();});
                  marker.on('mouseout', function(e){this.closePopup();});
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
      });
      return routingControl;
    }

    //This is ctemporary and will need to be updated to a better fitting solution, probably page resize event!!!
    $doCheck(){
      var tmph = window.innerHeight - (document.getElementsByTagName('header')[0].clientHeight + document.getElementsByClassName('headerbars')[0].clientHeight);
      (<HTMLHtmlElement>document.getElementsByClassName('page-content')[0]).style.height = tmph + 'px';
      tmph -= (document.querySelector('.slidemenu-header').clientHeight);
      var elems = document.querySelectorAll('.slidemenu .body');
      for (var i=0; i<elems.length; i++){
        var siblings = elems[i].parentNode.childNodes;
        var offset = 0;
        for (var j=0;j<siblings.length; j++){
          if (siblings[j].nodeType == 1){
            if ((<Element>siblings[j]).classList.contains("header") || (<Element>siblings[j]).classList.contains("footer")){
              offset += (<Element>siblings[j]).clientHeight;
            }
          }
        }
        (<HTMLElement>elems[i]).style.height = (tmph - offset) + 'px';
      }
    }
}

angular.module('travifyapp').component('pageNewtrip3', {
    templateUrl: './ui/pages/newtrip3/newtrip3.html',
    controller: PageNewTrip3
});
