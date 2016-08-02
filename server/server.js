var http = require('http'), server = http.createServer(), srv = require('socket.io')(server).listen(8000), mysql = require('mysql'), db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travify'
}), http = require('https'), FacebookSocialApi = require('./modules/socialapi.js');
var sv = {
    userCount: 0
};
srv.of('/general').on('connection', function (socket) {
    sv.userCount++;
    console.log('User joined. Current users: ' + sv.userCount);
    socket.on('disconnect', function () {
        sv.userCount--;
        console.log('User left. Current users: ' + sv.userCount);
    });
});
srv.of('/admin').on('connection', function (socket) {
    socket.on('user count', function (fn) {
        fn(sv.userCount);
    });
});
srv.of('/attractions').on('connection', function (socket) {
    socket.join('Singapore');
    processApi();
});
db.connect();
function processApi() {
    db.query("SELECT `facebook` FROM `attractions` WHERE `location` = 'Singapore'", function (err, rows, fields) {
        if (err)
            console.log('error retrieving from database');
        var fb = new FacebookSocialApi();
        rows.forEach(function (element) {
            fb.addPage(element.facebook);
        });
        fb.query(updateUsers);
    });
}
function updateUsers(data) {
    srv.of('/attractions').to('Singapore').emit('rcv feed', data);
}
setInterval(processApi, 2000);
processApi();
