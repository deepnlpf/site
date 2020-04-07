---
id: supwsd
title: SupWSD
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Site Oficial](https://supwsd.net/supwsd/)
- [Demo Online](https://supwsd.net/supwsd/demo.jsp)
- [Github](https://github.com/SI3P/supWSD)

> Under construction!

## Install supWSD

    $ pip install supwsd

## Install Plugin

    $ deepnlpf --install supwsd

## Suport Language

English: ```en``` <br/>

## Pipeline
```
{
    "lang": "en",
    "tools": [
        {
            "supwsd": {
                "pipeline": [
                    "wsd"
                ]
            }
        }
    ]
}
```