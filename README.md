## KRAJINA.MENDELU.CZ

cms postaveny na sulu/sulu rozsirujici Symfony 5 s frontendem

Je potřeba `php 7.4 || 8.0`, `mysql 8`, `node 14`, `yarn 1.22.*` - dokumentace nize

---

### instalace na localhost

`git clone git@github.com:ZFMendelu/krajina.mendelu.cz.git krajina`

`cd krajina` , pak  `composer install` , pak `yarn install`

je potreba vytorit soubor `.env.local` dostacujici vzor nize

`bin/adminconsole doctrine:database:create`

`bin/adminconsole sulu:build dev`

`bin/adminconsole cache:clear`

je mozne nastavit nginx na domenu `krajina.localhost` nebo pouzit `symfony serve`

a pri upravach scss je potreba `yarn run watch` nebo jednorazove `yarn build dev`

lokalni administrace je na `/admin` prihlasovaci udaje jsou `admin` a `admin`

---

### vzorovy `.env.local`

```dotenv
APP_ENV=dev
DATABASE_URL=mysql://user:heslojeheslo1234@127.0.0.1:3306/krajina-dev?serverVersion=8
```

---
### vzorovy nginx konfigurak pro localhost

```
server {
    server_name krajina.localhost;
    root /var/www/krajina/public;

    location / {
        try_files $uri /index.php$is_args$args;
    }


    location ~ ^/index\.php(/|$) {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        include fastcgi_params;

        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        fastcgi_param DOCUMENT_ROOT $realpath_root;
        internal;
    }

    location ~ \.php$ {
        return 404;
    }
    
    listen 80;

    error_log /var/log/nginx/project_error.log;
    access_log /var/log/nginx/project_access.log;
}
```

`sudo nginx -t` 

pokud je ok tak:

`sudo systemctl reload nginx`



---

### dokumentace ke cteni pred upravami

[Symfony](https://symfony.com/doc/current/index.html) & [Sulu](https://docs.sulu.io)  

---