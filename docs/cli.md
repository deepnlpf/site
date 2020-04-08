---
id: cli
title: CLI Commands
---

> Under construction!

<b>CLI Commands</b>: use through command line interface. <br>

### Help
    
     deepnlpf -h

### List Plugins Install

    deepnlpf --plugins all

    freeling
    stanfordcorenlp
    pywsd
    spacy
    quanteda
    semafor
    deepnlp
    cogcomp
    wordnet
    supwsd
    helloworld

### Save New Corpus
To save a corpus, it must be organized in one of the two directory structures shown below.

Simple structure

    /home/user/path_corpus/
                        document_1.txt
                        document_2.txt
                        ..

or Complete Structure

    /home/user/path_corpus/
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

Sentences must be saved in the TXT file, one per line.
For the doc: ```document_1.txt``` You have the following sentences one after another.

        1 A misty ridge uprises from the surge.
        2 The author of a keygen uses a disassembler to look at the raw assembly code.
        3 The child was carefully wrapped and bound into the cradle by means of a cord.
        4 The system as described above has its greatest application in an arrayed configuration of antenna elements.
        5 The student association is the vpath_oice of the undergraduate student population of the State University of New York at Buffalo.


You must use the command: ```python deepnlpf --savecorpus <path_dir_corpus> >``` by passing the path of your corpus directory as an argument, as per the example below.

     deepnlpf --savecorpus /home/user/path_corpus/aclImdb

    corpus: aclImdb
    ├── train:
    │   └── documents [pos]: 100%|███████████████████████████████████████████████████| 12500/12500 [00:50<00:00, 245.24it/s]
    │   └── documents [neg]: 100%|███████████████████████████████████████████████████| 12500/12500 [00:51<00:00, 241.78it/s]
    ├── test:
    │   └── documents [pos]: 100%|███████████████████████████████████████████████████| 12500/12500 [00:59<00:00, 211.20it/s]
    │   └── documents [neg]: 100%|███████████████████████████████████████████████████| 12500/12500 [01:01<00:00, 202.22it/s]
    └── _id_corpus: 5d8f5e3825fc15b3ec6f43a6

### List All Corpus
Lists all corpus saved in the database.

     deepnlpf --listcorpus all

    ├──Corpus: aclImdb
    │  ID: 5d8f55f4b3b87b4d30ee0445
    │  Register: 2019-09-28 09:45:40.725000

    ├──Corpus: semeval
    │  id_corpus: 5d8f576dd54e23a38cb3e819
    │  register: 2019-09-28 09:51:57.850000
    ..

### Delete Corpus
Used the command ```deepnlpf --deletecorpus <_id_corpus>``` for delete a specific corpus.

     deepnlpf --deletecorpus 5d8f576dd54e23a38cb3e819 

### Run Pipeline
Used the command ```deepnlpf --pipeline <custom_pipeline.json>``` for execute pipeline custom analises languagem.

     deepnlpf --pipeline custom_pipeline.json

Example file ```customs_pipeline_example.json``` in /deepnlpf/example/ .

    {
        "corpus_id": "5d8ed3b6495308534096e879",
        "lang": "en",
        "tools": [{
            "supwsd": {
                "pipeline": ["wsd"]
            },
            {
                "stanfordcorenlp": {
                    "pipeline": ["tokenize", "ssplit", "pos", "lemma", "ner", "parse", "depparse", "truecase", "dcoref"]
                }
            },
            {
                "semafor": {
                    "pipeline": ["parsing"]
                }
            },
            {
                "cogcomp": {
                    "pipeline": ["SRL_NOM", "SRL_VERB", "SRL_PREP"]
                }
            },
            {
                "pywsd": {
                    "pipeline": ["disambiguate"]
                }
            },
            {
                "spacy": {
                    "pipeline": ["pos", "tag", "shape", "is_alpha", "is_title", "like_num", "label"]
                }
            },
            {
                "freeling": {
                    "pipeline": ["wsd", "svo_triples_srl"]
                }
            }
        }]
    }

After running a custom analysis pipeline, all results are saved to the database.

### View Analysis

Used the command deepnlf viewannotation <_id_corpus> for view annotation processing the corpus.

     deepnlf viewannotation 5d8ed3b6495308534096e879

### Generated Annotation

     deepnlf generatedannotation <_id_pool_corpus>

### View Annotation

     deepnlpf viewannotation <_id_pool_corpus>

## Application Program Interface - API

## Create APP

## Corpus

### Save Corpus

### Delete Corpus
### Selected Corpus

## Run Pipeline

## Statistics
### 