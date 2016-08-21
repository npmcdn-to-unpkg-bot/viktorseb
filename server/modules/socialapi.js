var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
http = require('https');
var appconfig = {
    fbapp: "1243426629009918",
    fbsecret: "a7ab781bb2a56006f21c0830bfe77aec"
};
var SocialApi = (function () {
    function SocialApi() {
    }
    SocialApi.prototype.get = function () {
        return this._locationCache;
    };
    return SocialApi;
}());
var FacebookSocialApi = (function (_super) {
    __extends(FacebookSocialApi, _super);
    function FacebookSocialApi() {
        _super.apply(this, arguments);
        this._batch = [];
        this._opt = { host: 'graph.facebook.com', port: 443, method: 'POST', path: '' };
    }
    FacebookSocialApi.prototype.addPage = function (page) {
        this._batch.push({
            "method": "GET",
            "relative_url": "/v2.6/" + page + "/photos/?fields=id,name,images,created_time"
        });
    };
    FacebookSocialApi.prototype.compileUrl = function () {
        var url = "/?access_token=" + appconfig.fbapp + "|" + appconfig.fbsecret + "&batch=" + JSON.stringify(this._batch);
        this._opt.path = url;
    };
    FacebookSocialApi.prototype.query = function (callback) {
        this.compileUrl();
        var req = http.request(this._opt, function (res) {
            if (res.statusCode == 200) {
                var output = '';
                res.setEncoding('utf8');
                res.on('data', function (chunk) { output += chunk; });
                res.on('end', function () {
                    var outputarr = JSON.parse(output);
                    var targetarr = outputarr.map(function (el) {
                        var tmp = JSON.parse(el.body).data;
                        if (tmp === undefined)
                            return [];
                        var cutmap = tmp.map(function (el) {
                            return {
                                id: el.id,
                                content: (el.name !== undefined ? el.name : 'Empty'),
                                date: el.created_time,
                                person: 'Audrey Tan',
                                personImg: './static/upload/user.jpg',
                                place: 'Sentosa Silo Beach',
                                placeImg: el.images.splice(0, 1)[0].source,
                                time: "today",
                                likes: 25,
                                comments: 5
                            };
                        });
                        return cutmap;
                    });
                    callback(targetarr);
                });
            }
        });
        req.end();
        req.on('error', function (e) { console.log('FacebookSocialApi -> request problem: ' + e.message); });
    };
    return FacebookSocialApi;
}(SocialApi));
module.exports = FacebookSocialApi;
