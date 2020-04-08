---
id: about
title: What is DeepNLPF?
sidebar_label: What is DeepNLPF?
---

Nowadays companies are implementing new business models that depend heavily on Natural Language Processing (NLP) in textual documents to extract relevant informations from a variety of sources, including e-commerce, domain-specific documents, utilities, social media, etc. Implementing a NLP system requires, among other things, a considerable software engineering effort for: data structures for human language representation; the application of tools to textual representation through linguistic analysis at various levels (lexical, syntactic and semantic); reading and interpreting annotations generated from the corpus, the creation of linguistic resources, among others. While there are currently numerous NLP tools widely used in NLP language tasks, information extraction, annotation, and correction, each provides only partial coverage  analysis. Besides that, these tools are developed in distinct programming languages and are made available without any standardization concerning data input and output, which makes their interoperability difficult due to incompatibility issues APIs, output data formats (representation) and basic tokenization, just to a few. Thus selecting tools and their language analysis according to a specific user interest, usually takes a plenty of time, especially when you want to use them together (tool integration). The goal of this paper is to analyze several NLP tools available in the literature and propose, implement and evaluate a new architecture that encapsulates several linguistic analyzes in one computational framework, allowing application developers not only to run linguistic analysis pipelines that involve in-depth treatment of the English language, but also an easy integration of various NLP tools. Besides that, it aims to provide a simple and intuitive graphical user interface (GUI) in order to fully exploit all language analysis already available, and that can easily be customized by the user himself later. In this way the functionality provided by the proposed DeepNLPF framework intends to help developers perform numerous textual data analyses more efficiently by guiding them in choosing the best, most appropriate and efficient language analysis task pipeline possible. The now proposed version of DeepNLPF is composed by several state-of-the-art NLP tools that were selected after a thorough literature review. Contributions of this work include: I) the selection of state-of-the-art NLP tools added to the framework; II) the proposal to standardize the inputs and outputs of NLP tools according to the linguistic annotation representation standards already established in the literature; III) the implementation of a computational architecture enabling multithreads and parallelism for the customization of NLP pipelines guided by an expressive but simple graphic interface; IV) and a module to facilitate the integration and updating of new third party NLP tools, as well as the generation of basic textual data statistics. Finally, several experiments show that DeepNLPF obtained better performance in relation to the sequential processing of the tested NLP tools when considered individually. More precisely, about 60\% faster in terms of processing time.

## Architecture

## Pipeline

## Acknowledgment

<a href="https://www.capes.gov.br/" target="_blank">
    <img src="https://deepnlpf.github.io/site/img/capes.png" data-canonical-src="https://deepnlpf.github.io/site/img/capes.png" width="100" height="70" />
</a> CAPES for granting the scholarship; <br>

to Professors Dr. Robson Fidalgo and Dr. Rinaldo Lima, for having accepted the challenge of guiding, with patience, security, always transmitted with tolerance, humility and scientific spirit.

## Developed With

<div>
    <a href="https://docusaurus.io/" target="_blank">
        <img src="https://deepnlpf.github.io/site/img/credits/docusaurus.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/docusaurus.png" width="100" height="70" />
    </a>
    <a href="https://www.python.org/" target="_blank">
        <img src="https://deepnlpf.github.io/site/img/credits/python.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/python.png" width="150" height="60" />
    </a>
    <a href="https://palletsprojects.com/p/flask/" target="_blank">
        <img src="https://deepnlpf.github.io/site/img/credits/flask.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/flask.png" width="100" height="70" />
    </a>
    <a href="https://palletsprojects.com/p/jinja/" target="_blank">
        <img src="https://deepnlpf.github.io/site/img/credits/jinja.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/jinja.png" width="140" height="60" />
    </a>
    <a href="https://www.mongodb.com/" target="_blank">
        <img src="https://deepnlpf.github.io/site/img/credits/mongodb.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/mongodb.png" width="140" height="50" />
    </a>
    <!--a href="https://graphql.org/" target="_blank">
        <img src="https://deepnlpf.github.io/site/img/credits/graphql.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/graphql.png" width="170" height="60" />
    </a-->
    <a href="https://pynsource.com/" target="_blank" title="Pynsource">
        <img src="https://deepnlpf.github.io/site/img/credits/pynsource.png" data-canonical-src="https://deepnlpf.github.io/site/img/credits/pynsource.png" width="80" height="60" />
    </a>

</div>


