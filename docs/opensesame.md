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

    $ deepnlpf --install opensesame

## Suport Language

English: ```en``` <br/>

## Pipeline
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