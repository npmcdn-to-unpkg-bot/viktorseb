var http = require('http'),
    server = http.createServer(),
    srv = require('socket.io')(server).listen(8000),
    mysql = require('mysql'),
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'travify'
    }),
	http = require('https'),
  FacebookSocialApi = require('./modules/socialapi.js');

var sv = {
    userCount: 0
}

srv.of('/general').on('connection', function(socket: any){
    sv.userCount++;
    console.log('User joined. Current users: ' + sv.userCount);
    socket.on('disconnect', function(){
        sv.userCount--;
        console.log('User left. Current users: ' + sv.userCount);
    })
})

srv.of('/admin').on('connection', function(socket: any){
    socket.on('user count', function(fn: any){
        fn(sv.userCount);
    })
})

srv.of('/attractions').on('connection', function(socket: any){
    socket.join('Singapore');
    processApi();
   /* if (locationCache['Singapore'].length){
        socket.emit('rcv feed',locationCache['Singapore']);
    }*/
})

db.connect();
function processApi(){
    //srv.of('/attractions').to('Singapore').emit('rcv feed', 'processingApi');
    //http.req
    //getFacebook();
    db.query("SELECT `facebook` FROM `attractions` WHERE `location` = 'Singapore'", function(err: any, rows: any, fields: any){
        if (err) console.log('error retrieving from database');
        var fb = new FacebookSocialApi();
        rows.forEach((element: any) => {
            fb.addPage(element.facebook);
        });
        //return;
        //var fb = new FacebookSocialApi();
        /*fb.addPage('marinabaysands');
        fb.addPage('gardensbythebay');
        fb.addPage('ClarkeQuay');
        fb.addPage('nationalgallerysg');*/
        fb.query(updateUsers);
    });

    //srv.of('/attractions').to('Singapore').emit('rcv feed', fb.get());
}
function updateUsers(data: JSON){
    srv.of('/attractions').to('Singapore').emit('rcv feed', data);
}
setInterval(processApi, 2000);
processApi();
