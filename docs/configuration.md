---
id: configuration
title: What should I configure?
---

## Config General

Access ```/deepnlpf/config/config.py```

#### Debug

Used ```True``` or ```False```.

    DEBUG = {
        'log': False,
    }

#### Language  
> coming soon

Available languages ```en, fr``` and ```pt```. 
Just change the tag of your choice.

    LANG = {
        'lang': 'en'
    }

## Config DataBase

Access ```/deepnlpf/config/database.py```

    DB = {
        'database': 'deepnlpf',
        'hostname': 'localhost',
        'port': 27017,
        'username': 'root',
        'password': ''
    }

## Config Notification

    Receive notifications of key logs during data processing.

Access ```/deepnlpf/config/notification.py```

* Toast - Notification Desktop, used ```True``` or ```False```.

        TOAST = {
            'SEND_MSG': False
        }

* [Telegram](https://web.telegram.org/) - Notification Device Mobile.

        TELEGRAM = {
            'SEND_MSG': False,
            'TOKEN': '793078363:AAFs0Ie_-1_iLw9GGpJ4vnihbWo4K77aiLY',
            'CHAT_ID': '604669808',
        }

* Email
>  Comming Soon :)

* Spech
> Comming Soon :)

## Config CLI DeepNLPF 
To configure the DeepNLPF Command Line Interface, you must go to the deepnlpf root folder and run the following command to install it locally.

    sudo python setup.py install

After installing the DepeNLPF CLI, refer to the [user guide](https://deepnlpf.guithub.io/site/docs/guide) for how to use it.


