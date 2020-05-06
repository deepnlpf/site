---
id: api
title: API RESTful
---

> Under construction!

DeepNLPF has a HTTP RESTful that allows you to use its services through POS, GET, PUT and DELETE requests. This makes it possible for applications running on low performance computers to take advantage of this technology, leaving the processing overhead to the server.

## Start Service
To run the API, you must have DeePNLPF installed. The following command is required to start the service.
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
    deepnlpf --api start

<!--END_DOCUSAURUS_CODE_TABS-->

By accessing the address: ```http://127.0.0.1:5000/``` you will see a screen like this informing you that the API has been successfully started and is ready to use.

![API DeepNLPF Online](https://deepnlpf.github.io/site/img/api_online.png)

## Stop Service

    Press CTRL+C to quit

## Created with

</a>
    <a href="https://fastapi.tiangolo.com/" target="_blank" title="FastAPI">
    <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" data-canonical-src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" width="200" height="80" />
</a>
