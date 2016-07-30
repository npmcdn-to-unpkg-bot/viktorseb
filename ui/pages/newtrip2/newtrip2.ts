class NewTrip2 {
    constructor($scope: any) {
        'ngInject';

        $scope.savedClick = function(event: Event) {
            //Save this into user preferences
            angular.element(event.currentTarget).toggleClass('selected');
        };
    }
}

angular.module('travifyapp').component('pageNewtrip2', {
    templateUrl: './ui/pages/newtrip2/newtrip2.html',
    controller: NewTrip2
});