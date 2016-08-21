var PageFeed = (function () {
    function PageFeed($scope, $http) {
        $scope.feed = [];
        $http.get('https://apps.twinesocial.com/api/v1/content?campaign=SebastienSim').then(function (res) {
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
