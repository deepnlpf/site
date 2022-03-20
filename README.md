# User Guide Website

If you wish to edit this documentation follow the next steps.

## Clone Repository

Make sure you are cloning directly from branch: ```master```.

    git clone https://github.com/deepnlpf/site.git

## Run

Selecte branche ```master``` and run ```npm install```.

    npm install

In you terminal navigate to the ```website``` directory.

    cd website

And finally run the docusaurus server.

    npm start

    or 

    npm install --no-audit

Deploy

    GIT_USER=username CURRENT_BRANCH=master npm run publish-gh-pages