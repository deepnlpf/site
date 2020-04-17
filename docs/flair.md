---
id: flair
title: Flair
---

<a href="" target="_blank">
    <img src="https://raw.githubusercontent.com/flairNLP/flair/master/resources/docs/flair_logo_2020.png" data-canonical-src="" width="160" height="60" />
</a>

A very simple framework for state-of-the-art NLP. Developed by Humboldt University of Berlin and friends.

- [Github](https://github.com/flairNLP/flair)

## Install Flayr
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

     pip install flair

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

     deepnlpf --install flair

<!--END_DOCUSAURUS_CODE_TABS-->

## [Suport Language](https://github.com/flairNLP/flair#comparison-with-state-of-the-art)

English: ```en``` <br/>
German: ```de``` <br/>
Dutch: ``` ``` <br/>
Polish: ``` ``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```
{
    "lang": "en",
    "tools": [
        {
            "flair": {
                "pipeline": [
                    "fast_pos_tagging",
                    "fast_ner_4class",
                    "fast_ner_ontonotes_18class",
                    "fast_syntatic_chunking",
                    "fast_semantic_frame_detection"
                ]
            }
        }
    ]
}
```

<!--yaml-->
```yaml
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Example
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from deepnlpf.pipeline import Pipeline

path_pipeline = '<path>/pipeline_flair.json'
sentence = 'The grass is green.'

nlp = Pipeline(_input=sentence, pipeline=path_pipeline)
annotation = nlp.annotate()
```

<!--Output JSON-->
```json
```

<!--Output XML-->
```xml
```

<!--END_DOCUSAURUS_CODE_TABS-->