import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './loading.html';
import {name as BreadCrumbs} from '../../headerbars/breadcrumbs/breadcrumbs'

const name = 'pageLoading';

class PageLoading{
    constructor($scope, $state) {
        'ngInject';

        //This will be replaced with some meaningfull code later,
        //as in, once load finishes, take user to the next page instead of fixed time :)
        setTimeout(function(){
            $state.go('newtrip-3');
	    }, 3000)
    }
}

export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    templateUrl: template,
    controllerAs: name,
    controller: PageLoading
});