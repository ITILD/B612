##

NG 文件里监听的端口为 8080，但是无法访问 8080 网页，却能访问应用的 8090 端口。
因为 ng 配置文件没有生效。将 ini 文件里 http 改成 socket，并且设置 buffer-size=65536。

资源文件访问不了分两种情况
1.ng 文件没生效：
显示网页源文件，应该是报 404，不要急，先让 NG 文件生效再进行其他操作；
2.NG 文件已生效,显示网页源文件
如果报 404，则检查资源路径是否正确，以及 ng 配置文件的软连接格式是否正确。
如果报 403，说明 ng 权限不够，nginx.conf 文件第一行改成 user root，重启 Nginx，部署后成功。

```js

server {
    listen 80;
    server_name localhost;
    root /home/ubuntu/apps/itild;
	index index.html index.htm;
	server_name _;

  	location / {
        root /home/ubuntu/apps/itild;
  	}
}


 server {
    listen 80;
    server_name localhost;
    # root /home/ubuntu/apps/itild;
	#index index.html index.htm;
	server_name _;

  	location / {
        root /home/ubuntu/apps/itild;
        index index.html index.htm;
        #配置history单页面模式
        try_files $uri $uri/ /index.html;
  	}
}
```
