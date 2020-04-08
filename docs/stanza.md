---
id: stanza
title: Stanza
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Stanza is a Python natural language analysis package. It contains tools, which can be used in a pipeline, to convert a string containing human language text into lists of sentences and words, to generate base forms of those words, their parts of speech and morphological features, to give a syntactic structure dependency parse, and to recognize named entities. The toolkit is designed to be parallel among more than 70 languages, using the Universal Dependencies formalism.

- [Site Oficial](https://stanfordnlp.github.io/stanza/)
- [Github](https://github.com/stanfordnlp/stanza)

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

     deepnlpf --install stanza
     python -c "import stanza; stanza.download('en')" # download English model.
     deepnlpf --install stanza #install wrapper stanza

<!--END_DOCUSAURUS_CODE_TABS-->

## Suport Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```
{
    "lang": "en",
    "tools": [{
        "stanza": {
            "pipeline": [
                "tokenize",
                "mwt",
                "pos",
                "lemma",
                "ner",
                "depparse"
            ]
        }
    }]
}
```
<!--END_DOCUSAURUS_CODE_TABS-->