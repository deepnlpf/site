---
id: supwsd
title: SupWSD
---

<a href="" target="_blank">
    <img src="https://supwsd.net/supwsd/img/supwsd_logo_com.png" data-canonical-src="" width="60" height="60" />
</a>

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Site Oficial](https://supwsd.net/supwsd/)
- [Demo Online](https://supwsd.net/supwsd/demo.jsp)
- [Github](https://github.com/SI3P/supWSD)

> Under construction!

## Install Plugin
```Shell
deepnlpf --install supwsd
```

## Language
SupWSD supports the following languages ```en```, ```fr```, ```de```, ```it``` and ```es```. Download the model you want [here](https://supwsd.net/supwsd/downloads.jsp) and save it on the way: ```/home/your_user/deepnlpf_data/plugins/supwsd/``` .

## Models

The model to be used in the disambiguation process: SEMCOR (English only), SEMCOR_OMSTI (English only), TRAIN_O_MATIC.

If you don't specify the model, the program will load the default one: ```semcor_omsti``` for English, ```train_o_matic``` for other languages.

## Pipeline
<!--DOCUSAURUS_CODE_TABS-->

<!--Json--> 
```
{
    "lang": "en",
    "tools": [
        {
            "supwsd": {
                "pipeline": [
                    "wsd"
                ]
            }
        }
    ]
}
```

<!--yaml-->
```yaml
```

<!--END_DOCUSAURUS_CODE_TABS-->