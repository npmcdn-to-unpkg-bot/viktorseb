var PageNewTrip1 = (function () {
    function PageNewTrip1($scope, Session, $http) {
        $scope.suggestRunning = false;
        $scope.startDate = moment();
        $scope.endDate = moment();
        $scope.today = moment();
        $scope.hotels = [];
        $scope.$watch('startDate', function (val) {
            Session.startDate = val;
        });
        $scope.$watch('endDate', function (val) {
            Session.endDate = val;
        });
        $scope.selectHotel = function (hotel) {
            Session.hotels = Array(hotel);
            if ($scope.hotels.length > 1) {
                var random;
                do {
                    random = $scope.hotels[Math.floor(Math.random() * $scope.hotels.length)];
                } while (random == hotel);
                Session.hotels.push(random);
            }
            console.log(Session.hotels);
        };
        $scope.checkHotel = function (hotel) {
            if (Session.hotels === undefined)
                return false;
            return Session.hotels[0] == hotel;
        };
        $scope.suggestHotels = function () {
            if ($scope.suggestRunning)
                return;
            $scope.suggestRunning = true;
            var search = '';
            if ($scope.hotelName !== undefined && $scope.hotelName.length > 2) {
                search = $scope.hotelName;
            }
            else if ($scope.location !== undefined && $scope.location.length > 2) {
                search = $scope.location;
            }
            if (search != '') {
                $http({
                    method: 'GET',
                    url: 'api/hotel.php',
                    params: { search: search }
                }).then(function (res) {
                    $scope.hotels = res.data;
                    $scope.suggestRunning = false;
                }, function () {
                    console.log("Error with hotel retrieving");
                    $scope.suggestRunning = false;
                });
            }
            else {
                $scope.suggestRunning = false;
            }
        };
    }
    return PageNewTrip1;
}());
angular.module('travifyapp').component('pageNewtrip1', {
    templateUrl: './ui/pages/newtrip1/newtrip1.html',
    controller: PageNewTrip1
});
