---
id: semafor
title: SEMAFOR
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

SEMAFOR: Semantic Analysis of Frame Representations

- [Site Oficial](http://www.cs.cmu.edu/~ark/SEMAFOR/)
- [Demo Online](#)
- [Github](https://github.com/Noahs-ARK/semafor)

# Install Plugin

    $ deepnlpf --install semafor

# Pipeline
```
{
    "lang": "en",
    "threads": 4,
    "tools": [
        {
            "semafor": {
                "pipeline": [
                    "parsing"
                ]
            }
        }
    ]
}
```