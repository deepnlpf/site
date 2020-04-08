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
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

     pip install supwsd

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

     deepnlpf --install supwsd

<!--END_DOCUSAURUS_CODE_TABS-->

## Suport Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
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
<!--END_DOCUSAURUS_CODE_TABS-->