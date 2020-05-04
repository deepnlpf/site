---
id: cogcompnlp
title: CogCompNLP
---

CogComp-NLP provides a suite of state-of-the-art Natural Language Processing (NLP) tools that allows you to annotate plain text inputs.


[Site Oficial](https://cogcomp.seas.upenn.edu/) <br/>
[Demo Online](http://macniece.seas.upenn.edu:4004/) <br/>
[Github](https://github.com/CogComp) <br/>

> Requires internet connection to function.

## Install Plugin
```python
deepnlpf --install cogcompnlp
```

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
            "cogcompnlp": {
                "pipeline": [
                        "POS", 
                        "LEMMA", 
                        "SHALLOW_PARSE", 
                        "DEP", 
                        "NER_CONLL", 
                        "NER_ONTONOTES",
                        "STANFORD_PARSE", 
                        "STANFORD_DEP", 
                        "SRL_VERB", 
                        "SRL_NOM", 
                        "SRL_PREP", 
                        "SRL_COMMA",
                        "QUANTIFIER", 
                        "VERB_SENSE", 
                        "RELATION",
                        "LAZY_INITIALIZATION",
                        "SRL_INTERNAL_PREPROCESSOR", 
                        "SPLIT_ON_DASH",
						"SENTENCE_PIPELINE", 
                        "TIMEX3", 
                        "MENTION", 
                        "TRANSLITERATION",
                        "DATALESS_ESA", 
                        "DATALESS_W2V", 
                        "QUESTION_TYPER"
                    ]
            }
        }
    ]
}
```

<!--yaml-->
```yaml
---
lang: en
tools:
- cogcompnlp:
    pipeline:
    - POS
    - LEMMA
    - SHALLOW_PARSE
    - DEP
    - NER_CONLL
    - NER_ONTONOTES
    - STANFORD_PARSE
    - STANFORD_DEP
    - SRL_VERB
    - SRL_NOM
    - SRL_PREP
    - SRL_COMMA
    - QUANTIFIER
    - VERB_SENSE
    - RELATION
    - LAZY_INITIALIZATION
    - SRL_INTERNAL_PREPROCESSOR
    - SPLIT_ON_DASH
    - SENTENCE_PIPELINE
    - TIMEX3
    - MENTION
    - TRANSLITERATION
    - DATALESS_ESA
    - DATALESS_W2V
    - QUESTION_TYPER

```

<!--END_DOCUSAURUS_CODE_TABS-->