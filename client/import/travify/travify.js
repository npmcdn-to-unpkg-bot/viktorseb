import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './travify.html';
import {name as Navigation} from '../components/navigation/navigation';

import {name as PageIndex} from '../pages/index/index';
import {name as PageNewtrip1} from '../pages/newtrip1/newtrip1';
import {name as PageNewtrip2} from '../pages/newtrip2/newtrip2';
import {name as PageNewtrip3} from '../pages/newtrip3/newtrip3';
import {name as PageNewtrip4} from '../pages/newtrip4/newtrip4';
import {name as PageLoading} from '../pages/loading/loading';

const name = 'travify';
class Travify{
    constructor($scope) {
        'ngInject';
        //$reactive(this).attach($scope);
    }
}

export default angular.module(name, [
    angularMeteor, uiRouter,
    Navigation,
    PageIndex, PageNewtrip1, PageNewtrip2, PageNewtrip3, PageNewtrip4, PageLoading
]).component(name, {
    templateUrl: template,
    controllerAs: name,
    controller: Travify
}).config(function($stateProvider, $locationProvider, $urlRouterProvider){
    'ngInject';
    $stateProvider.state('index', {
        url: '/',
        template: '<page-index></page-index>'
    }).state('newtrip-1', {
        url: '/newtrip-1',
        template: '<page-newtrip1></page-newtrip1>'
    }).state('newtrip-2', {
        url: '/newtrip-2',
        template: '<page-newtrip2></page-newtrip2>'
    }).state('newtrip-3', {
        url: '/newtrip-3',
        template: '<page-newtrip3></page-newtrip3>'
    }).state('newtrip-4', {
        url: '/newtrip-4',
        template: '<page-newtrip4></page-newtrip4>'
    }).state('loading', {
        url: '/loading',
        template: '<page-loading></page-loading>'
    })
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});