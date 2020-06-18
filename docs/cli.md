---
id: cli
title: CLI Commands
---

> 🚧 Under construction!

DeepNLPF Command Line Interface.

## Help
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf -h
```
<!--Output-->
```shell
usage: deepnlpf [-h] [-v] [-install INSTALL] [-uninstall UNINSTALL] [-listplugins LISTPLUGINS] [-api API]

DeepNLPF Command Line Interface - CLI

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show version.
  -install INSTALL, --install INSTALL
                        Command for install plugin.
  -uninstall UNINSTALL, --uninstall UNINSTALL
                        Command for uninstall plugin.
  -listplugins LISTPLUGINS, --listplugins LISTPLUGINS
                        Command for listplugins plugin.
  -api API, --api API   Command run api.

🐙 Enjoy the program! :)
```
<!--END_DOCUSAURUS_CODE_TABS-->



## Version
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf -v
```
<!--Output-->
```shell
🐙 DeepNLPF V x.x.x
```
<!--END_DOCUSAURUS_CODE_TABS-->



## Create project
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --new [project_name] [json|yaml|ini|xml]
```
<!--Output-->
```shell
project_name
├── pipeline.py
├── custom_pipeline.json
└── README.md
```
<!--END_DOCUSAURUS_CODE_TABS-->



## Plugins

### List all plugins published
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --plugins published
```
<!--Output-->
```shell
cogcomp
stanfordcorenlp
spacy
semafor
supwsd
stanza
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Install one plugin
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --install [plugin_name]
```
<!--Output-->
```shell
stanfordcorenlp
stanza
```
<!--END_DOCUSAURUS_CODE_TABS-->

### List all plugins instaled
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --plugins installed
```
<!--Output-->
```shell
stanfordcorenlp
stanza
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Create new plugin
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --new plugin [name_plugin]
```
<!--Output-->
```shell
/home/user_name/deepnlpf_data/name_plugin/
                                    resources/
                                    README.md
                                    manifest.json
                                    requeriments.sh
                                    plugin_name.py
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Dataset

### Save new dataset
To save a dataset, it must be organized in one of the two directory structures shown below.

Simple structure

    /home/your_user/path_dataset/
                        document_1.txt
                        document_2.txt
                        ..

or Complete Structure

    /home/your_user/path_dataset/
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


You must use the command: ```deepnlpf --savedataset [path_dir_dataset]``` by passing the path of your dataset directory as an argument, as per the example below.
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --savedataset /home/your_user/path_dataset/dataset_name
```
<!--Output-->
```shell
    dataset: dataset_name
    ├── train:
    │   └── documents [pos]: 100%|███████████████████████████████████████████████████| 12500/12500 [00:50<00:00, 245.24it/s]
    │   └── documents [neg]: 100%|███████████████████████████████████████████████████| 12500/12500 [00:51<00:00, 241.78it/s]
    ├── test:
    │   └── documents [pos]: 100%|███████████████████████████████████████████████████| 12500/12500 [00:59<00:00, 211.20it/s]
    │   └── documents [neg]: 100%|███████████████████████████████████████████████████| 12500/12500 [01:01<00:00, 202.22it/s]
    └── _id_dataset: 5d8f5e3825fc15b3ec6f43a6
```
<!--END_DOCUSAURUS_CODE_TABS-->

### List all datasets
Lists all dataset saved in the database.
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --listdataset all
```
<!--Output-->
```shell
    ├── Dataset: dataset_name
    │  ID: 5d8f55f4b3b87b4d30ee0445
    │  Register: 2019-09-28 09:45:40.725000

    ├── Dataset: dataset_name
    │  id_dataset: 5d8f576dd54e23a38cb3e819
    │  register: 2019-09-28 09:51:57.850000
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Delete one dataset
Used the command ```deepnlpf --deletedataset [_id_dataset]``` for delete a specific dataset.
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --deletedataset 5d8f576dd54e23a38cb3e819 
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Pipeline

### Run pipeline
Use the command ```deepnlpf --pipeline [custom_pipeline.json]``` to execute a custom language analysis pipeline.
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --pipeline custom_pipeline.json
```
<!--END_DOCUSAURUS_CODE_TABS-->

After running a custom analysis pipeline, all results are saved to the database.

### View result analysis

Use the command deepnlf viewannotation [_id_dataset] to view annotation processing the dataset.
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlf --viewannotation 5d8ed3b6495308534096e879
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Generated Annotation
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlf --generatedannotation [_id_pool_datset]
```
<!--END_DOCUSAURUS_CODE_TABS-->

### View annotation
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --viewannotation [_id_pool_dataset]
```
<!--END_DOCUSAURUS_CODE_TABS-->



## Statistics
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --statistics [dataset_name|dataset_id]
```
<!--Output-->
```shell
```
<!--END_DOCUSAURUS_CODE_TABS-->



## API
### Start API
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --start api
```
<!--Output-->
```shell
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Stop API
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
Ctrl + c
```
<!--Output-->
```shell
```
<!--END_DOCUSAURUS_CODE_TABS-->



## DashBoard
### Start DashBoard
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
deepnlpf --dashboard api
```
<!--Output-->
```shell
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Stop DashBoard
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
Ctrl + c
```
<!--Output-->
```shell
```
<!--END_DOCUSAURUS_CODE_TABS-->