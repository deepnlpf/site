---
id: pywsd
title: PyWSD
---

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Github](https://github.com/alvations/pywsd)

## Install Plugin
```shell
deepnlpf --install pywsd
```

## Suport Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```json
{
    "lang": "en",
    "tools":  {
        "pywsd": {
            "pipeline": [
                "wsd"
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
- pywsd:
    pipeline:
    - wsd

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