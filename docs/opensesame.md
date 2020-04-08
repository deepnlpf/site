---
id: opensesame
title: Open Sesame
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

A frame-semantic parsing system based on a softmax-margin SegRNN.

- [Github](https://github.com/swabhs/open-sesame)

> Under construction!

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     deepnlpf --install opensesame

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
                "semafor": {
                    "pipeline": [
                        "parsing"
                    ]
                }
            }
        ]
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->