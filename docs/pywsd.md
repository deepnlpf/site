---
id: pywsd
title: PyWSD
---

> Under construction!

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Github](https://github.com/alvations/pywsd)

## Install PyWSD
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
    pip install -U nltk #install NLTK.
    python -m nltk.downloader 'popular' #download models.
    pip install -U pywsd #install PyWSD.

<!--END_DOCUSAURUS_CODE_TABS-->

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
                    "disambiguate_max"
                ]
            }
        }
    ]
}
```
<!--END_DOCUSAURUS_CODE_TABS-->