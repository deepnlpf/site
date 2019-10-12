---
id: supwsd
title: SupWSD
---

<a href="" target="_blank">
    <img src="" data-canonical-src="" width="170" height="60" />
</a>

Python Implementations of Word Sense Disambiguation (WSD) Technologies.

- [Site Oficial](https://supwsd.net/supwsd/)
- [Demo Online](https://supwsd.net/supwsd/demo.jsp)
- [Github](https://github.com/SI3P/supWSD)

# Install Plugin

## Download Plugin

[Download Plugin](#)

## Install Using Pip

    pip install supwsd

## Pipeline

### Pipeline Online

    custom_pipeline_supwsd = {
        'tools': [
            {
                'supwsd': {
                    'pipeline': ['wsd_online']
                }
            },
        ]
    }

### Pipeline Offline

    custom_pipeline_supwsd = {
        'tools': [
            {
                'supwsd': {
                    'pipeline': ['wsd_offline']
                }
            },
        ]
    }

## Version Tests
supwsd-1.2.2