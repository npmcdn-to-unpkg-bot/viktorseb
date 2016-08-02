import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {name as Navigation} from '../navigation/navigation';
import template from './travify.html';

const name = 'travify';
class Travify{
    constructor($scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        this.number = 3;
    }
}

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Navigation
]).component(name, {
    templateUrl: template,
    controllerAs: name,
    controller: Travify
}).config(function($stateProvider, $locationProvider, $urlRouterProvider){
    'ngInject';
    //$stateProvider.state('')
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});