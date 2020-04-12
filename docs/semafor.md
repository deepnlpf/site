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
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     deepnlpf --install semafor

<!--END_DOCUSAURUS_CODE_TABS-->

## Suport Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--JSON--> 
```
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
<!--END_DOCUSAURUS_CODE_TABS-->