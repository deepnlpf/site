---
id: guide
title: How to begin?
---

For DeepNLPF to work, it needs a natural language processing tool. It works with [Stanza](https://stanfordnlp.github.io/stanza) or [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/). Install one of the bases to get started.

## Install Stanza NLP Tool Base

By default we use Stanza as a base NLP tool. Therefore, it is necessary to install language modules. In this case we will install the English language. If you need another language, see which ones are available [here](https://stanfordnlp.github.io/stanza/models.html#human-languages-supported-by-stanza). Then install the stanza plugin.

```shell
deepnlpf --install stanza
```
🎉 Plugin stanza installed!

All plugins you install via the DeepNLF CLI will be stored in ```/home/username/deepnlpf_data/plugins```.

Download English Model
```shell
python -c "import stanza; stanza.download('en')"
```

Install plugin pre-processing installation.
```shell
deepnlpf --install preprocessing
```
🎉 Plugin preprocessing installed!

## Install Stanford CoreNLP Tool Base

However, if you prefer you can also use Stanford CoreNLP as a base. To do this, simply execute the command on the terminal. If not, skip this step.<br>
<br>
Install requirement [Java 8](#)
```shell
sudo apt install openjdk-8-jdk openjdk-8-jre
```

Install Plugin Stanford CoreNLP
```
deepnlpf --install stanfordcorenlp
```
🎉 Plugin stanfordcorenlp installed!

Now that you have Stanford CoreNLP installed, when you want to use it as a base tool, use the ```tool_base``` parameter.

```
nlp = Pipeline(tool_base='stanfordcorenlp')
```

## Getting Started

To see DeepNLPF single pipeline in action, create a file called ```pipeline.json``` and paste the following pipeline:

```json
{
  "lang": "en", //defines the language to be used.
  "tools": {
      "stanza": { //defines the nlp tool that will be used.
          "processors": [ // defines which processors will be used.
              "tokenize",
              "mwt",
              "pos",
              "lemma",
              "ner",
              "depparse"
          ]
      }
  }
}
```

Create a ```hello_world.py``` python file copy the following code block.
```python
from deepnlpf.pipeline import Pipeline

path_pipeline = "<path_pipeline>/pipeline.json"

sentence = "Barack Obama was born in Hawaii."

nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output="file")
nlp.annotate()
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Run-->
```shell
python hello_world.py
```
<!--Processing-->
```shell
2022-03-20 09:40:57 INFO: Loading these models for language: en (English):
========================
| Processor | Package  |
------------------------
| tokenize  | combined |
========================

2022-03-20 09:40:57 INFO: Use device: cpu
2022-03-20 09:40:57 INFO: Loading: tokenize
2022-03-20 09:40:57 INFO: Done loading processors!
Document(s):   0%|          | 0/1 [00:00<?, ?it/s]
(f pid=38538) 2022-03-20 09:40:58 WARNING: Can not find mwt: default from official model list. Ignoring it.
(f pid=38538) 2022-03-20 09:40:58 INFO: Loading these models for language: en (English):
(f pid=38538) =========================
(f pid=38538) | Processor | Package   |
(f pid=38538) -------------------------
(f pid=38538) | tokenize  | combined  |
(f pid=38538) | pos       | combined  |
(f pid=38538) | lemma     | combined  |
(f pid=38538) | depparse  | combined  |
(f pid=38538) | ner       | ontonotes |
(f pid=38538) =========================
(f pid=38538) 
(f pid=38538) 2022-03-20 09:40:58 INFO: Use device: cpu
(f pid=38538) 2022-03-20 09:40:58 INFO: Loading: tokenize
(f pid=38538) 2022-03-20 09:40:58 INFO: Loading: pos
(f pid=38538) 2022-03-20 09:40:58 INFO: Loading: lemma
(f pid=38538) 2022-03-20 09:40:58 INFO: Loading: depparse
(f pid=38538) 2022-03-20 09:40:59 INFO: Loading: ner
(f pid=38538) 2022-03-20 09:40:59 INFO: Done loading processors!
Document(s): 100%|██████████| 1/1 [00:02<00:00,  2.01s/it]
```
<!--Output-->
```shell
/home/username/deepnlpf_data/output/dataset_623720d95008c518b03e6055/document_623720d97bbd82bb84ea1029/stanza.json
```
<!--stanza.json-->
```shell
{'sentences': [
        {'_id': 1, 'text': 'Barack Obama was born in Hawaii .', 'annotation': [
                {'id': 1, 'text': 'Barack', 'lemma': 'Barack', 'upos': 'PROPN', 'xpos': 'NNP', 'feats': 'Number=Sing', 'head': 4, 'deprel': 'nsubj:pass', 'start_char': 0, 'end_char': 6, 'ner': 'B-PERSON'
                },
                {'id': 2, 'text': 'Obama', 'lemma': 'Obama', 'upos': 'PROPN', 'xpos': 'NNP', 'feats': 'Number=Sing', 'head': 1, 'deprel': 'flat', 'start_char': 7, 'end_char': 12, 'ner': 'E-PERSON'
                },
                {'id': 3, 'text': 'was', 'lemma': 'be', 'upos': 'AUX', 'xpos': 'VBD', 'feats': 'Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin', 'head': 4, 'deprel': 'aux:pass', 'start_char': 13, 'end_char': 16, 'ner': 'O'
                },
                {'id': 4, 'text': 'born', 'lemma': 'bear', 'upos': 'VERB', 'xpos': 'VBN', 'feats': 'Tense=Past|VerbForm=Part|Voice=Pass', 'head': 0, 'deprel': 'root', 'start_char': 17, 'end_char': 21, 'ner': 'O'
                },
                {'id': 5, 'text': 'in', 'lemma': 'in', 'upos': 'ADP', 'xpos': 'IN', 'head': 6, 'deprel': 'case', 'start_char': 22, 'end_char': 24, 'ner': 'O'
                },
                {'id': 6, 'text': 'Hawaii', 'lemma': 'Hawaii', 'upos': 'PROPN', 'xpos': 'NNP', 'feats': 'Number=Sing', 'head': 4, 'deprel': 'obl', 'start_char': 25, 'end_char': 31, 'ner': 'S-GPE'
                },
                {'id': 7, 'text': '.', 'lemma': '.', 'upos': 'PUNCT', 'xpos': '.', 'head': 4, 'deprel': 'punct', 'start_char': 32, 'end_char': 33, 'ner': 'O'
                }
            ]
        }
    ]
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

The result produced will be saved in a text file in the path:
```/home/YOU_NAME/deepnlpf_data/output/```

## Input Data
DeepNLP has a parameter called ```_input```, this parameter must be used to input the data to be processed. It works automatically to understand what was passed on. For example, you can pass as you enter:

### One sentence
```python
sentence = "The boy gave the frog to the girl."
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output="file")
```

### Multiple sentence
```python
sentences = "The boy gave the frog to the girl. The boy's gift was to the girl. The girl was given a frog."
nlp = Pipeline(_input=sentences, pipeline=path_pipeline, _output="file")
```

### One file
The supported text file type is ```.txt``` . Enter the path of the directory containing the text file with the sentences to be processed. Make sure that there is only the file in that directory if it will be processed. Do not include the file in the path.

```
/home/user_name/dataset/file.txt
```

```python
path_dataset = "/home/user_name/dataset/"
nlp = Pipeline(_input=path_dataset, pipeline=path_pipeline, _output="file")
```

### Multiple files
Yes, if you have more than one file to be processed DeepNLPF automatically recognizes all of them. Just inform the path of the directory containing the files.

```
/home/user_name/dataset/file_1.txt
                        file_2.txt
                        file_3.txt
                        ...
```

```python
path_dataset = "/home/user_name/dataset/"
nlp = Pipeline(_input=path_dataset, pipeline=path_pipeline, _output="file")
```

### Dataset test and train
If you work with test and training dataset DeepNLPF distinguishes for you as long as it follows the proposed directory structure.

```
/home/user_name/dataset/
                    train/
                        pos/
                            document_01.txt
                            document_02.txt
                            ..
                        neg/
                            document_01.txt
                            document_02.txt
                            ..
                    test/
                        pos/
                            document_01.txt
                            document_02.txt
                            ..
                        neg/
                            document_01.txt
                            document_02.txt
                            ..
```

```python
path_dataset = "/home/user_name/dataset/"
nlp = Pipeline(_input=path_dataset, pipeline=path_pipeline, _output="file")
```

### Dataset URL
> Under construction!


## Pipeline
To run a customized pipeline with more than one NLP tool, you must have installed other plugins of your choice. More Plugins, access the [official plugin repository](/site/en/repository) and try out other NLP tools.

This example assumes that you have the [Stanza](https://deepnlpf.github.io/site/docs/en/stanza) and [SpaCy](https://deepnlpf.github.io/site/docs/en/spacy) plugins installed.

Create a file called custom ```custom_pipeline.json``` and copy the following pipeline:
```json
{
  "lang": "en",
  "tools": {
    "stanza": {
      "pipeline": [
        "tokenize",
        "mwt",
        "pos",
        "lemma",
        "ner",
        "depparse"
      ]
    },
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
}
```

Create a python file called ```custom_pipeline.py``` and paste the following code block:
```python
from deepnlpf.pipeline import Pipeline

sentence = "Barack Obama was born in Hawaii."
path_custom_pipeline = "<path_custom_pipeline>/custom_pipeline.json"

nlp = Pipeline(_input=sentence, pipeline=path_custom_pipeline, _output="file")

annotation = nlp.annotate()
```

The result produced will be saved in a text file in the path:
```shell
$ /home/YOU_NAME/deepnlpf_data/output/
```

### Pipeline String
You can enter the pipeline as a string.
<!--DOCUSAURUS_CODE_TABS-->
<!--Json-->
```python
pipeline_json_str = """
{
  "lang": "en",
  "tools": {
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
  }
}
"""

nlp = Pipeline(_input=pipeline_json_str, pipeline=path_pipeline, _output="file")
```

<!--yaml-->
```python
pipeline_yaml_str = """
---
lang: en
tools:
  stanza:
    pipeline:
    - tokenize
    - mwt
    - pos
    - lemma
    - ner
    - depparse
"""

nlp = Pipeline(_input=pipeline_yaml_str, pipeline=path_pipeline, _output="file")
```

<!--ini-->
> Under construction!

<!--xml-->
> Under construction!

<!--END_DOCUSAURUS_CODE_TABS-->


### Pipeline File
Sometimes our pipeline can get very large, and it would be more interesting to have it in a another format. Therefore, we provide the options to use the file formats ``` .json ```, ``` .yaml ```, ``` .ini ``` e ``` .xml ```. Therefore, create a file with the name ``` custom_pipeline.extension ``` you want to use and write your pipeline in it.

<!--DOCUSAURUS_CODE_TABS-->
<!--Json-->
```json
{
  "lang": "en",
  "tools": {
    "stanza": {
      "pipeline": [
        "tokenize",
        "mwt",
        "pos",
        "lemma",
        "ner",
        "depparse"
      ]
    },
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
}
```

<!--yaml-->
```yaml
---
lang: en
tools:
  stanza:
    pipeline:
    - tokenize
    - mwt
    - pos
    - lemma
    - ner
    - depparse
  spacy:
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

<!--END_DOCUSAURUS_CODE_TABS-->


### Pipeline URL
You can enter the pipeline from a url.

```python
pipeline_url = "https://raw.githubusercontent.com/deepnlpf/deepnlpf/master/examples/pipelines/json/stanza.json"

nlp = Pipeline(_input=pipeline_url, pipeline=path_pipeline, _output="file")
nlp.annotation()
```


## Output

DeepNLPF contains a parameter ```_output``` to configure the type of data output, which can be in a ```text file```, on the ```screen terminal``` or in the ```browser```. By default the parameter is set to file ```_output="file"```.

It is used as follows:
```python
nlp = Pipeline(_input=path_dataset, pipeline=path_pipeline, _output="file")
```

### File Json
You may have already noticed that we assume all processing output in ```JSON``` format. 

```Python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output="file")
```

or

```Python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output="file", _format='json')
```
### File XML

However, sometimes we want to use another format like ```XML```. DeepNLPF makes it easy for you using the ```_format='xml'``` parameter. Following the previous example, just add the parameter ```_format='xml'```, to have the result processed in the desired format.

```Python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output="file", _format='xml')
```

## Boost
DeepNLPF has two approaches to optimize execution [CPU](#) and [GPU](#) usage.

### Ray
By default we use [Faster Parallel Ray](https://ray.io/) 10x [fast as the Pathos](https://towardsdatascience.com/10x-faster-parallel-python-without-python-multiprocessing-e5017c93cce1). But if you prefer you can choose to use [Multiprocessing Pathos Framework](https://pypi.org/project/pathos/).

```python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline)
```

or

```python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, boost='ray')
```

### Pathos
Therefore, to select the second option, just use the ```boost``` parameter as follows. Remember that when not specified, Pathos will be selected.

```python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, boost='pathos')
```

## DataBase

There are needs in which we want to work with a database to save the data from the annotated datasets to explore later. With that in mind DeepNLPF supports plugins that support the storage of documents in a database.

To save your notes in a database, just install one of our available pluginsdb [here](https://deepnlpf.github.io/site/docs/en/pluginsdb).

After installing the desired database plugins, you must inform the pipeline that you are using storage using the following parameter: ``` use_db='<name_database>' ```

Let's look at an example for a JSON-type document-oriented data storage system.
```python
nlp = Pipeline(_input=sentence, pipeline=path_pipeline, use_db='mongodb')
```