class PageFeed{
    constructor($scope: any, $http: any){
        //var socketAttr = io.connect('http://localhost:8000/general');
        $scope.feed = [];
        /*var socketAttr = io.connect('http://localhost:8000/attractions');
        socketAttr.on('rcv feed', function(data){
            if ($scope.feed.length == 0){
                var outarray = [];
                angular.forEach(data, (v,k) =>{
                    outarray = outarray.concat(v);
                })
                outarray.sort((a,b) =>{
                    var vala = new Date(a.date);
                    var valb = new Date(b.date);
                    if (vala > valb) return -1;
                    else if (vala < valb) return 1;
                    else return 0;
                });
                console.log(outarray);
                $scope.feed = outarray;
                $scope.$apply();
            }
        });*/
        $http.get('https://apps.twinesocial.com/api/v1/content?campaign=SebastienSim').then(function(res: any){
          $scope.feed = res.data.rows;
        }, function(res: any){
          //Throw error?
        });
    }
}

angular.module('travifyapp').component('pageFeed', {
    templateUrl: './ui/pages/feed/feed.html',
    controller: PageFeed
});
