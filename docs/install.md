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
* [Pip](https://pypi.org/)
* [Java 8](#)

To install the system dependencies, execute the command in the terminal.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
```
sudo apt install python3 & \
     apt install python-pip
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Pip install

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
     pip install deepnlpf

<!--END_DOCUSAURUS_CODE_TABS-->

If you currently have a previous version of DeepNLPF installed, use:

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
    pip install deepnlpf -U

<!--END_DOCUSAURUS_CODE_TABS-->

## Anaconda install

> Comming soon.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
conda install -c deepnlpf

<!--END_DOCUSAURUS_CODE_TABS-->

## From Source install
Alternatively, you can also install from source via DeepNLPF git repository, which will give you more flexibility in developing on top of DeepNLPF. For this option, run.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
    git clone https://github.com/deepnlpf/deepnlpf.git
    cd deepnlpf
    pip install -e .

<!--END_DOCUSAURUS_CODE_TABS-->

## Virtual Machine

> Comming soon.

<!--DOCUSAURUS_CODE_TABS-->

<!--VBox--> 

<!--END_DOCUSAURUS_CODE_TABS-->

## Docker

> Comming soon.

<!--DOCUSAURUS_CODE_TABS-->

<!--Docker--> 

<!--END_DOCUSAURUS_CODE_TABS-->

## Vagrant Cluster HPC MPI install

> Comming soon.

<!--DOCUSAURUS_CODE_TABS-->

<!--Vagrant--> 

<!--END_DOCUSAURUS_CODE_TABS-->
