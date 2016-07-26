import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './newtrip2.html';
import {name as BreadCrumbs} from '../../headerbars/breadcrumbs/breadcrumbs'

const name = 'pageNewtrip2';

class PageNewtrip2{
    constructor($scope) {
        'ngInject';
        $scope.savedClick = function(event){
            $(event.currentTarget).toggleClass('selected');
            //Save this into user preferences
        };
    }
}

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: template,
    controllerAs: name,
    controller: PageNewtrip2
});