---
id: cogcompnlp
title: CogCompNLP
---

CogComp-NLP provides a suite of state-of-the-art Natural Language Processing (NLP) tools that allows you to annotate plain text inputs.


[Site Oficial](https://cogcomp.seas.upenn.edu/) <br/>
[Demo Online](http://macniece.seas.upenn.edu:4004/) <br/>
[Github](https://github.com/CogComp) <br/>

> Requires internet connection to function.

# Install Plugin

    $ deepnlpf --install cogcompnlp

# Pipeline

```
{
    "tools": [
        {
            "cogcompnlp": {
                "pipeline": [
                    "SRL_NOM", 
                    "SRL_VERB", 
                    "SRL_PREP"
                    ]
            }
        }
    ]
}
```