---
id: stanfordcorenlp
title: Stanford CoreNLP
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Stanford CoreNLP provides a set of human language technology tools. It can give the base forms of words, their parts of speech, whether they are names of companies, people, etc., normalize dates, times, and numeric quantities, mark up the structure of sentences in terms of phrases and syntactic dependencies, indicate which noun phrases refer to the same entities, indicate sentiment, extract particular or open-class relations between entity mentions, get the quotes people said, etc.

- [Site Oficial](https://stanfordnlp.github.io/CoreNLP/)
- [Demo Online](http://nlp.stanford.edu:8080/corenlp/)
- [Demo Online](https://corenlp.run/)
- [Github](https://github.com/stanfordnlp/CoreNLP)

## Install Plugin

    $ deepnlpf --install stanfordcorenlp

## Suport Language

English: ```en``` <br/>

## Pipeline
```
{
    "lang": "en",
    "tools": [{
        "stanfordcorenlp": {
            "pipeline": [
                "tokenize",
                "ssplit",
                "pos",
                "lemma",
                "ner",
                "parse",
                "depparse",
                "truecase",
                "dcoref"
            ]
        }
    }]
}
```