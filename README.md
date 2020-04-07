# User Guide Edite Website

## Create project anaconda

    $ conda create -n deepnlpfsite python=3.7 anaconda
    $ conda activate deepnlpfsite

## Clone Repository
Make sure you are cloning directly from Branch: master.

    $ git clone https://github.com/deepnlpf/site.git

## Run
    cd site/website/
    npm start

## Runing

    http://127.0.0.1:3000

## Publish the Site
- [Tutorial Publish the Site](https://docusaurus.io/docs/en/next/tutorial-publish-site)

To publish the site, send the files by performing a commit.
Then publish the website by running the following command.

    GIT_USER=<your_username> CURRENT_BRANCH=master npm run publish-gh-pages

Info your username and/or password.