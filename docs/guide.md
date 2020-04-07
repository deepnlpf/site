---
id: guide
title: How to begin?
---

DeepNLPF has three uses. <br>
- <b>CLI Commands</b>: use through command line interface. <br>
- <b>API RESTFul</b>: allows the creation of applications using the resources of the framework. <br>
- <b>DashBoard</b>: allows the use of the framework through a graphical interface. <br>

## Getting Started

To see DeepNLPF custom pipeline in action, you can launch the Python interactive interpreter, and try the following commands:

    >>> from deepnlpf.pipeline import Pipeline
    >>> custom_pipeline = """
        {
            "tools": [{
                "stanfordcorenlp": {
                    "pipeline": [
                        "tokenize",
                        "ssplit",
                        "pos",
                        "lemma",
                        "ner",
                        "parse",
                        "depparse",
                        "truecase",
                        "dcoref"
                    ]
                }
            }]
        }
        """

    >>> sentence = "Barack Obama was born in Hawaii."
    >>> nlp = Pipeline(raw_text=sentence, json_string=custom_pipeline)
    >>> nlp.annotate()

To print the output you can use as follows:

    >>> annotation = nlp.annotate()
    >>> print(annotation)

or indented

    >>> import json
    >>> print(json.dumps(annotation, indent=4))

## Install Plugins

More Plugins, cccess the [official plugin repository](https://deepnlpf.github.io/site/docs/plugins) and try out other NLP tools.