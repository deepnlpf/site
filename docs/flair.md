---
id: flair
title: Flair
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

A very simple framework for state-of-the-art NLP. Developed by Humboldt University of Berlin and friends.

- [Github](https://github.com/flairNLP/flair)

## Install Flayr

    $ pip install flair

## Install Plugin

    $ deepnlpf --install flair

## [Suport Language](https://github.com/flairNLP/flair#comparison-with-state-of-the-art)

English: ```en``` <br/>
German: ```de``` <br/>
Dutch: ``` ``` <br/>
Polish: ``` ``` <br/>

## Pipeline
```
{
    "lang": "en",
    "tools": [
        {
            "flair": {
                "pipeline": [
                    "tokenizer",
                    "postag",
                    "semantic_frame"
                ]
            }
        }
    ]
}
```