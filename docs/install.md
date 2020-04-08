---
id: install
title: Installation
---

<div align="center">
    <a href="#">
        <img alt="License" src="https://img.shields.io/github/license/deepnlpf/deepnlpf">
    </a>
    <a href="https://pypi.org/project/deepnlpframework/">
        <img alt="PyPI Version" src="https://img.shields.io/pypi/v/deepnlpframework?color=blue">
    </a>
    <a href="https://anaconda.org/deepnlpframework">
        <img alt="Conda Versions" src="https://img.shields.io/conda/vn/deepnlpframework?color=blue&label=conda">
    </a>
    <a href="https://pypi.org/project/deepnlpframework/">
        <img alt="Python Versions" src="https://img.shields.io/pypi/pyversions/deepnlpframework?colorB=blue">
    </a>
</div>

<br>

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
* [Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

To install the system dependencies, execute the command in the terminal.

    $ bash <(curl -Ss https://github.com/deepnlpf/deepnlpf/blob/master/install_requeriments_system.sh)

If you prefer, download and install the dependencies from our [script](https://github.com/deepnlpf/deepnlpf/blob/master/install_requeriments_system.sh).

    $ bash install_requeriments_deepnlpf.sh

## Pip

    $ pip install deepnlpframework

## Anaconda

> Comming soon.

## From Source
Alternatively, you can also install from source via DeepNLPF git repository, which will give you more flexibility in developing on top of DeepNLPF. For this option, run.

        $ git clone https://github.com/deepnlpf/deepnlpf.git
        $ cd deepnlpf
        $ pip install -e .

## Virtual Machine

> Comming soon.

## Docker

> Comming soon.

## Vagrant Cluster HPC MPI

> Comming soon.
