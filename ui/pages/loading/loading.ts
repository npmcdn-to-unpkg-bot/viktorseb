class PageLoading{
    constructor($location: any, $route: any){
        setTimeout(function(){
            $location.path('/newtrip-3');
            $route.reload();
        }, 2000);
    }
}

angular.module('travifyapp').component('pageLoading', {
    templateUrl: './ui/pages/loading/loading.html',
    controller: PageLoading
});