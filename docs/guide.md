---
id: guide
title: How to begin?
---

For DeepNLPF to work, it needs a natural language processing tool. It works with [Stanza](https://stanfordnlp.github.io/stanza) or [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/). Install one of the bases to get started.

## Install Stanza NLP Tool Base

By default we use Stanza as a base NLP tool. Therefore, it is necessary to install language modules. In this case we will install the English language. If you need another language, see which ones are available [here](https://stanfordnlp.github.io/stanza/models.html#human-languages-supported-by-stanza).

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     pip install stanza
     python -c "import stanza; stanza.download('en')" # download English model.
     deepnlpf --install stanza #install wrapper stanza.

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Stanford CoreNLP Tool Base

However, if you prefer you can also use Stanford CoreNLP as a base. To do this, simply execute the command on the terminal. If not, skip this step.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     deepnlpf --install stanfordcorenlp

<!--END_DOCUSAURUS_CODE_TABS-->

Now that you have Stanford CoreNLP installed, when you want to use it as a base plugin, use the ```plugin_base``` parameter.

<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     nlp = Pipeline(plugin_base='stanfordcorenlp' , raw_text=sentences, json_string=custom_pipeline_string)

<!--END_DOCUSAURUS_CODE_TABS-->

## Getting Started

To see DeepNLPF custom pipeline in action, you can launch the Python interactive interpreter, and try the following commands:

<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     from deepnlpf.pipeline import Pipeline

     custom_pipeline = """
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

     sentence = "Barack Obama was born in Hawaii."

     nlp = Pipeline(raw_text=sentence, json_string=custom_pipeline)
     nlp.annotate()

<!--END_DOCUSAURUS_CODE_TABS-->

To print the output you can use as follows:

<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     annotation = nlp.annotate()

     print(annotation)

<!--END_DOCUSAURUS_CODE_TABS-->

or indented
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     import json

     print(json.dumps(annotation, indent=4))

<!--END_DOCUSAURUS_CODE_TABS-->

## Custom Pipeline
To run a customized pipeline with more than one NLP tool, you must have installed other plugins of your choice. More Plugins, access the [official plugin repository](https://deepnlpf.github.io/site/docs/en/plugins) and try out other NLP tools.

This example assumes that you have the [Stanza](https://deepnlpf.github.io/site/docs/en/stanza) and [SpaCy](https://deepnlpf.github.io/site/docs/en/spacy) plugins installed.

To see DeepNLPF custom pipeline in action, you can launch the Python interactive interpreter, and try the following commands:
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     impot json
     from deepnlpf.pipeline import Pipeline

     custom_pipeline_string = """
        {
            "lang": "en",
            "tools": [
                {
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
                },
                {
                    "spacy": {
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
        """
    
     sentences = "Barack Obama was born in Hawaii. Hello, how are you. I am doing fine."

     nlp = Pipeline(raw_text=sentences, json_string=custom_pipeline_string)

     annotation = nlp.annotate()

     print(json.dumps(annotation, indent=4))

<!--END_DOCUSAURUS_CODE_TABS-->

### Custom Pipeline Json File
Sometimes our pipeline can get very large, and it would be more interesting to have it in a ``` .json ``` file. Therefore, create a file with the name ``` custom_pipeline.json ``` and write your pipeline in it.
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
``` custom_pipeline.json ```

    {
        "lang": "en",
        "tools": [
            {
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
            },
            {
                "spacy": {
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

<!--Result--> 

<!--END_DOCUSAURUS_CODE_TABS-->

Now create a python file ```my_pipeline.py```. Paste the following code.
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
    impot json
    from deepnlpf.pipeline import Pipeline

    custom_pipeline_file = "<path_file>/custom_pipeline.json"

    sentences = "Barack Obama was born in Hawaii. Hello, how are you. I am doing fine."

    nlp = Pipeline(raw_text=sentences, json_file=custom_pipeline_file)

<!--END_DOCUSAURUS_CODE_TABS-->

Now run your python file.
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
    python my_pipeline.py

<!--Result--> 

<!--END_DOCUSAURUS_CODE_TABS-->

## Output Format XML

You may have already noticed that we assume all processing output in ```JSON``` format. However, sometimes we want to use another format like ```XML```. DeepNLPF makes it easy for you using the ```output_format``` parameter.

Following the previous example, just add the parameter ```output_format = "xml"```, to have the result processed in the desired format.
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
    nlp = Pipeline(raw_text=sentences, json_file=custom_pipeline_file, output_format='xml')

<!--Result--> 

<!--END_DOCUSAURUS_CODE_TABS-->

## Custom Parallel

DeepNLPF has two approaches to optimize execution. By default we use [Multiprocessing Pathos Framework](https://pypi.org/project/pathos/), but if you prefer you can choose to use [Faster Parallel Ray](https://ray.io/) 10x [fast as the first one](https://towardsdatascience.com/10x-faster-parallel-python-without-python-multiprocessing-e5017c93cce1).

> For you to use Ray, you must have a Redis server installed.
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     pip install redis

<!--END_DOCUSAURUS_CODE_TABS-->

> Certify the following installations.
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     pip install ray funcsigs aiohttp psutil setproctitle grpcio

<!--END_DOCUSAURUS_CODE_TABS-->

Therefore, to select the second option, just use the ```boost``` parameter as follows. Remember that when not specified, Pathos will be selected.
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
    nlp = Pipeline(raw_text=sentence, json_string=custom_pipeline_string, boost='ray')

<!--END_DOCUSAURUS_CODE_TABS-->

## DataBase

You may already be bored that everything in DeepNLPF is saved in [MongoDB](https://www.mongodb.com/). So let's see some possible operations in this regard.

### Save Dataset

### List Dataset

### Delete Dataset

### Select Dataset