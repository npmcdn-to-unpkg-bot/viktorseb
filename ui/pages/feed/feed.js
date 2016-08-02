var PageFeed = (function () {
    function PageFeed($scope) {
        $scope.feed = [];
        var socketAttr = io.connect('http://localhost:8000/attractions');
        socketAttr.on('rcv feed', function (data) {
            if ($scope.feed.length == 0) {
                var outarray = [];
                angular.forEach(data, function (v, k) {
                    outarray = outarray.concat(v);
                });
                outarray.sort(function (a, b) {
                    var vala = new Date(a.date);
                    var valb = new Date(b.date);
                    if (vala > valb)
                        return -1;
                    else if (vala < valb)
                        return 1;
                    else
                        return 0;
                });
                console.log(outarray);
                $scope.feed = outarray;
                $scope.$apply();
            }
        });
    }
    return PageFeed;
}());
angular.module('travifyapp').component('pageFeed', {
    templateUrl: './ui/pages/feed/feed.html',
    controller: PageFeed
});
