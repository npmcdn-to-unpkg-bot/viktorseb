var PageLoading = (function () {
    function PageLoading($location, $route) {
        setTimeout(function () {
            $location.path('/newtrip-3');
            $route.reload();
        }, 2000);
    }
    return PageLoading;
}());
angular.module('travifyapp').component('pageLoading', {
    templateUrl: './ui/pages/loading/loading.html',
    controller: PageLoading
});
