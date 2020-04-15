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
                    "tokenizer",
                    "postag",
                    "semantic_frame"
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