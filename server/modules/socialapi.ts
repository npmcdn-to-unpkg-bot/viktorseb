http = require('https');

var appconfig = {
    fbapp: "1243426629009918",
    fbsecret: "a7ab781bb2a56006f21c0830bfe77aec"
}

class SocialApi{
    _locationCache : any;
    get(){
        return this._locationCache;
    }
}
class FacebookSocialApi extends SocialApi{
    _batch: any[] = [];
    _opt = {host: 'graph.facebook.com', port: 443, method: 'POST', path: ''}

    addPage(page: string|number){
        this._batch.push({
            "method": "GET",
            "relative_url": "/v2.6/"+page+"/photos/?fields=id,name,images,created_time"
        });
    }
    compileUrl(){
        var url = "/?access_token="+appconfig.fbapp+"|"+appconfig.fbsecret+"&batch="+JSON.stringify(this._batch);
        this._opt.path = url;
    }
    query(callback: any){
        this.compileUrl();
        var req = http.request(this._opt, function(res: any){
            if (res.statusCode == 200){
                var output = '';
                res.setEncoding('utf8');
                res.on('data', (chunk: any) => {output += chunk});
                res.on('end', () => {
                    var outputarr: any[] = JSON.parse(output);
                    var targetarr = outputarr.map((el) => {
                        var tmp = JSON.parse(el.body).data;
                        if (tmp === undefined) return [];
                        var cutmap = tmp.map((el: any) => {
                            return {
                                id: el.id,
                                content: (el.name !== undefined ? el.name : 'Empty'),
                                date: el.created_time,
                                person: 'Audrey Tan',
                                personImg: './static/upload/user.jpg',
                                place: 'Sentosa Silo Beach',
                                placeImg: el.images.splice(0,1)[0].source,
                                time: "today",
                                likes: 25,
                                comments: 5
                            }
                        });
                        return cutmap;
                    })
                    callback(targetarr);
                });
            }
        })
        req.end();
        req.on('error', (e:Error) => {console.log('FacebookSocialApi -> request problem: ' + e.message)});
    }
}
//FacebookSocialApi.prototype = new SocialApi();
module.exports = FacebookSocialApi;
