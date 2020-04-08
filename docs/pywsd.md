---
id: pywsd
title: PyWSD
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Site Oficial](#)
- [Demo Online](#)
- [Github](https://github.com/alvations/pywsd)

> Under construction!

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     deepnlpf --install pywsd

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
            "pywsd": {
                "pipeline": [
                    "disambiguate"
                ]
            }
        }
    ]
}
```
<!--END_DOCUSAURUS_CODE_TABS-->