class PageFeed{
    constructor($location: any, $route: any){
        var socketAttr = io.connect('http://localhost:8000/general');
    }
}

angular.module('travifyapp').component('pageFeed', {
    templateUrl: './ui/pages/feed/feed.html',
    controller: PageFeed
});