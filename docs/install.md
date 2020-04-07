---
id: install
title: How to install?
---

DeepNLPF has been implemented and tested using the [Ubuntu](https://ubuntu.com/) 19.04 operating system. However, it may work on other similar linux versions or Windows and MacOS if it satisfies the dependencies on external NLP tools mentioned below "at your own risk".

## System requirements
<b>Hardware</b>
* Memoria RAM: Min. 16GB.
* CPU Core: Min. Dualcore
* Disk Space: ~ MB (does not include disk space for IDE/tools).

<b>Software</b>
* [Ubuntu 19.04](https://ubuntu.com/) (64-bit).
* [Intall Python 3.7](https://linuxize.com/post/how-to-install-python-3-7-on-ubuntu-18-04/) 
* [Install Java 8](https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/)
* [Intall MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

If you prefer, download and install the dependencies from our [script](https://github.com/deepnlpf/scripts-install/blob/master/script/install_requeriments_deepnlpf.sh).

        $ bash install_requeriments_deepnlpf.sh

## [Pip](https://pypi.org/project/pip/) install

        $ pip install deepnlpframework

## Install plugin base

For DeepNLPF to work it needs a natural language processing tool at its base that we take from Stanford CoreNLP.
        
        $ deepnlpf --install stanfordcorenlp

## [Anaconda](https://www.anaconda.com/) install

> Comming soon.

## From Source
Alternatively, you can also install from source via DeepNLPF git repository, which will give you more flexibility in developing on top of DeepNLPF. For this option, run.

        $ git clone https://github.com/deepnlpf/deepnlpf.git
        $ cd deepnlpf
        $ pip install -e .

## Virtual Machine

> Comming soon.

## Docker install

> Comming soon.

