---
id: opensesame
title: Open Sesame
---
> 🚧 Under construction!

<a href="" target="_blank">
    <img src="https://raw.githubusercontent.com/swabhs/open-sesame/master/fig/fsp-example.png" data-canonical-src="" width="700" height="250" />
</a>

A frame-semantic parsing system based on a softmax-margin SegRNN.

- [Github](https://github.com/swabhs/open-sesame)


## Install Plugin
```shell
deepnlpf --install opensesame
```

## Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```json
{
    "lang": "en",
    "tools": [
        {
            "opensesame": {
                "processors": [
                    "frame_semantic_parsing"
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
- opensesame:
    processors:
    - frame_semantic_parsing
```

<!--END_DOCUSAURUS_CODE_TABS-->