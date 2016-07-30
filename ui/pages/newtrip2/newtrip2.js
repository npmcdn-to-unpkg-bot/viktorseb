var NewTrip2 = (function () {
    function NewTrip2($scope) {
        'ngInject';
        $scope.savedClick = function (event) {
            angular.element(event.currentTarget).toggleClass('selected');
        };
    }
    return NewTrip2;
}());
angular.module('travifyapp').component('pageNewtrip2', {
    templateUrl: './ui/pages/newtrip2/newtrip2.html',
    controller: NewTrip2
});
