---
id: quanteda
title: Quanteda
---

- [Site Oficial](https://quanteda.io/)
- [Documentation Oficial](https://tutorials.quanteda.io/)
- [Github](#)

An R package for managing and analyzing text, created by Kenneth Benoit. Supported by the European Research Council grant ERC-2011-StG 283794-QUANTESS.

> Under construction!

# Install Quanteda
To use [Quanteda](https://tutorials.quanteda.io/introduction/install/) on DeepNLPF, you need to have [R](https://www.r-project.org/) installed on your computer.

The normal way from CRAN, using your R GUI. If you prefer to install [RStudio](https://rstudio.com/) and run the following command to install the Quanteda.

    $ install.packages("quanteda") 

# Install Plugin

    $ deepnlpf --install quanteda

# Pipeline
```
{
    "tools": [
        {
            "quanteda": {
                "pipeline": [
                    "frequency"
                ]
            }
        }
    ]
}
```