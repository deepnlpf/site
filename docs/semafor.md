---
id: semafor
title: SEMAFOR
---

<a href="" target="_blank">
    <img src="http://www.cs.cmu.edu/~ark/SEMAFOR/semafor-holdoff.png" data-canonical-src="" width="700" height="90" />
</a>

SEMAFOR: Semantic Analysis of Frame Representations

- [Site Oficial](http://www.cs.cmu.edu/~ark/SEMAFOR/)
- [Demo Online](#)
- [Github](https://github.com/Noahs-ARK/semafor)

## Install Plugin
```shell
deepnlpf --install semafor
```

## Suport Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--json--> 
```json
{
    "lang": "en",
    "tools": [
        {
            "semafor": {
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
---
lang: en
tools:
- semafor:
    pipeline:
    - frame_semantic_parsing
```

<!--END_DOCUSAURUS_CODE_TABS-->