---
id: guide
title: How to begin?
---

For DeepNLPF to work, it needs a natural language processing tool. It works with [Stanza](https://stanfordnlp.github.io/stanza) or [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/). Install one of the bases to get started.

## Install Stanza NLP Tool Base

By default we use Stanza as a base NLP tool. Therefore, it is necessary to install language modules. In this case we will install the English language. If you need another language, see which ones are available [here](https://stanfordnlp.github.io/stanza/models.html#human-languages-supported-by-stanza). Then install the stanza plugin.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
    python -c "import stanza; stanza.download('en')" #Download English model.
    deepnlpf --install stanza #Install wrapper stanza.

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Stanford CoreNLP Tool Base

However, if you prefer you can also use Stanford CoreNLP as a base. To do this, simply execute the command on the terminal. If not, skip this step.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     deepnlpf --install stanfordcorenlp

<!--END_DOCUSAURUS_CODE_TABS-->

Now that you have Stanford CoreNLP installed, when you want to use it as a base tool, use the ```tool_base``` parameter.

<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     nlp = Pipeline(tool_base='stanfordcorenlp')

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

     nlp = Pipeline(_input=sentence, pipeline=custom_pipeline)
     nlp.annotate()

<!--END_DOCUSAURUS_CODE_TABS-->

To print the output you can use as follows:

<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     annotation = nlp.annotate()

     print(annotation)

<!--Result-->
[{'_id_pool': '666f6f2d6261722d71757578', '_id_dataset': '5e96107d18e379f9d70f856f', '_id_document': '5e96107d18e379f9d70f8571', 'tool': 'stanfordcorenlp', 'annotation': [{'sentences': [{'index': 0, 'parse': '(ROOT\n  (S\n    (NP (NNP Barack) (NNP Obama))\n    (VP (VBD was)\n      (VP (VBN born)\n        (PP (IN in)\n          (NP (NNP Hawaii)))))\n    (. .)))', 'basicDependencies': [{'dep': 'ROOT', 'governor': 0, 'governorGloss': 'ROOT', 'dependent': 4, 'dependentGloss': 'born'}, {'dep': 'compound', 'governor': 2, 'governorGloss': 'Obama', 'dependent': 1, 'dependentGloss': 'Barack'}, {'dep': 'nsubjpass', 'governor': 4, 'governorGloss': 'born', 'dependent': 2, 'dependentGloss': 'Obama'}, {'dep': 'auxpass', 'governor': 4, 'governorGloss': 'born', 'dependent': 3, 'dependentGloss': 'was'}, {'dep': 'case', 'governor': 6, 'governorGloss': 'Hawaii', 'dependent': 5, 'dependentGloss': 'in'}, {'dep': 'nmod', 'governor': 4, 'governorGloss': 'born', 'dependent': 6, 'dependentGloss': 'Hawaii'}, {'dep': 'punct', 'governor': 4, 'governorGloss': 'born', 'dependent': 7, 'dependentGloss': '.'}], 'enhancedDependencies': [{'dep': 'ROOT', 'governor': 0, 'governorGloss': 'ROOT', 'dependent': 4, 'dependentGloss': 'born'}, {'dep': 'compound', 'governor': 2, 'governorGloss': 'Obama', 'dependent': 1, 'dependentGloss': 'Barack'}, {'dep': 'nsubjpass', 'governor': 4, 'governorGloss': 'born', 'dependent': 2, 'dependentGloss': 'Obama'}, {'dep': 'auxpass', 'governor': 4, 'governorGloss': 'born', 'dependent': 3, 'dependentGloss': 'was'}, {'dep': 'case', 'governor': 6, 'governorGloss': 'Hawaii', 'dependent': 5, 'dependentGloss': 'in'}, {'dep': 'nmod:in', 'governor': 4, 'governorGloss': 'born', 'dependent': 6, 'dependentGloss': 'Hawaii'}, {'dep': 'punct', 'governor': 4, 'governorGloss': 'born', 'dependent': 7, 'dependentGloss': '.'}], 'enhancedPlusPlusDependencies': [{'dep': 'ROOT', 'governor': 0, 'governorGloss': 'ROOT', 'dependent': 4, 'dependentGloss': 'born'}, {'dep': 'compound', 'governor': 2, 'governorGloss': 'Obama', 'dependent': 1, 'dependentGloss': 'Barack'}, {'dep': 'nsubjpass', 'governor': 4, 'governorGloss': 'born', 'dependent': 2, 'dependentGloss': 'Obama'}, {'dep': 'auxpass', 'governor': 4, 'governorGloss': 'born', 'dependent': 3, 'dependentGloss': 'was'}, {'dep': 'case', 'governor': 6, 'governorGloss': 'Hawaii', 'dependent': 5, 'dependentGloss': 'in'}, {'dep': 'nmod:in', 'governor': 4, 'governorGloss': 'born', 'dependent': 6, 'dependentGloss': 'Hawaii'}, {'dep': 'punct', 'governor': 4, 'governorGloss': 'born', 'dependent': 7, 'dependentGloss': '.'}], 'entitymentions': [{'docTokenBegin': 0, 'docTokenEnd': 2, 'tokenBegin': 0, 'tokenEnd': 2, 'text': 'Barack Obama', 'characterOffsetBegin': 0, 'characterOffsetEnd': 12, 'ner': 'PERSON'}, {'docTokenBegin': 5, 'docTokenEnd': 6, 'tokenBegin': 5, 'tokenEnd': 6, 'text': 'Hawaii', 'characterOffsetBegin': 25, 'characterOffsetEnd': 31, 'ner': 'STATE_OR_PROVINCE'}], 'tokens': [{'index': 1, 'word': 'Barack', 'originalText': 'Barack', 'lemma': 'Barack', 'characterOffsetBegin': 0, 'characterOffsetEnd': 6, 'pos': 'NNP', 'ner': 'PERSON', 'truecase': 'INIT_UPPER', 'truecaseText': 'Barack', 'before': '', 'after': ' '}, {'index': 2, 'word': 'Obama', 'originalText': 'Obama', 'lemma': 'Obama', 'characterOffsetBegin': 7, 'characterOffsetEnd': 12, 'pos': 'NNP', 'ner': 'PERSON', 'truecase': 'INIT_UPPER', 'truecaseText': 'Obama', 'before': ' ', 'after': ' '}, {'index': 3, 'word': 'was', 'originalText': 'was', 'lemma': 'be', 'characterOffsetBegin': 13, 'characterOffsetEnd': 16, 'pos': 'VBD', 'ner': 'O', 'truecase': 'LOWER', 'truecaseText': 'was', 'before': ' ', 'after': ' '}, {'index': 4, 'word': 'born', 'originalText': 'born', 'lemma': 'bear', 'characterOffsetBegin': 17, 'characterOffsetEnd': 21, 'pos': 'VBN', 'ner': 'O', 'truecase': 'LOWER', 'truecaseText': 'born', 'before': ' ', 'after': ' '}, {'index': 5, 'word': 'in', 'originalText': 'in', 'lemma': 'in', 'characterOffsetBegin': 22, 'characterOffsetEnd': 24, 'pos': 'IN', 'ner': 'O', 'truecase': 'LOWER', 'truecaseText': 'in', 'before': ' ', 'after': ' '}, {'index': 6, 'word': 'Hawaii', 'originalText': 'Hawaii', 'lemma': 'Hawaii', 'characterOffsetBegin': 25, 'characterOffsetEnd': 31, 'pos': 'NNP', 'ner': 'STATE_OR_PROVINCE', 'truecase': 'INIT_UPPER', 'truecaseText': 'Hawaii', 'before': ' ', 'after': ' '}, {'index': 7, 'word': '.', 'originalText': '.', 'lemma': '.', 'characterOffsetBegin': 32, 'characterOffsetEnd': 33, 'pos': '.', 'ner': 'O', 'truecase': 'O', 'truecaseText': '.', 'before': ' ', 'after': ''}]}]}], 'data_time': '"14/04/2020 - 16:36:02"', '_id': '5e9610a218e379f9d70f8574'}]

<!--END_DOCUSAURUS_CODE_TABS-->

This output was not at all interesting, let's try something more beautiful.
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
     import json

     print(json.dumps(annotation, indent=4))

<!--Result-->
```
[
  {
    '_id_pool': '666f6f2d6261722d71757578',
    '_id_dataset': '5e96107d18e379f9d70f856f',
    '_id_document': '5e96107d18e379f9d70f8571',
    'tool': 'stanfordcorenlp',
    'annotation': [
      {
        'sentences': [
          {
            'index': 0,
            'parse': '(ROOT\n  (S\n    (NP (NNP Barack) (NNP Obama))\n    (VP (VBD was)\n      (VP (VBN born)\n        (PP (IN in)\n          (NP (NNP Hawaii)))))\n    (. .)))',
            'basicDependencies': [
              {
                'dep': 'ROOT',
                'governor': 0,
                'governorGloss': 'ROOT',
                'dependent': 4,
                'dependentGloss': 'born'
              },
              {
                'dep': 'compound',
                'governor': 2,
                'governorGloss': 'Obama',
                'dependent': 1,
                'dependentGloss': 'Barack'
              },
              {
                'dep': 'nsubjpass',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 2,
                'dependentGloss': 'Obama'
              },
              {
                'dep': 'auxpass',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 3,
                'dependentGloss': 'was'
              },
              {
                'dep': 'case',
                'governor': 6,
                'governorGloss': 'Hawaii',
                'dependent': 5,
                'dependentGloss': 'in'
              },
              {
                'dep': 'nmod',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 6,
                'dependentGloss': 'Hawaii'
              },
              {
                'dep': 'punct',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 7,
                'dependentGloss': '.'
              }
            ],
            'enhancedDependencies': [
              {
                'dep': 'ROOT',
                'governor': 0,
                'governorGloss': 'ROOT',
                'dependent': 4,
                'dependentGloss': 'born'
              },
              {
                'dep': 'compound',
                'governor': 2,
                'governorGloss': 'Obama',
                'dependent': 1,
                'dependentGloss': 'Barack'
              },
              {
                'dep': 'nsubjpass',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 2,
                'dependentGloss': 'Obama'
              },
              {
                'dep': 'auxpass',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 3,
                'dependentGloss': 'was'
              },
              {
                'dep': 'case',
                'governor': 6,
                'governorGloss': 'Hawaii',
                'dependent': 5,
                'dependentGloss': 'in'
              },
              {
                'dep': 'nmod:in',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 6,
                'dependentGloss': 'Hawaii'
              },
              {
                'dep': 'punct',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 7,
                'dependentGloss': '.'
              }
            ],
            'enhancedPlusPlusDependencies': [
              {
                'dep': 'ROOT',
                'governor': 0,
                'governorGloss': 'ROOT',
                'dependent': 4,
                'dependentGloss': 'born'
              },
              {
                'dep': 'compound',
                'governor': 2,
                'governorGloss': 'Obama',
                'dependent': 1,
                'dependentGloss': 'Barack'
              },
              {
                'dep': 'nsubjpass',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 2,
                'dependentGloss': 'Obama'
              },
              {
                'dep': 'auxpass',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 3,
                'dependentGloss': 'was'
              },
              {
                'dep': 'case',
                'governor': 6,
                'governorGloss': 'Hawaii',
                'dependent': 5,
                'dependentGloss': 'in'
              },
              {
                'dep': 'nmod:in',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 6,
                'dependentGloss': 'Hawaii'
              },
              {
                'dep': 'punct',
                'governor': 4,
                'governorGloss': 'born',
                'dependent': 7,
                'dependentGloss': '.'
              }
            ],
            'entitymentions': [
              {
                'docTokenBegin': 0,
                'docTokenEnd': 2,
                'tokenBegin': 0,
                'tokenEnd': 2,
                'text': 'Barack Obama',
                'characterOffsetBegin': 0,
                'characterOffsetEnd': 12,
                'ner': 'PERSON'
              },
              {
                'docTokenBegin': 5,
                'docTokenEnd': 6,
                'tokenBegin': 5,
                'tokenEnd': 6,
                'text': 'Hawaii',
                'characterOffsetBegin': 25,
                'characterOffsetEnd': 31,
                'ner': 'STATE_OR_PROVINCE'
              }
            ],
            'tokens': [
              {
                'index': 1,
                'word': 'Barack',
                'originalText': 'Barack',
                'lemma': 'Barack',
                'characterOffsetBegin': 0,
                'characterOffsetEnd': 6,
                'pos': 'NNP',
                'ner': 'PERSON',
                'truecase': 'INIT_UPPER',
                'truecaseText': 'Barack',
                'before': '',
                'after': ' '
              },
              {
                'index': 2,
                'word': 'Obama',
                'originalText': 'Obama',
                'lemma': 'Obama',
                'characterOffsetBegin': 7,
                'characterOffsetEnd': 12,
                'pos': 'NNP',
                'ner': 'PERSON',
                'truecase': 'INIT_UPPER',
                'truecaseText': 'Obama',
                'before': ' ',
                'after': ' '
              },
              {
                'index': 3,
                'word': 'was',
                'originalText': 'was',
                'lemma': 'be',
                'characterOffsetBegin': 13,
                'characterOffsetEnd': 16,
                'pos': 'VBD',
                'ner': 'O',
                'truecase': 'LOWER',
                'truecaseText': 'was',
                'before': ' ',
                'after': ' '
              },
              {
                'index': 4,
                'word': 'born',
                'originalText': 'born',
                'lemma': 'bear',
                'characterOffsetBegin': 17,
                'characterOffsetEnd': 21,
                'pos': 'VBN',
                'ner': 'O',
                'truecase': 'LOWER',
                'truecaseText': 'born',
                'before': ' ',
                'after': ' '
              },
              {
                'index': 5,
                'word': 'in',
                'originalText': 'in',
                'lemma': 'in',
                'characterOffsetBegin': 22,
                'characterOffsetEnd': 24,
                'pos': 'IN',
                'ner': 'O',
                'truecase': 'LOWER',
                'truecaseText': 'in',
                'before': ' ',
                'after': ' '
              },
              {
                'index': 6,
                'word': 'Hawaii',
                'originalText': 'Hawaii',
                'lemma': 'Hawaii',
                'characterOffsetBegin': 25,
                'characterOffsetEnd': 31,
                'pos': 'NNP',
                'ner': 'STATE_OR_PROVINCE',
                'truecase': 'INIT_UPPER',
                'truecaseText': 'Hawaii',
                'before': ' ',
                'after': ' '
              },
              {
                'index': 7,
                'word': '.',
                'originalText': '.',
                'lemma': '.',
                'characterOffsetBegin': 32,
                'characterOffsetEnd': 33,
                'pos': '.',
                'ner': 'O',
                'truecase': 'O',
                'truecaseText': '.',
                'before': ' ',
                'after': ''
              }
            ]
          }
        ]
      }
    ],
    'data_time': '"14/04/2020 - 16:36:02"',
    '_id': '5e9610a218e379f9d70f8574'
  }
]
```

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

     nlp = Pipeline(_input=sentences, pipeline=custom_pipeline_string)

     annotation = nlp.annotate()

     print(json.dumps(annotation, indent=4))

<!--END_DOCUSAURUS_CODE_TABS-->

### Pipeline Input File
Sometimes our pipeline can get very large, and it would be more interesting to have it in a another format. Therefore, we provide the options to use the file formats ``` .json ```, ``` .yaml ``` e ``` .xml ```. Therefore, create a file with the name ``` custom_pipeline.extension ``` you want to use and write your pipeline in it.
<!--DOCUSAURUS_CODE_TABS-->

<!--Json-->
```json
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
```

<!--yaml-->
```yaml
---
    lang: en
    tools:
    - stanfordcorenlp:
        pipeline:
        - tokenize
        - ssplit
        - pos
        - lemma
        - ner
        - truecase
        - parse
        - depparse
    - spacy:
        pipeline:
        - pos
        - tag
        - shape
        - is_alpha
        - is_title
        - like_num
        - label
```

<!--ini-->
> Under construction!

<!--xml-->
> Under construction!
```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <lang>en</lang>
   <tools>
      <element>
         <stanza>
            <pipeline>
               <element>tokenize</element>
               <element>mwt</element>
               <element>pos</element>
               <element>lemma</element>
               <element>ner</element>
               <element>depparse</element>
            </pipeline>
         </stanza>
      </element>
      <element>
         <spacy>
            <pipeline>
               <element>pos</element>
               <element>tag</element>
               <element>shape</element>
               <element>is_alpha</element>
               <element>is_title</element>
               <element>like_num</element>
               <element>label</element>
            </pipeline>
         </spacy>
      </element>
   </tools>
</root>
```

<!--END_DOCUSAURUS_CODE_TABS-->

Now create a python file ```my_pipeline.py```. Paste the following code.
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
    impot json
    from deepnlpf.pipeline import Pipeline

    path_pipeline = "<path_file>/custom_pipeline.json" #or yaml or xml file.

    sentences = "Barack Obama was born in Hawaii. Hello, how are you. I am doing fine."

    nlp = Pipeline(_input=sentences, pipeline=path_pipeline)

<!--END_DOCUSAURUS_CODE_TABS-->

Now run your python file.
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
    python my_pipeline.py

<!--Result--> 

<!--END_DOCUSAURUS_CODE_TABS-->

## Output Format XML

You may have already noticed that we assume all processing output in ```JSON``` format. However, sometimes we want to use another format like ```XML```. DeepNLPF makes it easy for you using the ```_format='xml'``` parameter.

Following the previous example, just add the parameter ```_format='xml' = "xml"```, to have the result processed in the desired format.
<!--DOCUSAURUS_CODE_TABS-->

<!--Python--> 
    nlp = Pipeline(_input=sentences, pipeline=path_pipeline, _format='xml'='xml')

<!--Result--> 

<!--END_DOCUSAURUS_CODE_TABS-->

## Boost

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
    nlp = Pipeline(_input=sentence, pipeline=custom_pipeline_string, boost='ray')

<!--END_DOCUSAURUS_CODE_TABS-->

## DataBase

You may already be bored that everything in DeepNLPF is saved in [MongoDB](https://www.mongodb.com/). So let's see some possible operations in this regard.

### Save Dataset

### List Dataset

### Delete Dataset

### Select Dataset