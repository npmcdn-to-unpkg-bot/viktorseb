import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './newtrip1.html';
import {name as BreadCrumbs} from '../../headerbars/breadcrumbs/breadcrumbs'

const name = 'pageNewtrip1';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: template,
});