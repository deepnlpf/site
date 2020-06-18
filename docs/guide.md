---
id: guide
title: How to begin?
---

To make DeepNLPF works, it needs a natural language processing tool. It works with [Stanza](https://stanfordnlp.github.io/stanza) or [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/). Install one of these bases to get started.

## Install Stanza NLP Tool Base

By default we use Stanza as a base NLP tool. Therefore, it is necessary to install language modules. In this case we will install the English language. If you need another language, see which ones are available [here](https://stanfordnlp.github.io/stanza/models.html#human-languages-supported-by-stanza). Then install the stanza plugin.

```shell
deepnlpf --install stanza
```

Download English Model
```shell
python -c "import stanza; stanza.download('en')"
```

Install plugin pre-processing installation.
```shell
deepnlpf --install preprocessing
```

## Install Stanford CoreNLP Tool Base

However, if you prefer you can also use Stanford CoreNLP as a base. To do this, simply execute the following command on the terminal. If not, skip this step.<br>
<br>
Install requirement [Java 8](#)
```shell
sudo apt install openjdk-8-jdk openjdk-8-jre
```

Install Plugin Stanford CoreNLP
```
deepnlpf --install stanfordcorenlp
```

Now that you have Stanford CoreNLP installed, when you want to use it as a base tool, use the ```tool_base``` parameter to do.

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

Create a ```hello_world.py``` python file then copy the following code block.
```python
from deepnlpf.pipeline import Pipeline

path_pipeline = "<path_pipeline>/pipeline.json"

sentence = "Barack Obama was born in Hawaii."

nlp = Pipeline(_input=sentence, pipeline=path_pipeline, _output="file")
nlp.annotate()
```

Run
```shell
$ python hello_world.py
```

The result produced will be saved in a text file in the following path:
```shell
$ /home/user_name/deepnlpf_data/output/
```

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
The supported text file type is ```.txt``` . Enter the path of the directory containing the text file with the sentences to be processed. Make sure that there is only the file witch it will be processed in that directory. Do not include the file in the path.

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
$ /home/user_name/deepnlpf_data/output/
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
Sometimes our pipeline can get very large, and it would be more interesting to have it in a another format. Therefore, we provide the options to use these file formats: ``` .json ```, ``` .yaml ```, ``` .ini ``` and ``` .xml ```. Therefore, create a file with the name ``` custom_pipeline.extension ``` you want to use then write your pipeline in it.

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

DeepNLPF contains a parameter ```_output``` to configure the type of data output, which can be a ```text file```, on the ```screen terminal``` or in the ```browser```. By default the parameter is set to file ```_output="file"```.

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

However, sometimes we want to use another format like ```XML```. DeepNLPF makes it easy for you using the ```_format='xml'``` parameter. Following the previous example, just add the parameter as ```_format='xml'``` to have the result processed in the desired format.

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