class PageFeed{
    constructor($scope: any){
        //var socketAttr = io.connect('http://localhost:8000/general');
        $scope.feed = [];
        var socketAttr = io.connect('http://localhost:8000/attractions');
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
                /*outarray.sort((a,b) =>{
                    var vala = par
                    return 1 
                });*/
                console.log(outarray);
                $scope.feed = outarray;
                $scope.$apply();
            }
        })
    }
}

angular.module('travifyapp').component('pageFeed', {
    templateUrl: './ui/pages/feed/feed.html',
    controller: PageFeed
});