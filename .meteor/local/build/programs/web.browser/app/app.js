var require = meteorInstall({"client":{"import":{"components":{"navigation":{"navigation.html":["./navigation.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/components/navigation/navigation.html                                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./navigation.html!raw");                                                               // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/components/navigation/navigation.html";                                   // 5
      var template = "<header> <div class=\"wrap\"> <h1><a href=\"/\"><img src=\"img/logo.png\" alt=\"Travify\"></a></h1> <nav><ul> <li class=\"active\"><a href=\"#\">Explore</a></li> <li><a href=\"#\">My Trip</a></li> <li><a href=\"#\">Travel Guide</a></li> <li><a href=\"#\">My Travelogue</a></li> </ul></nav> <div class=\"user-nav\"><ul> <li><a href=\"#\"><span class=\"fa fa-commenting\"></span></a></li> <li><a href=\"#\"><img src=\"upload/user.jpg\" alt=\"me\"></a></li> </ul></div> </div> </header>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"navigation.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/components/navigation/navigation.html!raw                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<header> <div class=\"wrap\"> <h1><a href=\"/\"><img src=\"img/logo.png\" alt=\"Travify\"></a></h1> <nav><ul> <li class=\"active\"><a href=\"#\">Explore</a></li> <li><a href=\"#\">My Trip</a></li> <li><a href=\"#\">Travel Guide</a></li> <li><a href=\"#\">My Travelogue</a></li> </ul></nav> <div class=\"user-nav\"><ul> <li><a href=\"#\"><span class=\"fa fa-commenting\"></span></a></li> <li><a href=\"#\"><img src=\"upload/user.jpg\" alt=\"me\"></a></li> </ul></div> </div> </header>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navigation.js":["angular","angular-meteor","./navigation.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/components/navigation/navigation.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _navigationHtml = require('./navigation.html');                                                              //
                                                                                                                 //
var _navigationHtml2 = _interopRequireDefault(_navigationHtml);                                                  //
                                                                                                                 //
var name = 'navigation';                                                                                         // 5
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default']]).component(name, {           //
    templateUrl: _navigationHtml2['default'],                                                                    // 10
    controllerAs: name                                                                                           // 11
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"headerbars":{"breadcrumbs":{"breadcrumbs.html":["./breadcrumbs.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/headerbars/breadcrumbs/breadcrumbs.html                                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./breadcrumbs.html!raw");                                                              // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/headerbars/breadcrumbs/breadcrumbs.html";                                 // 5
      var template = "<div class=\"bar bar-breadcrumbs\"> <div class=\"wrap\"> <ul> <li><a href=\"#\">Travify</a></li> <li><a href=\"#\">My trips</a></li> <li><a href=\"#\">Travify Itinerary planner</a></li> </ul> </div> </div>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"breadcrumbs.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/headerbars/breadcrumbs/breadcrumbs.html!raw                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<div class=\"bar bar-breadcrumbs\"> <div class=\"wrap\"> <ul> <li><a href=\"#\">Travify</a></li> <li><a href=\"#\">My trips</a></li> <li><a href=\"#\">Travify Itinerary planner</a></li> </ul> </div> </div>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"breadcrumbs.js":["angular","angular-meteor","./breadcrumbs.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/headerbars/breadcrumbs/breadcrumbs.js                                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _breadcrumbsHtml = require('./breadcrumbs.html');                                                            //
                                                                                                                 //
var _breadcrumbsHtml2 = _interopRequireDefault(_breadcrumbsHtml);                                                //
                                                                                                                 //
var name = 'breadCrumbs';                                                                                        // 5
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default']]).component(name, {           //
    templateUrl: _breadcrumbsHtml2['default'],                                                                   // 10
    bindings: {                                                                                                  // 11
        route: '='                                                                                               // 12
    }                                                                                                            //
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"pages":{"index":{"index.html":["./index.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/index/index.html                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./index.html!raw");                                                                    // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/pages/index/index.html";                                                  // 5
      var template = "<section class=\"headerbars\"> <div class=\"bar bar-newtrip\"> <div class=\"wrap\"> <div class=\"bar-left\"> <a class=\"btn btn-pink\" href=\"/newtrip-1\">Plan a new trip</a> </div> <div class=\"bar-right\"> <input type=\"text\" placeholder=\"Enter a country or location\"> <span class=\"fa fa-search\"></span> </div> </div> </div> </section> <section id=\"page-landing\" class=\"page-content\"> <div class=\"wrap\"> <div class=\"modal\"> <div class=\"modal-close\"><span class=\"fa fa-close\"></span></div> <h2 class=\"main-heading pink\">Hey you have not planned a trip yet!</h2> <p class=\"subscript\">Let's get you started!</p> <a href=\"/newtrip-1\" class=\"btn btn-pink\">Plan a trip</a> </div> <div class=\"popular-attr\"> <h2 class=\"main-heading\">Check out those popular attractions</h2> <ul class=\"cols-3\"> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> </ul> </div> </div> </section>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/index/index.html!raw                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<section class=\"headerbars\"> <div class=\"bar bar-newtrip\"> <div class=\"wrap\"> <div class=\"bar-left\"> <a class=\"btn btn-pink\" href=\"/newtrip-1\">Plan a new trip</a> </div> <div class=\"bar-right\"> <input type=\"text\" placeholder=\"Enter a country or location\"> <span class=\"fa fa-search\"></span> </div> </div> </div> </section> <section id=\"page-landing\" class=\"page-content\"> <div class=\"wrap\"> <div class=\"modal\"> <div class=\"modal-close\"><span class=\"fa fa-close\"></span></div> <h2 class=\"main-heading pink\">Hey you have not planned a trip yet!</h2> <p class=\"subscript\">Let's get you started!</p> <a href=\"/newtrip-1\" class=\"btn btn-pink\">Plan a trip</a> </div> <div class=\"popular-attr\"> <h2 class=\"main-heading\">Check out those popular attractions</h2> <ul class=\"cols-3\"> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> <li> <div class=\"inner\"> <div class=\"min\"> <img src=\"upload/attraction.jpg\" alt=\"\"> </div> <div class=\"center\"> <h3 class=\"heading\">Gardens by the bay</h3> <span class=\"location\">Singapore</span> </div> <div class=\"talking\"><span class=\"fa fa-comment-o\"></span> 62</div> </div> </li> </ul> </div> </div> </section>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["angular","angular-meteor","./index.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/index/index.js                                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _indexHtml = require('./index.html');                                                                        //
                                                                                                                 //
var _indexHtml2 = _interopRequireDefault(_indexHtml);                                                            //
                                                                                                                 //
var name = 'pageIndex';                                                                                          // 5
                                                                                                                 //
var PageIndex = function PageIndex($scope) {                                                                     //
    'ngInject';                                                                                                  // 8
    //ADD LOADING FOR THE "PROMOTED ATTRACTIONS" HERE                                                            //
                                                                                                                 //
    _classCallCheck(this, PageIndex);                                                                            //
};                                                                                                               //
PageIndex.$inject = ["$scope"];                                                                                  //
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default']]).component(name, {           // 16
    templateUrl: _indexHtml2['default'],                                                                         // 17
    controllerAs: name                                                                                           //
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"loading":{"loading.html":["./loading.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/loading/loading.html                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./loading.html!raw");                                                                  // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/pages/loading/loading.html";                                              // 5
      var template = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li class=\"active\"> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-loading\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading\">Please wait</h2> <span class=\"subscript\">while we generate your itinerary based on your interest<br>...</span> <div class=\"loader\"></div> </div> </section>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"loading.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/loading/loading.html!raw                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li class=\"active\"> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-loading\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading\">Please wait</h2> <span class=\"subscript\">while we generate your itinerary based on your interest<br>...</span> <div class=\"loader\"></div> </div> </section>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loading.js":["angular","angular-meteor","angular-ui-router","./loading.html","../../headerbars/breadcrumbs/breadcrumbs",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/loading/loading.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _angularUiRouter = require('angular-ui-router');                                                             //
                                                                                                                 //
var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);                                                //
                                                                                                                 //
var _loadingHtml = require('./loading.html');                                                                    //
                                                                                                                 //
var _loadingHtml2 = _interopRequireDefault(_loadingHtml);                                                        //
                                                                                                                 //
var _headerbarsBreadcrumbsBreadcrumbs = require('../../headerbars/breadcrumbs/breadcrumbs');                     //
                                                                                                                 //
var name = 'pageLoading';                                                                                        // 7
                                                                                                                 //
var PageLoading = function PageLoading($scope, $state) {                                                         //
    'ngInject';                                                                                                  // 11
                                                                                                                 //
    //This will be replaced with some meaningfull code later,                                                    //
    //as in, once load finishes, take user to the next page instead of fixed time :)                             //
                                                                                                                 //
    _classCallCheck(this, PageLoading);                                                                          //
                                                                                                                 //
    setTimeout(function () {                                                                                     // 15
        $state.go('newtrip-3');                                                                                  // 16
    }, 3000);                                                                                                    //
};                                                                                                               //
PageLoading.$inject = ["$scope", "$state"];                                                                      //
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default'], _angularUiRouter2['default']]).component(name, {
    templateUrl: _loadingHtml2['default'],                                                                       // 26
    controllerAs: name,                                                                                          // 27
    controller: PageLoading                                                                                      //
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"newtrip1":{"newtrip1.html":["./newtrip1.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip1/newtrip1.html                                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./newtrip1.html!raw");                                                                 // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/pages/newtrip1/newtrip1.html";                                            // 5
      var template = "\t<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li class=\"active\"> <strong>Step 1</strong> <span>Trip information</span> </li> <li> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-tripinfo\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading bot-border\">Where are you going?</h2> <div class=\"input-group\"> <label>Country/state</label> <input type=\"text\" placeholder=\"Type in a location\"> </div> <h2 class=\"main-heading bot-border\">Duration of your trip</h2> <div class=\"input-group\"> <label>Start date of trip</label> <div class=\"input\"> <input type=\"date\" placeholder=\"Tuesday, 9 January 2016, 2PM\"> <span class=\"fa fa-calendar\"></span> </div> </div> <div class=\"input-group\"> <label>End date of trip</label> <div class=\"input\"> <input type=\"date\" placeholder=\"Tuesday, 9 January 2016, 2PM\"> <span class=\"fa fa-calendar\"></span> </div> </div> <h2 class=\"main-heading bot-border\">Accomodation</h2> <div class=\"input-group\"> <label>Place of accomodation</label> <input type=\"text\" placeholder=\"Type in a location\"> </div> <div class=\"align-right bottom-btns\"> <a href=\"/newtrip-2\" class=\"btn btn-asphalt\">Next step</a> </div> </div> </section>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"newtrip1.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip1/newtrip1.html!raw                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "\t<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li class=\"active\"> <strong>Step 1</strong> <span>Trip information</span> </li> <li> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-tripinfo\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading bot-border\">Where are you going?</h2> <div class=\"input-group\"> <label>Country/state</label> <input type=\"text\" placeholder=\"Type in a location\"> </div> <h2 class=\"main-heading bot-border\">Duration of your trip</h2> <div class=\"input-group\"> <label>Start date of trip</label> <div class=\"input\"> <input type=\"date\" placeholder=\"Tuesday, 9 January 2016, 2PM\"> <span class=\"fa fa-calendar\"></span> </div> </div> <div class=\"input-group\"> <label>End date of trip</label> <div class=\"input\"> <input type=\"date\" placeholder=\"Tuesday, 9 January 2016, 2PM\"> <span class=\"fa fa-calendar\"></span> </div> </div> <h2 class=\"main-heading bot-border\">Accomodation</h2> <div class=\"input-group\"> <label>Place of accomodation</label> <input type=\"text\" placeholder=\"Type in a location\"> </div> <div class=\"align-right bottom-btns\"> <a href=\"/newtrip-2\" class=\"btn btn-asphalt\">Next step</a> </div> </div> </section>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"newtrip1.js":["angular","angular-meteor","./newtrip1.html","../../headerbars/breadcrumbs/breadcrumbs",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip1/newtrip1.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _newtrip1Html = require('./newtrip1.html');                                                                  //
                                                                                                                 //
var _newtrip1Html2 = _interopRequireDefault(_newtrip1Html);                                                      //
                                                                                                                 //
var _headerbarsBreadcrumbsBreadcrumbs = require('../../headerbars/breadcrumbs/breadcrumbs');                     //
                                                                                                                 //
var name = 'pageNewtrip1';                                                                                       // 6
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default']]).component(name, {           //
    templateUrl: _newtrip1Html2['default']                                                                       // 11
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"newtrip2":{"newtrip2.html":["./newtrip2.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip2/newtrip2.html                                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./newtrip2.html!raw");                                                                 // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/pages/newtrip2/newtrip2.html";                                            // 5
      var template = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li class=\"active\"> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-tripinfo\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading bot-border\">Adjust your focus for this trip</h2> <div> <div class=\"range-group\"> <label>Museums and art</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> <div class=\"range-group\"> <label>Nature</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> </div> <div> <div class=\"range-group\"> <label>Shopping</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> <div class=\"range-group\"> <label>Adventure</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> </div> <div> <div class=\"range-group\"> <label>Street and squares</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> <div class=\"range-group\"> <label>Monuments and landmarks</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> </div> <h2 class=\"main-heading bot-border\">Saved locations/events</h2> <ul class=\"saved-list cols-3\"> <li> <div class=\"inner card card-info selectable selected\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable selected\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-map-marker\"></span> Unofficial Location</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div><span class=\"fa fa-fw fa-clock-o\"></span> 10am to 12pm</div> <div><span class=\"fa fa-fw fa-map-marker\"></span> Sunghei Wetlands</div> <div><span class=\"fa fa-fw fa-users\"></span> 31 participants</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-map-marker\"></span> Unofficial Location</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div><span class=\"fa fa-fw fa-clock-o\"></span> 10am to 12pm</div> <div><span class=\"fa fa-fw fa-map-marker\"></span> Sunghei Wetlands</div> <div><span class=\"fa fa-fw fa-users\"></span> 31 participants</div> </div> </div> </li> </ul> <div class=\"align-right clearfix bottom-btns\"> <a href=\"/newtrip-1\" class=\"btn btn-asphalttr fleft\">Prev step</a> <a href=\"/loading\" class=\"btn btn-asphalt\">Next step</a> </div> </div> </section>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"newtrip2.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip2/newtrip2.html!raw                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li class=\"active\"> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-tripinfo\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading bot-border\">Adjust your focus for this trip</h2> <div> <div class=\"range-group\"> <label>Museums and art</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> <div class=\"range-group\"> <label>Nature</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> </div> <div> <div class=\"range-group\"> <label>Shopping</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> <div class=\"range-group\"> <label>Adventure</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> </div> <div> <div class=\"range-group\"> <label>Street and squares</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> <div class=\"range-group\"> <label>Monuments and landmarks</label> <input type=\"range\" min=\"0\" max=\"10\" step=\"1\"> <div class=\"min\">0</div> <div class=\"max\">10</div> </div> </div> <h2 class=\"main-heading bot-border\">Saved locations/events</h2> <ul class=\"saved-list cols-3\"> <li> <div class=\"inner card card-info selectable selected\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable selected\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-university\"></span> Landmark</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-map-marker\"></span> Unofficial Location</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div><span class=\"fa fa-fw fa-clock-o\"></span> 10am to 12pm</div> <div><span class=\"fa fa-fw fa-map-marker\"></span> Sunghei Wetlands</div> <div><span class=\"fa fa-fw fa-users\"></span> 31 participants</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-map-marker\"></span> Unofficial Location</div> <div class=\"tags\">nature, green, musical</div> </div> </div> </li> <li> <div class=\"inner card card-info selectable\" ng-click=\"savedClick($event);\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div><span class=\"fa fa-fw fa-clock-o\"></span> 10am to 12pm</div> <div><span class=\"fa fa-fw fa-map-marker\"></span> Sunghei Wetlands</div> <div><span class=\"fa fa-fw fa-users\"></span> 31 participants</div> </div> </div> </li> </ul> <div class=\"align-right clearfix bottom-btns\"> <a href=\"/newtrip-1\" class=\"btn btn-asphalttr fleft\">Prev step</a> <a href=\"/loading\" class=\"btn btn-asphalt\">Next step</a> </div> </div> </section>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"newtrip2.js":["angular","angular-meteor","./newtrip2.html","../../headerbars/breadcrumbs/breadcrumbs",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip2/newtrip2.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _newtrip2Html = require('./newtrip2.html');                                                                  //
                                                                                                                 //
var _newtrip2Html2 = _interopRequireDefault(_newtrip2Html);                                                      //
                                                                                                                 //
var _headerbarsBreadcrumbsBreadcrumbs = require('../../headerbars/breadcrumbs/breadcrumbs');                     //
                                                                                                                 //
var name = 'pageNewtrip2';                                                                                       // 6
                                                                                                                 //
var PageNewtrip2 = function PageNewtrip2($scope) {                                                               //
    'ngInject';                                                                                                  // 10
                                                                                                                 //
    _classCallCheck(this, PageNewtrip2);                                                                         //
                                                                                                                 //
    $scope.savedClick = function (event) {                                                                       // 11
        $(event.currentTarget).toggleClass('selected');                                                          // 12
        //Save this into user preferences                                                                        //
    };                                                                                                           //
};                                                                                                               //
PageNewtrip2.$inject = ["$scope"];                                                                               //
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default']]).component(name, {           // 21
    templateUrl: _newtrip2Html2['default'],                                                                      // 22
    controllerAs: name,                                                                                          // 23
    controller: PageNewtrip2                                                                                     //
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"newtrip3":{"newtrip3.html":["./newtrip3.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip3/newtrip3.html                                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./newtrip3.html!raw");                                                                 // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/pages/newtrip3/newtrip3.html";                                            // 5
      var template = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li> <strong>Step 2</strong> <span>Your interest</span> </li> <li class=\"active\"> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-routing\" class=\"page-content with-slidemenu\" ng-class=\"{'slidemenu-open': slideMenuOpen}\"> <div class=\"map\"> <div id=\"google-map\"></div> </div> <div class=\"slidemenu\"> <div class=\"slidemenu-header\"> <div class=\"info\"> <h2 class=\"main-heading uppercase\">Your internary</h2> <div class=\"with-icon\"> <span class=\"fa fa-fw fa-lightbulb-o\"></span> <p>We have generated your internary from <strong>9 Jan</strong> to <strong>14 Jan</strong>. You may remove any unwanted attractions.</p> </div> </div> </div> <div class=\"slidemenu-inner\"> <div class=\"slidemenu-main\"> <div class=\"header\"> <div class=\"header-bar day-selector\"> <span class=\"fa fa-chevron-left\"></span> <span class=\"current\">9 Jan, 2016</span> <span class=\"fa fa-chevron-right\"></span> </div> <div class=\"header-subbar align-right show-estimated\" ng-click=\"toggleEstimates($event);\">Display estimated travel time <span class=\"fa fa-check\"></span></div> </div> <div class=\"body\"> <ul class=\"timeline\"> <li class=\"active\"> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">9 AM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-timespan\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"time\"><span class=\"fa fa-clock-o\"></span> 10am - 12pm</div> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div class=\"details\"><a href=\"javascript://\" ng-click=\"openOverlay = true\">See details</a></div> <div class=\"delete\"><span class=\"fa fa-remove\"></span></div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">12 AM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-estimate\"> <div class=\"content\"> <div class=\"centerit\"> <h3 class=\"heading\">Estimated Travel Time</h3> <span class=\"time\">45 - 60 min</span> </div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">3 PM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-timespan\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"time\"><span class=\"fa fa-clock-o\"></span> 10am - 12pm</div> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div class=\"details\"><a href=\"javascript://\" ng-click=\"openOverlay = true\">See details</a></div> <div class=\"delete\"><span class=\"fa fa-remove\"></span></div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">8 PM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-estimate\"> <div class=\"content\"> <div class=\"centerit\"> <h3 class=\"heading\">Estimated Travel Time</h3> <span class=\"time\">45 - 60 min</span> </div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">10 PM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-timespan\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"time\"><span class=\"fa fa-clock-o\"></span> 10am - 12pm</div> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div class=\"details\"><a href=\"javascript://\" ng-click=\"openOverlay = true\">See details</a></div> <div class=\"delete\"><span class=\"fa fa-remove\"></span></div> </div> </div> </div> </li> </ul> </div> <div class=\"footer align-right clearfix\"> <a href=\"/newtrip-3\" class=\"btn btn-asphalttr fleft\">Prev step</a> <a href=\"/newtrip-4\" class=\"btn btn-asphalt\">Next step</a> </div> </div> <div class=\"slidemenu-overlay attraction-detail\" ng-class=\"{'open': openOverlay}\"> <div class=\"header\"> <div class=\"header-bar header-bar-goback\"> <span class=\"fa fa-chevron-left\" ng-click=\"openOverlay = false\"></span> <span class=\"current\">Botanic Gardens</span> </div> </div> <div class=\"body\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <h3 class=\"main-heading\">About</h3> <p class=\"small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet cursus aliquam. Pellentesque eget erat erat. Phasellus tincidunt neque quis elit tincidunt volutpat venenatis ut ipsum. Praesent nunc dolor, rutrum vel viverra et, gravida sed urna. Praesent dictum lacus in fringilla aliquet. Duis aliquet quam et sollicitudin vestibulum. Mauris et orci dolor. Aliquam sollicitudin lobortis sapien, ut tincidunt lectus scelerisque id. Maecenas interdum nisi nec massa facilisis mattis. Fusce molestie, felis id mattis scelerisque, augue dolor posuere leo, vitae tristique erat velit non nisl. Sed vehicula commodo ornare. Proin non pharetra ipsum, non molestie ante. Cras elementum orci in sem lacinia auctor. Mauris condimentum sit amet nunc eu pulvinar.</p> <p class=\"small\">Proin ligula ante, imperdiet quis sem sed, sollicitudin dictum erat. Duis non velit sodales felis varius imperdiet eu in libero. Integer accumsan eros ac orci mattis, vitae mattis arcu iaculis. Maecenas accumsan justo eu augue tincidunt, et euismod justo laoreet. Nulla sapien nisl, pulvinar nec tincidunt quis, sodales accumsan massa. Nulla feugiat bibendum mollis. Praesent facilisis diam eu metus volutpat, vitae imperdiet enim auctor. Ut a ullamcorper risus. Nullam eget cursus mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit elit quis quam volutpat, scelerisque hendrerit eros ultrices. Curabitur massa lorem, lobortis et molestie ac, interdum in tortor. </p> <div class=\"mins cols-4\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> </div> <div class=\"details cols-4\"> <div> <h3 class=\"main-heading\">Opening hours</h3> </div> <div> Mon-Fri 9am-12pm<br> Sat-Sun & Pub<br> 10am-6pm </div> <div class=\"align-right\"> <h3 class=\"main-heading\">Pricing</h3> </div> <div> Child<br> Adult - 10$<br> Senior </div> </div> </div> </div> </div> <div class=\"close pink\" ng-click=\"slideMenuOpen = !slideMenuOpen\"><span class=\"icon-circle centerit\"><span class=\"fa fa-chevron-right fa-fw\"></span></span></div> </div> </section>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"newtrip3.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip3/newtrip3.html!raw                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li> <strong>Step 2</strong> <span>Your interest</span> </li> <li class=\"active\"> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-routing\" class=\"page-content with-slidemenu\" ng-class=\"{'slidemenu-open': slideMenuOpen}\"> <div class=\"map\"> <div id=\"google-map\"></div> </div> <div class=\"slidemenu\"> <div class=\"slidemenu-header\"> <div class=\"info\"> <h2 class=\"main-heading uppercase\">Your internary</h2> <div class=\"with-icon\"> <span class=\"fa fa-fw fa-lightbulb-o\"></span> <p>We have generated your internary from <strong>9 Jan</strong> to <strong>14 Jan</strong>. You may remove any unwanted attractions.</p> </div> </div> </div> <div class=\"slidemenu-inner\"> <div class=\"slidemenu-main\"> <div class=\"header\"> <div class=\"header-bar day-selector\"> <span class=\"fa fa-chevron-left\"></span> <span class=\"current\">9 Jan, 2016</span> <span class=\"fa fa-chevron-right\"></span> </div> <div class=\"header-subbar align-right show-estimated\" ng-click=\"toggleEstimates($event);\">Display estimated travel time <span class=\"fa fa-check\"></span></div> </div> <div class=\"body\"> <ul class=\"timeline\"> <li class=\"active\"> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">9 AM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-timespan\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"time\"><span class=\"fa fa-clock-o\"></span> 10am - 12pm</div> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div class=\"details\"><a href=\"javascript://\" ng-click=\"openOverlay = true\">See details</a></div> <div class=\"delete\"><span class=\"fa fa-remove\"></span></div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">12 AM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-estimate\"> <div class=\"content\"> <div class=\"centerit\"> <h3 class=\"heading\">Estimated Travel Time</h3> <span class=\"time\">45 - 60 min</span> </div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">3 PM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-timespan\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"time\"><span class=\"fa fa-clock-o\"></span> 10am - 12pm</div> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div class=\"details\"><a href=\"javascript://\" ng-click=\"openOverlay = true\">See details</a></div> <div class=\"delete\"><span class=\"fa fa-remove\"></span></div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">8 PM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-estimate\"> <div class=\"content\"> <div class=\"centerit\"> <h3 class=\"heading\">Estimated Travel Time</h3> <span class=\"time\">45 - 60 min</span> </div> </div> </div> </div> </li> <li> <div class=\"timeline-block timeline-timeblock\"> <div class=\"details\"> <div class=\"time\">10 PM</div> <div class=\"marker\"></div> </div> </div> <div class=\"timeline-block\"> <div class=\"card card-timespan\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"time\"><span class=\"fa fa-clock-o\"></span> 10am - 12pm</div> <div class=\"type\"><span class=\"fa fa-fw fa-calendar\"></span> Official Event</div> <div class=\"details\"><a href=\"javascript://\" ng-click=\"openOverlay = true\">See details</a></div> <div class=\"delete\"><span class=\"fa fa-remove\"></span></div> </div> </div> </div> </li> </ul> </div> <div class=\"footer align-right clearfix\"> <a href=\"/newtrip-3\" class=\"btn btn-asphalttr fleft\">Prev step</a> <a href=\"/newtrip-4\" class=\"btn btn-asphalt\">Next step</a> </div> </div> <div class=\"slidemenu-overlay attraction-detail\" ng-class=\"{'open': openOverlay}\"> <div class=\"header\"> <div class=\"header-bar header-bar-goback\"> <span class=\"fa fa-chevron-left\" ng-click=\"openOverlay = false\"></span> <span class=\"current\">Botanic Gardens</span> </div> </div> <div class=\"body\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <h3 class=\"main-heading\">About</h3> <p class=\"small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet cursus aliquam. Pellentesque eget erat erat. Phasellus tincidunt neque quis elit tincidunt volutpat venenatis ut ipsum. Praesent nunc dolor, rutrum vel viverra et, gravida sed urna. Praesent dictum lacus in fringilla aliquet. Duis aliquet quam et sollicitudin vestibulum. Mauris et orci dolor. Aliquam sollicitudin lobortis sapien, ut tincidunt lectus scelerisque id. Maecenas interdum nisi nec massa facilisis mattis. Fusce molestie, felis id mattis scelerisque, augue dolor posuere leo, vitae tristique erat velit non nisl. Sed vehicula commodo ornare. Proin non pharetra ipsum, non molestie ante. Cras elementum orci in sem lacinia auctor. Mauris condimentum sit amet nunc eu pulvinar.</p> <p class=\"small\">Proin ligula ante, imperdiet quis sem sed, sollicitudin dictum erat. Duis non velit sodales felis varius imperdiet eu in libero. Integer accumsan eros ac orci mattis, vitae mattis arcu iaculis. Maecenas accumsan justo eu augue tincidunt, et euismod justo laoreet. Nulla sapien nisl, pulvinar nec tincidunt quis, sodales accumsan massa. Nulla feugiat bibendum mollis. Praesent facilisis diam eu metus volutpat, vitae imperdiet enim auctor. Ut a ullamcorper risus. Nullam eget cursus mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit elit quis quam volutpat, scelerisque hendrerit eros ultrices. Curabitur massa lorem, lobortis et molestie ac, interdum in tortor. </p> <div class=\"mins cols-4\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> </div> <div class=\"details cols-4\"> <div> <h3 class=\"main-heading\">Opening hours</h3> </div> <div> Mon-Fri 9am-12pm<br> Sat-Sun & Pub<br> 10am-6pm </div> <div class=\"align-right\"> <h3 class=\"main-heading\">Pricing</h3> </div> <div> Child<br> Adult - 10$<br> Senior </div> </div> </div> </div> </div> <div class=\"close pink\" ng-click=\"slideMenuOpen = !slideMenuOpen\"><span class=\"icon-circle centerit\"><span class=\"fa fa-chevron-right fa-fw\"></span></span></div> </div> </section>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"newtrip3.js":["angular","angular-meteor","leaflet-routing-machine","./newtrip3.html","../../headerbars/breadcrumbs/breadcrumbs",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip3/newtrip3.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _leafletRoutingMachine = require('leaflet-routing-machine');                                                 //
                                                                                                                 //
var _leafletRoutingMachine2 = _interopRequireDefault(_leafletRoutingMachine);                                    //
                                                                                                                 //
var _newtrip3Html = require('./newtrip3.html');                                                                  //
                                                                                                                 //
var _newtrip3Html2 = _interopRequireDefault(_newtrip3Html);                                                      //
                                                                                                                 //
var _headerbarsBreadcrumbsBreadcrumbs = require('../../headerbars/breadcrumbs/breadcrumbs');                     //
                                                                                                                 //
var name = 'pageNewtrip3';                                                                                       // 7
                                                                                                                 //
var PageNewtrip3 = function PageNewtrip3($scope, $timeout) {                                                     //
    'ngInject';                                                                                                  // 11
    //Map / attraction list load here                                                                            //
                                                                                                                 //
    //Assuming that call to webapi will generate a route in format similar to the one below                      //
                                                                                                                 //
    _classCallCheck(this, PageNewtrip3);                                                                         //
                                                                                                                 //
    var resultsList = [[{ "id": 21, "lat": 1.302503, "lng": 103.857983 }, { "id": 16, "lat": 1.307792, "lng": 103.852583 }, { "id": 3, "lat": 1.339988, "lng": 103.833401 }, { "id": 1, "lat": 1.361516, "lng": 103.835812 }, { "id": 39, "lat": 1.311125, "lng": 103.814733 }, { "id": 34, "lat": 1.30351, "lng": 103.833056 }, { "id": 17, "lat": 1.313351, "lng": 103.855794 }, { "id": 35, "lat": 1.307745, "lng": 103.851086 }], [{ "id": 33, "lat": 1.28633, "lng": 103.852932 }, { "id": 31, "lat": 1.279464, "lng": 103.849946 }, { "id": 5, "lat": 1.2816209, "lng": 103.844377 }, { "id": 41, "lat": 1.277307, "lng": 103.837311 }, { "id": 15, "lat": 1.271026, "lng": 103.819773 }, { "id": 8, "lat": 1.304586, "lng": 103.839427 }, { "id": 22, "lat": 1.292935, "lng": 103.849662 }, { "id": 12, "lat": 1.290154, "lng": 103.844846 }, { "id": 26, "lat": 1.301016, "lng": 103.845411 }], [{ "id": 10, "lat": 1.289857, "lng": 103.8552799 }, { "id": 24, "lat": 1.280635, "lng": 103.87159 }, { "id": 2, "lat": 1.281744, "lng": 103.867383 }, { "id": 30, "lat": 1.303091, "lng": 103.859858 }, { "id": 23, "lat": 1.303746, "lng": 103.901182 }, { "id": 38, "lat": 1.31451, "lng": 103.901022 }, { "id": 14, "lat": 1.300191, "lng": 103.857614 }]];
                                                                                                                 //
    /*$http({                                                                                                    //
        method: 'POST',                                                                                          //
        url: "http://188.166.230.3:8080/TripEngine/TripEngine",                                                  //
        data: {                                                                                                  //
            "cashFlow": 500,                                                                                     //
            "travelDays": 3,                                                                                     //
            "startTime": 800,                                                                                    //
            "endTime": 2230,                                                                                     //
            "startAddress": 45,                                                                                  //
            "endAddress": 45,                                                                                    //
            "mustGo": []                                                                                         //
        }                                                                                                        //
    }).then(function(result){                                                                                    //
        console.log(result);                                                                                     //
    }, function(){                                                                                               //
        console.log("error occured");                                                                            //
    });*/                                                                                                        //
    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';                                              // 34
    var map = L.map('google-map', { zoomControl: true }).setView([1.290270, 103.851959], 14);                    // 35
    L.tileLayer('http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWlzaDkxIiwiYSI6ImNpb3Y0OGR5ODAwdmd0aG00eHlreW14eHMifQ.LV7N1cFaD4ll27UrYUllyQ', {
        maxZoom: 18,                                                                                             // 37
        id: 'mapbox.streets',                                                                                    // 38
        accessToken: 'pk.eyJ1IjoieWlzaDkxIiwiYSI6ImNpb3Y0OGR5ODAwdmd0aG00eHlreW14eHMifQ.LV7N1cFaD4ll27UrYUllyQ',
        detectRetina: true                                                                                       // 40
    }).addTo(map);                                                                                               //
    map.zoomControl.setPosition('bottomleft');                                                                   // 42
                                                                                                                 //
    var resultArr = resultsList[0];                                                                              // 44
    var latlngArray = [];                                                                                        // 45
                                                                                                                 //
    for (var i = 0; i < resultArr.length; i++) {                                                                 // 47
        if (resultArr[i]) {                                                                                      // 48
            var ltln = L.latLng(resultArr[i].lat, resultArr[i].lng);                                             // 49
            latlngArray.push(ltln);                                                                              // 50
        }                                                                                                        //
    }                                                                                                            //
    var control = _leafletRoutingMachine2['default'].control({                                                   // 53
        draggableWaypoints: false,                                                                               // 54
        addWaypoints: false,                                                                                     // 55
        routeWhileDragging: false,                                                                               // 56
        show: false,                                                                                             // 57
        plan: _leafletRoutingMachine2['default'].plan(latlngArray, {                                             // 58
            createMarker: function createMarker(i, wp) {                                                         // 59
                var markerIcon = L.icon({                                                                        // 60
                    iconUrl: '/img/map-marker-red.png',                                                          // 61
                    iconSize: [50, 50],                                                                          // 62
                    iconAnchor: [25, 25],                                                                        // 63
                    popupAnchor: [0, -10]                                                                        // 64
                });                                                                                              //
                var marker = L.marker(wp.latLng, { icon: markerIcon });                                          // 66
                marker.bindPopup("temporary text");                                                              // 67
                marker.on('click', function (e) {                                                                // 68
                    this.openPopup();                                                                            // 69
                });                                                                                              //
                marker.on('mouseover', function (e) {                                                            // 71
                    this.openPopup();                                                                            // 72
                });                                                                                              //
                marker.on('mouseout', function (e) {                                                             // 74
                    this.closePopup();                                                                           // 75
                });                                                                                              //
                return marker;                                                                                   // 77
            }                                                                                                    //
        }),                                                                                                      //
        lineOptions: {                                                                                           // 80
            styles: [{ color: '#ff629f', opacity: 0, weight: 9 }, {                                              // 81
                color: '#ff629f',                                                                                // 82
                opacity: 1,                                                                                      // 83
                weight: 6                                                                                        // 84
            }, { color: '#ff629f', opacity: 1, weight: 2 }]                                                      //
        }                                                                                                        //
    }).addTo(map);                                                                                               //
    $('#google-map').data('leafletControlInstance', control);                                                    // 88
    //$scope.route = "[{link: '#', text: 'Travify'}, {link: '#', text: 'My trips'}, {link: '#', text: 'Travify Itinerary planner'}]";
                                                                                                                 //
    $scope.toggleEstimates = function (event) {                                                                  // 91
        $(event.currentTarget).toggleClass('off');                                                               // 92
        $('.timeline .card-estimate').parent().parent().slideToggle();                                           // 93
    };                                                                                                           //
                                                                                                                 //
    $scope.slideMenuOpen = true;                                                                                 // 96
    $scope.openOverlay = false;                                                                                  // 97
                                                                                                                 //
    $timeout(function () {                                                                                       // 99
        var tmph = window.innerHeight - (document.getElementsByTagName('header')[0].clientHeight + document.getElementsByClassName('headerbars')[0].clientHeight);
        document.getElementsByClassName('page-content')[0].style.height = tmph + 'px';                           // 101
        tmph -= document.querySelector('.slidemenu-header').clientHeight;                                        // 102
        var elems = document.querySelectorAll('.slidemenu .body');                                               // 103
        for (var i = 0; i < elems.length; i++) {                                                                 // 104
            var siblings = elems[i].parentNode.childNodes;                                                       // 105
            var offset = 0;                                                                                      // 106
            for (var j = 0; j < siblings.length; j++) {                                                          // 107
                if (siblings[j].nodeType == 1) {                                                                 // 108
                    if (siblings[j].classList.contains("header") || siblings[j].classList.contains("footer")) {  // 109
                        offset += siblings[j].clientHeight;                                                      // 110
                    }                                                                                            //
                }                                                                                                //
            }                                                                                                    //
            elems[i].style.height = tmph - offset + 'px';                                                        // 114
        }                                                                                                        //
    }, 0);                                                                                                       //
};                                                                                                               //
PageNewtrip3.$inject = ["$scope", "$timeout"];                                                                   //
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default'], _headerbarsBreadcrumbsBreadcrumbs.name]).component(name, {
    templateUrl: _newtrip3Html2['default'],                                                                      // 125
    controllerAs: name,                                                                                          // 126
    controller: PageNewtrip3                                                                                     //
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"newtrip4":{"newtrip4.html":["./newtrip4.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip4/newtrip4.html                                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./newtrip4.html!raw");                                                                 // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/pages/newtrip4/newtrip4.html";                                            // 5
      var template = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li class=\"active\"> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-summary\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading bot-border\">Your Trip</h2> <ul class=\"cols-1\"> <li> <div class=\"inner card card-target selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Singapore</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"flights\"> <strong><span class=\"fa fa-plane\"></span> Book your flight now with:</strong> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> </div> </div> </div> </li> </ul> <h2 class=\"main-heading bot-border\">Place of Accomodation</h2> <ul class=\"cols-2\"> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> </ul> <h2 class=\"main-heading bot-border\">Attractions</h2> <ul class=\"cols-2\"> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> </ul> <div class=\"align-right clearfix bottom-btns\"> <a href=\"/plantrip-3.html\" class=\"btn btn-asphalttr fleft\">Prev step</a> <a href=\"#\" class=\"btn btn-pink\">Create trip</a> </div> </div> </section>";
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"newtrip4.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip4/newtrip4.html!raw                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<section class=\"headerbars\"> <bread-crumbs></bread-crumbs> <div class=\"bar bar-wizard\"> <div class=\"wrap\"> <ul> <li> <strong>Planning new trip</strong> <span>Travify makes it easy</span> </li> <li> <strong>Step 1</strong> <span>Trip information</span> </li> <li> <strong>Step 2</strong> <span>Your interest</span> </li> <li> <strong>Step 3</strong> <span>Your itinerary</span> </li> <li class=\"active\"> <strong>Step 4</strong> <span>Trip Summary</span> </li> </ul> </div> </div> </section> <section id=\"page-summary\" class=\"page-content\"> <div class=\"wrap\"> <h2 class=\"main-heading bot-border\">Your Trip</h2> <ul class=\"cols-1\"> <li> <div class=\"inner card card-target selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Singapore</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"flights\"> <strong><span class=\"fa fa-plane\"></span> Book your flight now with:</strong> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> <div class=\"row\"><a href=\"#\"><img src=\"upload/flight.png\" alt=\"\"></a></div> </div> </div> </div> </li> </ul> <h2 class=\"main-heading bot-border\">Place of Accomodation</h2> <ul class=\"cols-2\"> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> </ul> <h2 class=\"main-heading bot-border\">Attractions</h2> <ul class=\"cols-2\"> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> <li> <div class=\"inner card card-booknow selected\"> <div class=\"min\"><img src=\"upload/attraction.jpg\" alt=\"\"></div> <div class=\"content\"> <h3 class=\"heading\">Botanic Gardens</h3> <div class=\"date\">14 Jan 2016 - 22 Jan 2016</div> <div class=\"details\"><a href=\"#\">See details</a></div> <button class=\"btn btn-pink\">Book now</button> </div> </div> </li> </ul> <div class=\"align-right clearfix bottom-btns\"> <a href=\"/plantrip-3.html\" class=\"btn btn-asphalttr fleft\">Prev step</a> <a href=\"#\" class=\"btn btn-pink\">Create trip</a> </div> </div> </section>";
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"newtrip4.js":["angular","angular-meteor","./newtrip4.html","../../headerbars/breadcrumbs/breadcrumbs",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/pages/newtrip4/newtrip4.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _newtrip4Html = require('./newtrip4.html');                                                                  //
                                                                                                                 //
var _newtrip4Html2 = _interopRequireDefault(_newtrip4Html);                                                      //
                                                                                                                 //
var _headerbarsBreadcrumbsBreadcrumbs = require('../../headerbars/breadcrumbs/breadcrumbs');                     //
                                                                                                                 //
var name = 'pageNewtrip4';                                                                                       // 6
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default']]).component(name, {           //
    templateUrl: _newtrip4Html2['default']                                                                       // 11
});                                                                                                              //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"travify":{"travify.html":["./travify.html!raw",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/travify/travify.html                                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = require("./travify.html!raw");                                                                  // 1
                                                                                                                 // 2
                                                                                                                 // 3
                                                                                                                 // 4
      var templateUrl = "client/import/travify/travify.html";                                                    // 5
      var template = "<navigation></navigation> <div ui-view=\"\"></div>";                                       // 6
                                                                                                                 // 7
      angular.module('angular-templates')                                                                        // 8
        .run(['$templateCache', function($templateCache) {                                                       // 9
          $templateCache.put(templateUrl, template);                                                             // 10
        }]);                                                                                                     // 11
                                                                                                                 // 12
      module.exports = {};                                                                                       // 13
      module.exports.__esModule = true;                                                                          // 14
      module.exports.default = templateUrl;                                                                      // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"travify.html!raw":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/travify/travify.html!raw                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
      exports.__esModule = true;                                                                                 // 2
      exports.default = "<navigation></navigation> <div ui-view=\"\"></div>";                                    // 3
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"travify.js":["angular","angular-meteor","angular-ui-router","./travify.html","../components/navigation/navigation","../pages/index/index","../pages/newtrip1/newtrip1","../pages/newtrip2/newtrip2","../pages/newtrip3/newtrip3","../pages/newtrip4/newtrip4","../pages/loading/loading",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/import/travify/travify.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Object.defineProperty(exports, '__esModule', {                                                                   //
    value: true                                                                                                  //
});                                                                                                              //
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _angularUiRouter = require('angular-ui-router');                                                             //
                                                                                                                 //
var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);                                                //
                                                                                                                 //
var _travifyHtml = require('./travify.html');                                                                    //
                                                                                                                 //
var _travifyHtml2 = _interopRequireDefault(_travifyHtml);                                                        //
                                                                                                                 //
var _componentsNavigationNavigation = require('../components/navigation/navigation');                            //
                                                                                                                 //
var _pagesIndexIndex = require('../pages/index/index');                                                          //
                                                                                                                 //
var _pagesNewtrip1Newtrip1 = require('../pages/newtrip1/newtrip1');                                              //
                                                                                                                 //
var _pagesNewtrip2Newtrip2 = require('../pages/newtrip2/newtrip2');                                              //
                                                                                                                 //
var _pagesNewtrip3Newtrip3 = require('../pages/newtrip3/newtrip3');                                              //
                                                                                                                 //
var _pagesNewtrip4Newtrip4 = require('../pages/newtrip4/newtrip4');                                              //
                                                                                                                 //
var _pagesLoadingLoading = require('../pages/loading/loading');                                                  //
                                                                                                                 //
var name = 'travify';                                                                                            // 14
                                                                                                                 //
var Travify = function Travify($scope) {                                                                         //
    'ngInject';                                                                                                  // 17
    //$reactive(this).attach($scope);                                                                            //
                                                                                                                 //
    _classCallCheck(this, Travify);                                                                              //
};                                                                                                               //
Travify.$inject = ["$scope"];                                                                                    //
                                                                                                                 //
exports['default'] = _angular2['default'].module(name, [_angularMeteor2['default'], _angularUiRouter2['default'], _componentsNavigationNavigation.name, _pagesIndexIndex.name, _pagesNewtrip1Newtrip1.name, _pagesNewtrip2Newtrip2.name, _pagesNewtrip3Newtrip3.name, _pagesNewtrip4Newtrip4.name, _pagesLoadingLoading.name]).component(name, {
    templateUrl: _travifyHtml2['default'],                                                                       // 28
    controllerAs: name,                                                                                          // 29
    controller: Travify                                                                                          //
}).config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';                                                                                                  // 32
    $stateProvider.state('index', {                                                                              // 33
        url: '/',                                                                                                // 34
        template: '<page-index></page-index>'                                                                    //
    }).state('newtrip-1', {                                                                                      // 36
        url: '/newtrip-1',                                                                                       // 37
        template: '<page-newtrip1></page-newtrip1>'                                                              //
    }).state('newtrip-2', {                                                                                      // 39
        url: '/newtrip-2',                                                                                       // 40
        template: '<page-newtrip2></page-newtrip2>'                                                              //
    }).state('newtrip-3', {                                                                                      // 42
        url: '/newtrip-3',                                                                                       // 43
        template: '<page-newtrip3></page-newtrip3>'                                                              //
    }).state('newtrip-4', {                                                                                      // 45
        url: '/newtrip-4',                                                                                       // 46
        template: '<page-newtrip4></page-newtrip4>'                                                              //
    }).state('loading', {                                                                                        // 48
        url: '/loading',                                                                                         // 49
        template: '<page-loading></page-loading>'                                                                //
    });                                                                                                          // 51
    $locationProvider.html5Mode(true);                                                                           // 52
    $urlRouterProvider.otherwise('/');                                                                           //
}]);                                                                                                             //
module.exports = exports['default'];                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"index.html.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/index.html.js                                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
            Meteor.startup(function() {                                                                          // 2
              var attrs = {"ng-app":"travify","ng-strict-di":""};                                                // 3
              for (var prop in attrs) {                                                                          // 4
                document.body.setAttribute(prop, attrs[prop]);                                                   // 5
              }                                                                                                  // 6
            });                                                                                                  // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["angular","angular-meteor","./import/travify/travify",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/main.js                                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                //
                                                                                                                 //
var _angular = require('angular');                                                                               //
                                                                                                                 //
var _angular2 = _interopRequireDefault(_angular);                                                                //
                                                                                                                 //
var _angularMeteor = require('angular-meteor');                                                                  //
                                                                                                                 //
var _angularMeteor2 = _interopRequireDefault(_angularMeteor);                                                    //
                                                                                                                 //
var _importTravifyTravify = require('./import/travify/travify');                                                 //
                                                                                                                 //
var _importTravifyTravify2 = _interopRequireDefault(_importTravifyTravify);                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".css",".html"]});
require("./client/import/components/navigation/navigation.js");
require("./client/import/headerbars/breadcrumbs/breadcrumbs.js");
require("./client/import/pages/index/index.js");
require("./client/import/pages/loading/loading.js");
require("./client/import/pages/newtrip1/newtrip1.js");
require("./client/import/pages/newtrip2/newtrip2.js");
require("./client/import/pages/newtrip3/newtrip3.js");
require("./client/import/pages/newtrip4/newtrip4.js");
require("./client/import/travify/travify.js");
require("./client/index.html.js");
require("./client/main.js");