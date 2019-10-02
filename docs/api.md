---
id: api
title: API RESTFul
---

DeepNLPF has a RESTFul API that allows you to use your services through a graphical user interface (GUI) or consume services through POS, GET, ect requests.

## Start Service API
The following command is required to start the service.

    $ deepnlpf --api start

By accessing the address: ```http://127.0.0.1:5000/``` you will see a screen like this informing you that the API has been successfully started and is ready to use.

![API DeepNLPF Online](https://deepnlpf.github.io/site/img/api_online.png)

## Examples

Here are some examples of how you might be consuming this service.


### Registe New Corpus
Request GET Upload New Corpus
    
    http://127.0.0.1:5000/corpus_upload?path_corpus=path_dir_corpus

Response GET Upload New Corpus
    
    {
        "corpus": {
            "_id": "5d1943a1cf17107dbeda89c7"
        }
    }

### Delete Corpus

Request GET Delete Corpus

    http://127.0.0.1:5001/corpus_delete?_id=5cb1d3dc6f5ef15bf80eb855

Response GET Delete Corpus

### Run Pipeline Analysis

Request GET

    http://127.0.0.1:5000/annotation_processing?id_corpus=5d0f7696ffee87d0b3ac1faa&properties={"tools":[{"stanfordcorenlp":{"pipeline":["pos","lemma","ner"]}}]}


Response GET

    [
        {
            "_id_corpus": "5d0f7696ffee87d0b3ac1faa",
            "annotation": [...],
            "register": "2019-06-30T21:16:19",
            "tool": "stanfordcorenlp"
        }
    ]

## Using PostMan

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/2943437/SVSGMq2A)

