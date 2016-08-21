(function () {
    'use strict';
    angular.module('travifyapp', [
        'ngRoute', 'oc.lazyLoad', 'angularMoment'
    ]).component('travify', {
        templateUrl: './ui/travify.html'
    }).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            template: '<page-index></page-index>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ui/pages/index/index.js');
                    }]
            }
        })
            .when('/newtrip-1', {
            template: '<page-newtrip1></page-newtrip1>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ui/pages/newtrip1/newtrip1.js');
                    }]
            }
        })
            .when('/newtrip-2', {
            template: '<page-newtrip2></page-newtrip2>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js',
                            'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/utils/Draggable.min.js',
                            'ui/pages/newtrip2/newtrip2.js',
                            'ui/components/numberslider/numberslider.js']);
                    }]
            }
        })
            .when('/newtrip-3', {
            template: '<page-newtrip3></page-newtrip3>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ui/pages/newtrip3/newtrip3.js');
                    }]
            }
        })
            .when('/newtrip-4', {
            template: '<page-newtrip4></page-newtrip4>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ui/pages/newtrip4/newtrip4.js');
                    }]
            }
        })
            .when('/loading', {
            template: '<page-loading></page-loading>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ui/pages/loading/loading.js');
                    }]
            }
        })
            .when('/feed', {
            template: '<page-feed></page-feed>',
            resolve: {
                loadComponent: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('ui/pages/feed/feed.js');
                    }]
            }
        })
            .otherwise('/');
    });
})();
