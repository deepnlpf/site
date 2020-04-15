---
id: opensesame
title: Open Sesame
---
> Under construction!

<a href="" target="_blank">
    <img src="https://raw.githubusercontent.com/swabhs/open-sesame/master/fig/fsp-example.png" data-canonical-src="" width="700" height="250" />
</a>

A frame-semantic parsing system based on a softmax-margin SegRNN.

- [Github](https://github.com/swabhs/open-sesame)


## Install OpenSesame
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
    pip install dynet
    pip install nltk
    python -m nltk.downloader averaged_perceptron_tagger wordnet

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     deepnlpf --install opensesame

<!--END_DOCUSAURUS_CODE_TABS-->

## Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```
    {
        "lang": "en",
        "tools": [
            {
                "opensesame": {
                    "pipeline": [
                        "frame_semantic_parsing"
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