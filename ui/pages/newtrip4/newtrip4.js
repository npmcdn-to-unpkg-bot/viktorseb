var NewTrip4 = (function () {
    function NewTrip4($scope, Session, $http) {
        'ngInject';
        $scope.hotels = Session.hotels;
        $scope.startDate = moment(Session.startDate).format('DD.MM.Y');
        $scope.endDate = moment(Session.endDate).format('DD.MM.Y');
        $scope.flights = [];
        $http({
            method: 'GET',
            url: 'api/flight.php',
            params: { startDate: moment(Session.startDate).format('Y-MM-DD'), endDate: moment(Session.endDate).format('Y-MM-DD'), market: "SG" }
        }).then(function (res) {
            console.log(res);
            $scope.flights = res.data;
        }, function () {
            console.log("Error with flights retrieving");
        });
    }
    return NewTrip4;
}());
angular.module('travifyapp').component('pageNewtrip4', {
    templateUrl: './ui/pages/newtrip4/newtrip4.html',
    controller: NewTrip4
});
