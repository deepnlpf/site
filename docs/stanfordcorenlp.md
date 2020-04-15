---
id: stanfordcorenlp
title: Stanford CoreNLP
---

<a href="" target="_blank">
    <img src="https://miro.medium.com/max/2560/1*3uoY7zY6wfnYyTOgKNYLkQ.jpeg" data-canonical-src="" width="180" height="100" />
</a>

Stanford CoreNLP provides a set of human language technology tools. It can give the base forms of words, their parts of speech, whether they are names of companies, people, etc., normalize dates, times, and numeric quantities, mark up the structure of sentences in terms of phrases and syntactic dependencies, indicate which noun phrases refer to the same entities, indicate sentiment, extract particular or open-class relations between entity mentions, get the quotes people said, etc.

- [Site Oficial](https://stanfordnlp.github.io/CoreNLP/)
- [Demo Online](http://nlp.stanford.edu:8080/corenlp/)
- [Demo Online](https://corenlp.run/)
- [Github](https://github.com/stanfordnlp/CoreNLP)

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

     deepnlpf --install stanfordcorenlp

<!--END_DOCUSAURUS_CODE_TABS-->

## Suport Language

English: ```en``` <br/>

## Pipeline
View all [Anotators](https://stanfordnlp.github.io/CoreNLP/annotators.html).<br/>
Before assembling your pipeline, see the [dependent annotators](https://stanfordnlp.github.io/CoreNLP/annotators.html#annotator-dependencies).
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
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
                "truecase",
                "parse",
                "depparse",
                "coref"
            ]
        }
    }]
}
```

<!--yaml-->
```yaml
```

<!--END_DOCUSAURUS_CODE_TABS-->