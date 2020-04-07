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

# Install Plugin

    $ deepnlpf --install stanza

# Pipeline
```
{
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