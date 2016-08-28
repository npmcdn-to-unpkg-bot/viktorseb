class NewTrip4 {
    constructor($scope: any, Session: any, $http: any) {
        'ngInject';
        $scope.hotels = Session.hotels;
        $scope.flights = [];
        $http({
          method: 'GET',
          url: 'api/flight.php',
          params: {startDate: moment(Session.startDate).format('Y-MM-DD'), endDate: moment(Session.endDate).format('Y-MM-DD'), market: "SG"}
        }).then(function(res:any){
          console.log(res);
          $scope.flights = res.data;
        }, function(){
          console.log("Error with flights retrieving");
        });
    }
}

angular.module('travifyapp').component('pageNewtrip4', {
    templateUrl: './ui/pages/newtrip4/newtrip4.html',
    controller: NewTrip4
});
