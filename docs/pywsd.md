---
id: pywsd
title: PyWSD
---

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Github](https://github.com/alvations/pywsd)

## Install Plugin
```shell
deepnlpf --install pywsd
```

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
            "pywsd": {
                "pipeline": [
                    "wsd"
                ]
            }
        }
    ]
}
```
<!--END_DOCUSAURUS_CODE_TABS-->