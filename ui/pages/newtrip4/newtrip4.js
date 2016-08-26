var NewTrip4 = (function () {
    function NewTrip4($scope, Session) {
        'ngInject';
        Session.getFlights();
    }
    return NewTrip4;
}());
angular.module('travifyapp').component('pageNewtrip4', {
    templateUrl: './ui/pages/newtrip4/newtrip4.html',
    controller: NewTrip4
});
