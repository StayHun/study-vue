const http = require('http');

http.createServer((req, res) => {
    const { method, headers } = req;

    // 预检请求处理
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // 修改为前端请求源
    res.setHeader('Access-Control-Allow-Headers', 'X-Token');

    if (method === 'OPTIONS') {
        // 预检请求响应
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        res.setHeader('Access-Control-Max-Age', 3600);
        res.end();
    } else {
        // 非预检请求响应
        res.end('Hello CORS');
    }

}).listen(3000, () => console.log('Server running at http://localhost:3000/'));