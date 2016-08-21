var PageFeed = (function () {
    function PageFeed($scope, $http, $element) {
        $scope.feed = [];
        $http.get('https://apps.twinesocial.com/api/v1/content?campaign=SebastienSim&limit=33').then(function (res) {
            $scope.feed = res.data.rows;
        }, function (res) {
        });
    }
    return PageFeed;
}());
angular.module('travifyapp').component('pageFeed', {
    templateUrl: './ui/pages/feed/feed.html',
    controller: PageFeed
});
