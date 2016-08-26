var PageNewTrip1 = (function () {
    function PageNewTrip1($scope, Session, $http) {
        $scope.session = Session;
        $scope.hotel = [];
        $scope.suggestHotels = function () {
            if ($scope.hotelName.length >= 2)
                $http({
                    method: 'GET',
                    url: 'api/hotel.php',
                    params: { hotelName: $scope.hotelName,
                        market: 'SG',
                        startDate: '2016-12-10',
                        endDate: '2016-12-12',
                        rooms: 1,
                        guests: 2 }
                }).then(function (res) {
                    $scope.hotels = res.data.results.filter(function (elem) {
                        return elem.geo_type == "Hotel";
                    });
                    console.log($scope.hotels);
                }, function () {
                    console.log("Error connecting to api");
                });
        };
    }
    return PageNewTrip1;
}());
angular.module('travifyapp').component('pageNewtrip1', {
    templateUrl: './ui/pages/newtrip1/newtrip1.html',
    controller: PageNewTrip1
});
