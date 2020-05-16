---
id: stanza
title: Stanza
---

<a href="" target="_blank">
    <img src="https://stanfordnlp.github.io/stanza/images/stanza.png" data-canonical-src="" width="210" height="60" />
</a>

Stanza is a Python natural language analysis package. It contains tools, which can be used in a pipeline, to convert a string containing human language text into lists of sentences and words, to generate base forms of those words, their parts of speech and morphological features, to give a syntactic structure dependency parse, and to recognize named entities. The toolkit is designed to be parallel among more than 70 languages, using the Universal Dependencies formalism.

- [Site Oficial](https://stanfordnlp.github.io/stanza/)
- [Github](https://github.com/stanfordnlp/stanza)

## Install Plugin
```shell
deepnlpf --install stanza
```

## Download English Model
```shell
python -c "import stanza; stanza.download('en')"
```

## Model Language
Stanza supports multiple languages, see available ones [here](https://stanfordnlp.github.io/stanza/models.html#human-languages-supported-by-stanza).

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```json
{
    "lang": "en",
    "tools": {
        "stanza": {
            "processors": [
                "tokenize",
                "mwt",
                "pos",
                "lemma",
                "ner",
                "depparse"
            ]
        }
    }
}
```
<!--yaml-->
```yaml
---
lang: en
tools:
- stanza:
    processors:
    - tokenize
    - mwt
    - pos
    - lemma
    - ner
    - depparse
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Example
<!--DOCUSAURUS_CODE_TABS-->
<!--python--> 
```python
from deepnlpf.pipeline import Pipeline

path_dataset = "<path_dir_dataset>"
path_pipeline = "<path_file>/pipeline.json"

nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output='file')
annotation = nlp.annotate()
```
<!--END_DOCUSAURUS_CODE_TABS-->