const headers = new Headers();
headers.append('X-Token', '123456'); // 设置自定义请求头

const options = {
    method: 'PUT',
    headers: headers
};

fetch('http://localhost:3000', options)
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('请求失败');
        }
    })
    .then(data => {
        console.log(data); // 输出服务端返回的数据 'Hello CORS'
    })
    .catch(error => {
        console.error(error);
    });