---
id: flair
title: Flair
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

A very simple framework for state-of-the-art NLP. Developed by Humboldt University of Berlin and friends.

- [Github](https://github.com/flairNLP/flair)

# Install Flayr

    $ pip install flair

# Install Plugin

    $ deepnlpf --install flair

# Pipeline
```
{
    "tools": [
        {
            "flair": {
                "pipeline": [
                    "pos",
                    "tag",
                    "shape",
                    "is_alpha",
                    "is_title",
                    "like_num",
                    "label"
                ]
            }
        }
    ]
}
```