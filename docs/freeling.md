---
id: freeling
title: FreeLing
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Here you can find information about FreeLing, an open source language analysis tool suite, released under the Affero GNU General Public License of the Free Software Foundation.

- [Site Oficial](http://nlp.lsi.upc.edu/freeling/)
- [Demo Online](http://nlp.lsi.upc.edu/freeling/demo/demo.php)
- [Github](https://github.com/TALP-UPC/freeling)

> Under construction!

# Install FreeLing NLP

    $ 

# Install Plugin

    $ deepnlpf --install freeling

# Pipeline
```
{
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



