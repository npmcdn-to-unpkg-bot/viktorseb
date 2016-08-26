class NewTrip4 {
    constructor($scope: any, Session: any) {
        'ngInject';
        Session.getFlights();
    }
}

angular.module('travifyapp').component('pageNewtrip4', {
    templateUrl: './ui/pages/newtrip4/newtrip4.html',
    controller: NewTrip4
});
