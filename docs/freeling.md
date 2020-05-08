---
id: freeling
title: FreeLing
---

Here you can find information about FreeLing, an open source language analysis tool suite, released under the Affero GNU General Public License of the Free Software Foundation.

- [Site Oficial](http://nlp.lsi.upc.edu/freeling/)
- [Demo Online](http://nlp.lsi.upc.edu/freeling/demo/demo.php)
- [Github](https://github.com/TALP-UPC/freeling)

> 🚧 Under construction!

## Install Plugin
```python
deepnlpf --install freeling
```

## Suport Language
View [hare](#) documentation.

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```json
{
    "lang": "en",
    "tools": [{
        "freeling": {
            "pipeline": [
                "wsd",
                "svo_triples_srl",
                "wordnet_sumo"
            ]
        }
    }]
}
```

<!--yaml-->
```yaml
---
lang: en
tools:
- freeling:
    pipeline:
    - wsd
    - svo_triples_srl
    - wordnet_sumo
```

<!--END_DOCUSAURUS_CODE_TABS-->



