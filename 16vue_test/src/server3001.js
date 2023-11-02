// const http = require('http');
const express = require('express');
const app = express();
const port = 3001;

app.get('/cars', (req, res) => {
    console.log("收到访问了")
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    const obj = [{
        name: "马自达",
        age: 29,
        sex: 'man'
    }, {
        name: "大众",
        age: 29,
        sex: 'man'
    },{
        name: "比亚迪",
        age: 29,
        sex: 'man'
    },]
    res.json(obj);
});

// 监听端口
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}/cars`);
});
