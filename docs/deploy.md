---
id: deploy
title: Deploy
---

## Deploy AWS EC2, Azure and Google Cloud
> Comming Soon :)

### Nginx
Install Nginx on your instance.
```shell
sudo apt install nginx
```

Configure Nginx.
```shell
cd /etc/nginx/sites-available
```

```shell
sudo nano deepnlpf_api
```

```shell
server {
    listen 80;
    server_name http://192.168.1.5/; # your server.

    location / {
        proxy_pass http://127.0.0.1:5000; # your proxy.
    }
}
```

```shell
sudo service nginx restart
```

Execute DeepNLPF API
```shell
deepnlpf --api start
```

