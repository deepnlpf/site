---
id: guide
title: How to begin?
---

For DeepNLPF to work, it needs a natural language processing tool. It works with [Stanza](https://stanfordnlp.github.io/stanza) or [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/). Install one of the bases to get started.

## Install Stanza NLP Tool Base

By default we use Stanza as a base NLP tool. Therefore, it is necessary to install language modules. In this case we will install the English language. If you need another language, see which ones are available [here](https://stanfordnlp.github.io/stanza/models.html#human-languages-supported-by-stanza).

    $ pip install stanza
    $ python -c "import stanza; stanza.download('en')" # download English model.
    $ deepnlpf --install stanza #install wrapper stanza.

## Install Stanford CoreNLP Tool Base

However, if you prefer you can also use Stanford CoreNLP as a base. To do this, simply execute the command on the terminal. If not, skip this step.
        
    $ deepnlpf --install stanfordcorenlp

Now that you have Stanford CoreNLP installed, when you want to use it as a base plugin, use the ```plugin_base``` parameter.

    $ nlp = Pipeline(plugin_base='stanfordcorenlp' , raw_text=sentences, json_string=custom_pipeline_string)

## Getting Started

To see DeepNLPF custom pipeline in action, you can launch the Python interactive interpreter, and try the following commands:

    >>> from deepnlpf.pipeline import Pipeline
    >>> custom_pipeline = """
        {
            "lang": "en",
            "tools": [{
                "stanza": {
                    "pipeline": [
                        "tokenize",
                        "mwt",
                        "pos",
                        "lemma",
                        "ner",
                        "depparse"
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

## Custom Pipeline

## Install Others Plugins

More Plugins, cccess the [official plugin repository](https://deepnlpf.github.io/site/docs/plugins) and try out other NLP tools.