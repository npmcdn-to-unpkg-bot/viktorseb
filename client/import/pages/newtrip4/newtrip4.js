import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './newtrip4.html';
import {name as BreadCrumbs} from '../../headerbars/breadcrumbs/breadcrumbs'

const name = 'pageNewtrip4';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: template,
});