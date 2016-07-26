import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './breadcrumbs.html';

const name = 'breadCrumbs';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: template,
    bindings: {
        route: '='
    }
});