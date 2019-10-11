---
id: install
title: How to install?
---

DeepNLPF has been implemented and tested using the [Ubuntu](https://ubuntu.com/) 19.04 operating system. However, it may work on other similar linux versions or Windows and MacOS if it satisfies the dependencies on external NLP tools mentioned below "at your own risk".

## System requirements
* Operating Systems: Linux (64-bit)
* Disk Space: ~ MB (does not include disk space for IDE/tools).

## Semi Automatic Install
Script for semi automatic installation.
Download the installation file [here](https://github.com/deepnlpf/scripts-install).

        $ git clone https://github.com/deepnlpf/scripts-install.git
        $ cd scripts-install
        $ sh install-deepnlpf.sh

## Manual Install

Manual installation step by step.

### Install Requirement System

* Install Anaconda

  Download Anaconda Python 3.7
        
        $ wget https://repo.anaconda.com/archive/Anaconda3-2019.07-Linux-x86_64.sh

  Installing Anaconda Python 3.7
        
        $ bash Anaconda3-2019.07-Linux-x86_64.sh

  Activate Installation
        
        $ source ~/.bashrc

  Test Installation
        
        $ conda list

* Install MongoDB

  Installing MongoDB

        $ sudo apt install -y mongodb

  Enable MongoDB

        $ systemctl enable mongodb

* Unzip - Installing Unzip

        $ sudo apt-get install unzip

* Git - Installing Git

        $ sudo apt install git

* Java - Installing Java 8

        sudo apt-get install -y software-properties-common
        
        sudo add-apt-repository ppa:webupd8team/java
        
        sudo apt-get update
        
        sudo echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
        
        sudo apt-get install -y oracle-java8-installer

### Download, Install and Config Dependecies DeepnLPF

Create Project DeepNLPF Virtualenv

        $ conda create -n deepnlpf python=3.7 anaconda

Activate env deepnlpf

        $ conda activate deepnlpf

 Create directory nlptools in dir /home/

        $ mkdir nlptools && cd nlptools

Downloading third party NLP tools

Downloading Stanford CoreNLP

        $ wget http://rodriguesfas.com.br/deepnlpf/nlptools/stanford-corenlp-full-2018-10-05.zip
        
        $ unzip stanford-corenlp-full-2018-10-05.zip

Downloading SEMAFOR

        $ wget http://rodriguesfas.com.br/deepnlpf/nlptools/semafor.zip
        
        $ unzip semafor.zip

Config SEMAFOR

        $ cd semafor/bin
        
        $ rm -r config.sh
        
        $ echo -e '#!/bin/sh \
            \n\nexport BASE_DIR="/home/nlptools" \
            \nexport SEMAFOR_HOME="${BASE_DIR}/semafor" \
            \nexport CLASSPATH=".:${SEMAFOR_HOME}/target/Semafor-3.0-alpha-04.jar" \
            \nexport JAVA_HOME_BIN="/usr/lib/jvm/java-8-oracle/bin" \
            \nexport MALT_MODEL_DIR="${BASE_DIR}/semafor/models/semafor_malt_model_20121129" \
            \nexport TURBO_MODEL_DIR="{BASE_DIR}/semafor/models/turbo_20130606" \
            \n\necho "Environment variables:" \
            \necho "SEMAFOR_HOME=${SEMAFOR_HOME}" \
            \necho "CLASSPATH=${CLASSPATH}" \
            \necho "JAVA_HOME_BIN=${JAVA_HOME_BIN}" \
            \necho "MALT_MODEL_DIR=${MALT_MODEL_DIR}" \
            '>> config.sh

Downloads Models SEMAFOR, path: home/user/nlptools/semafor

        $ mkdir -p models

        $ cd models

        $ wget http://www.ark.cs.cmu.edu/SEMAFOR/semafor_malt_model_20121129.tar.gz

        $ tar -vzxf semafor_malt_model_20121129.tar.gz

Install Maven SEMAFOR

        $ sudo apt-get install maven -y

        $ mvn package

Downloading DeepNLPF, path: /home/user/

> Private repository. You need a password to download this. Ask the developer.

        $ git clone https://RodriguesFAS@bitbucket.org/RodriguesFAS/deepnlpf.git

Installing Dependecies Project

        $ sudo pip install pathos &&
            pip install bson || pip install -U bson &&
            pip install gogo &&
            pip install pygogo &&
            pip install tqdm &&
            pip install json2xml &&
            pip install isodate &&
            pip install requests &&
            pip install future &&

            pip install pymongo || conda install -c anaconda pymongo &&
            pip install mongoengine || conda install -c conda-forge mongoengine &&

            pip install flask &&
            pip install flask_socketio &&

            conda install -c anaconda pandas &&
            pip install plotly &&

            pip install pywsd && 
            pip install supwsd && 
            pip install stanfordcorenlp && 
            pip install nltk && python -c "import nltk; nltk.download('all')" && 
            conda install -c conda-forge spacy && python -m spacy download en_core_web_sm

## Docker Install

> Comming soon.
