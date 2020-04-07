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

    $ pip install -U spacy
    $ python -m spacy download en_core_web_sm

## Install Plugin

    $ deepnlpf --install spacy

## Suport Language

English: ```en``` <br/>

## Pipeline
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