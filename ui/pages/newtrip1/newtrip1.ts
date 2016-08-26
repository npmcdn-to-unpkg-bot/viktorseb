class PageNewTrip1{
    constructor($scope: any, Session: any, $http: any){
      $scope.session = Session;
      $scope.hotel = [];
      $scope.suggestHotels = function(){
        //Session.getAutoSuggest($scope.hotelName);
        if ($scope.hotelName.length >= 2)
        $http({
          method: 'GET',
          url: 'api/hotel.php',
          params: {hotelName: $scope.hotelName,
                  market: 'SG',
                  startDate: '2016-12-10',
                  endDate: '2016-12-12',
                  rooms: 1,
                  guests: 2}
        }).then(function(res: any){
          //$scope.hotels = res.data.results;
          $scope.hotels = res.data.results.filter((elem) => {
            return elem.geo_type == "Hotel";
          })
          console.log($scope.hotels);
        }, function(){
          console.log("Error connecting to api");
        });
      }
    }
}

angular.module('travifyapp').component('pageNewtrip1', {
    templateUrl: './ui/pages/newtrip1/newtrip1.html',
    controller: PageNewTrip1
});
