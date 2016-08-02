var monarchApp = angular.module('monarchApp', ['ngRoute', 'ngAnimate']);
var socket = io.connect('http://localhost:8000/admin');

// configure our routes
monarchApp.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/index.hbs',
        controller  : 'indexController'
    })
    .when('/attr', {
        templateUrl : 'pages/attr-list.hbs',
        controller  : 'attrListController'
    })
    .when('/attr/new', {
        templateUrl : 'pages/attr-new.hbs',
        controller  : 'attrNewController'
    });
});


monarchApp.controller('indexController', function($scope, $http, $timeout) {
    $scope.stats = {
        current: 0,
        registered: 0,
        attractions: 0,
        earnings: 0
    }
    $http.get('../api/stats.php').then(function(res){
        if (res.status == 200){
            $scope.stats.registered = res.data.cntusers;
            $scope.stats.attractions = res.data.cntattr;
            $scope.stats.earnings = (Math.random()*100).toFixed(2);
        }
    });
    var checkOnline = function(){
        socket.emit('user count', function(data){
            $scope.stats.current = data;
        })
        $timeout(checkOnline, 5000);
    };
    checkOnline();
});

monarchApp.controller('attrListController', function($scope, $http) {
    $scope.attractions = [];
    $http.get('../api/attraction.php').then(function(res){
        if (res.status == 200){
            $scope.attractions = res.data;
        }
    });
    $scope.delete = function(at){
        $http.delete('../api/attraction.php?id='+at.id).then(function(res){
            if (res.status == 201){
                var index = $scope.attractions.indexOf(at);
                $scope.attractions.splice(index, 1);
            }
        });
    }
});

monarchApp.controller('attrNewController', function($scope, $http, $location, $route) {
    $scope.form = {
        name: "",
        openTime: "",
        closeTime: "",
        description: "",
        price: "0.00",
        img: "",
        location: "Singapore",
        facebook: "",
        instagram: ""
    }
    $scope.errors = [];
    $scope.submit = function(){
        $http.post('../api/attraction.php', $scope.form).then(function(res){
            console.log(res);
            if (res.status == 201){
                $scope.errors = [];
                $location.path('/attr');
            	$route.reload();
            }
            else {
                $scope.errors = res.data;
            }
        })
    }
});