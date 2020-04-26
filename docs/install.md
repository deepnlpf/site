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
* Memoria RAM: Min. 8GB.
* CPU Core: Min. Dualcore
* Disk Space: ~ MB (does not include disk space for IDE/tools).

<b>Operational System</b>
* [Ubuntu 19.04](https://ubuntu.com/) (64-bit).
* [Manjaro](https://manjaro.org/).

<b>System Requested</b>
* [Python 3](https://linuxize.com/post/how-to-install-python-3-7-on-ubuntu-18-04/)
* [Python 3 Dev](#)
* [Pip](https://pypi.org/)

To install the system requested (Python 3, Python 3 Dev and Pip), execute the command in the terminal.

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 
```
sudo apt install python3 python3-pip build-essential python3-dev libgnutls28-dev
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Pip install
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell--> 
```shell
pip install deepnlpf
```
<!--END_DOCUSAURUS_CODE_TABS-->

If you currently have a previous version of DeepNLPF installed, use:
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell--> 
```shell
pip install deepnlpf -U
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Anaconda install
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
> Comming soon.
```
<!--END_DOCUSAURUS_CODE_TABS-->

## From Source install
Alternatively, you can also install from source via DeepNLPF git repository, which will give you more flexibility in developing on top of DeepNLPF. For this option, run.

<!--DOCUSAURUS_CODE_TABS-->
<!--Shell--> 
```shell
git clone https://github.com/deepnlpf/deepnlpf.git
cd deepnlpf
pip install -e .
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Virtual Machine
- Download VM [here](https://drive.google.com/open?id=1GRCP5E-rRa2Z6G3FeA7rbpYb_jdNgry_).

- Install 
VM use [VirtualBox](https://www.virtualbox.org/)
    - Virtual Box >> Menu >> Machine >> Add
    - Select a virtual machine file: ```DeepNLPF.vbox```

- Settings

    - System >> Motherboard
        - Base Memory (your choice)
    - System >> Processor
        - Processor(s) (your choice)

- Start
    - Virtual Box >> Select ```DeepNLPF``` >> Start

- VM access credentials:<br/>
    - <b>User:</b> deepnlpf <br>
    - <b>Pass:</b> deepnlpf

- VM Full Screen
    - Download driver [here](https://w0.dk/~chlor/vboxguestadditions/)
    - With the VM open: Menu >> Devices >> Optical drives >> Choose disk image >> ```VBoxGuestAdditions_x.x.x.iso```

## Docker
Download the image from the DeepNLPF docker.
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
docker pull deepnlpf/deepnlpf:latest 
```
<!--Output-->
```shell
Using default tag: latest
latest: Pulling from deepnlpf/deepnlpf
Digest: sha256:a87f092b7379276d7cd84b2f896764152e844897f49a4d34a6f8dba1b8fda134
Status: Image is up to date for deepnlpf/deepnlpf:latest
docker.io/deepnlpf/deepnlpf:latest
```
<!--END_DOCUSAURUS_CODE_TABS-->

Run docker image DeepNLPF
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell-->
```shell
docker run -i -t deepnlpf /bin/bash
```
<!--Output-->
```shell
root@435d96b406c2:/# 
```
<!--END_DOCUSAURUS_CODE_TABS-->

Learn some commands [here](http://deepnlpf.github.io/site/docs/en/cli) to use the docker.

## Cluster HPC MPI
<!--DOCUSAURUS_CODE_TABS-->
<!--Shell--> 
```shell
> Comming soon.
```
<!--END_DOCUSAURUS_CODE_TABS-->
