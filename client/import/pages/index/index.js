import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './index.html';

const name = 'pageIndex';
class PageIndex{
    constructor($scope) {
        'ngInject';
        //ADD LOADING FOR THE "PROMOTED ATTRACTIONS" HERE
    }
}

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: template,
    controllerAs: name,
});