---
id: api
title: API RESTFul
---

## API Guide

To start the DepeN LPF RESTFul API to consume services through POS, GET, ect requests. Go to the deepnlpf directory and run the following command to run the server.

    python run_api_restful.py

## Examples

Here are some examples of how you might be consuming this service.


### Registe New Corpus
Request GET Upload New Corpus
    
    http://127.0.0.1:5000/corpus_upload?path_corpus=path/<dataset_name.txt>.

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

