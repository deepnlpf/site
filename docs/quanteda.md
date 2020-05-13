---
id: quanteda
title: Quanteda
---
> 🚧 Under construction!

- [Site Oficial](https://quanteda.io/)
- [Documentation Oficial](https://tutorials.quanteda.io/)
- [Github](#)

An R package for managing and analyzing text, created by Kenneth Benoit. Supported by the European Research Council grant ERC-2011-StG 283794-QUANTESS.


# Install Quanteda
To use [Quanteda](https://tutorials.quanteda.io/introduction/install/) on DeepNLPF, you need to have [R](https://www.r-project.org/) installed on your computer.

The normal way from CRAN, using your R GUI. If you prefer to install [RStudio](https://rstudio.com/) and run the following command to install the Quanteda.

<!--DOCUSAURUS_CODE_TABS-->

<!--R--> 
     install.packages("quanteda")

<!--END_DOCUSAURUS_CODE_TABS-->

## Install Plugin
<!--DOCUSAURUS_CODE_TABS-->

<!--Shell--> 

    deepnlpf --install quanteda

<!--END_DOCUSAURUS_CODE_TABS-->

## Suport Language

English: ```en``` <br/>

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--JSON--> 
```json
{
    "lang": "en",
    "tools": {
        "quanteda": {
            "processors": [
                "frequency"
            ]
        }
    }
    
}
```

<!--yaml-->
```yaml
```

<!--END_DOCUSAURUS_CODE_TABS-->