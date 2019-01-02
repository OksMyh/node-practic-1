const http = require('http');
const url = require('url');
const fs = require('fs');

// fs.writeFile('./index.html','my index',(err)=>{
//     if (!err) console.log('ok');
// });
// fs.writeFile('./info.html','my info',(err)=>{
//     if (!err) console.log('ok');
// });
// fs.writeFile('./users.html','my users',(err)=>{
//     if (!err) console.log('ok');
// });
// fs.writeFile('./404.html','error 404',(err)=>{
//     if (!err) console.log('ok');
// });
//
// http.createServer((req, res) => {
//
//     let urlParse = url.parse(req.url);
//     console.log(urlParse);
//
//     switch (urlParse.pathname) {
//         case '/':
//             fs.readFile('./index.html', (err, data) => {
//                 res.end(data)
//             });
//             break;
//         case '/info':
//             fs.readFile('./info.html', (err, data) => {
//                 res.end(data)
//             });
//             break;
//         case '/users':
//             fs.readFile('./users.html', (err, data) => {
//                 res.end(data)
//             });
//             break;
//         default: fs.readFile('./404.html',(err,data)=>{
//             res.end(data)
//         });
//     };
// }).listen(3000, (err) => {
//     if (!err) console.log('listen 3000');
// })

let server = http.createServer((req, res) => {

    let parsedUrl = url.parse(req.url,true);
    switch (parsedUrl.pathname) {
        case '/':
        {
            let readStream = fs.createReadStream('./index.html');
            readStream.pipe(res);
            break;
        }
        case '/info': {
            // console.log(parsedUrl.query);
            res.end(`User with name  ${parsedUrl.query.name} and password * ${parsedUrl.query.password} * is registered`);
            break;
        }
        default:{
            let readStream = fs.createReadStream('./404.html');
            readStream.pipe(res,)
        }

    }
});

server.listen(3000, (err) => {
    if (!err) console.log('listen 3000');
});




