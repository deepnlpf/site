---
id: spacy
title: SpaCy
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Industrial-Strength Natural Language Processing.

- [Site Oficial](https://spacy.io/)
- [Demo Online](#)
- [Github](#)

## Install SpaCy
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     pip install -U spacy
     python -m spacy download en_core_web_sm

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     deepnlpf --install spacy

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
            "spacy": {
                "pipeline": [
                    "pos",
                    "tag",
                    "shape",
                    "is_alpha",
                    "is_title",
                    "like_num",
                    "label"
                ]
            }
        }
    ]
}
```
<!--END_DOCUSAURUS_CODE_TABS-->